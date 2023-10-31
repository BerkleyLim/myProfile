package profile.back.web.json;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.entity.board.Board;
import profile.back.domain.entity.master.header.MasterHeader;
import profile.back.service.BoardService;
import profile.back.service.MasterHeaderService;

@RestController
@RequestMapping("/api/master/header")
public class MasterHeaderController {
    @Autowired
    MasterHeaderService masterheaderService;

    // 리스트 출력
    @GetMapping("/")
    public List<MasterHeader> selectListMasterHeader() {
        return masterheaderService.selectListMasterHeader();
    }

    // 삽입
    @PostMapping("/insert")
    public MasterHeader insertMasterHeader(
            @RequestBody MasterHeader masterHeader) {
        return masterheaderService.insertMasterHeader(masterHeader);
    }

    // @PostMapping("update")
    // public ResponseEntity<Board> UpdateBoard(
    // @RequestBody Board board) {
    // return boardService.update(board.getBno(), board);
    // }

    // @PostMapping("delete")
    // public ResponseEntity<Map<String, Boolean>> deleteBoard(
    // @RequestBody Board board) {
    // return boardService.delete(board.getBno());
    // }
    // // @DeleteMapping("{bno}")
    // // public ResponseEntity<Map<String, Boolean>> deleteBoard(
    // // @PathVariable long bno) {
    // // return boardService.delete(bno);
    // // }

    // @GetMapping("mainYn")
    // public ResponseEntity<Board> getMainBoard() {
    // return boardService.getMainBoard();
    // }

    // @PostMapping("viewClick")
    // public ResponseEntity<Board> viewClick(
    // @RequestBody Board board) {
    // return boardService.viewClick(board);
    // }

    // @PostMapping("mainYn/update")
    // public ResponseEntity<Board> mainYnUpdate(
    // @RequestBody Board board) {
    // return boardService.mainYnUpdate(board.getBno(), board);
    // }

}
