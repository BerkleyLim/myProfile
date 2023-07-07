package profile.back.domain.vo.request;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class TRequestFileVo {
  String name;
  Integer size;
  Long lastModified;
  String type;
  @JsonIgnore
  String webkitRelativePath;
  String fileReader;
}
