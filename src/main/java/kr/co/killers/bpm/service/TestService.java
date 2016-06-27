package kr.co.killers.bpm.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.ui.ModelMap;

public interface TestService {


	void test(HttpSession session, HttpServletRequest request, HttpServletResponse response, ModelMap modelMap, Map<String, Object> params) throws Exception;

}
