package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.Career;

public interface CareerRepository extends JpaRepository<Career, Long> {

}
