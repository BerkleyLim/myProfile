package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.Member;

public interface MemberRepository extends JpaRepository<Member,Long> {

}
