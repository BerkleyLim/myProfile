package profile.back.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@DynamicInsert
@DynamicUpdate
public class Skill implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sno;
    

    @Column(name = "start_date", /*length = 100*/  columnDefinition="varchar(100)")
    String skill;
    
    @Column(name = "end_date", /*length = 100*/  columnDefinition="varchar(100)")
    String skillDetail;
    
    // 여기서 변수에 SQL 문에 예약어가 들어가면 에러남
    @Column(nullable = false, columnDefinition="varchar(255)")
    String detail;


}
