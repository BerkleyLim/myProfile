INSERT INTO USER (mno, id, password, nick_name, activated) VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 1);
INSERT INTO USER (mno, id, password, nick_name, activated) VALUES (2, 'user', '$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC', 'user', 1);

INSERT INTO AUTHORITY (authority_name) values ('ROLE_USER');
INSERT INTO AUTHORITY (authority_name) values ('ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (mno, authority_name) values (1, 'ROLE_USER');
INSERT INTO USER_AUTHORITY (mno, authority_name) values (1, 'ROLE_ADMIN');
INSERT INTO USER_AUTHORITY (mno, authority_name) values (2, 'ROLE_USER');