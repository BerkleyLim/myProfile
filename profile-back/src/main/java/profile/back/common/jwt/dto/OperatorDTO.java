package profile.back.common.jwt.dto;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OperatorDTO {
  private String operId;
  private String loginId;
  private String operNm;
  private String operPswd;
  private String isUse;
  private Set<AuthDTO> authorities;
}