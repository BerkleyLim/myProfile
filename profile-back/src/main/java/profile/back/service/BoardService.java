package profile.back.service;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.Board;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.BoardRepository;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;

    public List<Board> list() {
        return boardRepository.findAll();
    }

    // 상세보기 (1개만 보기)
    public ResponseEntity<Board> get(long bno) {
        Board board = boardRepository.findById(bno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + bno + "]"));

        // System.out.println(board.getContents());

        // 디코딩 받기
        String decodeData = "";
        // // ==== url 디코딩 수행 실시 ====
        try {
            decodeData = URLDecoder.decode(board.getContents(), "UTF-8");
            board.setContents(decodeData);
            System.out.println("URL 디코딩 : " + decodeData);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(board);
    }

    // 수정
    public ResponseEntity<Board> update(long bno, Board oldBoard) {
        Board board = boardRepository.findById(bno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + bno + "]"));

        String encodeData = "";

        // ==== url 인코딩 수행 실시 ====
        try {
            encodeData = URLEncoder.encode(oldBoard.getContents(), "UTF-8");
            // System.out.println("URL 인코딩 : " + encodeData);
        } catch (Exception e) {
            e.printStackTrace();
        }

        board.setBno(oldBoard.getBno());
        board.setTitle(oldBoard.getTitle());
        // board.setContents(oldBoard.getContents());
        board.setContents(encodeData);
        board.setUser_name(oldBoard.getUser_name());

        Board newBoard = boardRepository.save(board);
        return ResponseEntity.ok(newBoard);
    }

    public Board insert(Board board) {
        return boardRepository.save(board);
    }

    public ResponseEntity<Map<String, Boolean>> delete(long bno) {
        Board board = boardRepository.findById(bno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + bno + "]"));

        boardRepository.delete(board);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Board Data by id : [" + bno + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // 메인 화면 표시
    public ResponseEntity<Board> getMainBoard() {
        Board board = boardRepository.findByMainYn("Y");
        // .orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by
        // mainYn"));
        // 디코딩 받기
        System.out.println(board.toString());
        String decodeData = "";
        // // ==== url 디코딩 수행 실시 ====
        try {
            decodeData = URLDecoder.decode(board.getContents(), "UTF-8");
            board.setContents(decodeData);
            System.out.println("URL 디코딩 : " + decodeData);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(board);
    }

}
