package profile.back.domain.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
@Table(name = "bigskill")
@DynamicInsert
@DynamicUpdate
public class BigSkill implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long no;

    @Column(name = "skill", /* length = 100 */ columnDefinition = "varchar(100)")
    String skill;

    @Column(name = "detail", /* length = 100 */ columnDefinition = "text")
    String detail;

    @Column(name = "classNm", /* length = 100 */ columnDefinition = "text")
    String classNm;

    // @OneToMany(mappedBy = "MediumSkill")
    // @JoinColumn(name = "bigSkill_no", nullable = false)
    // private List<MediumSkill> mediumSkill;
}
