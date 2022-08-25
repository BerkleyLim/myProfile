package profile.back.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
public class SmallSkill implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long no;
    

    @Column(name = "skill", /*length = 100*/  columnDefinition="varchar(100)")
    String skill;
    
    @Column(name = "detail", /*length = 100*/  columnDefinition="text")
    String detail;
    
    // 여기서 변수에 SQL 문에 예약어가 들어가면 에러남
//    @ManyToOne(targetEntity=MediumSkill.class, fetch=FetchType.LAZY)
//    @JoinColumn(name="MediumSkill_mno")
//    long MediumSkill_mno;
    
    @Column(name="MediumSkill_no")
    long MediumSkill_no;
}
