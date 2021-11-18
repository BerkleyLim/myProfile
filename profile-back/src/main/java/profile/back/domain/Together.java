package profile.back.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="together")
@DynamicUpdate
@DynamicInsert
public class Together {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int tno;
    
    @Column(name="title")
    String title;
    
    @Column(name="contents")
    String contents;
    
    @Column(name="view")
    int view;
}
