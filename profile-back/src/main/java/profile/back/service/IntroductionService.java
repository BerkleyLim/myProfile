package profile.back.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import profile.back.domain.Introduction;

public interface IntroductionService {
    public List<Introduction> list();
    public ResponseEntity<Introduction> get(long ino);
    public Introduction insert(Introduction introduction);
    public ResponseEntity<Introduction> update(long ino, Introduction introduction);
    public ResponseEntity<Map<String, Boolean>> delete(long ino);
    
}
