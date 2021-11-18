package profile.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.Introduction;
import profile.back.mapper.IntroductionMapper;
import profile.back.repository.IntroductionRepository;

public interface IntroductionService {
    public List<Introduction> list();
}
