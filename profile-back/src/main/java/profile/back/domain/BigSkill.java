package profile.back.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
public class BigSkill implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bno;
    

    @Column(name = "skill", /*length = 100*/  columnDefinition="varchar(100)")
    String skill;
    
    @Column(name = "detail", /*length = 100*/  columnDefinition="text")
    String detail;
    
//    @OneToMany (mappedBy="BigSkill")
//    private List<MediumSkill> mediumSkill = new ArrayList<>();
}
