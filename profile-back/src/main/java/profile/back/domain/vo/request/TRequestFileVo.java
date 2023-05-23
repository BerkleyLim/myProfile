package profile.back.domain.vo.request;

import java.io.Serializable;
import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
// mysql과 oracle에서는 table은 필요 없지만 mariadb에서는 대소문자 구별하므로 설정
public class TRequestFileVo implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long rfno;

  @Column(columnDefinition = "integer")
  Long rno;
  @Column(columnDefinition = "integer")
  Long gupidx;
  @Column(columnDefinition = "blob")
  Blob file;

}
