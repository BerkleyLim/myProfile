package profile.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.entity.board.Together;
import profile.back.repository.TogetherRepository;

@Service
public class TogetherService {
    @Autowired
    TogetherRepository togetherRepository;

    public List<Together> list() {
        // TODO Auto-generated method stub
        return togetherRepository.findAll();
    }
}
