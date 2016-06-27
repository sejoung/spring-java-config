package kr.co.killers.bpm.service;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;

import kr.co.killers.bpm.dao.TestDao;

@Service("TestService")
public class TestServiceImpl implements TestService {
	private static final Logger log = LoggerFactory.getLogger(TestServiceImpl.class);

	@Resource(name = "TestDao")
	private TestDao testDao;

	@Override
	public void test(HttpSession session, HttpServletRequest request, HttpServletResponse response, ModelMap modelMap, Map<String, Object> params) throws Exception {
		Map<String, Object> data = null;
		try {
			data = testDao.selectTest(params);
		} catch (Exception e) {
			log.error("error test" + e.getMessage());
		}
		modelMap.put("json", data);
	}

}
