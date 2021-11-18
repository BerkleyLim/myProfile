package profile.back.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.Together;
import profile.back.mapper.TogetherMapper;
import profile.back.repository.TogetherRepository;
import profile.back.service.TogetherService;

@Service
public class TogetherServiceImpl implements TogetherService {
    @Autowired
    TogetherRepository togetherRepository;
    
    @Autowired
    TogetherMapper togetherMapper;
    
    public List<Together> list() {
        // TODO Auto-generated method stub
        return togetherRepository.findAll();
    }
}
