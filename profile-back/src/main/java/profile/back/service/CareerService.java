package profile.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.Career;
import profile.back.exception.ResourceNotFoundException;
import profile.back.mapper.CareerMapper;
import profile.back.repository.CareerRepository;

@Service
public class CareerService {
    @Autowired
    CareerRepository careerRepository;

    @Autowired
    CareerMapper careerMapper;

    public List<Career> list() {
        // TODO Auto-generated method stub
        return careerRepository.findAll();
    }

    public ResponseEntity<Career> get(long cno) {
        // TODO Auto-generated method stub
        Career career = careerRepository.findById(cno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : [" + cno + "]"));

        return ResponseEntity.ok(career);
    }

    public ResponseEntity<Career> update(long cno, Career oldCareer) {
        // TODO Auto-generated method stub
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
        // TODO Auto-generated method stub
        // Career insertCareer = careerRepository.save(career);

        return careerRepository.save(career);
    }

    public ResponseEntity<Map<String, Boolean>> delete(long cno) {
        // TODO Auto-generated method stub
        Career career = careerRepository.findById(cno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : [" + cno + "]"));

        careerRepository.delete(career);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Career Data by id : [" + cno + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
