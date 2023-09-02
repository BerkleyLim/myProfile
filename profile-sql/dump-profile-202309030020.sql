-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: profile
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority` (
  `authorityName` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES ('ROLE_ADMIN'),('ROLE_USER');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES (1,'﻿공지사항 용 게시글을 입력해 주세요. (외주 문의 샘플)','%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E1.+%EA%B0%9C%EB%B0%9C+%EB%B6%84%EC%95%BC%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EFront-End+%EA%B0%9C%EB%B0%9C%EC%9E%90%3C%2Fstrong%3E+%3A+React%2C+Next.js%2C+Vue.js%2C+Nust.js+Angular.js%2C+JQuery%2C+Javascript%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EBack-End+%EA%B0%9C%EB%B0%9C%EC%9E%90%3C%2Fstrong%3E+%3A+Java%2C+Spring%2C+Node.js%2C+.Net%2C+C%23%2C+Python%2C+FAST+API%2C+My-Batis%2C+JPA%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EDatabase%3C%2Fstrong%3E+%3A+My-SQL%2C+MariaDB%2C+Postgrep+DB%2C+Mongo+DB%2C+NoSQL%2C+Oracle%2C+MS-SQL%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EInfra+%3C%2Fstrong%3E%3A+Jenkins%2C+Docket+%26amp%3B+Kubernatis%2C+Git%2C+Linux%2C+Nginx%2C+Web+Logics%2C+%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3ETest%3C%2Fstrong%3E+%3A+JUnit%2C+Jest%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Aleft%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E2.+%EC%86%8C%EA%B0%9C%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+K%EC%82%AC+%EC%97%85%EC%B2%B4+%EC%86%8C%EC%86%8D+%EC%9B%B9+%26amp%3B+%EC%95%B1+%EA%B0%9C%EB%B0%9C%EC%9E%90+7%EB%85%84+%EA%B7%BC%EB%AC%B4%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+%ED%98%84%EC%9E%AC%2C+%ED%94%84%EB%A6%AC%EB%9E%9C%EC%84%9C%EB%A1%9C+%ED%99%9C%EB%8F%99%ED%95%98%EC%97%AC+%EA%B3%A0%EA%B0%9D%EC%9D%B4+%EC%9B%90%ED%95%98%EB%8A%94+%EB%8B%A4%EC%96%91%ED%95%9C+%EC%8A%A4%ED%83%9D%EC%9C%BC%EB%A1%9C+%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC+%EA%B0%9C%EB%B0%9C+%EA%B0%80%EB%8A%A5%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+%EA%B3%A0%EA%B0%9D%EC%9D%B4+%EC%9B%90%ED%95%98%EB%8A%94+%ED%86%B5%EC%8B%A0+%EC%86%94%EB%A3%A8%EC%85%98+%EA%B0%9C%EB%B0%9C+%ED%9B%84+%EA%B3%A0%EA%B0%9D%EC%82%AC%EC%97%90+%EB%82%A9%ED%92%88+%ED%99%9C%EB%8F%99+3%EB%85%84%EC%B0%A8%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+Java%2C+Spring+%EA%B8%B0%EB%B0%98+%EB%B0%B1%EC%97%94%EB%93%9C+%EA%B0%9C%EB%B0%9C%2C+Linux+%EA%B8%B0%EB%B0%98%EC%9C%BC%EB%A1%9C+Infra+%EA%B5%AC%EC%B6%95+4%EB%85%84%EC%B0%A8%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+JQuery+%EB%B0%8F+%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C+%EA%B0%9C%EB%B0%9C+%EA%B2%BD%EB%A0%A5+2%EB%85%84%EC%B0%A8%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+%ED%98%84%EC%9E%AC+React.js%EC%99%80+Nest.js+%2F%2F+Vue.js%EC%99%80+Nust.js+%EB%A5%BC+%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC+%EC%99%B8%EC%A3%BC+%EC%9D%B4%EB%A0%A5+%EC%9E%88%EC%9D%8C%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+%EC%99%B8%EA%B5%AD%EA%B3%84+%EC%97%85%EC%B2%B4%EC%97%90%EC%84%9C+%EC%99%B8%EC%A3%BC%EB%A5%BC+%EB%B0%9B%EC%95%84+.Net%2C+C%23+%EB%B0%8F+Java%EC%99%80+JPA%2C+H2%EB%A5%BC+%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC+%ED%95%B4%EB%8B%B9+%EC%97%85%EC%B2%B4%EC%97%90%EA%B2%8C+%EB%82%A9%ED%92%88%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E3.+%EA%B3%A0%EA%B0%9D+%EC%9A%94%EA%B5%AC+%EC%82%AC%ED%95%AD%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E1%29+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EC%A0%95%EC%9D%98%EC%84%9C%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E2%29+%ED%99%94%EB%A9%B4+%EC%84%A4%EA%B3%84%EC%84%9C%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E3%29+%ED%9A%8C%EC%82%AC%EB%AA%85%2C+%EB%8B%B4%EB%8B%B9%EC%9E%90%EB%AA%85%2C+%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8%2C+%EC%9D%B4%EB%A9%94%EC%9D%BC+%EC%A3%BC%EC%86%8C%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E4%29+%EC%82%AC%EC%97%85%EC%9E%90+%EB%93%B1%EB%A1%9D+%EC%A0%95%EB%B3%B4%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E5%29+%EC%8B%A0%EC%9A%A9+%ED%8F%89%EA%B0%80+%EB%93%B1%EA%B8%89%EC%84%9C%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E4.+%EA%B2%AC%EC%A0%81+%EA%B0%80%EA%B2%A9+%3A+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98+%EB%94%B0%EB%9D%BC+%EA%B0%80%EA%B2%A9+%EB%8B%A4%EB%A6%84+%28Default+%EA%B0%80%EA%B2%A9+%3A+700%EB%A7%8C%EC%9B%90%29%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22font-size%3A+16px%3B%22%3E-+%EC%83%81%EC%A3%BC+Default+%EA%B0%80+%3A+%EC%9B%94+700+%EB%A7%8C%EC%9B%90+%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22font-size%3A+16px%3B%22%3E-+%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8+%EB%82%9C%EC%9D%B4%EB%8F%84%EC%99%80+%EB%86%92%EC%9D%80+%EA%B8%B0%EC%88%A0+%EC%88%98%EC%A4%80%EC%9D%98+%EB%94%B0%EB%9D%BC+%EA%B0%80%EA%B2%A9%EC%9D%B4+%EB%8B%A4%EB%A6%84%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-+%EC%99%B8%EC%A3%BC%EB%A5%BC+%EB%A7%A1%EA%B8%B0+%EC%8B%9C%EC%97%90+%EB%94%B0%EB%9D%BC+%EA%B0%84%EB%8B%A8%ED%95%9C+%ED%99%94%EB%A9%B4+%EA%B5%AC%EC%84%B1+%EB%B0%8F+%EB%8B%A8%EC%88%9C+%EC%86%8C%EA%B0%9C+%EA%B2%8C%EC%8B%9C%EA%B8%80+%EA%B0%99%EC%9D%80+%EA%B2%BD%EC%9A%B0+%EA%B0%80%EA%B2%A9%EC%9D%B4+%EB%82%AE%EC%95%84%EC%A7%88+%EC%88%98+%EC%9E%88%EC%9D%8C%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E%3Cbr%3E%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E5.+%EB%AC%B8%EC%9D%98+%EC%82%AC%ED%95%AD%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%9E%90%EC%84%B8%ED%95%9C+%EC%82%AC%ED%95%AD%EC%9D%80+glidong.hong%40gmail.com+%EC%9C%BC%EB%A1%9C+%EC%9D%B4%EB%A9%94%EC%9D%BC+%EC%9E%90%EB%A3%8C+%EC%B2%A8%EB%B6%80%ED%95%B4%EC%84%9C+%EB%B3%B4%EB%82%B4%EC%A3%BC%EC%8B%9C%EA%B8%B0+%EB%B0%94%EB%9E%8D%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%26nbsp%3B%3Cbr%3E%26nbsp%3B%3C%2Fp%3E%0A','admin','Y',5,'2023-03-23 23:32:43','2023-08-27 07:27:54'),(4,'sdf','<p>sdf</p>\n','admin','N',0,'2023-04-12 22:45:35','2023-04-12 22:45:35'),(5,'sdf','<p>sdf</p>\n','admin','N',0,'2023-04-12 22:45:40','2023-04-12 22:45:40'),(6,'adsf','<p>adsf</p>\n','admin','N',0,'2023-04-12 22:45:45','2023-04-12 22:45:45'),(7,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:48','2023-04-12 22:45:48'),(8,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:50','2023-04-12 22:45:50'),(9,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:51','2023-04-12 22:45:51'),(10,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:52','2023-04-12 22:45:52'),(11,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:54','2023-04-12 22:45:54'),(12,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:56','2023-04-12 22:45:56'),(13,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:57','2023-04-12 22:45:57'),(14,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:37','2023-04-12 22:52:37'),(15,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:38','2023-04-12 22:52:38'),(16,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:39','2023-04-12 22:52:39'),(17,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:41','2023-04-12 22:52:41'),(18,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:42','2023-04-12 22:52:42'),(19,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:43','2023-04-12 22:52:43'),(20,'asd','<p>aasd</p>\n','admin','N',2,'2023-04-12 22:52:45','2023-04-12 22:52:45'),(21,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:46','2023-04-12 22:52:46'),(22,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:47','2023-04-12 22:52:47'),(23,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:49','2023-04-12 22:52:49'),(24,'asd','%3Cp%3Eaasd%E3%85%87%E3%84%B4%E3%85%87%E3%84%B4%3C%2Fp%3E%0A%3Cp%3E%E3%85%87%E3%84%B4%E3%85%87%E3%84%B4%3C%2Fp%3E%0A%3Cp%3E%E3%85%87%E3%84%B4%E3%84%B9%3C%2Fp%3E%0A%3Cp%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%E3%85%87%E3%84%B9%E3%85%87%E3%84%B4%E3%84%B9%E3%84%B4%E3%85%87%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%E3%84%B4%E3%85%87%E3%84%B9%E3%85%87%E3%84%B4%E3%84%B9%E3%85%87%E3%84%B4%E3%85%81%E3%84%B4%E3%85%87+%E3%84%B9%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%E3%84%B4%E3%85%87%E3%84%B9%E3%84%B4%E3%85%87%E3%84%B9%E3%84%B4%E3%85%81%E3%85%87%E3%84%B9%E3%85%87%E3%84%B4%26nbsp%3B%3C%2Fp%3E%0A','admin','N',0,'2023-04-12 22:52:50','2023-05-20 15:57:05');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `introduction`
--

DROP TABLE IF EXISTS `introduction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `introduction` (
  `ino` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `contents` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `viewNumber` int DEFAULT '0',
  PRIMARY KEY (`ino`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `introduction`
--

LOCK TABLES `introduction` WRITE;
/*!40000 ALTER TABLE `introduction` DISABLE KEYS */;
INSERT INTO `introduction` VALUES (1,'웹 개발자로 살아가는 이유 (샘플)','처음에 가벼운 마음으로 웹 개발을 시작하였으나, 신입시절 아무것도 모르고 비전공자 출신에 부트캠프 6개월로 근무한게 전부였습니다.\n들어가고나니 매일 아침 9시에 출근하여 밤 11시에 퇴근이 반복적으로 했던 하루, 웹개발이 결코 쉬운일이 아니라는 것을 인지하고 있었습니다.\n돌이켜보면 정시 퇴근을 할 수 있는 여건이 주어졌음에도 불구하고, 그동안의 실력 부족과 접해보지 않았던 웹개발의 대해 이리저리 차이고 반복되는 시련으로 웹개발을 포기하고 싶어하는 마음이 가득하였으나, 빠른 퇴근을 하고 업무적인 성과로 웹개발자로 살아가기 위해 자투리 시간을 활용하여 개발 연습을 반복적으로 하였습니다.\n현재, 이렇게 2년의 시간을 보내오면서 여유를 찾을 수 있었고, 그동안의 고생의 대한 댓가로 보람이 넘쳐있으면서 어려운 시간을 견뎌내고 웹개발자로 평생 살기 위해 달려왔습니다.\n그렇게 한 회사에서 7년동안 살아오면서 현재 프리랜서로 살아가고 있고, 고객이 원하는 프로젝트를 원활히 진행이 되면서 고객사들에게 인정받는 웹 개발자로 이끌게 되어 매일 꾸준히 개발자로써의 최선을 다해 임할 것으로 약속 드립니다.',0);
/*!40000 ALTER TABLE `introduction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `masterfooterlink`
--

DROP TABLE IF EXISTS `masterfooterlink`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `masterfooterlink` (
  `mfno` int NOT NULL AUTO_INCREMENT COMMENT '인덱스번호',
  `orderby` int DEFAULT NULL COMMENT '인덱스 순서',
  `linkname` varchar(100) DEFAULT NULL COMMENT '필요 링크 네임',
  PRIMARY KEY (`mfno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `masterfooterlink`
--

LOCK TABLES `masterfooterlink` WRITE;
/*!40000 ALTER TABLE `masterfooterlink` DISABLE KEYS */;
/*!40000 ALTER TABLE `masterfooterlink` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tmember`
--

DROP TABLE IF EXISTS `tmember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmember` (
  `mno` int NOT NULL AUTO_INCREMENT,
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `activated` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`mno`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tmember`
--

LOCK TABLES `tmember` WRITE;
/*!40000 ALTER TABLE `tmember` DISABLE KEYS */;
INSERT INTO `tmember` VALUES (1,'admin','AC9689E2272427085E35B9D3E3E8BED88CB3434828B43B86FC0596CAD4C6E270','admin','admin',0),(2,'test','5BE1EFF809E948140D7076F5F7110FA7E2E8ED2277FF8448DB0583B883D99E68','test','test',0);
/*!40000 ALTER TABLE `tmember` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trequest`
--

DROP TABLE IF EXISTS `trequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trequest` (
  `rno` int NOT NULL AUTO_INCREMENT,
  `company` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '회사명',
  `person` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '의뢰인',
  `phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '폰번호',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '이메일',
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '제목',
  `object` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '의뢰목적',
  `contents` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '의뢰내용',
  `requestTime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '요청시간',
  `site1` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '사이트1',
  `site2` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '사이트2',
  `site3` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '사이트3',
  `filepath1` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT 'file1 경로',
  `filepath2` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT 'file2 경로',
  `filepath3` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT 'file3 경로',
  `filename1` text COMMENT 'file1 이름',
  `filename2` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT 'file2 이름',
  `filename3` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT 'file3 이름',
  PRIMARY KEY (`rno`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trequest`
--

LOCK TABLES `trequest` WRITE;
/*!40000 ALTER TABLE `trequest` DISABLE KEYS */;
INSERT INTO `trequest` VALUES (1,'My.Dev','임현식','010-6264-7643','berkleylim16@gmail.com','프로젝트 파트너 함께 해요','프로젝트 파트너 구인','현재 React와 Spring boot 주력으로 하시는 것으로 보아 같이 함께 하고자 합니다.','2023-05-20 22:00:27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'my1','임현식','010-6264-7643','berkleylim16@gmail.com','퍄일 첨부 테스트','업체 구인','123','2023-05-22 20:22:05',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'dsffsdfdsf','dsfdsf','sdfdsfs','sdfdsf','dfdsfds','프로젝트 의뢰','dsfsdfdsdfs','2023-07-07 22:33:31','dsfds','fdsfdsf','dsfdfs',NULL,NULL,NULL,NULL,NULL,NULL),(4,'My.Dev','홍길동','010111111111','hong@gmail.com','의뢰테스트','업체 구인','구인합니다.','2023-08-18 00:16:49','http://domain.net',NULL,NULL,'/file/1685101166249.jpg',NULL,NULL,'1685101166249.jpg',NULL,NULL);
/*!40000 ALTER TABLE `trequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userauthority`
--

DROP TABLE IF EXISTS `userauthority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userauthority` (
  `authorityName` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `mno` int DEFAULT NULL,
  KEY `userauthority_FK` (`mno`),
  CONSTRAINT `userauthority_FK` FOREIGN KEY (`mno`) REFERENCES `tmember` (`mno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userauthority`
--

LOCK TABLES `userauthority` WRITE;
/*!40000 ALTER TABLE `userauthority` DISABLE KEYS */;
INSERT INTO `userauthority` VALUES ('ROLE_USER',1),('ROLE_ADMIN',1);
/*!40000 ALTER TABLE `userauthority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userfooterinfo`
--

DROP TABLE IF EXISTS `userfooterinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userfooterinfo` (
  `mfno` int NOT NULL AUTO_INCREMENT COMMENT '인덱스 번호',
  `orderby` int DEFAULT NULL COMMENT '출력 순서',
  `linkname` varchar(100) DEFAULT NULL COMMENT '홈페이지 명',
  `linkpath` text COMMENT '링크 경로',
  `username` varchar(100) DEFAULT NULL COMMENT '유저명',
  PRIMARY KEY (`mfno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userfooterinfo`
--

LOCK TABLES `userfooterinfo` WRITE;
/*!40000 ALTER TABLE `userfooterinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `userfooterinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'profile'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-03  0:20:38
