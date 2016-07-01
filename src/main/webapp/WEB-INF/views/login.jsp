<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>HYUNDAI</title>
	<link href="resources/css/contents.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="resources/js/jquery-1.8.1.min.js"></script>
	<script type="text/javascript" src="resources/js/login.js"></script>
</head>
<body class="login">
<div id="wrap">
	<form name="f" action="login" method="post" >
	<c:if test="${param.error != null}">
        <div class="alert alert-danger">
            <p>Invalid username and password.</p>
        </div>
    </c:if>
    <c:if test="${param.logout != null}">
        <div class="alert alert-success">
            <p>You have been logged out successfully.</p>
        </div>
    </c:if>
    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
	<p class="login_logo"><img src="resources/images/login_logo.png" alt="Hyundai" /></p>
	<div class="login_wrap">
		<p class="login_ti"><img src="resources/images/login_ti.gif" alt="login" /></p>
		<div class="login_box">
			<div class="login_input">
				<fieldset>
					<legend>로그인</legend>
					<ul>
						<li><label for="userid" class="ov_label"><img src="resources/images/id_txt.gif" alt="아이디" /></label><input type="text" id="userid" name="id" class="intype" style="width:278px;" /></li>
						<li><label for="userpw" class="ov_label"><img src="resources/images/pw_txt.gif" alt="비밀번호" /></label><input type="password" id="userpw" name="pw" class="intype" style="width:278px;" /></li>
					</ul>
				</fieldset>
				<div class="login_btn">
					<a href="#" onclick="document.f.submit();"><img src="resources/images/btn_login.gif" alt="login" /></a>
				</div>
			</div>
		</div>
		<div class="idsave">
			<input type="checkbox" id="chk1" name="chk1" value="" /> <label for="chk1">로그인상태 유지하기</label>
		</div>
	</div>
	</form>
	<div id="login_footer">
		<img src="resources/images/footer_logo.gif" alt="Hyundai" /> HYUNDAI Autoever Systems. 
	</div>
</div>
</body>
</html>
