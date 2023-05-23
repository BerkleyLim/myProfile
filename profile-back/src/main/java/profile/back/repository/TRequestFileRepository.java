package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.request.TRequestFile;

public interface TRequestFileRepository extends JpaRepository<TRequestFile, Long> {

}
