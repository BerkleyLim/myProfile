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
public class Project implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pno;

    @Column(columnDefinition="varchar(100)")
    String title;
    
    @Column(columnDefinition="blob")
    String img;

    @Column(columnDefinition="date")
    Date startDate;

    @Column(columnDefinition="date")
    Date endDate;
    
    @Column(columnDefinition="varchar(100)")
    String link;
    
    @Column(columnDefinition="date")
    Date startRunning;
    
    @Column(columnDefinition="text")
    String skills;
    
    @Column(columnDefinition="Integer")
    String people;

    @Column(columnDefinition="text")
    String detail;
    
    @Column(columnDefinition="tynyint(1)")
    byte isOperation;    

}
