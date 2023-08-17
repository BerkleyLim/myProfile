package profile.back.web.json;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import profile.back.domain.entity.request.TRequest;
import profile.back.domain.vo.request.RequestDataFormVo;
import profile.back.domain.vo.request.TRequestFileVo;
import profile.back.service.TRequestFileService;
import profile.back.service.TRequestService;

@RestController
@RequestMapping("/api/request")
@Slf4j
public class TRequestController {

    @Autowired
    TRequestService trequestService;

    @Autowired
    TRequestFileService trequestFileService;

    @GetMapping("/")
    public List<TRequest> getProject() {

        return trequestService.list();
    }

    @GetMapping("/{pno}")
    public ResponseEntity<TRequest> getOneProject(
            @PathVariable long rno) {
        return trequestService.get(rno);
    }

    @PostMapping("/")
    public TRequest createProject(
            @RequestBody TRequest trequest) {
        return trequestService.insert(trequest);
    }

    // @PutMapping("/{pno}")
    @PostMapping("/update")
    public ResponseEntity<TRequest> updateRequest(
            // @PathVariable long pno,
            @RequestBody TRequest trequest) {
        // return trequestService.update(pno, project);
        return trequestService.update(trequest);
    }

    @DeleteMapping("/{pno}")
    public ResponseEntity<Map<String, Boolean>> deleteRequest(
            @PathVariable long rno) {
        return trequestService.delete(rno);
    }

    // 파일 업로드 테스트
    @PostMapping("/fileupload")
    public void convertTest(
            @RequestBody TRequestFileVo trequestFile) {
        trequestFileService.convertTest(trequestFile);
    }

    @PostMapping("/create")
    public TRequest createRequest(@RequestBody RequestDataFormVo requestDataFormVo) {
        TRequest tRequest = new TRequest();
        tRequest.setCompany(requestDataFormVo.getCompany());
        tRequest.setPerson(requestDataFormVo.getPerson());
        tRequest.setPhone(requestDataFormVo.getPhone());
        tRequest.setEmail(requestDataFormVo.getEmail());
        tRequest.setTitle(requestDataFormVo.getTitle());
        tRequest.setObject(requestDataFormVo.getObject());
        tRequest.setContents(requestDataFormVo.getContents());
        /**
         * fileReader: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA......"
         * lastModified: 1680367601175
         * name: "KakaoTalk_20230402_014613739.jpg"
         * size: 171842
         * type: "image/jpeg"
         * webkitRelativePath: ""
         */
        // log.info(requestDataFormVo.toString());
        TRequestFileVo file1 = requestDataFormVo.getFile1();
        String frontUploadPath = "/file/";
        if (file1 != null) {
            // 파일 다운로드 설정, 파일 경로도 지정, return 값 : 파일명
            tRequest.setFilepath1(frontUploadPath + trequestFileService.dataFormUpload(file1));
        }
        TRequestFileVo file2 = requestDataFormVo.getFile2();
        if (file2 != null) {
            // 파일 다운로드 설정, 파일 경로도 지정, return 값 : 파일명
            tRequest.setFilepath2(frontUploadPath + trequestFileService.dataFormUpload(file2));
        }
        TRequestFileVo file3 = requestDataFormVo.getFile3();
        if (file3 != null) {
            // 파일 다운로드 설정, 파일 경로도 지정, return 값 : 파일명
            tRequest.setFilepath3(frontUploadPath + trequestFileService.dataFormUpload(file3));
        }
        tRequest.setSite1(requestDataFormVo.getSite1());
        tRequest.setSite2(requestDataFormVo.getSite2());
        tRequest.setSite3(requestDataFormVo.getSite3());

        // log.info(file1.toString());
        return trequestService.insert(tRequest);
    }

}
