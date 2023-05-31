package profile.back.domain.dto.auth;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class LoginDTO {
  @NotNull
  @Size(min = 3, max = 50)
  private String username;

  @NotNull
  @Size(min = 3, max = 100)
  private String password;
}
