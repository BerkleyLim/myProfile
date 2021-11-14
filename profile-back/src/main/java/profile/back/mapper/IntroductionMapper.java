package profile.back.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Select;

import profile.back.domain.Together;

public interface IntroductionMapper {
    
    public Optional<Together> findById(long id);
    
    @Select("SELECT * FROM user where id = #{id}")
    public Optional<Together> findById2(long id);

}
