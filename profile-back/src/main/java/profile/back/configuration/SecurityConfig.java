package profile.back.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;
import profile.back.common.jwt.JwtAccessDeniedHandler;
import profile.back.common.jwt.JwtAuthenticationEntryPoint;
import profile.back.common.jwt.JwtSecurityConfig;
import profile.back.common.jwt.TokenProvider;

// 참조 : https://jiurinie.tistory.com/70
//        https://devuna.tistory.com/59 => 시큐리티 기초 참조
// @Configuration
@EnableWebSecurity // 기본적인 Web 보안을 활성화한다
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
// @EnableGlobalMethodSecurity(prePostEnabled = true) // @PreAuthorize 어노테이션을
// 메소드단위로 추가하기 위해
public class SecurityConfig { // 추가적인 설정을 위해 WebSecurityConfigurer를 implements 할 수도 있다

  private final TokenProvider tokenProvider;
  private final JwtAuthenticationEntryPoint jwtAtuthenticationEntryPoint;
  private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

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
  }

  // 스프링 시큐리티 규칙
  // protected void configure(HttpSecurity http)
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf().disable()

        /** 401, 403 Exception 핸들링 */
        .exceptionHandling()
        .authenticationEntryPoint(jwtAtuthenticationEntryPoint)
        .accessDeniedHandler(jwtAccessDeniedHandler)

        /** 세션 사용하지 않음 */
        .and()
        .sessionManagement()
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

        /** HttpServletRequest를 사용하는 요청들에 대한 접근 제한 설정 */
        .and()
        .authorizeRequests()
        .antMatchers("/authenticate").permitAll()

        /** JwtSecurityConfig 적용 */
        .and()
        .apply(new JwtSecurityConfig(tokenProvider));

    // .authorizeRequests()// 보호된 리소스 URI에 접근할 수 있는 권한을 설정
    // .antMatchers("/login*/**").permitAll() // 전체 접근 허용
    // .antMatchers("/logout/**").permitAll()
    // .antMatchers("/myPage").hasRole("ADMIN")// admin이라는 롤을 가진 사용자만 접근 허용
    // // .antMatchers("/chatbot/**").permitAll()
    // .anyRequest().authenticated()
    // .and().logout()
    // .logoutUrl("/logout")
    // // .logoutSuccessHandler(logoutSuccessHandler())
    // .and().csrf()// csrf 보안 설정을 비활성화
    // .disable()// 해당 기능을 사용하기 위해서는 프론트단에서 csrf토큰값 보내줘야함
    // // .addFilter(jwtAuthenticationFilter())// Form Login에 사용되는 custom
    // // AuthenticationFilter 구현체를 등록
    // // .addFilter(jwtAuthorizationFilter())// Header 인증에 사용되는
    // // BasicAuthenticationFilter 구현체를 등록
    // .exceptionHandling();
    // .accessDeniedHandler(accessDeniedHandler())
    // .authenticationEntryPoint(authenticationEntryPoint());
    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
