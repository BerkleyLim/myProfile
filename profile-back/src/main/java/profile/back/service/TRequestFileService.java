package profile.back.service;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.imageio.ImageIO;
import javax.xml.bind.DatatypeConverter;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.stereotype.Service;

import com.mysql.cj.util.Base64Decoder;

import profile.back.domain.vo.request.TRequestFileVo;

@Service
public class TRequestFileService {

    /**
     * 파일 처리 로직
     */
    public void dataFormUpload(TRequestFileVo file) {
        System.out.println(file.getName());
        System.out.println(file.getType());
        System.out.println(file.getWebkitRelativePath());
        System.out.println(file.getLastModified());
        System.out.println(file.getSize());

        // 확장자 짜르기
        String ext = file.getName().substring(file.getName().lastIndexOf(".") + 1);
        // // Base64 디코딩 후 압축해제
        String data = file.getFileReader().split(",")[1];

        System.out.println(ext);
        try {
            // 현재 테스트용 (로컬기준)
            OutputStream output = new FileOutputStream(
                    // "../../../../../../../profile-front/public/file/" + file.getLastModified() +
                    // "." + ext);
                    "../profile-front/public/file/" + file.getLastModified() + "." + ext);

            // byte[] by = Base64.decodeBase64(file.getFileReader());
            byte[] by = Base64.decodeBase64(data);
            output.write(by);
        } catch (Exception e) {
            e.printStackTrace();
        }

        // System.out.println(data);
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
