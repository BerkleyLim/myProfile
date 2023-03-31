package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import profile.back.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
  Member findByIdAndPassword(String id, String password);

  UserDetails findById(String username);
}
