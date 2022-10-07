package profile.back.domain;

import java.io.Serializable;

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
//mysql과 oracle에서는 table은 필요 없지만 mariadb에서는 대소문자 구별하므로 설정
@Table(name="member")
@DynamicInsert
@DynamicUpdate
public class Member implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mno;
    

    @Column(name = "id", /*length = 100*/  columnDefinition="varchar(45)")
    String id;
    
    @Column(name = "password", /*length = 100*/  columnDefinition="varchar(45)")
    String password;

    @Override
    public String toString() {
        return "Member [mno=" + mno + ", id=" + id + ", password=" + password + "]";
    }
    

//    @Override
//    public String toString() {
//        return "Introduction [ino=" + ino + ", title=" + title + ", contents=" + contents + ", viewNumber=" + viewNumber
//                + "]";
//    }

}
