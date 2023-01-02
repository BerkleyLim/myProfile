package profile.back.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.token.TokenService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

import io.jsonwebtoken.Jwt;
import profile.back.jwt.JwtAccessDeniedHandler;
import profile.back.jwt.JwtAuthenticationEntryPoint;
import profile.back.jwt.JwtSecurityConfig;
import profile.back.jwt.TokenProvider;

// @EnableWebSecurity // 기본적인 Web 보안을 활성화한다
// @EnableGlobalMethodSecurity(prePostEnabled = true) // @PreAuthorize 어노테이션을 메소드단위로 추가하기 위해
public class SecurityConfig { // 추가적인 설정을 위해 WebSecurityConfigurer를 implements 할 수도 있다

  // /*
  // * 추가 설정
  // */
  // private final TokenProvider tokenProvider;
  // private final CorsFilter corsFilter;
  // private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
  // private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

  // // 만든 5개의 클래스들을 주입
  // public SecurityConfig(
  // TokenProvider tokenProvider,
  // CorsFilter corsFilter,
  // JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
  // JwtAccessDeniedHandler jwtAccessDeniedHandler) {
  // this.tokenProvider = tokenProvider;
  // this.corsFilter = corsFilter;
  // this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
  // this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
  // }

  // @Bean
  // public PasswordEncoder passwordEncoder() {
  // return new BCryptPasswordEncoder();
  // }

  // @Bean
  // public WebSecurityCustomizer webSecurityCustomizer() {
  // return (web) -> web.ignoring().antMatchers(
  // "/h2-console/**", "/favicon.ico", "/error");
  // }

  // /*
  // * .authorizeRequests()
  // * .antMatchers("/api/members/signup", "/api/members/signin").permitAll()
  // * .anyRequest().authenticated()
  // * .and()
  // * .formLogin()
  // * .disable()
  // * .csrf()
  // * .disable()
  // * .headers()
  // * .disable()
  // * .httpBasic()
  // * .disable()
  // * .rememberMe()
  // * .disable()
  // * .logout()
  // * .disable()
  // * .sessionManagement()
  // * .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
  // * .and()
  // * .exceptionHandling()
  // * .accessDeniedHandler(accessDeniedHandler())
  // * .authenticationEntryPoint(authenticationEntryPoint())
  // * .and()
  // * .addFilterBefore(jwtAuthenticationFilter(jwt, tokenService),
  // * UsernamePasswordAuthenticationFilter.class);
  // *
  // */

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
