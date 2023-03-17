package profile.back.domain;

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
@Table(name = "member")
@DynamicInsert
@DynamicUpdate
public class Project implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pno;

    @Column(columnDefinition = "varchar(100)")
    String title;

    // @Column(columnDefinition = "blob")
    // String img;

    @Column(columnDefinition = "text")
    String img;

    @Column(columnDefinition = "date")
    String startDate;

    @Column(columnDefinition = "date")
    String endDate;

    @Column(columnDefinition = "varchar(100)")
    String link;

    @Column(columnDefinition = "date")
    String startRunning;

    @Column(columnDefinition = "text")
    String skills;

    @Column(columnDefinition = "Integer")
    String people;

    @Column(columnDefinition = "text")
    String detail;

    @Column(columnDefinition = "tynyint(1)")
    byte isOperation;

}
