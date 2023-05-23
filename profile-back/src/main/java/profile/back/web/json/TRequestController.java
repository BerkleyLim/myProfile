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

import profile.back.domain.entity.request.TRequest;
import profile.back.domain.entity.request.TRequestFile;
import profile.back.domain.vo.request.TRequestFileVo;
import profile.back.service.TRequestFileService;
import profile.back.service.TRequestService;

@RestController
@RequestMapping("/api/request")
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
    public ResponseEntity<TRequest> updateProject(
            // @PathVariable long pno,
            @RequestBody TRequest trequest) {
        // return trequestService.update(pno, project);
        return trequestService.update(trequest);
    }

    @DeleteMapping("/{pno}")
    public ResponseEntity<Map<String, Boolean>> deleteProject(
            @PathVariable long rno) {
        return trequestService.delete(rno);
    }

    // 파일 업로드 테스트
    @PostMapping("/fileupload")
    public void convertTest(
            @RequestBody TRequestFileVo trequestFile) {
        trequestFileService.convertTest(trequestFile);
    }

}
