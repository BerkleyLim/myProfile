package profile.back.domain;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

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

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;

@Data
@NoArgsConstructor
@Entity
@Table(name = "board")
@DynamicInsert
@DynamicUpdate
@JsonInclude(Include.NON_NULL)
public class Board {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long bno;

  @Column(/* name = "title", */ /* length = 100 */ columnDefinition = "varchar(100)")
  private String title;

  @Column(columnDefinition = "text")
  private String contents;

  @Column(/* name = "title", */ /* length = 100 */ columnDefinition = "varchar(100)")
  private String user_name;
  private String mainYn;
  private long viewNumber;

  @Column(name = "crt_dt", /* length = 100 */ columnDefinition = "timestamp")
  private Timestamp createDate;
}
