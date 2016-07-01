package kr.co.killers.bpm.service;

import java.util.Collection;
import java.util.List;

import org.kie.api.task.model.Task;
import org.kie.api.task.model.TaskSummary;

public interface JBPMService {
	public Collection<TaskSummary> getTasksAssignedAsPotentialOwner(String userId, List<String> groupIds,
			String language, int firstResult, int maxResults,String passwd);
	
	public Task getTaskById(long paramLong);
	
	
	
}
