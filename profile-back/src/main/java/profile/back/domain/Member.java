package profile.back.domain;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import profile.back.domain.entity.Authority;

@NoArgsConstructor
@Entity
// mysql과 oracle에서는 table은 필요 없지만 mariadb에서는 대소문자 구별하므로 설정
@Table(name = "member")
@DynamicInsert
@DynamicUpdate
@Data
@JsonInclude(Include.NON_NULL)
public class Member implements Serializable {
        private static final long serialVersionUID = 1L;

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long mno;

        @Column(name = "id", /* length = 100 */ columnDefinition = "varchar(45)")
        String id;

        @Column(name = "password", /* length = 100 */ columnDefinition = "varchar(45)")
        String password;

        // @Column(name = "nick_name")
        // String nick_name;

        // @Column(name = "activated")
        // private boolean activated;

}
