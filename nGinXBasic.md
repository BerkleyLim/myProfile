# 참조 : https://prohannah.tistory.com/136


# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user nginx;         ## NGinx 프로세스가 실행되는 권한, root 권한은 보안상 위험
worker_processes  2;  ## default:1, cpu 코어 하나에 최소한 한개의 프로세스가 배정되도록 변경 권장 
worker_priority   0; ## 값이 작을 수록 높은 우선순위를 갖는다. 커널 프로세스의 기본 우선순위인 -5 이하로는 설정하지 않도록 한다.


# 로그레벨 [ debug | info | notice | warn | error | crit ]
error_log /var/log/nginx/error.log error; ## 로그레벨을 warn -> error로 변경함
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
     worker_connections 1024; ## Default: 1024, 현 서버는 RAM 8GB라 상향조정
     multi_accept         off; ## Default: off
}
 
http {

    include       /etc/nginx/mime.types;    
    default_type  application/octet-stream;
    
    
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request"     '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
 
    access_log  /var/log/nginx/access.log  main;
 
    sendfile            on;
    #tcp_nopush          on;
    #tcp_nodelay         on; 

    server_tokens     off; ## 헤더에 NGINX 버전을 숨김 (보안상 설정 권장)    
    keepalive_timeout  65; ## 접속 시 커넥션 유지 시간
    
    #types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    #default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80;
        listen       [::]:80;
        server_name  (도메인주소1) (도메인주소2);
        root         (웹 루트 경로);

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        error_page 404 /404.html;
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }

    server {
      listen                  443;
      server_name             {도메인 주소 1} {도메인 주소 2};
      ssl                     on;
      ssl_certificate         {공개키 경로};
      ssl_certificate_key     {개인키 경로};
      ssl_protocols           TLSv1 TLSv1.1 TLSv1.2;
      
      root {웹 루트 경로};
      
      index index.html index.htm index.nginx-debian.html;
      
      location / {
        try_files $uri $uri/ =404;
      }
    }
}                                          


Full Example Configuration

nginx.conf : 어플리케이션 기본 환경 설정
proxy.conf : 프록시 관련 환경 설정
fastcgi.conf : FastCGI 관련 환경 설정
mime.types : 파일 확장명과 MIME 타입 목록