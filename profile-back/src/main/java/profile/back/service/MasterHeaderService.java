package profile.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import profile.back.domain.entity.master.header.MasterHeader;
import profile.back.repository.MasterHeaderRepository;

@Service
public class MasterHeaderService {
  @Autowired
  MasterHeaderRepository masterHeaderRepository;

  // 전체 조회
  public List<MasterHeader> selectListMasterHeader() {
    return masterHeaderRepository.findAllOrderBy();
  }

  // 삽입
  public MasterHeader insertMasterHeader(MasterHeader masterHeader) {
    return masterHeaderRepository.save(masterHeader);
  }
}
