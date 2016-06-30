package kr.co.killers.config;

import java.io.IOException;

import javax.naming.NamingException;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jndi.JndiObjectFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import net.sf.log4jdbc.Log4jdbcProxyDataSource;
import net.sf.log4jdbc.tools.Log4JdbcCustomFormatter;
import net.sf.log4jdbc.tools.LoggingType;

@Configuration
@PropertySource("classpath:application.properties")
@EnableTransactionManagement
public class DatasourceConfiguration {

	private @Value("${jndi-name}") String jndiName;
	
	@Bean
	public SqlSessionFactoryBean sqlSessionFactoryBean(final DataSource dataSource, final ApplicationContext applicationContext) throws IOException {
		SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
		factoryBean.setDataSource(dataSource);
		factoryBean.setConfigLocation(applicationContext.getResource("classpath:/conf/spring/mybatis/mybatis-config.xml"));
		factoryBean.setMapperLocations(applicationContext.getResources("classpath*:/conf/sql/*.xml"));
		return factoryBean;
	}

	@Bean(destroyMethod = "clearCache")
	public SqlSessionTemplate sqlSession(final SqlSessionFactory sqlSessionFactory) {
		return new SqlSessionTemplate(sqlSessionFactory);
	}

	@Bean
	public PlatformTransactionManager transactionManager() {
		return new DataSourceTransactionManager(dataSource());
	}

	@Bean
	public DataSource jdbcDataSource() {
		JndiObjectFactoryBean dataSource = new JndiObjectFactoryBean();
		dataSource.setExpectedType(DataSource.class);
		dataSource.setJndiName(jndiName);
		try {
			dataSource.afterPropertiesSet();
		} catch (IllegalArgumentException | NamingException e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		return (DataSource) dataSource.getObject();
	}
	
	@Bean(name = "dataSource")
	public DataSource dataSource() {
		Log4jdbcProxyDataSource logDataSource = new Log4jdbcProxyDataSource(jdbcDataSource());
		Log4JdbcCustomFormatter logFormatter = new Log4JdbcCustomFormatter();

		logFormatter.setLoggingType(LoggingType.MULTI_LINE);
		logFormatter.setSqlPrefix("SQL:::");
		logDataSource.setLogFormatter(logFormatter);

		return logDataSource;

	}
}
