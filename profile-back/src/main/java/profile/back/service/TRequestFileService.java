package profile.back.service;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.entity.request.TRequestFile;
import profile.back.domain.vo.request.TRequestFileVo;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.TRequestFileRepository;

@Service
public class TRequestFileService {
    @Autowired
    TRequestFileRepository tRequestFileRepository;

    public List<TRequestFile> list() {
        List<TRequestFile> trequestList = tRequestFileRepository.findAll();
        return trequestList;
    }

    public ResponseEntity<TRequestFile> get(long rno) {
        // TODO Auto-generated method stub
        TRequestFile trequest = tRequestFileRepository.findById(rno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist TRequestFile Data by no : [" + rno + "]"));
        return ResponseEntity.ok(trequest);
    }

    public TRequestFile insert(TRequestFile trequest) {
        // TODO Auto-generated method stub
        // 날짜 형식 지정
        return tRequestFileRepository.save(trequest);
    }

    // 업로드 테스트
    public TRequestFile Upload(TRequestFile trequest) {
        // TODO Auto-generated method stub
        // 날짜 형식 지정
        return tRequestFileRepository.save(trequest);
    }

    // public ResponseEntity<TRequestFile> update(long pno, TRequestFile
    // oldTRequest) {
    // public ResponseEntity<TRequestFile> update(TRequestFile oldTRequest) {
    // // TODO Auto-generated method stub
    // TRequestFile trequest = tRequestFileRepository.findById(oldTRequest.getRno())
    // .orElseThrow(() -> new ResourceNotFoundException(
    // "Not exist TRequestFile Data by no : [" + oldTRequest.getRno() + "]"));

    // trequest.setRno(oldTRequest.getRno());
    // trequest.setCompany(oldTRequest.getCompany());
    // trequest.setPerson(oldTRequest.getPerson());
    // trequest.setPhone(oldTRequest.getPhone());
    // trequest.setEmail(oldTRequest.getEmail());
    // trequest.setTitle(oldTRequest.getTitle());
    // trequest.setObject(oldTRequest.getObject());
    // trequest.setSite1(oldTRequest.getSite1());
    // trequest.setSite2(oldTRequest.getSite2());
    // trequest.setSite3(oldTRequest.getSite3());
    // trequest.setRequestTime(oldTRequest.getRequestTime());

    // TRequestFile newTRequest = tRequestFileRepository.save(trequest);
    // return ResponseEntity.ok(newTRequest);
    // }

    public ResponseEntity<Map<String, Boolean>> delete(long rno) {
        // TODO Auto-generated method stub
        TRequestFile trequest = tRequestFileRepository.findById(rno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist TRequestFile Data by no : [" + rno + "]"));

        tRequestFileRepository.delete(trequest);
        Map<String, Boolean> response = new HashMap<>();

        response.put("Deleted TRequestFile Data by id : [" + rno + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // 파일 서비스 로직 구현 (테스트용 파일)
    // 기존 static.sample.static.sample.Glinka-Balakirev_-_The_Lark.pdf 파일을 먼저 읽고
    // jpg 파일 출력
    // 참조 : https://ohmyfun.tistory.com/m/381
    // 참조2 :
    // https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=bb_&logNo=221329660551
    public void convertTest(TRequestFileVo trequestFile) {

        System.out.println(trequestFile);
        // 어떤 경로의 어떤 파일을 읽을것인지 설정하고 해당 파일객체 생성
        File file2 = new File(
                "C:/Users/user/git/CLNEWZE/clnewze-back/src/main/resources/static/sample/file/Glinka-Balakirev_-_The_Lark.pdf");
        // try {
        // PDDocument document = PDDocument.load(file2);// pdf문서 객체 생성
        // // int pageCount = document.getNumberOfPages();// pdf의 페이지 수
        // PDFRenderer pdfRenderer = new PDFRenderer(document);

        // // 0 페이지를 JPG파일로 저장
        // BufferedImage imageObj = pdfRenderer.renderImageWithDPI(0, 100,
        // ImageType.RGB);
        // File outputfile = new
        // File("C:/Users/user/git/CLNEWZE/clnewze-back/src/main/resources/static/sample/image/"
        // + System.currentTimeMillis() + ".jpg");
        // ImageIO.write(imageObj, "jpg", outputfile);

        // // 여러페이지 삽입
        // // for (int i = 0; i < pageCount; i++) {
        // // BufferedImage imageObj = pdfRenderer.renderImageWithDPI(i, 300,
        // // ImageType.RGB);// pdf파일의 페이지를돌면서 이미지 파일 변환
        // // File outputfile = new File(uploadPath + "/" + System.currentTimeMillis() +
        // // "_" +
        // // fb.getOriginalFilename().substring(0, fb.getOriginalFilename().length() -
        // 4)
        // // + ".jpg");// 파일이름
        // // // 변경(.pdf->.jpg)

        // // ImageIO.write(imageObj, "jpg", outputfile);// 변환한 파일 업로드
        // // }

        // if (document != null) {
        // document.close();
        // }
        // } catch (IOException e) {
        // // TODO Auto-generated catch block
        // e.printStackTrace();
        // }
    }

}
