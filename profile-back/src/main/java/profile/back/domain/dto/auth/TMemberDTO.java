package profile.back.domain.dto.auth;

import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import profile.back.domain.entity.user.TMember;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TMemberDTO {
  @NotNull
  @Size(min = 3, max = 50)
  private String username;

  @NotNull
  @Size(min = 3, max = 50)
  private String id;

  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  @NotNull
  @Size(min = 3, max = 100)
  private String password;

  @NotNull
  @Size(min = 3, max = 50)
  private String nickname;

  private Set<AuthDTO> authDtoSet;

  public static TMemberDTO from(TMember member) {
    if (member == null)
      return null;

    return TMemberDTO.builder()
        .id(member.getId())
        .username(member.getUsername())
        .nickname(member.getNickName())
        .authDtoSet(member.getAuthorities().stream()
            .map(authority -> AuthDTO.builder().authorityName(authority.getAuthorityName()).build())
            .collect(Collectors.toSet()))
        .build();
  }
}
