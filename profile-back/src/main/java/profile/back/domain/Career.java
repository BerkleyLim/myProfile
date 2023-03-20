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

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// @Getter
// @Setter
// @NoArgsConstructor
@Entity
// mysql과 oracle에서는 table은 필요 없지만 mariadb에서는 대소문자 구별하므로 설정
@Table(name = "career")
@DynamicInsert
@DynamicUpdate
@Data
public class Career implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cno;

    @Column(name = "startDate", /* length = 100 */ columnDefinition = "Date")
    String startDate;

    @Column(name = "endDate", /* length = 100 */ columnDefinition = "Date")
    String endDate;

    // 여기서 변수에 SQL 문에 예약어가 들어가면 에러남
    @Column(name = "detail", columnDefinition = "text")
    String detail;
}
