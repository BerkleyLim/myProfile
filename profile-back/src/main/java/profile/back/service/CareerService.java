package profile.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.Career;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.CareerRepository;

@Service
public class CareerService {
    @Autowired
    CareerRepository careerRepository;

    public List<Career> list() {
        return careerRepository.findAll();
    }

    public ResponseEntity<Career> get(long cno) {
        Career career = careerRepository.findById(cno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : [" + cno + "]"));

        return ResponseEntity.ok(career);
    }

    public ResponseEntity<Career> update(long cno, Career oldCareer) {
        Career career = careerRepository.findById(cno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : [" + cno + "]"));

        career.setCno(oldCareer.getCno());
        career.setStartDate(oldCareer.getStartDate());
        career.setEndDate(oldCareer.getEndDate());
        career.setDetail(oldCareer.getDetail());

        Career newCareer = careerRepository.save(career);
        return ResponseEntity.ok(newCareer);
    }

    public Career insert(Career career) {
        return careerRepository.save(career);
    }

    public ResponseEntity<Map<String, Boolean>> delete(long cno) {
        Career career = careerRepository.findById(cno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : [" + cno + "]"));

        careerRepository.delete(career);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Career Data by id : [" + cno + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
