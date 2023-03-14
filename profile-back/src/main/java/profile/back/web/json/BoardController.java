package profile.back.web.json;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.domain.Board;
import profile.back.service.BoardService;

@RestController
@RequestMapping("/api/board")
public class BoardController {
    @Autowired
    BoardService boardService;

    // 다음은 인코더, 디코더 테스트용으로 사용
    @GetMapping("/test")
    public String getTest(@RequestBody Board board) {
        System.out.println(board.getContents());

        // 실제 받는 값
        // "contents": "<p>&nbsp;지금 현재 가지고 있는 보유기술은 React 와 Spring boot 기반으로 만들어진 기술 중
        // 하나입니다.</p><p><br> 사용 목적은 현재 개인 프로젝트로만 진행해왔기 때문에 팀 프로젝트 경험을 쌓고
        // 싶습니다.<br></p><p><br> 따라서 같이 스팩업 하고 싶은 사람이면 좋을거 같습니다.<br>&nbsp;</p>"

        String encodeData = "";
        String decodeData = "";

        // ==== url 인코딩 수행 실시 ====
        // try {
        // encodeData = URLEncoder.encode(contents, "UTF-8");
        // System.out.println("URL 인코딩 : " + encodeData);
        // } catch (Exception e) {
        // e.printStackTrace();
        // }

        // // 디코더 값
        // //
        // %7B%0A++%22contents%22%3A+%22%3Cp%3E%26nbsp%3B%EC%A7%80%EA%B8%88+%ED%98%84%EC%9E%AC+%EA%B0%80%EC%A7%80%EA%B3%A0+%EC%9E%88%EB%8A%94+%EB%B3%B4%EC%9C%A0%EA%B8%B0%EC%88%A0%EC%9D%80+React+%EC%99%80+Spring+boot+%EA%B8%B0%EB%B0%98%EC%9C%BC%EB%A1%9C+%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%84+%EA%B8%B0%EC%88%A0+%EC%A4%91+%ED%95%98%EB%82%98%EC%9E%85%EB%8B%88%EB%8B%A4.%3C%2Fp%3E%3Cp%3E%3Cbr%3E++%EC%82%AC%EC%9A%A9+%EB%AA%A9%EC%A0%81%EC%9D%80+%ED%98%84%EC%9E%AC+%EA%B0%9C%EC%9D%B8+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A1%9C%EB%A7%8C+%EC%A7%84%ED%96%89%ED%95%B4%EC%99%94%EA%B8%B0+%EB%95%8C%EB%AC%B8%EC%97%90+%ED%8C%80+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EA%B2%BD%ED%97%98%EC%9D%84+%EC%8C%93%EA%B3%A0+%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4.%3Cbr%3E%3C%2Fp%3E%3Cp%3E%3Cbr%3E++%EB%94%B0%EB%9D%BC%EC%84%9C+%EA%B0%99%EC%9D%B4+%EC%8A%A4%ED%8C%A9%EC%97%85+%ED%95%98%EA%B3%A0+%EC%8B%B6%EC%9D%80+%EC%82%AC%EB%9E%8C%EC%9D%B4%EB%A9%B4+%EC%A2%8B%EC%9D%84%EA%B1%B0+%EA%B0%99%EC%8A%B5%EB%8B%88%EB%8B%A4.%3Cbr%3E%26nbsp%3B%3C%2Fp%3E%22%0A%7D

        // // ==== url 디코딩 수행 실시 ====
        // try {
        // decodeData = URLDecoder.decode(contents, "UTF-8");
        // System.out.println("URL 디코딩 : " + decodeData);
        // } catch (Exception e) {
        // e.printStackTrace();
        // }

        // return contents;
        // return encodeData;
        // return decodeData;
        return board.getContents();
    }

    @GetMapping("/")
    public List<Board> getBoard() {
        return boardService.list();
    }

    @GetMapping("{bno}")
    public ResponseEntity<Board> getOneBoard(
            @PathVariable long bno) {
        return boardService.get(bno);
    }

    @PostMapping("/")
    public Board createBoard(
            @RequestBody Board board) {
        return boardService.insert(board);
    }

    @PostMapping("update")
    public ResponseEntity<Board> UpdateBoard(
            @RequestBody Board board) {
        return boardService.update(board.getBno(), board);
    }

    @DeleteMapping("{bno}")
    public ResponseEntity<Map<String, Boolean>> deleteBoard(
            @PathVariable long bno) {
        return boardService.delete(bno);
    }

}
