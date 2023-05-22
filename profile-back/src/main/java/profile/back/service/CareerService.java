package profile.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.entity.career.Career;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.CareerRepository;

@Service
public class CareerService {
    @Autowired
    CareerRepository careerRepository;

    public List<Career> list() {
        List<Career> careerList = careerRepository.findAll();
        // 날짜 포맷 지정
        for (int i = 0; i < careerList.size(); i++) {
            Career career = careerList.get(i);

            if (career.getStartDate() != null)
                career.setStartDate(career.getStartDate().substring(0, career.getStartDate().length() - 3));
            if (career.getEndDate() != null)
                career.setEndDate(career.getEndDate().substring(0, career.getEndDate().length() - 3));

            careerList.set(i, career);
        }
        return careerList;
    }

    public ResponseEntity<Career> get(long cno) {
        Career career = careerRepository.findById(cno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Career Data by no : [" + cno + "]"));

        return ResponseEntity.ok(career);
    }

    public ResponseEntity<Career> update(Career oldCareer) {
        Career career = careerRepository.findById(oldCareer.getCno())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Not exist Career Data by no : [" + oldCareer.getCno() + "]"));

        career.setCno(oldCareer.getCno());
        career.setStartDate(oldCareer.getStartDate() + "-01");
        career.setEndDate(oldCareer.getEndDate() + "-28");
        career.setDetail(oldCareer.getDetail());

        // System.out.println(career.toString());

        Career newCareer = careerRepository.save(career);
        return ResponseEntity.ok(newCareer);
    }

    public Career insert(Career career) {
        // 형식 지정 (db상에서 일까지만 저장하게)
        career.setStartDate(career.getStartDate() + "-01");
        career.setEndDate(career.getEndDate() + "-28");
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
