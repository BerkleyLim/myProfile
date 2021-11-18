package profile.back.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import profile.back.domain.Introduction;

@Mapper
@Repository
public interface IntroductionMapper {
    public Optional<Introduction> findById(long id);

}
