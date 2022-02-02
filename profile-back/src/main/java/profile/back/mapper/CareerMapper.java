package profile.back.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import profile.back.domain.Career;

@Mapper
@Repository
public interface CareerMapper {
    public Optional<Career> findById(long id);
}
