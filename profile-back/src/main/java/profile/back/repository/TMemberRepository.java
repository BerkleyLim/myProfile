package profile.back.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import profile.back.domain.entity.user.TMember;

public interface TMemberRepository extends JpaRepository<TMember, Long> {
  TMember findByIdAndPassword(String id, String password);

  UserDetails findById(String username);

  @EntityGraph(attributePaths = "authorities")
  Optional<TMember> findOneWithAuthoritiesByUsername(String username);
}
