package profile.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.Introduction;
import profile.back.repository.IntroductionRepository;

@Service
public class IntroductionService {
    @Autowired
    IntroductionRepository introductionRepository;

    public List<Introduction> list() {
        // TODO Auto-generated method stub
        return introductionRepository.findAll();
    }
}
