package profile.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @ServletComponentScan
@SpringBootApplication
public class ProfileBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfileBackApplication.class, args);
	}

	// NGinX로 react와 spring 연동 방법 : https://sundries-in-myidea.tistory.com/125

	// build에서 구현이 아닌
	// nGinX에서 각각 서버 포트를 연다
	// nGinX 설치 참조 :
	// https://docs.3rdeyesys.com/compute/ncloud_compute_lemp_nginx_install_setting_centos_guide.html
	/*
	 * 
	 * NginX는 stable, mainline 두가지 버전이 있습니다.
	 * NginX의 공식 설명에 따르면 버그 수정이나 보안 패치 등은 항상 mainline 버전에 먼저 적용되기 때문에 mainline을 사용하는
	 * 것을 추천한다고 합니다.
	 * stable 버전을 사용하는 주된 경우는 third-party 모듈을 사용하고 있어서 신규 버전에서 호환성 문제가 발생할 가능성이 걱정될
	 * 때라고 합니다.
	 * [nginx-stable]
	 * name=nginx stable repo
	 * baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
	 * gpgcheck=1
	 * enabled=1
	 * gpgkey=https://nginx.org/keys/nginx_signing.key
	 * module_hotfixes=true
	 * 
	 * [nginx-mainline]
	 * name=nginx mainline repo
	 * baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
	 * gpgcheck=1
	 * enabled=0
	 * gpgkey=https://nginx.org/keys/nginx_signing.key
	 * module_hotfixes=true
	 * 
	 * 
	 * 버전 : stable, mainline 두 버전이 있고 기본이 stable 버전
	 */

	// @RequestMapping("/")
	// public String index() {
	// return "index.html";
	// }
	// @RequestMapping("/")
	// public String home() {
	// return "hello worlld spring!";
	// }

}
