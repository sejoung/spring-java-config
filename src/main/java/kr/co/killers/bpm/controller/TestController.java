package kr.co.killers.bpm.controller;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kr.co.killers.bpm.service.TestService;

@Controller
public class TestController {
	private static final Logger log = LoggerFactory.getLogger(TestController.class);

	@Resource(name = "TestService")
	private TestService testService;

	@RequestMapping(value = "/test.do")
	public String redisNonceTypeOUpdateSample(HttpSession session, HttpServletRequest request, HttpServletResponse response, @RequestParam Map<String, Object> params, ModelMap modelMap) throws Exception {
		log.info("parameters : " + params);
		testService.test(session, request, response, modelMap, params);
		request.setAttribute("data", modelMap);

		return "test";
	}

}
