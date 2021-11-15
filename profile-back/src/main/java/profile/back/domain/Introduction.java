package profile.back.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@Table(name="introduction")
@DynamicInsert
@DynamicUpdate
public class Introduction {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;
    
    @Column(name = "title")
    String title;
    
    @Column(name = "contents")
    String contents;
    
    @Column(name = "view")
    int view;

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((contents == null) ? 0 : contents.hashCode());
        result = prime * result + no;
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + view;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Introduction other = (Introduction) obj;
        if (contents == null) {
            if (other.contents != null)
                return false;
        } else if (!contents.equals(other.contents))
            return false;
        if (no != other.no)
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (view != other.view)
            return false;
        return true;
    }

}
