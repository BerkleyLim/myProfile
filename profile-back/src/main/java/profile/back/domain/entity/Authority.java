package profile.back.domain.entity;

import javax.persistence.Table;

import lombok.Data;

@Table(name = "authority")
@Data
public class Authority {
  private String authorityName;
}
