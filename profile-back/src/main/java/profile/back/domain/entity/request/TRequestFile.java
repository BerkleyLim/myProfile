package profile.back.domain.entity.request;

import java.io.Serializable;
// import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
// mysql과 oracle에서는 table은 필요 없지만 mariadb에서는 대소문자 구별하므로 설정
@Table(name = "trequestfile")
@DynamicInsert
@DynamicUpdate
public class TRequestFile implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long rfno;

  @Column(columnDefinition = "integer")
  String rno;
  @Column(columnDefinition = "integer")
  String gupidx;
  @Column(columnDefinition = "blob")
  String file;

}
