package profile.back.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import profile.back.repository.MemberRepository;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {
  private final MemberRepository memberRepository;

  // 토큰 인증 정보 사용
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    // throw new UnsupportedOperationException("Unimplemented method
    // 'loadUserByUsername'");
    return memberRepository.findById(username);
    // .orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
  }

}
