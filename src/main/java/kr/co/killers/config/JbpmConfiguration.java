package kr.co.killers.config;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.jbpm.kie.services.impl.FormManagerServiceImpl;
import org.jbpm.kie.services.impl.KModuleDeploymentService;
import org.jbpm.kie.services.impl.ProcessServiceImpl;
import org.jbpm.kie.services.impl.RuntimeDataServiceImpl;
import org.jbpm.kie.services.impl.UserTaskServiceImpl;
import org.jbpm.kie.services.impl.bpmn2.BPMN2DataServiceImpl;
import org.jbpm.services.task.audit.JPATaskLifeCycleEventListener;
import org.jbpm.services.task.identity.DBUserGroupCallbackImpl;
import org.jbpm.services.task.lifecycle.listeners.TaskLifeCycleEventListener;
import org.jbpm.shared.services.impl.TransactionalCommandService;
import org.kie.api.task.TaskService;
import org.kie.spring.factorybeans.TaskServiceFactoryBean;
import org.kie.spring.manager.SpringRuntimeManagerFactoryImpl;
import org.springframework.beans.factory.config.MethodInvokingFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.jta.JtaTransactionManager;

@Configuration
public class JbpmConfiguration {

	@Bean(name = "definitionService")
	public BPMN2DataServiceImpl getDefinitionService() {
		BPMN2DataServiceImpl definitionService = new BPMN2DataServiceImpl();
		return definitionService;
	}

	@Bean(name = "userGroupCallback")
	public DBUserGroupCallbackImpl getUserGroupCallback() {
		Properties properties = new Properties();
		try (InputStream stream = this.getClass().getClassLoader().getResourceAsStream("application.properties")) {
			properties.load(stream);
		} catch (IOException e) {
			e.printStackTrace();
		}
		DBUserGroupCallbackImpl userGroupCallback = new DBUserGroupCallbackImpl(properties);
		return userGroupCallback;
	}

	@Bean(name = "runtimeManagerFactory")
	public SpringRuntimeManagerFactoryImpl getRuntimeManagerFactory() {
		SpringRuntimeManagerFactoryImpl runtimeManagerFactory = new SpringRuntimeManagerFactoryImpl();
		runtimeManagerFactory.setTransactionManager(getTransactionManager());
		runtimeManagerFactory.setUserGroupCallback(getUserGroupCallback());
		return runtimeManagerFactory;
	}

	@Bean(name = "transactionManager")
	public JtaTransactionManager getTransactionManager() {
		JtaTransactionManager transactionManager = new JtaTransactionManager();
		return transactionManager;
	}

	@Bean(name = "identityProvider")
	public SpringSecurityIdentityProvider getIdentityProvider() {
		SpringSecurityIdentityProvider identityProvider = new SpringSecurityIdentityProvider();
		return identityProvider;
	}

	@Bean(name = "taskService", destroyMethod = "close")
	public TaskServiceFactoryBean getTaskService() {
		TaskServiceFactoryBean taskService = new TaskServiceFactoryBean();
		taskService.setEntityManagerFactory(getEntityManagerFactory().getObject());
		taskService.setTransactionManager(getTransactionManager());
		taskService.setUserGroupCallback(getUserGroupCallback());
		JPATaskLifeCycleEventListener jtlcel = new JPATaskLifeCycleEventListener(true);
		List<TaskLifeCycleEventListener> listeners = new ArrayList<TaskLifeCycleEventListener>();
		listeners.add(jtlcel);
		taskService.setListeners(listeners);
		return taskService;
	}

	@Bean(name = "entityManagerFactory")
	public LocalContainerEntityManagerFactoryBean getEntityManagerFactory() {
		LocalContainerEntityManagerFactoryBean entityManagerFactory = new LocalContainerEntityManagerFactoryBean();
		entityManagerFactory.setPersistenceXmlLocation("classpath:/META-INF/jbpm-persistence.xml");
		return entityManagerFactory;
	}

	@Bean(name = "transactionCmdService")
	public TransactionalCommandService getTransactionCmdService() {
		TransactionalCommandService transactionCmdService = new TransactionalCommandService(
				getEntityManagerFactory().getObject());
		return transactionCmdService;
	}

	@Bean(name = "runtimeDataService")
	public RuntimeDataServiceImpl getRuntimeDataService() throws Exception {
		RuntimeDataServiceImpl runtimeDataService = new RuntimeDataServiceImpl();
		runtimeDataService.setCommandService(getTransactionCmdService());
		runtimeDataService.setIdentityProvider(getIdentityProvider());
		runtimeDataService.setTaskService((TaskService) getTaskService().getObject());
		return runtimeDataService;
	}

	@Bean(name = "formManagerService")
	public FormManagerServiceImpl getFormManagerService() throws Exception {
		FormManagerServiceImpl formManagerService = new FormManagerServiceImpl();
		return formManagerService;
	}

	@Bean(name = "deploymentService", initMethod = "onInit")
	@DependsOn("entityManagerFactory")
	public KModuleDeploymentService getDeploymentService() throws Exception {
		KModuleDeploymentService deploymentService = new KModuleDeploymentService();
		deploymentService.setBpmn2Service(getDefinitionService());
		deploymentService.setEmf(getEntityManagerFactory().getObject());
		deploymentService.setManagerFactory(getRuntimeManagerFactory());
		deploymentService.setIdentityProvider(getIdentityProvider());
		deploymentService.setRuntimeDataService(getRuntimeDataService());
		deploymentService.setFormManagerService(getFormManagerService());

		return deploymentService;
	}

	@Bean(name="data")
	@DependsOn("deploymentService")
	public MethodInvokingFactoryBean getData() throws Exception {
		MethodInvokingFactoryBean data = new MethodInvokingFactoryBean();
		data.setTargetObject(getDeploymentService());
		data.setTargetMethod("addListener");
		List list = new ArrayList();
		list.add(getRuntimeDataService());
		data.setArguments(list.toArray());
		
		return data;
	}
	
	@Bean(name="processService")
	@DependsOn("deploymentService")
	public ProcessServiceImpl getProcessService() throws Exception {
		ProcessServiceImpl processService = new ProcessServiceImpl();
		processService.setDataService(getRuntimeDataService());
		processService.setDeploymentService(getDeploymentService());
		return processService;
	}
	
	@Bean(name="userTaskService")
	@DependsOn("deploymentService")
	public UserTaskServiceImpl getUserTaskService() throws Exception {
		UserTaskServiceImpl userTaskService = new UserTaskServiceImpl();
		userTaskService.setDataService(getRuntimeDataService());
		userTaskService.setDeploymentService(getDeploymentService());
		return userTaskService;
	}

}