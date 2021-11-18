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
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
//@NoArgsConstructor
@Entity
@Table(name="INTRODUCTION")
@DynamicInsert
@DynamicUpdate
@ToString
public class Introduction implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ino;
    
    @Column(name = "title")
    String title;
    
    @Column(name = "contents")
    String contents;
    
    @Column(name = "view")
    int view;

//    @Builder
//    public Introduction(int ino, String title, String contents, int view) {
//        super();
//        this.ino = ino;
//        this.title = title;
//        this.contents = contents;
//        this.view = view;
//    }
    
    

}
