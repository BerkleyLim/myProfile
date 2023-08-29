package profile.back.domain.vo.request;

import java.io.File;

import lombok.Data;

@Data
public class RequestAdminVo {
  private Long rno;
  String company;
  String person;
  String phone;
  String email;
  String title;
  String object;
  String contents;
  String site1;
  String site2;
  String site3;
  String requestTime;
  File file1;
  File file2;
  File file3;
}
