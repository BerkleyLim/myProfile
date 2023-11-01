package profile.back.domain.entity.master.header;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name = "master_header")
@Entity
public class MasterHeader {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long mhno;

  @Column(name = "link", columnDefinition = "varchar(100)")
  String link;
  @Column(name = "gubun", columnDefinition = "varchar(100)")
  String gubun;
  @Column(name = "title", columnDefinition = "varchar(100)")
  String title;
  @Column(name = "class_name", columnDefinition = "text")
  String className;
  @Column(name = "order_by", columnDefinition = "integer")
  Long orderBy;
  @Column(name = "hide_yn", columnDefinition = "varchar(100)")
  String hideYn;
  @Column(name = "component", columnDefinition = "varchar(100)")
  String component;
}
