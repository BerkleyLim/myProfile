package profile.back.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import profile.back.common.SecurityUtil;
import profile.back.domain.dto.auth.TMemberDTO;
import profile.back.domain.entity.user.TMember;
import profile.back.repository.TMemberRepository;

@Service
public class TMemberService {
    @Autowired
    TMemberRepository memberRepository;

    // public List<TMember> selectList() {
    // // TODO Auto-generated method stub
    // return memberRepository.findAll();
    // }
    public List<TMember> selectList() {
        // TODO Auto-generated method stub
        return memberRepository.findAll();
    }

    @Transactional(readOnly = true)
    public TMemberDTO getMyUserWithAuthorities() {
        return TMemberDTO.from(
                SecurityUtil.getCurrentUsername()
                        .flatMap(memberRepository::findOneWithAuthoritiesByUsername)
                        .orElseThrow());
    }

    public Boolean searchRoot(@PathVariable TMember member) {
        // TODO Auto-generated method stub
        System.out.println(member.getMno());
        System.out.println(memberRepository.existsById(member.getMno()));
        return memberRepository.existsById(member.getMno());
    }

    // 회원 정보 검색
    public Boolean menberSearch(TMember member) throws NoSuchAlgorithmException {
        // System.out.println(member.getPassword());
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(member.getPassword().getBytes());

        // System.out.println("256 해쉬 내용 : " + md.toString());

        // System.out.println(bytesToHex(md.digest()));
        StringBuilder builder = new StringBuilder();
        for (byte b : md.digest()) {
            builder.append(String.format("%02x", b));
        }
        member.setPassword(builder.toString());
        // System.out.println(builder);

        TMember mem = memberRepository.findByIdAndPassword(member.getId(), member.getPassword());
        // System.out.println(mem);

        // 검색 일치시
        if (mem != null) {
            return true;
        } else {
            return false;
        }
    }
}
