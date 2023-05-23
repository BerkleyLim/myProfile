package profile.back.domain.entity.user;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
// mysql과 oracle에서는 table은 필요 없지만 mariadb에서는 대소문자 구별하므로 설정
@Table(name = "tmember")
@Data
@NoArgsConstructor
// @DynamicInsert
// @DynamicUpdate
// @JsonInclude(Include.NON_NULL)
@JsonInclude(Include.NON_DEFAULT)
public class TMember {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long mno;

        @Column(name = "id", /* length = 100 */ columnDefinition = "varchar(45)")
        String id;

        @Column(name = "password", /* length = 100 */ columnDefinition = "varchar(45)")
        String password;

        @Column(name = "nickname")
        String nickName;

        @Column(name = "username")
        String username;

        @Column(name = "activated")
        private boolean activated;

        @ManyToMany
        @JoinTable(name = "userauthority", joinColumns = {
                        @JoinColumn(name = "mno", referencedColumnName = "mno") }, inverseJoinColumns = {
                                        @JoinColumn(name = "authorityName", referencedColumnName = "authorityName")
                        })
        private Set<Authority> authorities;

        // 참조 : https://jooky.tistory.com/5
        // @Override
        // public Collection<? extends GrantedAuthority> getAuthorities() {
        // // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method
        // 'getAuthorities'");
        // // return this.roles.stream()
        // // .map(SimpleGrantedAuthority::new)
        // // .collect(Collectors.toList());
        // }

        // @Override
        // public String getUsername() {
        // // TODO Auto-generated method stub
        // // throw new UnsupportedOperationException("Unimplemented method
        // // 'getUsername'");
        // return id;
        // }

        // @Override
        // public boolean isAccountNonExpired() {
        // // TODO Auto-generated method stub
        // // throw new UnsupportedOperationException("Unimplemented method
        // // 'isAccountNonExpired'");
        // return true;
        // }

        // @Override
        // public boolean isAccountNonLocked() {
        // // TODO Auto-generated method stub
        // // throw new UnsupportedOperationException("Unimplemented method
        // // 'isAccountNonLocked'");
        // return true;
        // }

        // @Override
        // public boolean isCredentialsNonExpired() {
        // // TODO Auto-generated method stub
        // // throw new UnsupportedOperationException("Unimplemented method
        // // 'isCredentialsNonExpired'");
        // return true;
        // }

        // @Override
        // public boolean isEnabled() {
        // // TODO Auto-generated method stub
        // // throw new UnsupportedOperationException("Unimplemented method
        // 'isEnabled'");
        // return true;
        // }

}
