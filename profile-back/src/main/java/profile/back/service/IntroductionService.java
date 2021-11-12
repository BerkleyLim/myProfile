package profile.back.service;

import org.springframework.beans.factory.annotation.Autowired;

import profile.back.repository.IntroductionRepository;

public class IntroductionService {
    @Autowired
    IntroductionRepository introductionRepository;
}
