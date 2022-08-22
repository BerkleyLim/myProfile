package profile.back.domain;

import java.io.Serializable;
import java.util.List;

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
public class MediumSkill implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mno;
    

    @Column(name = "skill", /*length = 100*/  columnDefinition="varchar(100)")
    String skill;
    
    @Column(name = "detail", /*length = 100*/  columnDefinition="text")
    String detail;
    

//    @ManyToOne(targetEntity=BigSkill.class, fetch=FetchType.LAZY)
//    @JoinColumn(name="BigSkill_bno")
//    BigSkill BigSkill_bno;
    
    @Column(name="BigSkill_bno")
    long BigSkill_bno;

}
