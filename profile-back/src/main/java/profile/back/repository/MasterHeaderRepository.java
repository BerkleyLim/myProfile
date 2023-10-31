package profile.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.master.header.MasterHeader;

public interface MasterHeaderRepository extends JpaRepository<MasterHeader, Long> {
  List<MasterHeader> findAllOrderBy();
}
