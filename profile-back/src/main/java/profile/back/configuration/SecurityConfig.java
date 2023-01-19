package profile.back.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authorization.AuthorityAuthorizationDecision;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.token.TokenService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.web.filter.CorsFilter;

import profile.back.security.CustomAuthenticationFailureHandler;
import profile.back.security.CustomAuthenticationSuccessHandler;
import profile.back.security.CustomLogoutSuccessHandler;
import profile.back.security.JwtAuthenticationFilter;

// 참조 : https://jiurinie.tistory.com/70
//        https://devuna.tistory.com/59 => 시큐리티 기초 참조
// @Configuration
@EnableWebSecurity // 기본적인 Web 보안을 활성화한다
// @EnableGlobalMethodSecurity(prePostEnabled = true) // @PreAuthorize 어노테이션을
// 메소드단위로 추가하기 위해
public class SecurityConfig { // 추가적인 설정을 위해 WebSecurityConfigurer를 implements 할 수도 있다
  // @Autowired
  // AuthenticationProvider authenticationProvider;

  public SecurityConfig(
  // AuthenticationProvider authenticationProvider
  ) {
    // this.authenticationProvider = authenticationProvider;
  }

  // 스프링 시큐리티가 사용자 인증을 담는 방법이 담긴 객체
  // protected void configure(AuthenticationManagerBuilder auth) throws Exception
  // 메소드 대행
  @Bean
  // public AuthenticationManager
  // authenticationManager(AuthenticationManagerBuilder
  // authenticationManagerBuilder)
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
      throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  // 스프링 시큐리티 룰을 무시하게 하는 Url 규칙(여기 등록하면 규칙 적용하지 않음)
  // public void configure(HttpSecurity http) throws Exception
  @Bean
  public WebSecurityCustomizer webSecurityCustomizer() {
    return (web) -> web.ignoring()
        // .antMatchers("/resources/**")
        // .antMatchers("/css/**")
        // .antMatchers("/vendor/**")
        // .antMatchers("/js/**")
        // .antMatchers("/favicon*/**")
        .antMatchers("/api/**");
    // .antMatchers("/img/**");
  }

  // 스프링 시큐리티 규칙
  // protected void configure(HttpSecurity http)
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeRequests()// 보호된 리소스 URI에 접근할 수 있는 권한을 설정
        .antMatchers("/login*/**").permitAll() // 전체 접근 허용
        .antMatchers("/logout/**").permitAll()
        .antMatchers("/myPage").hasRole("ADMIN")// admin이라는 롤을 가진 사용자만 접근 허용
        .antMatchers("/chatbot/**").permitAll()
        .anyRequest().authenticated()
        .and().logout()
        .logoutUrl("/logout")
        .logoutSuccessHandler(logoutSuccessHandler())
        .and().csrf()// csrf 보안 설정을 비활성화
        .disable()// 해당 기능을 사용하기 위해서는 프론트단에서 csrf토큰값 보내줘야함
        // .addFilter(jwtAuthenticationFilter())// Form Login에 사용되는 custom
        // AuthenticationFilter 구현체를 등록
        // .addFilter(jwtAuthorizationFilter())// Header 인증에 사용되는
        // BasicAuthenticationFilter 구현체를 등록
        .exceptionHandling();
    // .accessDeniedHandler(accessDeniedHandler())
    // .authenticationEntryPoint(authenticationEntryPoint());
    return http.build();
  }

  // SuccessHandler bean register
  public AuthenticationSuccessHandler authenticationSuccessHandler() {
    CustomAuthenticationSuccessHandler successHandler = new CustomAuthenticationSuccessHandler();
    successHandler.setDefaultTargetUrl("/index");
    return successHandler;
  }

  // FailureHandler bean register
  public AuthenticationFailureHandler authenticationFailureHandler() {
    CustomAuthenticationFailureHandler failureHandler = new CustomAuthenticationFailureHandler();
    failureHandler.setDefaultFailureUrl("/loginPage?error=error");
    return failureHandler;
  }

  // LogoutSuccessHandler bean register
  @Bean
  public LogoutSuccessHandler logoutSuccessHandler() {
    CustomLogoutSuccessHandler logoutSuccessHandler = new CustomLogoutSuccessHandler();
    logoutSuccessHandler.setDefaultTargetUrl("/loginPage?logout=logout");
    return logoutSuccessHandler;
  }

  // AccessDeniedHandler bean register
  // @Bean
  // public AccessDeniedHandler accessDeniedHandler() {
  // CustomAccessDeniedHandler accessDeniedHandler = new
  // CustomAccessDeniedHandler();
  // accessDeniedHandler.setErrorPage("/error/403");
  // return accessDeniedHandler;
  // }

  // AuthenticationEntryPoint bean register
  // @Bean
  // public AuthenticationEntryPoint authenticationEntryPoint() {
  // return new CustomAuthenticationEntryPoint("/loginPage?error=e");
  // }

  /*
   * Form Login시 걸리는 Filter bean register
   */
  // @Bean
  // public JwtAuthenticationFilter jwtAuthenticationFilter() throws Exception {
  // JwtAuthenticationFilter jwtAuthenticationFilter = new
  // JwtAuthenticationFilter(authenticationManager());
  // jwtAuthenticationFilter.setFilterProcessesUrl("/login");
  // jwtAuthenticationFilter.setUsernameParameter("username");
  // jwtAuthenticationFilter.setPasswordParameter("password");

  // jwtAuthenticationFilter.setAuthenticationSuccessHandler(authenticationSuccessHandler());
  // jwtAuthenticationFilter.setAuthenticationFailureHandler(authenticationFailureHandler());

  // jwtAuthenticationFilter.afterPropertiesSet();

  // return jwtAuthenticationFilter;
  // }

  // /*
  // * Filter bean register
  // */
  // @Bean
  // public JwtAuthenticationFilter jwtAuthorizationFilter() throws Exception {
  // JwtAuthenticationFilter jwtAuthorizationFilter = new
  // JwtAuthorizationFilter(authenticationManager(null));
  // return jwtAuthorizationFilter;
  // }

  @Bean
  public PasswordEncoder passwordEncoder() {// 간단하게 비밀번호 암호화
    return new BCryptPasswordEncoder();
  }

  // // SecurityFilterChain 사용 방법
  // //
  // https://velog.io/@pjh612/Deprecated%EB%90%9C-WebSecurityConfigurerAdapter-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8C%80%EC%B2%98%ED%95%98%EC%A7%80

  // @Bean
  // public SecurityFilterChain filterChain(HttpSecurity http, Jwt jwt,
  // TokenService tokenService) throws Exception {
  // // http
  // // .authorizeRequests() // HttpServletRequest를 사용하는 요청들에 대한 접근제한을 설정하겠다는 의미
  // // .antMatchers("/api/hello").permitAll() // /api/hello에 대한 요청은 인증이 필요 없다
  // // .anyRequest().authenticated(); // 나머지 요청은 인증이 필요하다

  // // return http.build();
  // http
  // // token을 사용하는 방식이기 때문에 csrf를 disable
  // .csrf().disable()

  // .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)

  // .exceptionHandling()
  // // 우리가 만든 클래스들로 entrypoint, handler 설정
  // .authenticationEntryPoint(jwtAuthenticationEntryPoint)
  // .accessDeniedHandler(jwtAccessDeniedHandler)

  // // enable h2-console
  // .and()
  // .headers()
  // .frameOptions()
  // .sameOrigin()

  // // 세션을 사용하지 않기 때문에 STATELESS로 설정
  // .and()
  // .sessionManagement()
  // .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

  // .and()
  // .authorizeRequests()
  // .antMatchers("/api/hello").permitAll()
  // .antMatchers("/api/authenticate").permitAll()
  // .antMatchers("/api/signup").permitAll()

  // .anyRequest().authenticated()

  // .and()
  // .apply(new JwtSecurityConfig(tokenProvider));
  // return http.build();
  // }
}
