package profile.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.entity.board.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
  Board findByMainYn(String mainYn);

  Board findByBno(Long bno);

  List<Board> findAllByOrderByCreateDateDesc();
}
