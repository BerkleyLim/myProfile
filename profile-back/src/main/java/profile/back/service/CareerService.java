package profile.back.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;

import profile.back.domain.Career;

public interface CareerService {
    public List<Career> list();
    public ResponseEntity<Career> get(long cno);
    public ResponseEntity<Career> update(long cno, Career oldCareer);
    public Career insert(Career career);
    public ResponseEntity<Map<String,Boolean>> delete(long cno);
    
}
