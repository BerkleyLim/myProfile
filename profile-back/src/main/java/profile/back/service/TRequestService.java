package profile.back.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import profile.back.domain.entity.TRequest;
import profile.back.exception.ResourceNotFoundException;
import profile.back.repository.TRequestRepository;

@Service
public class TRequestService {
    @Autowired
    TRequestRepository trequestRepository;

    public List<TRequest> list() {
        List<TRequest> trequestList = trequestRepository.findAll();
        return trequestList;
    }

    public ResponseEntity<TRequest> get(long rno) {
        // TODO Auto-generated method stub
        TRequest trequest = trequestRepository.findById(rno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist TRequest Data by no : [" + rno + "]"));
        return ResponseEntity.ok(trequest);
    }

    public TRequest insert(TRequest trequest) {
        // TODO Auto-generated method stub
        // 날짜 형식 지정
        return trequestRepository.save(trequest);
    }

    // public ResponseEntity<TRequest> update(long pno, TRequest oldTRequest) {
    public ResponseEntity<TRequest> update(TRequest oldTRequest) {
        // TODO Auto-generated method stub
        TRequest trequest = trequestRepository.findById(oldTRequest.getRno())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Not exist TRequest Data by no : [" + oldTRequest.getRno() + "]"));

        trequest.setRno(oldTRequest.getRno());
        trequest.setCompany(oldTRequest.getCompany());
        trequest.setPerson(oldTRequest.getPerson());
        trequest.setPhone(oldTRequest.getPhone());
        trequest.setEmail(oldTRequest.getEmail());
        trequest.setTitle(oldTRequest.getTitle());
        trequest.setObject(oldTRequest.getObject());
        trequest.setSite1(oldTRequest.getSite1());
        trequest.setSite2(oldTRequest.getSite2());
        trequest.setSite3(oldTRequest.getSite3());
        trequest.setRequestTime(oldTRequest.getRequestTime());

        TRequest newTRequest = trequestRepository.save(trequest);
        return ResponseEntity.ok(newTRequest);
    }

    public ResponseEntity<Map<String, Boolean>> delete(long rno) {
        // TODO Auto-generated method stub
        TRequest trequest = trequestRepository.findById(rno)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist TRequest Data by no : [" + rno + "]"));

        trequestRepository.delete(trequest);
        Map<String, Boolean> response = new HashMap<>();

        response.put("Deleted TRequest Data by id : [" + rno + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
