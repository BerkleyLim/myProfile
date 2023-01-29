package profile.back.domain;

import lombok.Data;

@Data
public class UserContext {
  Long mno;
  String role_user;
  String name;

  public UserContext(Long mno, String role_user, String name) {
    this.mno = mno;
    this.role_user = role_user;
    this.name = name;
  }
}
