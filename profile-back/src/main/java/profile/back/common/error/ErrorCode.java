package profile.back.common.error;

import org.springframework.http.HttpStatus;

public interface ErrorCode {
  String name();

  HttpStatus getHttpStatus();

  String getMessage();
}
