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
@Table(name = "trequest")
@DynamicInsert
@DynamicUpdate
public class TRequest implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rno;

    @Column(columnDefinition = "varchar(100)")
    String company;
    @Column(columnDefinition = "varchar(100)")
    String person;
    @Column(columnDefinition = "varchar(100)")
    String phone;
    @Column(columnDefinition = "varchar(100)")
    String email;
    @Column(columnDefinition = "varchar(100)")
    String title;
    @Column(columnDefinition = "varchar(100)")
    String object;
    @Column(columnDefinition = "text")
    String contents;
    @Column(columnDefinition = "text")
    String filepath1;
    @Column(columnDefinition = "text")
    String filepath2;
    @Column(columnDefinition = "text")
    String filepath3;
    @Column(columnDefinition = "text")
    String site1;
    @Column(columnDefinition = "text")
    String site2;
    @Column(columnDefinition = "text")
    String site3;
    @Column(columnDefinition = "datetime")
    String requestTime;

}
