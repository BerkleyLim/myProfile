package profile.back.common.jwt.dto;

import java.util.Set;
import lombok.Data;

@Data
public class OperatorDTO {
  private String operId;
  private String loginId;
  private String operNm;
  private String operPswd;
  private String isUse;
  private Set<AuthDTO> authorities;
}