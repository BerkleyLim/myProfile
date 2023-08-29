package profile.back.domain.vo.project;

import lombok.Data;

@Data
public class NotionAPIAuth {
  String authorization;
  String contentType;
  String notionVersion;
  String notionDBName;
}
