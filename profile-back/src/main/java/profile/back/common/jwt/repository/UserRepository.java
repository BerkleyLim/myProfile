package profile.back.common.jwt.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.Member;

// public interface UserRepository extends JpaRepository<MOpOperator, MOpOperatorKey> {
public interface UserRepository extends JpaRepository<Member, Object> {

  // @EntityGraph(attributePaths = "authorities")
  // Optional<MOpOperator> findOneWithAuthoritiesByLoginId(String loginId);

}