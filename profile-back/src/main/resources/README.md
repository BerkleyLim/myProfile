#목록
- 여기는 Database 관련 된 것을 넣는 용도

# application.properties
- 웹 어플리케이션을 실행하면서 자동으로 로딩되는 파일
- Tomcat 및 WAS(포트번호, 콘텍스트 패스 등)의 설정, 데이터베이스 관련 정보 등 각각 분리되어 있는 XML or 자바 기반 설정을 해당 파일에 Key-Value 형식으로 지정해서 처리 가능

# DB\uC811\uC18D\uC744 \uC704\uD55C \uC124\uC815\uAC12
spring.datasource.url=jdbc:mysql://localhost:3306/board_back?useSSL=false&serverTimezone=UTC&zeroDateTimeBehavior=convertToNull
spring.datasource.username=root
spring.datasource.password=1111
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQLInnoDBDialect

# spring.jpa.hibernate.ddl-auto= update

# jpa에서 실행되는 쿼리문을 볼 수 있게하는 설정값
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
logging.level.org.hibernate.type.descriptor.sql=trace