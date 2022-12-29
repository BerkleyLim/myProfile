package profile.back.service;

import java.util.Collections;

import javax.transaction.Transactional;

import org.apache.ibatis.javassist.bytecode.DuplicateMemberException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import profile.back.domain.entity.Authority;
import profile.back.jwt.SecurityUtil;
import profile.back.repository.UserRepository;

@Service
public class UserService {
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  // @Transactional
  // public UserDto signup(UserDto userDto) {
  // if
  // (userRepository.findOneWithAuthoritiesByUsername(userDto.getUsername()).orElse(null)
  // != null) {
  // throw new DuplicateMemberException("이미 가입되어 있는 유저입니다.");
  // }

  // Authority authority = Authority.builder()
  // .authorityName("ROLE_USER")
  // .build();

  // User user = User.builder()
  // .username(userDto.getUsername())
  // .password(passwordEncoder.encode(userDto.getPassword()))
  // .nickname(userDto.getNickname())
  // .authorities(Collections.singleton(authority))
  // .activated(true)
  // .build();

  // return UserDto.from(userRepository.save(user));
  // }

  // // 어떤 유저 객체의 권한정보를 가져옴
  // @Transactional(readOnly = true)`
  // public UserDto getUserWithAuthorities(String username) {
  // return
  // UserDto.from(userRepository.findOneWithAuthoritiesByUsername(username).orElse(null));
  // }

  // // 현재 유저(SecurityContext) 객체의 권한정보를 가져옴
  // @Transactional(readOnly = true)
  // public UserDto getMyUserWithAuthorities() {
  // return UserDto
  // .from(SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername).orElse(null));
  // }
}
