package kr.co.killers.bpm.service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Collection;
import java.util.List;

import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.manager.RuntimeEngine;
import org.kie.api.runtime.manager.audit.AuditService;
import org.kie.api.task.TaskService;
import org.kie.api.task.model.Task;
import org.kie.api.task.model.TaskSummary;
import org.kie.remote.client.api.RemoteRuntimeEngineFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


@Service("JBPMService")
@PropertySource("classpath:application.properties")
public class JBPMServiceImpl implements JBPMService{
	private static final Logger log = LoggerFactory.getLogger(JBPMServiceImpl.class);
	
	private @Value("${jbpm.url}") String JBPM_URL;
	private @Value("${jbpm.test.processId}") String JBPM_TEST_PROCESSID;
	private @Value("${jbpm.test.deploymentId}") String JBPM_TEST_DEPLOYMENTID;
	
	
	@Override
	public Collection<TaskSummary> getTasksAssignedAsPotentialOwner(String userId, List<String> groupIds,
			String language, int firstResult, int maxResults,String passwd) {
		RuntimeEngine engine = null;
		try {
			engine = RemoteRuntimeEngineFactory.newRestBuilder().addUserName(userId)
					.addPassword(passwd).addUrl(new URL(JBPM_URL)).build();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		TaskService taskService = engine.getTaskService();
		return taskService.getTasksAssignedAsPotentialOwner(userId, language);
	}

	@Override
	public Task getTaskById(long paramLong) {
		// TODO Auto-generated method stub
		return null;
	}

}
