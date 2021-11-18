package profile.back.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import profile.back.domain.Together;

@Mapper
@Repository
public interface TogetherMapper {
    public Optional<Together> findById(long id);
}
