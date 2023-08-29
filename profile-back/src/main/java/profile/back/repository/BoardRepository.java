package profile.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import profile.back.domain.entity.board.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {
  Board findByMainYn(String mainYn);

  Board findByBno(Long bno);

  List<Board> findAllByOrderByCreateDateDesc();

  // // 게시판 메인에 띄울 main 부분 Reset
  // @Modifying(clearAutomatically = true)
  // @Query("UPDATE board SET mainYn='N'")
  // int updateResetMainYn();
}
