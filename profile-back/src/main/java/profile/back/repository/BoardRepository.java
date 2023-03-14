package profile.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import profile.back.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
