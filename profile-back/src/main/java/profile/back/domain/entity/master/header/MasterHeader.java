package profile.back.domain.entity.master.header;

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
  String link;
  String gubun;
  String title;
  String className;
  Long orderBy;
  String hideYn;
}
