package profile.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.Together;
import profile.back.mapper.TogetherMapper;
import profile.back.repository.TogetherRepository;

@Service
public class TogetherService {
    @Autowired
    TogetherRepository togetherRepository;

    @Autowired
    TogetherMapper togetherMapper;

    public List<Together> list() {
        // TODO Auto-generated method stub
        return togetherRepository.findAll();
    }
}
