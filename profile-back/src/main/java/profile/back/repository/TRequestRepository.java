package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.TRequest;

public interface TRequestRepository extends JpaRepository<TRequest, Long> {

}
