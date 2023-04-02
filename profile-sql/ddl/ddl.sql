DROP TABLE IF EXISTS `bigskill`;
CREATE TABLE `bigskill` (
  `no` int NOT NULL AUTO_INCREMENT,
  `skill` varchar(45) DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `classNm` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'big-skill',
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `board`;
CREATE TABLE `board` (
  `bno` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `contents` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `user_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mainYn` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'N',
  `viewNumber` int DEFAULT '0',
  `crt_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  `udt_dt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bno`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `career`;
CREATE TABLE `career` (
  `cno` int NOT NULL AUTO_INCREMENT,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`cno`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `introduction`;
CREATE TABLE `introduction` (
  `ino` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `contents` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `viewNumber` int DEFAULT '0',
  PRIMARY KEY (`ino`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `mediumskill`;
CREATE TABLE `mediumskill` (
  `no` int NOT NULL AUTO_INCREMENT,
  `skill` varchar(45) DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `BigSkill_no` int NOT NULL,
  `classNm` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'medium-skill',
  PRIMARY KEY (`no`),
  KEY `fk_MediumSkill_BigSkill_idx` (`BigSkill_no`),
  CONSTRAINT `fk_MediumSkill_BigSkill` FOREIGN KEY (`BigSkill_no`) REFERENCES `bigskill` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `mno` int NOT NULL AUTO_INCREMENT,
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `role_user` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`mno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `pno` int NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `link` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `startRunning` date DEFAULT NULL,
  `skills` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `people` int DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `isOperation` tinyint(1) DEFAULT NULL,
  `img` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`pno`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `smallskill`;
CREATE TABLE `smallskill` (
  `no` int NOT NULL AUTO_INCREMENT,
  `skill` varchar(45) DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `MediumSkill_no` int NOT NULL,
  `classNm` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'small-skill',
  PRIMARY KEY (`no`),
  KEY `fk_SmailSkill_MediumSkill1_idx` (`MediumSkill_no`),
  CONSTRAINT `fk_SmailSkill_MediumSkill` FOREIGN KEY (`MediumSkill_no`) REFERENCES `mediumskill` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
