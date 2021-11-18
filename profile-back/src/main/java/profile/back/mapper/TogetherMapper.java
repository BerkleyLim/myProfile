package profile.back.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Select;

import profile.back.domain.Together;

public interface TogetherMapper {
    public Optional<Together> findById(long id);
}
