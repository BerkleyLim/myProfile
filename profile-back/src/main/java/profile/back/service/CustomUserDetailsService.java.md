package profile.back.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.AuthenticationUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedCredentialsNotFoundException;
import org.springframework.stereotype.Service;

// @Component("userDetailsService")
@Service
public class CustomUserDetailsService implements AuthenticationUserDetailsService<Authentication> {

  @Override
  public UserDetails loadUserDetails(Authentication token) throws UsernameNotFoundException {
    // TODO Auto-generated method stub
    User user = (User) token.getPrincipal();

    if (user == null) {
      throw new PreAuthenticatedCredentialsNotFoundException("USER IS NULL");
    }

    // DB에 접근해서 직접 가져오는것이 일반적
    return CustomUserDetails().setUser(user).setGrantedAuthorities(user.getAuthorities());
  }

}
