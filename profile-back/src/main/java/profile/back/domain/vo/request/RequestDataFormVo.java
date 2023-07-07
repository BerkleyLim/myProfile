package profile.back.domain.vo.request;

import lombok.Data;

@Data
public class RequestDataFormVo {
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
  TRequestFileVo file1;
  TRequestFileVo file2;
  TRequestFileVo file3;
}
