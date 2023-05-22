package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.board.Together;

public interface TogetherRepository extends JpaRepository<Together,Long>{

}
