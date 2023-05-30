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
-- Table structure for table `bigskill`
--

DROP TABLE IF EXISTS `bigskill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bigskill` (
  `no` int NOT NULL AUTO_INCREMENT,
  `skill` varchar(45) DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `classNm` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'big-skill',
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bigskill`
--

LOCK TABLES `bigskill` WRITE;
/*!40000 ALTER TABLE `bigskill` DISABLE KEYS */;
INSERT INTO `bigskill` VALUES (1,'Programming Language','Java, C, C++, Python 등 다양한 언어를 다룰 수 있습니다.','big-skill'),(2,'Database','DDL DCL DML 등과 같은 SQL 문을 활용할 수 있고, Transaction 까지 활용 가능합니다.','big-skill'),(5,'OS','Windows, Linux, AWS를 이용하여 서버용으로 사용할 수 있습니다.\n','big-skill'),(6,'Mark-Up Language','태그나 문서를 활용을 기본 수준으로 작성 가능합니다. 대표적으로 HTML을 이용한 문서 작업, XML을 통해 데이터까지 전달하는 방식으로 수행 가능하며, \n반대로 Mark-down 언어로 Github에 기본적으로 제공하는 README.md 파일에서 시작하여 태그로 이용하여 문서를 수행 가능합니다.','big-skill'),(7,'Other skill','','big-skill');
/*!40000 ALTER TABLE `bigskill` ENABLE KEYS */;
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
INSERT INTO `board` VALUES (1,'﻿주니어 웹 프로그래머(중고신입) 및 전산 개발 및 유지보수 업체와 함께 하고 싶습니다.','%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E1.+%ED%98%84%EC%9E%AC+%EA%B0%95%EC%A0%90%3C%2Fspan%3E%26nbsp%3B%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%26nbsp%3B%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E-+JQuery%3C%2Fstrong%3E%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+%EC%88%99%EB%A0%A8%EB%8F%84+%EB%86%92%EC%9D%8C%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3ESpring+boot%3C%2Fstrong%3E%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+%3C%2Fspan%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%88%99%EB%A0%A8%EB%8F%84+%EB%86%92%EC%9D%8C%3C%2Fspan%3E%26nbsp%3B%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EMy-SQL%3C%2Fstrong%3E%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+%3C%2Fspan%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%88%99%EB%A0%A8%EB%8F%84+%EB%86%92%EC%9D%8C%3C%2Fspan%3E%26nbsp%3B%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EGit%2FSUN%3C%2Fstrong%3E%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+%3C%2Fspan%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%88%99%EB%A0%A8%EB%8F%84+%EB%86%92%EC%9D%8C%3C%2Fspan%3E%26nbsp%3B%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cstrong%3EJPA%3C%2Fstrong%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+%EC%88%99%EB%A0%A8%EB%8F%84+%EB%86%92%EC%9D%8C%3C%2Fspan%3E%26nbsp%3B%26nbsp%3B%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E2.+%EC%97%B0%EA%B5%AC+%EC%A4%91%EC%9D%B8+%EA%B8%B0%EC%88%A0+%EB%B0%8F+%EC%B0%A8%ED%9B%84+%EC%8A%B5%EB%93%9D%ED%95%98%EA%B3%A0+%EC%8B%B6%EC%9D%80+%EA%B8%B0%EC%88%A0%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EJWT%3C%2Fstrong%3E%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+JWT+Token%EC%9D%84+%EC%9D%B4%EC%9A%A9%ED%95%B4+%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%9D%B8%EC%A6%9D+%EA%B8%B0%EC%88%A0%EC%9D%84+%ED%99%9C%EC%9A%A9%ED%95%98%EB%8A%94+%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C%2C+Token+%EA%B0%92%EC%9D%84+%EB%B0%9B%EC%95%84+%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EA%B8%B0%EB%8A%A5%EC%9D%84+%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC+%EA%B0%80%EB%8A%A5%ED%95%A9%EB%8B%88%EB%8B%A4.+%EC%A7%80%EA%B8%88%EC%9D%80+JWT%EC%9D%98+%EB%8C%80%ED%95%9C+%EC%9E%90%EC%84%B8%ED%95%9C+API%EB%A5%BC+%ED%99%95%EC%9D%B8%EC%9D%84+%ED%95%A0+%EC%88%98+%EC%97%86%EA%B3%A0%2C+%EC%98%88%EC%A0%9C%EB%A5%BC+%ED%86%B5%ED%95%9C+%EA%B5%AC%ED%98%84%EB%90%9C+%EC%BD%94%EB%93%9C%EB%A5%BC+%ED%99%9C%EC%9A%A9%EB%B2%95%EC%97%90+%EB%8C%80%ED%95%B4+%EC%97%B0%EA%B5%AC%ED%95%98%EA%B3%A0+%EC%9D%B4%ED%95%B4%ED%95%98%EB%8F%84%EB%A1%9D+%EC%A0%91%EA%B7%BC%ED%95%98%EA%B3%A0+%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EDocker%3C%2Fstrong%3E%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+%EC%9D%B4%EB%AF%B8%EC%A7%80%2C+%EB%8D%B0%EC%9D%B4%ED%84%B0+%EB%93%B1+%EA%B0%81%EA%B0%81+%EB%B6%84%EB%A6%AC%ED%95%B4%EC%84%9C+%EA%B5%AC%ED%98%84%ED%95%98%EA%B3%A0+%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3EVueJS%2FVanilaJS%2FReactJS+%3C%2Fstrong%3E%3A+SPA+%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC+%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8+%EA%B0%9C%EB%B0%9C%EC%9D%84+%EC%9C%84%ED%95%B4+%EC%97%B0%EA%B5%AC%EC%A4%91%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E-%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3ERestFul+API%3C%2Fstrong%3E%3C%2Fspan%3E+%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3A+Back-End%EC%99%80+%EA%B8%B0%EA%B3%84+%EC%84%9C%EB%B2%84+%EC%97%B0%EB%8F%99+%EA%B0%80%EB%8A%A5%EC%97%AC%EB%B6%80%EC%9D%98+%EB%8C%80%ED%95%B4+%EC%97%B0%EA%B5%AC+%EC%A4%91%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E3.+%EC%9A%94%EA%B5%AC+%EC%82%AC%ED%95%AD%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+18px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E%3Cem%3E1%29+IT+%EB%B0%8F+%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98+%EC%84%B8%EA%B3%84%EB%A5%BC+%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0+%EC%A1%B4%EC%A4%91%ED%95%B4%EC%A3%BC%EB%8A%94+%EC%97%85%EC%B2%B4%EB%A1%9C+%EA%B5%AC%EC%84%B1%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E++%EC%A0%80%ED%9D%AC+%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%8A%94+%EC%86%8C%EB%AA%A8%ED%92%88%EC%9D%80+%EC%95%84%EB%8B%99%EB%8B%88%EB%8B%A4.+%EC%B5%9C%EC%83%81%EC%9D%98+%ED%8D%BC%ED%8F%AC%EB%A8%BC%EC%8A%A4%EB%A5%BC+%EB%82%B4%EC%A3%BC%EA%B8%B0+%EC%9C%84%ED%95%B4+%EC%82%AC%EB%AA%85%EA%B0%90%EC%9D%84+%EA%B0%80%EC%A7%80%EA%B3%A0+%EC%9D%BC%EC%9D%84+%ED%95%98%EA%B8%B0+%EB%95%8C%EB%AC%B8%EC%97%90+%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80+%EA%B0%84%EB%8B%A8%ED%95%B4+%EB%B3%B4%EC%9D%B4%EB%8A%94+%EA%B8%B0%EB%8A%A5%EC%9D%B4+%EC%9E%88%EC%96%B4%EB%8F%84+%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8+%EB%A1%9C%EC%A7%81%EC%97%90+%EC%9D%98%ED%95%B4+%EA%B0%9C%EB%B0%9C%EC%8B%9C%EA%B0%84%EC%9D%B4+%EC%98%A4%EB%9E%98%EA%B1%B8%EB%A6%B4+%EC%88%98%EB%8F%84+%EC%9E%88%EA%B3%A0%2C+%EB%B9%A8%EB%A6%AC+%EA%B1%B8%EB%A6%B4%EC%88%98+%EC%9E%88%EB%8A%94+%EB%B6%80%EB%B6%84%EC%9D%B4+%EC%A1%B4%EC%9E%AC%ED%95%A9%EB%8B%88%EB%8B%A4.+%EB%AC%BC%EB%A1%A0+%EA%B3%A0%EA%B0%9D%EB%93%A4%EA%BB%98%EC%84%9C%EB%8A%94+%EB%B9%A0%EB%A5%B4%EA%B2%8C+%EA%B3%A0%EC%B3%90%EB%82%98%EA%B0%80%EA%B3%A0+%ED%8E%B8%EB%A6%AC%ED%95%9C+%EA%B8%B0%EB%8A%A5%EC%9D%84+%EC%9B%90%ED%95%98%EC%8B%9C%EB%8A%94%EA%B1%B4+%EC%B6%A9%EB%B6%84%ED%9E%88+%EC%9D%B4%ED%95%B4%ED%95%A9%EB%8B%88%EB%8B%A4.+%EC%A0%80+%EB%98%90%ED%95%9C+%EA%B3%A0%EA%B0%9D%EC%9D%98+%EB%8B%88%EC%A6%88%EB%A5%BC+%EC%B5%9C%EB%8C%80%ED%95%9C+%EC%9E%98+%EB%A7%9E%EC%B6%B0%EB%93%9C%EB%A6%AC%EB%8F%84%EB%A1%9D+%EB%85%B8%EB%A0%A5%ED%95%98%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+18px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E%3Cem%3E2%29+%EC%82%AC%EB%9E%8C%EC%9D%84+%EC%86%8C%EB%AA%A8%ED%92%88%EC%B2%98%EB%9F%BC+%EB%8C%80%ED%95%98%EC%A7%80+%EC%95%8A%EA%B3%A0+%ED%88%AC%EC%9E%90%ED%95%98%EB%8A%94+%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A5%BC+%EA%B0%80%EC%A7%84+%EA%B2%BD%EC%98%81%EC%A7%84%EB%93%A4%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%9D%B4+%EB%B6%80%EB%B6%84%EC%9D%84+%EC%A4%91%EC%9A%94%ED%95%98%EA%B2%8C+%EC%83%9D%EA%B0%81%ED%95%A9%EB%8B%88%EB%8B%A4.+%EB%8C%80%EB%B6%80%EB%B6%84+%EC%82%AC%EC%9E%A5%EB%8B%98%EB%93%A4%EC%9D%98+%EB%A7%88%EC%9D%B8%EB%93%9C+%EC%9E%85%EC%9E%A5%EC%97%90%EC%84%9C%EB%8A%94+%ED%9A%8C%EC%82%AC%EB%8A%94+%EB%A7%A4%EC%B6%9C%EC%9D%84+%EC%98%AC%EB%A6%AC%EA%B8%B0+%EC%9C%84%ED%95%B4+%EC%A1%B4%EC%9E%AC%ED%95%98%EB%8A%94+%EA%B2%83%EC%9D%B4%EB%8B%A4.+%EC%9D%B4%EA%B2%83%EC%9D%80+%EB%8F%99%EC%9D%98%ED%95%98%EB%8A%94+%EB%B6%80%EB%B6%84%EC%9E%85%EB%8B%88%EB%8B%A4.+%ED%95%98%EC%A7%80%EB%A7%8C+%ED%88%AC%EC%9E%90%ED%95%98%EB%8A%94+%EB%A7%88%EC%9D%B8%EB%93%9C%EA%B0%80+%EC%97%86%EC%9C%BC%EB%A9%B4+%EC%A7%81%EC%9B%90%EB%93%A4%EC%9D%80+%ED%9A%8C%EC%82%AC%EB%A5%BC+%EC%86%90%EC%A0%88%ED%95%98%EA%B3%A0+%EC%9D%B4%EC%A7%81%EB%A5%A0%EC%9D%84+%EB%86%92%EC%9D%BC+%EA%B2%83%EC%9D%B4%EB%9D%BC%EA%B3%A0+%EC%83%9D%EA%B0%81%ED%95%A9%EB%8B%88%EB%8B%A4.+%ED%9A%8C%EC%82%AC%EB%A5%BC+%ED%82%A4%EC%9A%B0%EA%B3%A0+%EC%8B%B6%EB%8B%A4%EB%A9%B4+%EA%B2%BD%EC%98%81%EC%A7%84%EB%93%A4%EC%9D%98+%EB%A7%88%EC%9D%B8%EB%93%9C%EA%B0%80+%EC%A4%91%EC%9A%94%EB%8F%84%EA%B0%80+%EB%86%92%EB%8B%A4%EA%B3%A0+%EB%B3%B4%EB%8A%94%EB%8D%B0+%EC%82%AC%EC%97%85%EC%A3%BC+%ED%98%BC%EC%9E%90%EC%84%9C+%EA%B0%90%EB%8B%B9%ED%95%A0+%EB%8A%A5%EB%A0%A5%EC%9D%B4+%EB%90%98%EC%8B%9C%EB%A9%B4+%ED%95%B4%EB%8B%B9+%EC%82%AC%ED%95%AD%EC%9D%80+%EC%97%86%EC%A7%80%EB%A7%8C%2C+%EA%B2%BD%EC%98%81%EC%A7%84%EB%93%A4%EB%A7%8C%EC%9C%BC%EB%A1%9C+%EC%86%90%EC%9D%B4+%EB%B6%80%EC%A1%B1%ED%95%98%EA%B1%B0%EB%82%98+%EC%82%AC%EC%97%85%EC%A3%BC%EC%9D%98+%EB%B6%80%EC%A1%B1%ED%95%9C+%EB%8A%A5%EB%A0%A5%EC%9D%84+%EB%A9%94%EA%BF%94%EC%A4%84+%EC%82%AC%EB%9E%8C%EC%9D%B4+%ED%95%84%EC%9A%94%ED%95%A0+%EA%B2%BD%EC%9A%B0+%EC%86%8C%EB%AA%A8%ED%92%88%EC%B2%98%EB%9F%BC+%EB%8C%80%ED%95%98%EB%8A%94+%EA%B2%83%EC%9D%B4+%EC%95%84%EB%8B%8C+%ED%88%AC%EC%9E%90%ED%95%98%EB%8A%94+%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A1%9C+%EC%A0%91%ED%95%98%EC%85%A8%EC%9C%BC%EB%A9%B4+%ED%95%98%EB%8A%94+%EB%B0%94%EB%9E%8C%EC%9E%85%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Aleft%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%2833%2C37%2C41%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+18px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E%3Cem%3E3%29+%EC%A0%95%EC%8B%9C+%ED%87%B4%EA%B7%BC%3C%2Fem%3E%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bbackground-color%3A+rgb%28255%2C255%2C255%29%3Bfont-size%3A+16px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EA%B3%A0%EA%B0%9D%EC%82%AC+%EC%97%AC%EB%9F%AC%EB%B6%84+%EC%A0%80%ED%9D%AC+%EA%B0%9C%EB%B0%9C%ED%95%98%EB%8A%94+%EA%B8%B0%EA%B3%84%EA%B0%80+%EC%95%84%EB%8B%99%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%EA%B0%80%EB%A7%8C%ED%9E%88+%EC%95%89%EC%95%84+%EC%9E%88%EA%B1%B0%EB%82%98+%EC%BD%94%EB%94%A9%EC%9D%84+%EC%95%88%ED%95%9C%EB%8B%A4%ED%95%B4%EB%8F%84+%EA%B7%BC%EB%AC%B4+%ED%83%9C%EB%A7%8C+%ED%95%9C%EB%8B%A4%EA%B3%A0+%EC%98%A4%ED%95%B4%ED%95%98%EC%8B%A4%EC%A7%80+%EB%AA%A8%EB%A5%B4%EC%A7%80%EB%A7%8C+%EC%A0%80%ED%9D%AC%EB%8A%94+%EA%BE%B8%EC%A4%80%ED%9E%88+%EC%83%9D%EA%B0%81%ED%95%98%EA%B3%A0+%EA%BE%B8%EC%A4%80%ED%9E%88+%ED%95%98%EA%B3%A0+%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%3C%2Fp%3E%0A%3Cp%3E%EB%AC%BC%EB%A1%A0+%EA%B8%B4%EA%B8%89+%EC%83%81%ED%99%A9%EC%9D%B4%EB%82%98+%EC%83%88%EB%B2%BD%EC%97%90+%EC%98%A4%EB%A5%98%EB%A5%BC+%ED%84%B0%EC%A7%80%EB%8D%94%EB%9D%BC%EB%8F%84+%EC%9D%B4%EA%B2%8C+%EC%9A%B0%EC%84%A0%EC%9D%B4%EB%8B%88+%EA%B7%B8+%EC%A0%90%EC%9D%80+%EC%A0%80%EB%8F%84+%EC%9D%B4%ED%95%B4%ED%95%98%EA%B3%A0+%EB%8B%A4%EA%B0%80%EA%B0%80%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4.%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E4.+%ED%9D%AC%EB%A7%9D%EC%97%B0%EB%B4%89+%3A+9%2C000%EB%A7%8C%EC%9B%90+%EC%9D%B4%EC%83%81+%28%ED%94%84%EB%A6%AC%EA%B3%84%EC%95%BD%EC%8B%9C+%3A+%EC%9B%94+850%EC%9D%B4%EC%83%81%2C+%EA%B7%9C%EB%AA%A8%EC%97%90+%EB%94%B0%EB%9D%BC+%EB%8B%A4%EB%A6%84%29%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%A0%80%EB%8A%94+%ED%95%9C+%ED%9A%8C%EC%82%AC%EC%97%90%EC%84%9C+7%EB%85%84%EA%B0%84+%EA%B7%BC%EB%AC%B4%ED%95%9C+%EA%B2%BD%ED%97%98%EC%9D%B4+%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp%3E%EA%B0%9C%EB%B0%9C+%EC%8B%A4%EB%A0%A5+%EB%BF%90%EB%A7%8C+%EC%95%84%EB%8B%88%EB%9D%BC+%EC%BB%A4%EB%AE%A4%EB%8B%88%EC%BC%80%EC%9D%B4%EC%85%98%2C+%EA%B3%A0%EA%B0%9D%EC%82%AC%EC%97%90+%EB%8B%88%EC%A6%88%EB%A5%BC+%EA%B2%BD%ED%97%98%ED%95%9C+%EC%A0%81%EC%9D%B4+%EB%A7%8E%EC%9C%BC%EB%A9%B0+%EC%A3%BC%EB%B3%80+%EB%8F%99%EB%A3%8C%EB%93%A4+%EC%A4%91+%EA%B0%80%EC%9A%A9+%ED%95%A0+%EC%88%98+%EC%9E%88%EB%8A%94+%EC%8B%A4%EB%A0%A5%EC%9E%90%EB%A5%BC+%EB%8D%B0%EB%A0%A4%EC%98%AC+%EC%88%98+%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%3C%2Fp%3E%0A%3Cp%3E%EC%A0%80%EB%8A%94+%EC%A7%A7%EC%9D%80+%EC%8B%9C%EA%B0%84%EC%95%88%EC%97%90+%ED%8D%BC%ED%8F%AC%EB%A8%BC%EC%8A%A4%EB%A5%BC+%EB%82%BC+%EC%88%98+%EC%9E%88%EB%8B%A4%EB%8A%94+%EC%A0%90%EC%97%90+%EB%8C%80%ED%95%B4+%EB%B3%B4%EC%9E%A5%EC%9D%B4+%EA%B0%80%EB%8A%A5%ED%95%9C+%EC%82%AC%EB%9E%8C+%EC%A4%91+%ED%95%98%EB%82%98%EC%9D%B4%EB%AF%80%EB%A1%9C+%EA%B7%B8%EC%A0%95%EB%8F%84+%ED%88%AC%EC%9E%90%ED%95%B4%EB%8F%84+%EC%B6%A9%EB%B6%84%ED%95%98%EB%8B%A4%EA%B3%A0+%EB%B3%BC+%EC%88%98+%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%26nbsp%3B%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+30px%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%3Cstrong%3E5.+%EA%B5%AC%EC%9D%B8+%EC%96%91%EC%8B%9D%3C%2Fstrong%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%95%84%EB%9E%98%EC%99%80+%EA%B0%99%EC%9D%B4+%EC%96%91%EC%8B%9D%EC%9D%84+%EB%B3%B5%EC%82%AC%ED%95%B4%EC%84%9C+glidong.hong%40gmail.com+%EC%9C%BC%EB%A1%9C+%EC%9D%B4%EB%A9%94%EC%9D%BC+%EC%9E%90%EB%A3%8C+%EC%B2%A8%EB%B6%80%ED%95%B4%EC%84%9C+%EB%B3%B4%EB%82%B4%EC%A3%BC%EC%8B%9C%EA%B8%B0+%EB%B0%94%EB%9E%8D%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%EC%97%85%EC%B2%B4%EC%B8%A1%EC%97%90%EC%84%9C+%EC%9D%B4%EB%A0%A5%EC%84%9C+%EB%B0%8F+%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%EC%84%9C%EA%B0%80+%ED%95%84%EC%9A%94%EC%8B%9C+%EB%94%B0%EB%A1%9C+%EB%B3%B4%EB%82%B4%EB%93%9C%EB%A6%AC%EB%A9%B0+%EC%97%85%EC%B2%B4+%EC%96%91%EC%8B%9D+%EC%9D%B4%EB%A0%A5%EC%84%9C%EA%B0%80+%EC%9E%88%EC%9C%BC%EC%8B%9C%EB%A9%B4+%EB%B3%84%EB%8F%84%EB%A1%9C+%EC%B2%A8%EB%B6%80%ED%95%B4%EC%84%9C+%EC%96%91%EC%8B%9D%EC%9D%84+%EB%B3%B4%EB%82%B4%EC%A3%BC%EC%8B%9C%EA%B8%B0+%EB%B0%94%EB%9E%8D%EB%8B%88%EB%8B%A4.%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E---------------------------------------------------------------------------------------------------------------------%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%281%29+%EC%97%85%EC%B2%B4%EB%AA%85+%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%282%29+%EC%82%AC%EC%97%85+%EB%82%B4%EC%9A%A9+%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%283%29+%EB%AA%A8%EC%A7%91+%ED%8F%AC%EC%A7%80%EC%85%98+%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%284%29+%ED%9A%8C%EC%82%AC+%EB%AC%B8%ED%99%94+%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%285%29+%EA%B5%AC%EC%A7%81%EC%9E%90%EC%97%90%EA%B2%8C+%EC%9A%94%EA%B5%AC+%EC%82%AC%ED%95%AD%28%EC%9D%B8%EC%9E%AC%EC%83%81%2C+%EA%B8%B0%EC%88%A0%2C+%EC%A1%B0%EC%A7%81%EC%83%9D%ED%99%9C+%EB%93%B1%EB%93%B1%29+%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%286%29+%EC%B1%84%EC%9A%A9+%EC%A0%84+%EC%A4%80%EB%B9%84%EC%82%AC%ED%95%AD+%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E%287%29+%EA%B8%B0%ED%83%80+%3A%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3Cspan+style%3D%22color%3A+rgb%280%2C0%2C0%29%3Bfont-size%3A+medium%3Bfont-family%3A+Malgun+Gothic%3B%22%3E----------------------------------------------------------------------------------------------------------------------%3C%2Fspan%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%3C%2Fp%3E%0A%3Cp+style%3D%22text-align%3Astart%3B%22%3E%26nbsp%3B%3Cbr%3E%26nbsp%3B%3C%2Fp%3E%0A','admin','Y',5,'2023-03-23 23:32:43','2023-04-01 15:28:21'),(4,'sdf','<p>sdf</p>\n','admin','N',0,'2023-04-12 22:45:35','2023-04-12 22:45:35'),(5,'sdf','<p>sdf</p>\n','admin','N',0,'2023-04-12 22:45:40','2023-04-12 22:45:40'),(6,'adsf','<p>adsf</p>\n','admin','N',0,'2023-04-12 22:45:45','2023-04-12 22:45:45'),(7,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:48','2023-04-12 22:45:48'),(8,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:50','2023-04-12 22:45:50'),(9,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:51','2023-04-12 22:45:51'),(10,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:52','2023-04-12 22:45:52'),(11,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:54','2023-04-12 22:45:54'),(12,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:56','2023-04-12 22:45:56'),(13,'adsffa','<p>adsfafa</p>\n','admin','N',0,'2023-04-12 22:45:57','2023-04-12 22:45:57'),(14,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:37','2023-04-12 22:52:37'),(15,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:38','2023-04-12 22:52:38'),(16,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:39','2023-04-12 22:52:39'),(17,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:41','2023-04-12 22:52:41'),(18,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:42','2023-04-12 22:52:42'),(19,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:43','2023-04-12 22:52:43'),(20,'asd','<p>aasd</p>\n','admin','N',2,'2023-04-12 22:52:45','2023-04-12 22:52:45'),(21,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:46','2023-04-12 22:52:46'),(22,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:47','2023-04-12 22:52:47'),(23,'asd','<p>aasd</p>\n','admin','N',0,'2023-04-12 22:52:49','2023-04-12 22:52:49'),(24,'asd','%3Cp%3Eaasd%E3%85%87%E3%84%B4%E3%85%87%E3%84%B4%3C%2Fp%3E%0A%3Cp%3E%E3%85%87%E3%84%B4%E3%85%87%E3%84%B4%3C%2Fp%3E%0A%3Cp%3E%E3%85%87%E3%84%B4%E3%84%B9%3C%2Fp%3E%0A%3Cp%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%E3%85%87%E3%84%B9%E3%85%87%E3%84%B4%E3%84%B9%E3%84%B4%E3%85%87%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%E3%84%B4%E3%85%87%E3%84%B9%E3%85%87%E3%84%B4%E3%84%B9%E3%85%87%E3%84%B4%E3%85%81%E3%84%B4%E3%85%87+%E3%84%B9%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%3C%2Fp%3E%0A%3Cp%3E%E3%84%B4%E3%85%87%E3%84%B9%E3%84%B4%E3%85%87%E3%84%B9%E3%84%B4%E3%85%81%E3%85%87%E3%84%B9%E3%85%87%E3%84%B4%26nbsp%3B%3C%2Fp%3E%0A','admin','N',0,'2023-04-12 22:52:50','2023-05-20 15:57:05');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `career`
--

DROP TABLE IF EXISTS `career`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `career` (
  `cno` int NOT NULL AUTO_INCREMENT,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `detail` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`cno`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career`
--

LOCK TABLES `career` WRITE;
/*!40000 ALTER TABLE `career` DISABLE KEYS */;
INSERT INTO `career` VALUES (8,'2016-05-01','2023-01-28','OO업체 / 풀스택개발자 근무'),(9,'2015-08-01','2016-02-28','자바기반 웹&앱 양성과정 수료'),(10,'2009-03-01','2015-02-28','OO대학교 컴퓨터학과 학사 졸업');
/*!40000 ALTER TABLE `career` ENABLE KEYS */;
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
INSERT INTO `introduction` VALUES (1,'목표 : Export급  S/W 전문가가 되고 싶습니다.','    컴퓨터 분야로 산업 분야의 길로 시작하면서 대학교 및 교육기관을 통해 웹 개발 기술을 처음으로 접하기 시작하였고, 웹으로 이용하는 자동화 로봇 제어 기술 솔루션 업체를 다녔지만 COVID-19 사태 때문인 경기 악화와 매출액 부재와 일의 체계가 잡히지 않아 직장 생활을 그만둘 수밖에 없었고 긴 공백 기간을 갖게 되었습니다. \n\n   직장을 그만둔 이후로 몇 달 동안 돈 욕심으로 중/고급 이상의 기술 스택을 보유하지 않은 채로 높은 급여만 바라보고 직장에 대해 자리를 잡지 못한 채 결국 생계 문제로 물류 센터 아르바이트를 시작하였습니다. \n\n  물류 센터 일의 특성상 몸쓰는 일이기 때문에 생각할 겨를도 없이 1~2년간 취업을 잠시 잊고 아르바이트 인생으로 보내왔습니다. 하지만 아르바이트 특징 중 하나인 불완전한 직종과 근로자에 대한 대우가 턱없이 부족하고 기술을 보유하기 힘든 구조라고 느껴 아르바이트를 그만두고, 그나마 배운 기술은  웹 개발 관련된 기술밖에 없었기 때문에 더 이상의 미래를 웹 개발의 길밖에 없다고 판단하여 더 늦기 전에 후회하지 않는 인생을 살기 위해 정신 차리고 적어도 나의 가치를 낮추지 말자는 마음으로 다시 웹 개발의 길을 선택하여 코딩 재활 겸 취업 준비를 다시 하기 위해 React와 Spring Boot로 다시 새로 시작하여 제 개인 프로젝트를 AWS 서버 기반으로 오픈 후 다시 취업을 도전을 하였습니다. \n\n  취업 제의도 받아보고, 협업 프로젝트로 부딪혀 보았지만 긴 공백기의 한계와 협업 프로젝트 능력이 많이 부족하고, 제가 모르는 부분도 너무 많았기 때문에 프로젝트 실패를 바탕으로 하여 성장과정으로 생각하여 도전으로 받아드리고 두번 다시 실패를 겪지 않기를 위해 기반부터 먼저 닦기 시작하여 스택을 높이면서 귀사에서 도움되는 인재로 남는 것을 원합니다. 마지막으로 웹 개발이 어느 정도 숙련도가 올랐다고 생각할 때쯤(중/고급이상) 욕심을 가지고 웹 분야 이외에도 앱 분야 및 임베디드 분야 등 욕심을 가지고 상황에 맞는 소프트웨어 사용할 수 있는 S/W 전문가의 경지까지 올라가는 것이 저의 목표입니다.\n',0),(14,'Profile 관련 개발 후기 및 개선점 (로컬)','  S/W 분야에 진심이었던 저는 비록 늦은 시작이지만 프로그래밍하고 싶었던 것을 되살려보고 다시 시작하는 마음으로 나아가고 싶었습니다. \n현재 이 프로젝트를 진행 할 당시 잊어버린 프로그래밍의 기술, 코딩 능력 등을 재활 목적으로 시작하였습니다. 그동안 인생을 살면서 프로그래밍에 대한 기억을 되살리고 최신 트렌드 선택을 해서 뒤처지지 않기 위해 프론트 엔드 부분을 JQuery 배제하여 프로그래밍을 시도해보고, 최신 트랜드인 Spring Boot로 이용하여 백 엔드를 개발로부터 시작하였습니다. 그동안 실무 경험이 전무하고 응용력도 부족한 저로써 아직까지 완성을 한 상태가 아니지만 어느정도 완성 시킨 후 정직원 계약 및 프리랜서 계약으로 들어가서 조금 더 배워보고자 하여 짧은 기간이지만 어느정도 실력을 인정 받고 일을 진행하고자 하였습니다. \n협업을 진행하는 과정에서 미쳐 남이 짠 코드에 익숙치 않았고, 제가 모르는 코딩 구현 방식 및 응용 과정, 기타 등  아직까지는 배워야 할게 너무 많고, 협업을 하면서 기여를 하고자 할 때 잔 버그가 많이 발생하고, 웹 페이지 하나 뽑을 때도 재활 과정에서 접해 보지 못했던 기능 추가들도 생각보다 많이 있었고, 제가 만든 React와 Spring Boot 기반으로 한 프로젝트는 다양한 경험과 지금까지 사용한 기술 이외에도 다양한 기술들도 하나 씩 늘리는 과정이 필요할 뿐만 아니라 클린 코드 작성하는 숙련도 필요, 협업 시 가장 중요한 커뮤니케이션 능력의 대한 숙련도 등이 많이 필요하다고 느껴지는 하루입니다.\n지금 Profile 관련 개발 후 배포를 하였지만, 실패했던 프로젝트들을 잊지 않고, 잔 버그 일으킨 부분의 대해 수정 작업을 하면서, 그 동안 접하지 않은 부분의 대한 기능들도 새로 추가, 개발을 못 했던 부분의 대해 다시 개발 등을 더 해봤지만 아직도 공부할 내용이 많습니다.\n그리하여 꾸준히 갱신하고 버그 없이 개발하는 숙련된 개발자가 되기 위해 프로젝트는 멈추지 않을 것이고, 이 프로젝트를 고도화 시켜 나갈 것이며 \n차후, 현업에서 많이 사용하는 Jenkis 도구까지 익히고 프론트 부분의 대해 bootstrap 없이 UI 만들기 등 해보면서 익혀 나가고, 어느 개발을 하든 실력에 자신있는 시점에서 다시 프리랜서 활동을 재개할 예정입니다.',0);
/*!40000 ALTER TABLE `introduction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediumskill`
--

DROP TABLE IF EXISTS `mediumskill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediumskill`
--

LOCK TABLES `mediumskill` WRITE;
/*!40000 ALTER TABLE `mediumskill` DISABLE KEYS */;
INSERT INTO `mediumskill` VALUES (1,'Java','- 파일 입출력, 상속, 인터페이스, 제널릭 및 컬리지, 해쉬 및 등 사용 가능 \n- 삼성 싸피에서 알고리즘 우승 경험 있음',1,'medium-skill'),(2,'MySQL','Database 기본으로 탄탄합니다.',2,'medium-skill'),(3,'Javascript','Javascript 문법 뿐만 아니라, JQuery에 숙련도가 띄어나고, ReactJS, AngularJS, Vuejs 등 다양한 언어로 프로젝트를 구성 가능합니다.',1,'medium-skill'),(4,'Groovy','Groovy가 한창 유행일때 잠시 써본적 있습니다.',1,'medium-skill'),(5,'Data-Modeling','DB 설계전 모델링 기법으로 효율적으로 작성 가능',2,'medium-skill'),(6,'AWS','학원 수강시에 처음으로 사용해 왔으며, 아마존 웹 서버를 자습서를 참고하여 구현가능합니다.',5,'medium-skill'),(7,'Linux','학교 및 리눅스 마스터 자격증을 공부하면서 터득한 내용을 어느정도 실습 가능, 그누보드로 이용하여 간단한 실습정도 수행을 할 수 있으나 차후 업체나 트래픽이 많은 프로젝트일 경우 AWS의 한계성이 분명하므로 지금까지 배운 내용을 토대로 다시 숙련도 올리는 작업 중입니다.',5,'medium-skill'),(8,'Windows','Windows 서버를 이용하여 웹서버 구축은 실습 경험은 많이 없지만, 학교에서 배운 내용으로 NFS 기능으로 간단한 프록시 구축의 대해 배운적 있습니다.',5,'medium-skill'),(9,'Html5','웹에서 사용자 인터페이스의 뼈대 구조로 각 태그의 속성 및 간단한 table, div, p, 등 문서 작성 가능합니다.',6,'medium-skill'),(10,'XML','HTML을 보조역할을 수행하는 군으로 웹에서 쓰이는 데이터 전달 및 환경 변수 활용, 옵션값 설정 등 다룰수 있습니다.',6,'medium-skill'),(11,'Mark-Down','문서 작업용으로 Github의 README.md 파일에서 문서 작성으로 시작하였으며, 간단한 태그 및 작업 수행기능을 할 수 있습니다. 하지만 숙련도는 아직 필요합니다.',6,'medium-skill'),(12,'CSS','HTML을 디자인 해주는 요소 중 하나로 간단하게 CSS 코딩을 구현 가능합니다. 아직까지는 깊숙한 코딩 능력은 많이 부족하지만 향후 사이드 프로젝트 및 토이 프로젝트, 프론트 웹개발자로 전문적으로 하게 된다면 깊숙하게 코딩하여 숙련도를 상승 시킬 예정입니다.',7,'medium-skill'),(13,'AJax','비동기 데이터 처리방식인 Ajax를 이해하고, 이를 통한 자바 컨트롤러와 통신을 통해 URL 과 값 전달 가능. JSON 의 개념을 이해하고, 데이터 타입으로서 JSON의 활용을 자유롭게 구현 가능.',7,'medium-skill'),(14,'JSON','Front End와 Back End간의 데이터를 서로 주고 받기 위해 JSON 방식으로 구현 가능합니다.',7,'medium-skill'),(15,'My-Batis','Database의 프레임 워크 중 하나이며 Spring Framework에서 응용하여 DataSource라는 기능 환경 설정을 통해 DB와 연동 가능하며 Mapper.xml을 통해 Database 질의어 사용하여 연동이 가능합니다.',2,'medium-skill'),(16,'NPM','Front End와 API를 설치 및 제거, 업데이트를 할 수 있으며 Package.json에서 간단한 환경 설정을 할 수 있습니다.',7,'medium-skill');
/*!40000 ALTER TABLE `mediumskill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'Creative-tim','2018-01-01','2023-01-31','https://www.creative-tim.com/','2023-02-01','Java, Spring boot, HTML, CSS, JavaScript, MySQL, Gradle, AWS, ReactJS, My-Batis, VScode, npm, axios, JSON',6,'사용자 UI에 취약하거나 만들 자신이 없는 사람들을 위해 공유하기 위해 직접 만들고 서비스까지 제공하는 기능이 담겨있습니다.',1,'/image/project/Creative_tim.png'),(5,'MusicStyle','2018-10-01','2019-05-30','- (현재 개발 중지 후 리뉴얼중 ).',NULL,' Java, Spring MVC, HTML, CSS, JavaScript, MySQL, Aphach-Tomcat, My-Batis, Gradle, AWS, Handlebarsjs',6,'악기연주를 취미로 하거나 악기연주의 대한 전공을 하는 사람들에게 초점을 맞춰 음악적인 이야기와 악기연주를 위한 질 좋은 악보 제공, 자기가 연주한 것들과 취미생끼리 공유하기 위한 연습방법을 위해 영상을 통해 공유를 하고, 부가적인 옵션으로 음악으로 생계로 활동하고 있는 레스너 구하는 카테고리와 악기연주를 위한 연습실을 공유를 하여 악기를 연주하는 사람들을 위해 제작을 하였다. 보다 더 널리 유익하게 알리기 위해 진행',0,'/image/project/MusicStyle.png');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectv2`
--

DROP TABLE IF EXISTS `projectv2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projectv2` (
  `pno` int NOT NULL AUTO_INCREMENT,
  `link` varchar(100) DEFAULT NULL,
  `contents` text,
  PRIMARY KEY (`pno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectv2`
--

LOCK TABLES `projectv2` WRITE;
/*!40000 ALTER TABLE `projectv2` DISABLE KEYS */;
INSERT INTO `projectv2` VALUES (1,NULL,'PGh0bWw+PGhlYWQ+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgiLz48dGl0bGU+7Y+s7Yq47Y+066as7JikPC90aXRsZT48c3R5bGU+Ci8qIGNzcGVsbDpkaXNhYmxlLWZpbGUgKi8KLyogd2Via2l0IHByaW50aW5nIG1hZ2ljOiBwcmludCBhbGwgYmFja2dyb3VuZCBjb2xvcnMgKi8KaHRtbCB7Cgktd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7Cn0KKiB7Cglib3gtc2l6aW5nOiBib3JkZXItYm94OwoJLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0Owp9CgpodG1sLApib2R5IHsKCW1hcmdpbjogMDsKCXBhZGRpbmc6IDA7Cn0KQG1lZGlhIG9ubHkgc2NyZWVuIHsKCWJvZHkgewoJCW1hcmdpbjogMmVtIGF1dG87CgkJbWF4LXdpZHRoOiA5MDBweDsKCQljb2xvcjogcmdiKDU1LCA1MywgNDcpOwoJfQp9Cgpib2R5IHsKCWxpbmUtaGVpZ2h0OiAxLjU7Cgl3aGl0ZS1zcGFjZTogcHJlLXdyYXA7Cn0KCmEsCmEudmlzaXRlZCB7Cgljb2xvcjogaW5oZXJpdDsKCXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOwp9CgoucGRmLXJlbGF0aXZlLWxpbmstcGF0aCB7Cglmb250LXNpemU6IDgwJTsKCWNvbG9yOiAjNDQ0Owp9CgpoMSwKaDIsCmgzIHsKCWxldHRlci1zcGFjaW5nOiAtMC4wMWVtOwoJbGluZS1oZWlnaHQ6IDEuMjsKCWZvbnQtd2VpZ2h0OiA2MDA7CgltYXJnaW4tYm90dG9tOiAwOwp9CgoucGFnZS10aXRsZSB7Cglmb250LXNpemU6IDIuNXJlbTsKCWZvbnQtd2VpZ2h0OiA3MDA7CgltYXJnaW4tdG9wOiAwOwoJbWFyZ2luLWJvdHRvbTogMC43NWVtOwp9CgpoMSB7Cglmb250LXNpemU6IDEuODc1cmVtOwoJbWFyZ2luLXRvcDogMS44NzVyZW07Cn0KCmgyIHsKCWZvbnQtc2l6ZTogMS41cmVtOwoJbWFyZ2luLXRvcDogMS41cmVtOwp9CgpoMyB7Cglmb250LXNpemU6IDEuMjVyZW07CgltYXJnaW4tdG9wOiAxLjI1cmVtOwp9Cgouc291cmNlIHsKCWJvcmRlcjogMXB4IHNvbGlkICNkZGQ7Cglib3JkZXItcmFkaXVzOiAzcHg7CglwYWRkaW5nOiAxLjVlbTsKCXdvcmQtYnJlYWs6IGJyZWFrLWFsbDsKfQoKLmNhbGxvdXQgewoJYm9yZGVyLXJhZGl1czogM3B4OwoJcGFkZGluZzogMXJlbTsKfQoKZmlndXJlIHsKCW1hcmdpbjogMS4yNWVtIDA7CglwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7Cn0KCmZpZ2NhcHRpb24gewoJb3BhY2l0eTogMC41OwoJZm9udC1zaXplOiA4NSU7CgltYXJnaW4tdG9wOiAwLjVlbTsKfQoKbWFyayB7CgliYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsKfQoKLmluZGVudGVkIHsKCXBhZGRpbmctbGVmdDogMS41ZW07Cn0KCmhyIHsKCWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwoJZGlzcGxheTogYmxvY2s7Cgl3aWR0aDogMTAwJTsKCWhlaWdodDogMXB4OwoJdmlzaWJpbGl0eTogdmlzaWJsZTsKCWJvcmRlcjogbm9uZTsKCWJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDU1LCA1MywgNDcsIDAuMDkpOwp9CgppbWcgewoJbWF4LXdpZHRoOiAxMDAlOwp9CgpAbWVkaWEgb25seSBwcmludCB7CglpbWcgewoJCW1heC1oZWlnaHQ6IDEwMHZoOwoJCW9iamVjdC1maXQ6IGNvbnRhaW47Cgl9Cn0KCkBwYWdlIHsKCW1hcmdpbjogMWluOwp9CgouY29sbGVjdGlvbi1jb250ZW50IHsKCWZvbnQtc2l6ZTogMC44NzVyZW07Cn0KCi5jb2x1bW4tbGlzdCB7CglkaXNwbGF5OiBmbGV4OwoJanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwp9CgouY29sdW1uIHsKCXBhZGRpbmc6IDAgMWVtOwp9CgouY29sdW1uOmZpcnN0LWNoaWxkIHsKCXBhZGRpbmctbGVmdDogMDsKfQoKLmNvbHVtbjpsYXN0LWNoaWxkIHsKCXBhZGRpbmctcmlnaHQ6IDA7Cn0KCi50YWJsZV9vZl9jb250ZW50cy1pdGVtIHsKCWRpc3BsYXk6IGJsb2NrOwoJZm9udC1zaXplOiAwLjg3NXJlbTsKCWxpbmUtaGVpZ2h0OiAxLjM7CglwYWRkaW5nOiAwLjEyNXJlbTsKfQoKLnRhYmxlX29mX2NvbnRlbnRzLWluZGVudC0xIHsKCW1hcmdpbi1sZWZ0OiAxLjVyZW07Cn0KCi50YWJsZV9vZl9jb250ZW50cy1pbmRlbnQtMiB7CgltYXJnaW4tbGVmdDogM3JlbTsKfQoKLnRhYmxlX29mX2NvbnRlbnRzLWluZGVudC0zIHsKCW1hcmdpbi1sZWZ0OiA0LjVyZW07Cn0KCi50YWJsZV9vZl9jb250ZW50cy1saW5rIHsKCXRleHQtZGVjb3JhdGlvbjogbm9uZTsKCW9wYWNpdHk6IDAuNzsKCWJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDU1LCA1MywgNDcsIDAuMTgpOwp9Cgp0YWJsZSwKdGgsCnRkIHsKCWJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTUsIDUzLCA0NywgMC4wOSk7Cglib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOwp9Cgp0YWJsZSB7Cglib3JkZXItbGVmdDogbm9uZTsKCWJvcmRlci1yaWdodDogbm9uZTsKfQoKdGgsCnRkIHsKCWZvbnQtd2VpZ2h0OiBub3JtYWw7CglwYWRkaW5nOiAwLjI1ZW0gMC41ZW07CglsaW5lLWhlaWdodDogMS41OwoJbWluLWhlaWdodDogMS41ZW07Cgl0ZXh0LWFsaWduOiBsZWZ0Owp9Cgp0aCB7Cgljb2xvcjogcmdiYSg1NSwgNTMsIDQ3LCAwLjYpOwp9CgpvbCwKdWwgewoJbWFyZ2luOiAwOwoJbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjZlbTsKCW1hcmdpbi1ibG9jay1lbmQ6IDAuNmVtOwp9CgpsaSA+IG9sOmZpcnN0LWNoaWxkLApsaSA+IHVsOmZpcnN0LWNoaWxkIHsKCW1hcmdpbi1ibG9jay1zdGFydDogMC42ZW07Cn0KCnVsID4gbGkgewoJbGlzdC1zdHlsZTogZGlzYzsKfQoKdWwudG8tZG8tbGlzdCB7CglwYWRkaW5nLWlubGluZS1zdGFydDogMDsKfQoKdWwudG8tZG8tbGlzdCA+IGxpIHsKCWxpc3Qtc3R5bGU6IG5vbmU7Cn0KCi50by1kby1jaGlsZHJlbi1jaGVja2VkIHsKCXRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOwoJb3BhY2l0eTogMC4zNzU7Cn0KCnVsLnRvZ2dsZSA+IGxpIHsKCWxpc3Qtc3R5bGU6IG5vbmU7Cn0KCnVsIHsKCXBhZGRpbmctaW5saW5lLXN0YXJ0OiAxLjdlbTsKfQoKdWwgPiBsaSB7CglwYWRkaW5nLWxlZnQ6IDAuMWVtOwp9CgpvbCB7CglwYWRkaW5nLWlubGluZS1zdGFydDogMS42ZW07Cn0KCm9sID4gbGkgewoJcGFkZGluZy1sZWZ0OiAwLjJlbTsKfQoKLm1vbm8gb2wgewoJcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDJlbTsKfQoKLm1vbm8gb2wgPiBsaSB7Cgl0ZXh0LWluZGVudDogLTAuNGVtOwp9CgoudG9nZ2xlIHsKCXBhZGRpbmctaW5saW5lLXN0YXJ0OiAwZW07CglsaXN0LXN0eWxlLXR5cGU6IG5vbmU7Cn0KCi8qIEluZGVudCB0b2dnbGUgY2hpbGRyZW4gKi8KLnRvZ2dsZSA+IGxpID4gZGV0YWlscyB7CglwYWRkaW5nLWxlZnQ6IDEuN2VtOwp9CgoudG9nZ2xlID4gbGkgPiBkZXRhaWxzID4gc3VtbWFyeSB7CgltYXJnaW4tbGVmdDogLTEuMWVtOwp9Cgouc2VsZWN0ZWQtdmFsdWUgewoJZGlzcGxheTogaW5saW5lLWJsb2NrOwoJcGFkZGluZzogMCAwLjVlbTsKCWJhY2tncm91bmQ6IHJnYmEoMjA2LCAyMDUsIDIwMiwgMC41KTsKCWJvcmRlci1yYWRpdXM6IDNweDsKCW1hcmdpbi1yaWdodDogMC41ZW07CgltYXJnaW4tdG9wOiAwLjNlbTsKCW1hcmdpbi1ib3R0b206IDAuM2VtOwoJd2hpdGUtc3BhY2U6IG5vd3JhcDsKfQoKLmNvbGxlY3Rpb24tdGl0bGUgewoJZGlzcGxheTogaW5saW5lLWJsb2NrOwoJbWFyZ2luLXJpZ2h0OiAxZW07Cn0KCi5zaW1wbGUtdGFibGUgewoJbWFyZ2luLXRvcDogMWVtOwoJZm9udC1zaXplOiAwLjg3NXJlbTsKCWVtcHR5LWNlbGxzOiBzaG93Owp9Ci5zaW1wbGUtdGFibGUgdGQgewoJaGVpZ2h0OiAyOXB4OwoJbWluLXdpZHRoOiAxMjBweDsKfQoKLnNpbXBsZS10YWJsZSB0aCB7CgloZWlnaHQ6IDI5cHg7CgltaW4td2lkdGg6IDEyMHB4Owp9Cgouc2ltcGxlLXRhYmxlLWhlYWRlci1jb2xvciB7CgliYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyNDYsIDI0Myk7Cgljb2xvcjogYmxhY2s7Cn0KLnNpbXBsZS10YWJsZS1oZWFkZXIgewoJZm9udC13ZWlnaHQ6IDUwMDsKfQoKdGltZSB7CglvcGFjaXR5OiAwLjU7Cn0KCi5pY29uIHsKCWRpc3BsYXk6IGlubGluZS1ibG9jazsKCW1heC13aWR0aDogMS4yZW07CgltYXgtaGVpZ2h0OiAxLjJlbTsKCXRleHQtZGVjb3JhdGlvbjogbm9uZTsKCXZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTsKCW1hcmdpbi1yaWdodDogMC41ZW07Cn0KCmltZy5pY29uIHsKCWJvcmRlci1yYWRpdXM6IDNweDsKfQoKLnVzZXItaWNvbiB7Cgl3aWR0aDogMS41ZW07CgloZWlnaHQ6IDEuNWVtOwoJYm9yZGVyLXJhZGl1czogMTAwJTsKCW1hcmdpbi1yaWdodDogMC41cmVtOwp9CgoudXNlci1pY29uLWlubmVyIHsKCWZvbnQtc2l6ZTogMC44ZW07Cn0KCi50ZXh0LWljb24gewoJYm9yZGVyOiAxcHggc29saWQgIzAwMDsKCXRleHQtYWxpZ246IGNlbnRlcjsKfQoKLnBhZ2UtY292ZXItaW1hZ2UgewoJZGlzcGxheTogYmxvY2s7CglvYmplY3QtZml0OiBjb3ZlcjsKCXdpZHRoOiAxMDAlOwoJbWF4LWhlaWdodDogMzB2aDsKfQoKLnBhZ2UtaGVhZGVyLWljb24gewoJZm9udC1zaXplOiAzcmVtOwoJbWFyZ2luLWJvdHRvbTogMXJlbTsKfQoKLnBhZ2UtaGVhZGVyLWljb24td2l0aC1jb3ZlciB7CgltYXJnaW4tdG9wOiAtMC43MmVtOwoJbWFyZ2luLWxlZnQ6IDAuMDdlbTsKfQoKLnBhZ2UtaGVhZGVyLWljb24gaW1nIHsKCWJvcmRlci1yYWRpdXM6IDNweDsKfQoKLmxpbmstdG8tcGFnZSB7CgltYXJnaW46IDFlbSAwOwoJcGFkZGluZzogMDsKCWJvcmRlcjogbm9uZTsKCWZvbnQtd2VpZ2h0OiA1MDA7Cn0KCnAgPiAudXNlciB7CglvcGFjaXR5OiAwLjU7Cn0KCnRkID4gLnVzZXIsCnRkID4gdGltZSB7Cgl3aGl0ZS1zcGFjZTogbm93cmFwOwp9CgppbnB1dFt0eXBlPSJjaGVja2JveCJdIHsKCXRyYW5zZm9ybTogc2NhbGUoMS41KTsKCW1hcmdpbi1yaWdodDogMC42ZW07Cgl2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9CgpwIHsKCW1hcmdpbi10b3A6IDAuNWVtOwoJbWFyZ2luLWJvdHRvbTogMC41ZW07Cn0KCi5pbWFnZSB7Cglib3JkZXI6IG5vbmU7CgltYXJnaW46IDEuNWVtIDA7CglwYWRkaW5nOiAwOwoJYm9yZGVyLXJhZGl1czogMDsKCXRleHQtYWxpZ246IGNlbnRlcjsKfQoKLmNvZGUsCmNvZGUgewoJYmFja2dyb3VuZDogcmdiYSgxMzUsIDEzMSwgMTIwLCAwLjE1KTsKCWJvcmRlci1yYWRpdXM6IDNweDsKCXBhZGRpbmc6IDAuMmVtIDAuNGVtOwoJYm9yZGVyLXJhZGl1czogM3B4OwoJZm9udC1zaXplOiA4NSU7Cgl0YWItc2l6ZTogMjsKfQoKY29kZSB7Cgljb2xvcjogI2ViNTc1NzsKfQoKLmNvZGUgewoJcGFkZGluZzogMS41ZW0gMWVtOwp9CgouY29kZS13cmFwIHsKCXdoaXRlLXNwYWNlOiBwcmUtd3JhcDsKCXdvcmQtYnJlYWs6IGJyZWFrLWFsbDsKfQoKLmNvZGUgPiBjb2RlIHsKCWJhY2tncm91bmQ6IG5vbmU7CglwYWRkaW5nOiAwOwoJZm9udC1zaXplOiAxMDAlOwoJY29sb3I6IGluaGVyaXQ7Cn0KCmJsb2NrcXVvdGUgewoJZm9udC1zaXplOiAxLjI1ZW07CgltYXJnaW46IDFlbSAwOwoJcGFkZGluZy1sZWZ0OiAxZW07Cglib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYig1NSwgNTMsIDQ3KTsKfQoKLmJvb2ttYXJrIHsKCXRleHQtZGVjb3JhdGlvbjogbm9uZTsKCW1heC1oZWlnaHQ6IDhlbTsKCXBhZGRpbmc6IDA7CglkaXNwbGF5OiBmbGV4OwoJd2lkdGg6IDEwMCU7CglhbGlnbi1pdGVtczogc3RyZXRjaDsKfQoKLmJvb2ttYXJrLXRpdGxlIHsKCWZvbnQtc2l6ZTogMC44NWVtOwoJb3ZlcmZsb3c6IGhpZGRlbjsKCXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwoJaGVpZ2h0OiAxLjc1ZW07Cgl3aGl0ZS1zcGFjZTogbm93cmFwOwp9CgouYm9va21hcmstdGV4dCB7CglkaXNwbGF5OiBmbGV4OwoJZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKfQoKLmJvb2ttYXJrLWluZm8gewoJZmxleDogNCAxIDE4MHB4OwoJcGFkZGluZzogMTJweCAxNHB4IDE0cHg7CglkaXNwbGF5OiBmbGV4OwoJZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKCWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKfQoKLmJvb2ttYXJrLWltYWdlIHsKCXdpZHRoOiAzMyU7CglmbGV4OiAxIDEgMTgwcHg7CglkaXNwbGF5OiBibG9jazsKCXBvc2l0aW9uOiByZWxhdGl2ZTsKCW9iamVjdC1maXQ6IGNvdmVyOwoJYm9yZGVyLXJhZGl1czogMXB4Owp9CgouYm9va21hcmstZGVzY3JpcHRpb24gewoJY29sb3I6IHJnYmEoNTUsIDUzLCA0NywgMC42KTsKCWZvbnQtc2l6ZTogMC43NWVtOwoJb3ZlcmZsb3c6IGhpZGRlbjsKCW1heC1oZWlnaHQ6IDQuNWVtOwoJd29yZC1icmVhazogYnJlYWstd29yZDsKfQoKLmJvb2ttYXJrLWhyZWYgewoJZm9udC1zaXplOiAwLjc1ZW07CgltYXJnaW4tdG9wOiAwLjI1ZW07Cn0KCi5zYW5zIHsgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgIlNlZ29lIFVJIiwgSGVsdmV0aWNhLCAiQXBwbGUgQ29sb3IgRW1vamkiLCBBcmlhbCwgc2Fucy1zZXJpZiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCI7IH0KLmNvZGUgeyBmb250LWZhbWlseTogIlNGTW9uby1SZWd1bGFyIiwgTWVubG8sIENvbnNvbGFzLCAiUFQgTW9ubyIsICJMaWJlcmF0aW9uIE1vbm8iLCBDb3VyaWVyLCBtb25vc3BhY2U7IH0KLnNlcmlmIHsgZm9udC1mYW1pbHk6IEx5b24tVGV4dCwgR2VvcmdpYSwgdWktc2VyaWYsIHNlcmlmOyB9Ci5tb25vIHsgZm9udC1mYW1pbHk6IGlhd3JpdGVyLW1vbm8sIE5pdHRpLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlOyB9Ci5wZGYgLnNhbnMgeyBmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgIlNlZ29lIFVJIiwgSGVsdmV0aWNhLCAiQXBwbGUgQ29sb3IgRW1vamkiLCBBcmlhbCwgc2Fucy1zZXJpZiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIsICdUd2Vtb2ppJywgJ05vdG8gQ29sb3IgRW1vamknLCAnTm90byBTYW5zIENKSyBKUCc7IH0KLnBkZjpsYW5nKHpoLUNOKSAuc2FucyB7IGZvbnQtZmFtaWx5OiBJbnRlciwgdWktc2Fucy1zZXJpZiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBIZWx2ZXRpY2EsICJBcHBsZSBDb2xvciBFbW9qaSIsIEFyaWFsLCBzYW5zLXNlcmlmLCAiU2Vnb2UgVUkgRW1vamkiLCAiU2Vnb2UgVUkgU3ltYm9sIiwgJ1R3ZW1vamknLCAnTm90byBDb2xvciBFbW9qaScsICdOb3RvIFNhbnMgQ0pLIFNDJzsgfQoucGRmOmxhbmcoemgtVFcpIC5zYW5zIHsgZm9udC1mYW1pbHk6IEludGVyLCB1aS1zYW5zLXNlcmlmLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIEhlbHZldGljYSwgIkFwcGxlIENvbG9yIEVtb2ppIiwgQXJpYWwsIHNhbnMtc2VyaWYsICJTZWdvZSBVSSBFbW9qaSIsICJTZWdvZSBVSSBTeW1ib2wiLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2FucyBDSksgVEMnOyB9Ci5wZGY6bGFuZyhrby1LUikgLnNhbnMgeyBmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgIlNlZ29lIFVJIiwgSGVsdmV0aWNhLCAiQXBwbGUgQ29sb3IgRW1vamkiLCBBcmlhbCwgc2Fucy1zZXJpZiwgIlNlZ29lIFVJIEVtb2ppIiwgIlNlZ29lIFVJIFN5bWJvbCIsICdUd2Vtb2ppJywgJ05vdG8gQ29sb3IgRW1vamknLCAnTm90byBTYW5zIENKSyBLUic7IH0KLnBkZiAuY29kZSB7IGZvbnQtZmFtaWx5OiBTb3VyY2UgQ29kZSBQcm8sICJTRk1vbm8tUmVndWxhciIsIE1lbmxvLCBDb25zb2xhcywgIlBUIE1vbm8iLCAiTGliZXJhdGlvbiBNb25vIiwgQ291cmllciwgbW9ub3NwYWNlLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2FucyBNb25vIENKSyBKUCc7IH0KLnBkZjpsYW5nKHpoLUNOKSAuY29kZSB7IGZvbnQtZmFtaWx5OiBTb3VyY2UgQ29kZSBQcm8sICJTRk1vbm8tUmVndWxhciIsIE1lbmxvLCBDb25zb2xhcywgIlBUIE1vbm8iLCAiTGliZXJhdGlvbiBNb25vIiwgQ291cmllciwgbW9ub3NwYWNlLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2FucyBNb25vIENKSyBTQyc7IH0KLnBkZjpsYW5nKHpoLVRXKSAuY29kZSB7IGZvbnQtZmFtaWx5OiBTb3VyY2UgQ29kZSBQcm8sICJTRk1vbm8tUmVndWxhciIsIE1lbmxvLCBDb25zb2xhcywgIlBUIE1vbm8iLCAiTGliZXJhdGlvbiBNb25vIiwgQ291cmllciwgbW9ub3NwYWNlLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2FucyBNb25vIENKSyBUQyc7IH0KLnBkZjpsYW5nKGtvLUtSKSAuY29kZSB7IGZvbnQtZmFtaWx5OiBTb3VyY2UgQ29kZSBQcm8sICJTRk1vbm8tUmVndWxhciIsIE1lbmxvLCBDb25zb2xhcywgIlBUIE1vbm8iLCAiTGliZXJhdGlvbiBNb25vIiwgQ291cmllciwgbW9ub3NwYWNlLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2FucyBNb25vIENKSyBLUic7IH0KLnBkZiAuc2VyaWYgeyBmb250LWZhbWlseTogUFQgU2VyaWYsIEx5b24tVGV4dCwgR2VvcmdpYSwgdWktc2VyaWYsIHNlcmlmLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2VyaWYgQ0pLIEpQJzsgfQoucGRmOmxhbmcoemgtQ04pIC5zZXJpZiB7IGZvbnQtZmFtaWx5OiBQVCBTZXJpZiwgTHlvbi1UZXh0LCBHZW9yZ2lhLCB1aS1zZXJpZiwgc2VyaWYsICdUd2Vtb2ppJywgJ05vdG8gQ29sb3IgRW1vamknLCAnTm90byBTZXJpZiBDSksgU0MnOyB9Ci5wZGY6bGFuZyh6aC1UVykgLnNlcmlmIHsgZm9udC1mYW1pbHk6IFBUIFNlcmlmLCBMeW9uLVRleHQsIEdlb3JnaWEsIHVpLXNlcmlmLCBzZXJpZiwgJ1R3ZW1vamknLCAnTm90byBDb2xvciBFbW9qaScsICdOb3RvIFNlcmlmIENKSyBUQyc7IH0KLnBkZjpsYW5nKGtvLUtSKSAuc2VyaWYgeyBmb250LWZhbWlseTogUFQgU2VyaWYsIEx5b24tVGV4dCwgR2VvcmdpYSwgdWktc2VyaWYsIHNlcmlmLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2VyaWYgQ0pLIEtSJzsgfQoucGRmIC5tb25vIHsgZm9udC1mYW1pbHk6IFBUIE1vbm8sIGlhd3JpdGVyLW1vbm8sIE5pdHRpLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2FucyBNb25vIENKSyBKUCc7IH0KLnBkZjpsYW5nKHpoLUNOKSAubW9ubyB7IGZvbnQtZmFtaWx5OiBQVCBNb25vLCBpYXdyaXRlci1tb25vLCBOaXR0aSwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZSwgJ1R3ZW1vamknLCAnTm90byBDb2xvciBFbW9qaScsICdOb3RvIFNhbnMgTW9ubyBDSksgU0MnOyB9Ci5wZGY6bGFuZyh6aC1UVykgLm1vbm8geyBmb250LWZhbWlseTogUFQgTW9ubywgaWF3cml0ZXItbW9ubywgTml0dGksIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2UsICdUd2Vtb2ppJywgJ05vdG8gQ29sb3IgRW1vamknLCAnTm90byBTYW5zIE1vbm8gQ0pLIFRDJzsgfQoucGRmOmxhbmcoa28tS1IpIC5tb25vIHsgZm9udC1mYW1pbHk6IFBUIE1vbm8sIGlhd3JpdGVyLW1vbm8sIE5pdHRpLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlLCAnVHdlbW9qaScsICdOb3RvIENvbG9yIEVtb2ppJywgJ05vdG8gU2FucyBNb25vIENKSyBLUic7IH0KLmhpZ2hsaWdodC1kZWZhdWx0IHsKCWNvbG9yOiByZ2JhKDU1LCA1MywgNDcsIDEpOwp9Ci5oaWdobGlnaHQtZ3JheSB7Cgljb2xvcjogcmdiYSgxMjAsIDExOSwgMTE2LCAxKTsKCWZpbGw6IHJnYmEoMTIwLCAxMTksIDExNiwgMSk7Cn0KLmhpZ2hsaWdodC1icm93biB7Cgljb2xvcjogcmdiYSgxNTksIDEwNywgODMsIDEpOwoJZmlsbDogcmdiYSgxNTksIDEwNywgODMsIDEpOwp9Ci5oaWdobGlnaHQtb3JhbmdlIHsKCWNvbG9yOiByZ2JhKDIxNywgMTE1LCAxMywgMSk7CglmaWxsOiByZ2JhKDIxNywgMTE1LCAxMywgMSk7Cn0KLmhpZ2hsaWdodC15ZWxsb3cgewoJY29sb3I6IHJnYmEoMjAzLCAxNDUsIDQ3LCAxKTsKCWZpbGw6IHJnYmEoMjAzLCAxNDUsIDQ3LCAxKTsKfQouaGlnaGxpZ2h0LXRlYWwgewoJY29sb3I6IHJnYmEoNjgsIDEzMSwgOTcsIDEpOwoJZmlsbDogcmdiYSg2OCwgMTMxLCA5NywgMSk7Cn0KLmhpZ2hsaWdodC1ibHVlIHsKCWNvbG9yOiByZ2JhKDUxLCAxMjYsIDE2OSwgMSk7CglmaWxsOiByZ2JhKDUxLCAxMjYsIDE2OSwgMSk7Cn0KLmhpZ2hsaWdodC1wdXJwbGUgewoJY29sb3I6IHJnYmEoMTQ0LCAxMDEsIDE3NiwgMSk7CglmaWxsOiByZ2JhKDE0NCwgMTAxLCAxNzYsIDEpOwp9Ci5oaWdobGlnaHQtcGluayB7Cgljb2xvcjogcmdiYSgxOTMsIDc2LCAxMzgsIDEpOwoJZmlsbDogcmdiYSgxOTMsIDc2LCAxMzgsIDEpOwp9Ci5oaWdobGlnaHQtcmVkIHsKCWNvbG9yOiByZ2JhKDIxMiwgNzYsIDcxLCAxKTsKCWZpbGw6IHJnYmEoMjEyLCA3NiwgNzEsIDEpOwp9Ci5oaWdobGlnaHQtZ3JheV9iYWNrZ3JvdW5kIHsKCWJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDEsIDIzOSwgMSk7Cn0KLmhpZ2hsaWdodC1icm93bl9iYWNrZ3JvdW5kIHsKCWJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyMzgsIDIzOCwgMSk7Cn0KLmhpZ2hsaWdodC1vcmFuZ2VfYmFja2dyb3VuZCB7CgliYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMjM2LCAyMjEsIDEpOwp9Ci5oaWdobGlnaHQteWVsbG93X2JhY2tncm91bmQgewoJYmFja2dyb3VuZDogcmdiYSgyNTEsIDI0MywgMjE5LCAxKTsKfQouaGlnaGxpZ2h0LXRlYWxfYmFja2dyb3VuZCB7CgliYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjQzLCAyMzYsIDEpOwp9Ci5oaWdobGlnaHQtYmx1ZV9iYWNrZ3JvdW5kIHsKCWJhY2tncm91bmQ6IHJnYmEoMjMxLCAyNDMsIDI0OCwgMSk7Cn0KLmhpZ2hsaWdodC1wdXJwbGVfYmFja2dyb3VuZCB7CgliYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQwLCAyNDcsIDAuOCk7Cn0KLmhpZ2hsaWdodC1waW5rX2JhY2tncm91bmQgewoJYmFja2dyb3VuZDogcmdiYSgyNDksIDIzOCwgMjQzLCAwLjgpOwp9Ci5oaWdobGlnaHQtcmVkX2JhY2tncm91bmQgewoJYmFja2dyb3VuZDogcmdiYSgyNTMsIDIzNSwgMjM2LCAxKTsKfQouYmxvY2stY29sb3ItZGVmYXVsdCB7Cgljb2xvcjogaW5oZXJpdDsKCWZpbGw6IGluaGVyaXQ7Cn0KLmJsb2NrLWNvbG9yLWdyYXkgewoJY29sb3I6IHJnYmEoMTIwLCAxMTksIDExNiwgMSk7CglmaWxsOiByZ2JhKDEyMCwgMTE5LCAxMTYsIDEpOwp9Ci5ibG9jay1jb2xvci1icm93biB7Cgljb2xvcjogcmdiYSgxNTksIDEwNywgODMsIDEpOwoJZmlsbDogcmdiYSgxNTksIDEwNywgODMsIDEpOwp9Ci5ibG9jay1jb2xvci1vcmFuZ2UgewoJY29sb3I6IHJnYmEoMjE3LCAxMTUsIDEzLCAxKTsKCWZpbGw6IHJnYmEoMjE3LCAxMTUsIDEzLCAxKTsKfQouYmxvY2stY29sb3IteWVsbG93IHsKCWNvbG9yOiByZ2JhKDIwMywgMTQ1LCA0NywgMSk7CglmaWxsOiByZ2JhKDIwMywgMTQ1LCA0NywgMSk7Cn0KLmJsb2NrLWNvbG9yLXRlYWwgewoJY29sb3I6IHJnYmEoNjgsIDEzMSwgOTcsIDEpOwoJZmlsbDogcmdiYSg2OCwgMTMxLCA5NywgMSk7Cn0KLmJsb2NrLWNvbG9yLWJsdWUgewoJY29sb3I6IHJnYmEoNTEsIDEyNiwgMTY5LCAxKTsKCWZpbGw6IHJnYmEoNTEsIDEyNiwgMTY5LCAxKTsKfQouYmxvY2stY29sb3ItcHVycGxlIHsKCWNvbG9yOiByZ2JhKDE0NCwgMTAxLCAxNzYsIDEpOwoJZmlsbDogcmdiYSgxNDQsIDEwMSwgMTc2LCAxKTsKfQouYmxvY2stY29sb3ItcGluayB7Cgljb2xvcjogcmdiYSgxOTMsIDc2LCAxMzgsIDEpOwoJZmlsbDogcmdiYSgxOTMsIDc2LCAxMzgsIDEpOwp9Ci5ibG9jay1jb2xvci1yZWQgewoJY29sb3I6IHJnYmEoMjEyLCA3NiwgNzEsIDEpOwoJZmlsbDogcmdiYSgyMTIsIDc2LCA3MSwgMSk7Cn0KLmJsb2NrLWNvbG9yLWdyYXlfYmFja2dyb3VuZCB7CgliYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQxLCAyMzksIDEpOwp9Ci5ibG9jay1jb2xvci1icm93bl9iYWNrZ3JvdW5kIHsKCWJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyMzgsIDIzOCwgMSk7Cn0KLmJsb2NrLWNvbG9yLW9yYW5nZV9iYWNrZ3JvdW5kIHsKCWJhY2tncm91bmQ6IHJnYmEoMjUxLCAyMzYsIDIyMSwgMSk7Cn0KLmJsb2NrLWNvbG9yLXllbGxvd19iYWNrZ3JvdW5kIHsKCWJhY2tncm91bmQ6IHJnYmEoMjUxLCAyNDMsIDIxOSwgMSk7Cn0KLmJsb2NrLWNvbG9yLXRlYWxfYmFja2dyb3VuZCB7CgliYWNrZ3JvdW5kOiByZ2JhKDIzNywgMjQzLCAyMzYsIDEpOwp9Ci5ibG9jay1jb2xvci1ibHVlX2JhY2tncm91bmQgewoJYmFja2dyb3VuZDogcmdiYSgyMzEsIDI0MywgMjQ4LCAxKTsKfQouYmxvY2stY29sb3ItcHVycGxlX2JhY2tncm91bmQgewoJYmFja2dyb3VuZDogcmdiYSgyNDQsIDI0MCwgMjQ3LCAwLjgpOwp9Ci5ibG9jay1jb2xvci1waW5rX2JhY2tncm91bmQgewoJYmFja2dyb3VuZDogcmdiYSgyNDksIDIzOCwgMjQzLCAwLjgpOwp9Ci5ibG9jay1jb2xvci1yZWRfYmFja2dyb3VuZCB7CgliYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjM1LCAyMzYsIDEpOwp9Ci5zZWxlY3QtdmFsdWUtY29sb3ItcGluayB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyMjQsIDIzMywgMSk7IH0KLnNlbGVjdC12YWx1ZS1jb2xvci1wdXJwbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjIyLCAyMzgsIDEpOyB9Ci5zZWxlY3QtdmFsdWUtY29sb3ItZ3JlZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgMjM3LCAyMTksIDEpOyB9Ci5zZWxlY3QtdmFsdWUtY29sb3ItZ3JheSB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAyMjYsIDIyNCwgMSk7IH0KLnNlbGVjdC12YWx1ZS1jb2xvci10cmFuc2x1Y2VudEdyYXkgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDM3NSk7IH0KLnNlbGVjdC12YWx1ZS1jb2xvci1vcmFuZ2UgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjIyLCAyMDEsIDEpOyB9Ci5zZWxlY3QtdmFsdWUtY29sb3ItYnJvd24geyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjI0LCAyMTgsIDEpOyB9Ci5zZWxlY3QtdmFsdWUtY29sb3ItcmVkIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyNiwgMjIxLCAxKTsgfQouc2VsZWN0LXZhbHVlLWNvbG9yLXllbGxvdyB7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAyMzYsIDIwMCwgMSk7IH0KLnNlbGVjdC12YWx1ZS1jb2xvci1ibHVlIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIyOSwgMjM5LCAxKTsgfQoKLmNoZWNrYm94IHsKCWRpc3BsYXk6IGlubGluZS1mbGV4OwoJdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tOwoJd2lkdGg6IDE2OwoJaGVpZ2h0OiAxNjsKCWJhY2tncm91bmQtc2l6ZTogMTZweDsKCW1hcmdpbi1sZWZ0OiAycHg7CgltYXJnaW4tcmlnaHQ6IDVweDsKfQoKLmNoZWNrYm94LW9uIHsKCWJhY2tncm91bmQtaW1hZ2U6IHVybCgiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnJTIwd2lkdGglM0QlMjIxNiUyMiUyMGhlaWdodCUzRCUyMjE2JTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwMTYlMjAxNiUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlM0UlMEElM0NyZWN0JTIwd2lkdGglM0QlMjIxNiUyMiUyMGhlaWdodCUzRCUyMjE2JTIyJTIwZmlsbCUzRCUyMiUyMzU4QTlENyUyMiUyRiUzRSUwQSUzQ3BhdGglMjBkJTNEJTIyTTYuNzE0MjklMjAxMi4yODUyTDE0JTIwNC45OTk1TDEyLjcxNDMlMjAzLjcxNDM2TDYuNzE0MjklMjA5LjcxMzc4TDMuMjg1NzElMjA2LjI4MzFMMiUyMDcuNTcwOTJMNi43MTQyOSUyMDEyLjI4NTJaJTIyJTIwZmlsbCUzRCUyMndoaXRlJTIyJTJGJTNFJTBBJTNDJTJGc3ZnJTNFIik7Cn0KCi5jaGVja2JveC1vZmYgewoJYmFja2dyb3VuZC1pbWFnZTogdXJsKCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmclMjB3aWR0aCUzRCUyMjE2JTIyJTIwaGVpZ2h0JTNEJTIyMTYlMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjAxNiUyMDE2JTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUzRSUwQSUzQ3JlY3QlMjB4JTNEJTIyMC43NSUyMiUyMHklM0QlMjIwLjc1JTIyJTIwd2lkdGglM0QlMjIxNC41JTIyJTIwaGVpZ2h0JTNEJTIyMTQuNSUyMiUyMGZpbGwlM0QlMjJ3aGl0ZSUyMiUyMHN0cm9rZSUzRCUyMiUyMzM2MzUyRiUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjEuNSUyMiUyRiUzRSUwQSUzQyUyRnN2ZyUzRSIpOwp9CgkKPC9zdHlsZT48L2hlYWQ+PGJvZHk+PGFydGljbGUgaWQ9IjM0ODUyYzUyLTkxMTgtNGQwYS1hODkzLWJjYjMxYjY0N2U2NSIgY2xhc3M9InBhZ2Ugc2FucyI+PGhlYWRlcj48aW1nIGNsYXNzPSJwYWdlLWNvdmVyLWltYWdlIiBzcmM9Imh0dHBzOi8vd3d3Lm5vdGlvbi5zby9pbWFnZXMvcGFnZS1jb3Zlci9zb2xpZF95ZWxsb3cucG5nIiBzdHlsZT0ib2JqZWN0LXBvc2l0aW9uOmNlbnRlciA0MCUiLz48ZGl2IGNsYXNzPSJwYWdlLWhlYWRlci1pY29uIHBhZ2UtaGVhZGVyLWljb24td2l0aC1jb3ZlciI+PHNwYW4gY2xhc3M9Imljb24iPvCfkYs8L3NwYW4+PC9kaXY+PGgxIGNsYXNzPSJwYWdlLXRpdGxlIj7tj6ztirjtj7TrpqzsmKQ8L2gxPjwvaGVhZGVyPjxkaXYgY2xhc3M9InBhZ2UtYm9keSI+PGZpZ3VyZSBjbGFzcz0iYmxvY2stY29sb3ItZ3JheV9iYWNrZ3JvdW5kIGNhbGxvdXQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTpwcmUtd3JhcDtkaXNwbGF5OmZsZXgiIGlkPSI2ZDExY2FhNS1jYmFmLTRhN2QtYjlhMS0zNDk5Yjg0ZGVlNzMiPjxkaXYgc3R5bGU9ImZvbnQtc2l6ZToxLjVlbSI+PHNwYW4gY2xhc3M9Imljb24iPvCfkqE8L3NwYW4+PC9kaXY+PGRpdiBzdHlsZT0id2lkdGg6MTAwJSI+PHN0cm9uZz5Ob3Rpb24g7YyBOiA8L3N0cm9uZz7snbQg7YWc7ZSM66a/7J2EIO2ZnOyaqe2VtCDsnpHsl4XtlZwg7ZSE66Gc7KCd7Yq466W8IOygleumrO2VmOqzoCwg7ZSE66Gc7KCd7Yq467OEIOuqqeyggeqzvCDqs7zsoJXsnYQg7J6Q7IS47Z6IIOyEpOuqhe2VmOyEuOyalC4g7Jik66W47Kq9IOyDgeuLqOydmCA8Y29kZT7qs7XsnKA8L2NvZGU+IOuplOuJtOyXkOyEnCA8Y29kZT7sm7nsl5DshJwg6rO17JygPC9jb2RlPuulvCDtmZzshLHtmZTtlbQg7Y6Y7J207KeA66W8IOqzteycoO2VoCDsiJgg7J6I7Iq164uI64ukLiDrjZQg7J6Q7IS47Z6IIOyVjOyVhOuztOugpOuptCA8YSBocmVmPSJodHRwczovL3d3dy5ub3Rpb24uc28va28ta3IvaGVscC9wdWJsaWMtcGFnZXMtYW5kLXdlYi1wdWJsaXNoaW5nIj7sl6zquLA8L2E+66W8IO2BtOumre2VmOyEuOyalC48L2Rpdj48L2ZpZ3VyZT48cCBpZD0iZDE1Y2U1NGEtN2Q3My00NGY3LTk1MDUtYWFmNmJlNTNlMGFhIiBjbGFzcz0iIj4KPC9wPjxibG9ja3F1b3RlIGlkPSIxN2VjMWE1Mi00YzVmLTQ1ZTgtYmM4My05ZTlmMDlmNjg3NWEiIGNsYXNzPSIiPvCfkYvCoOyViOuFle2VmOyEuOyalCwg7KO864uI7Ja0IOybuSDqsJzrsJzsnpAgPHN0cm9uZz7snoTtmITsi508L3N0cm9uZz4g7J6F64uI64ukLjwvYmxvY2txdW90ZT48cCBpZD0iMGRmZTZlZTEtYWIwNy00MWM4LTlkZWEtYWNhYTg3YTE5NGFhIiBjbGFzcz0iIj4KPC9wPjxwIGlkPSJiNjNhOTE4OS1lYTc4LTQ4NGEtYjU0NS01ZGFiOTc0ZjEzMDkiIGNsYXNzPSIiPjxtYXJrIGNsYXNzPSJoaWdobGlnaHQtZ3JheSI+4oaTIOqwgSDsubTrk5zrpbwg7YG066at7ZWY66m0IOyDneyEsSDsnbzsi5wsIO2VteyLrCDslYTsnbTrlJTslrQsIOy1nOq3vCDrsoTsoIQg65Ox7J2EIO2ZleyduO2VoCDsiJgg7J6I7Ja07JqULjwvbWFyaz48L3A+PGRpdiBpZD0iMzkwNjEyMGYtOTVjNC00MzBhLWJlMjMtY2Y0NTA2Mjg3NTg4IiBjbGFzcz0iY29sbGVjdGlvbi1jb250ZW50Ij48aDQgY2xhc3M9ImNvbGxlY3Rpb24tdGl0bGUiPu2UhOuhnOygne2KuDwvaDQ+PHRhYmxlIGNsYXNzPSJjb2xsZWN0aW9uLWNvbnRlbnQiPjx0aGVhZD48dHI+PHRoPjxzcGFuIGNsYXNzPSJpY29uIHByb3BlcnR5LWljb24iPjxzdmcgdmlld0JveD0iMCAwIDE2IDE2IiBzdHlsZT0id2lkdGg6MTRweDtoZWlnaHQ6MTRweDtkaXNwbGF5OmJsb2NrO2ZpbGw6cmdiYSg1NSwgNTMsIDQ3LCAwLjQ1KTtmbGV4LXNocmluazowOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW4iIGNsYXNzPSJ0eXBlc1RpdGxlIj48cGF0aCBkPSJNMC42Mzc2OTUgMTMuMTkxNEMxLjA5NTcgMTMuMTkxNCAxLjMyODEyIDEzIDEuNDc4NTIgMTIuNTIxNUwyLjI0NDE0IDEwLjM4ODdINi4xNDc0Nkw2LjkwNjI1IDEyLjUyMTVDNy4wNTY2NCAxMyA3LjI5NTkgMTMuMTkxNCA3Ljc0NzA3IDEzLjE5MTRDOC4yMjU1OSAxMy4xOTE0IDguNTMzMiAxMi45MDQzIDguNTMzMiAxMi40NTMxQzguNTMzMiAxMi4yODkxIDguNTA1ODYgMTIuMTUyMyA4LjQ0NDM0IDExLjk2NzhMNS40MTYwMiAzLjc5MTk5QzUuMjA0MSAzLjIxNzc3IDQuODIxMjkgMi45Mzc1IDQuMTk5MjIgMi45Mzc1QzMuNjA0NDkgMi45Mzc1IDMuMjE0ODQgMy4yMTc3NyAzLjAxNjYgMy43ODUxNkwtMC4wMzIyMjY2IDEyLjAwMkMtMC4wOTM3NSAxMi4xNzk3IC0wLjEyMTA5NCAxMi4zMjMyIC0wLjEyMTA5NCAxMi40NjY4Qy0wLjEyMTA5NCAxMi45MTggMC4xNjYwMTYgMTMuMTkxNCAwLjYzNzY5NSAxMy4xOTE0Wk0yLjYzMzc5IDkuMTI0MDJMNC4xNzg3MSA0LjY4MDY2SDQuMjE5NzNMNS43NjQ2NSA5LjEyNDAySDIuNjMzNzlaTTEyLjI3OTMgMTMuMjMyNEMxMy4zMTE1IDEzLjIzMjQgMTQuMjg5MSAxMi42Nzg3IDE0LjcxMjkgMTEuODAzN0gxNC43NDAyVjEyLjU3NjJDMTQuNzQ3MSAxMi45ODYzIDE1LjAyNzMgMTMuMjM5MyAxNS40MjM4IDEzLjIzOTNDMTUuODM0IDEzLjIzOTMgMTYuMTE0MyAxMi45Nzk1IDE2LjExNDMgMTIuNTIxNVY4LjAwOTc3QzE2LjExNDMgNi40OTkwMiAxNC45NjU4IDUuNTIxNDggMTMuMTU0MyA1LjUyMTQ4QzExLjc2NjYgNS41MjE0OCAxMC42NTkyIDYuMDg4ODcgMTAuMjY5NSA2Ljk5MTIxQzEwLjE5NDMgNy4xNTUyNyAxMC4xNTMzIDcuMzEyNSAxMC4xNTMzIDcuNDYyODlDMTAuMTUzMyA3LjgxMTUyIDEwLjQwNjIgOC4wNDM5NSAxMC43Njg2IDguMDQzOTVDMTEuMDIxNSA4LjA0Mzk1IDExLjIxMjkgNy45NDgyNCAxMS4zNDk2IDcuNzM2MzNDMTEuNzUyOSA2Ljk5MTIxIDEyLjI4NjEgNi42NTYyNSAxMy4xMDY0IDYuNjU2MjVDMTQuMDk3NyA2LjY1NjI1IDE0LjY5OTIgNy4yMDk5NiAxNC42OTkyIDguMTEyM1Y4LjY3Mjg1TDEyLjU2NjQgOC43OTU5QzEwLjc2ODYgOC44OTE2IDkuNzc3MzQgOS42OTgyNCA5Ljc3NzM0IDExLjAxMDdDOS43NzczNCAxMi4zMzY5IDEwLjgwOTYgMTMuMjMyNCAxMi4yNzkzIDEzLjIzMjRaTTEyLjY2MjEgMTIuMTM4N0MxMS44MDA4IDEyLjEzODcgMTEuMjEyOSAxMS42NjcgMTEuMjEyOSAxMC45NTYxQzExLjIxMjkgMTAuMjcyNSAxMS43NTk4IDkuODIxMjkgMTIuNzU3OCA5Ljc1OTc3TDE0LjY5OTIgOS42Mjk4OFYxMC4zMjAzQzE0LjY5OTIgMTEuMzQ1NyAxMy43OTY5IDEyLjEzODcgMTIuNjYyMSAxMi4xMzg3WiI+PC9wYXRoPjwvc3ZnPjwvc3Bhbj7snbTrpoQ8L3RoPjx0aD48c3BhbiBjbGFzcz0iaWNvbiBwcm9wZXJ0eS1pY29uIj48c3ZnIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9IndpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7ZGlzcGxheTpibG9jaztmaWxsOnJnYmEoNTUsIDUzLCA0NywgMC40NSk7ZmxleC1zaHJpbms6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIiBjbGFzcz0idHlwZXNDcmVhdGVkQXQiPjxwYXRoIGQ9Ik04IDE1LjEyNkMxMS44NjIzIDE1LjEyNiAxNS4wNjE1IDExLjkzMzYgMTUuMDYxNSA4LjA2NDQ1QzE1LjA2MTUgNC4yMDIxNSAxMS44NjIzIDEuMDAyOTMgNy45OTMxNiAxLjAwMjkzQzQuMTMwODYgMS4wMDI5MyAwLjkzODQ3NyA0LjIwMjE1IDAuOTM4NDc3IDguMDY0NDVDMC45Mzg0NzcgMTEuOTMzNiA0LjEzNzcgMTUuMTI2IDggMTUuMTI2Wk04IDEzLjczODNDNC44NTU0NyAxMy43MzgzIDIuMzMzMDEgMTEuMjA5IDIuMzMzMDEgOC4wNjQ0NUMyLjMzMzAxIDQuOTE5OTIgNC44NDg2MyAyLjM5NzQ2IDcuOTkzMTYgMi4zOTc0NkMxMS4xMzc3IDIuMzk3NDYgMTMuNjczOCA0LjkxOTkyIDEzLjY3MzggOC4wNjQ0NUMxMy42NzM4IDExLjIwOSAxMS4xNDQ1IDEzLjczODMgOCAxMy43MzgzWk00LjU0MTAyIDguOTEyMTFINy45OTMxNkM4LjMwMDc4IDguOTEyMTEgOC41NDAwNCA4LjY3Mjg1IDguNTQwMDQgOC4zNzIwN1YzLjg4NzdDOC41NDAwNCAzLjU4NjkxIDguMzAwNzggMy4zNDc2NiA3Ljk5MzE2IDMuMzQ3NjZDNy42OTIzOCAzLjM0NzY2IDcuNDUzMTIgMy41ODY5MSA3LjQ1MzEyIDMuODg3N1Y3LjgzMjAzSDQuNTQxMDJDNC4yMzM0IDcuODMyMDMgNC4wMDA5OCA4LjA2NDQ1IDQuMDAwOTggOC4zNzIwN0M0LjAwMDk4IDguNjcyODUgNC4yMzM0IDguOTEyMTEgNC41NDEwMiA4LjkxMjExWiI+PC9wYXRoPjwvc3ZnPjwvc3Bhbj7sg53shLEg7J287IucPC90aD48dGg+PHNwYW4gY2xhc3M9Imljb24gcHJvcGVydHktaWNvbiI+PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHN0eWxlPSJ3aWR0aDoxNHB4O2hlaWdodDoxNHB4O2Rpc3BsYXk6YmxvY2s7ZmlsbDpyZ2JhKDU1LCA1MywgNDcsIDAuNDUpO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbiIgY2xhc3M9InR5cGVzVXJsIj48cGF0aCBkPSJNNy42OTkyMiAxMC44OTQ1TDguNzM4MjggOS44NDg2M0M3LjkxNzk3IDkuNzczNDQgNy4zNDM3NSA5LjUxMzY3IDYuOTE5OTIgOS4wODk4NEM1Ljc2NDY1IDcuOTM0NTcgNS43NjQ2NSA2LjI5Mzk1IDYuOTEzMDkgNS4xNDU1MUw5LjE4MjYyIDIuODc1OThDMTAuMzM3OSAxLjcyMDcgMTEuOTcxNyAxLjcyMDcgMTMuMTI3IDIuODc1OThDMTQuMjg5MSA0LjA0NDkyIDE0LjI4MjIgNS42NzE4OCAxMy4xMzM4IDYuODIwMzFMMTEuOTU4IDcuOTk2MDlDMTIuMTc2OCA4LjQ5NTEyIDEyLjI0NTEgOS4xMDM1MiAxMi4xMjg5IDkuNjI5ODhMMTQuMDkwOCA3LjY3NDhDMTUuNzcyNSA2IDE1Ljc3OTMgMy42MjEwOSAxNC4wODQgMS45MjU3OEMxMi4zODg3IDAuMjIzNjMzIDEwLjAwOTggMC4yMzczMDUgOC4zMzQ5NiAxLjkxMjExTDUuOTU2MDUgNC4yOTc4NUM0LjI4MTI1IDUuOTcyNjYgNC4yNjc1OCA4LjM1MTU2IDUuOTYyODkgMTAuMDQ2OUM2LjM2NjIxIDEwLjQ0MzQgNi45MDYyNSAxMC43NDQxIDcuNjk5MjIgMTAuODk0NVpNOC4zMDA3OCA1LjEzMTg0TDcuMjY4NTUgNi4xNzc3M0M4LjA4MjAzIDYuMjUyOTMgOC42NjMwOSA2LjUxOTUzIDkuMDgwMDggNi45MzY1MkMxMC4yNDIyIDguMDk4NjMgMTAuMjQyMiA5LjczMjQyIDkuMDg2OTEgMTAuODgwOUw2LjgxNzM4IDEzLjE1MDRDNS42NjIxMSAxNC4zMDU3IDQuMDM1MTYgMTQuMzA1NyAyLjg3MzA1IDEzLjE1MDRDMS43MTA5NCAxMS45ODgzIDEuNzE3NzcgMTAuMzU0NSAyLjg3MzA1IDkuMjA2MDVMNC4wNDE5OSA4LjAzMDI3QzMuODMwMDggNy41MzEyNSAzLjc1NDg4IDYuOTI5NjkgMy44NzEwOSA2LjM5NjQ4TDEuOTE2MDIgOC4zNTE1NkMwLjIzNDM3NSAxMC4wMjY0IDAuMjI3NTM5IDEyLjQxMjEgMS45MjI4NSAxNC4xMDc0QzMuNjE4MTYgMTUuODAyNyA1Ljk5NzA3IDE1Ljc4OTEgNy42NzE4OCAxNC4xMTQzTDEwLjA0MzkgMTEuNzM1NEMxMS43MjU2IDEwLjA1MzcgMTEuNzMyNCA3LjY3NDggMTAuMDM3MSA1Ljk4NjMzQzkuNjQwNjIgNS41ODMwMSA5LjEwMDU5IDUuMjgyMjMgOC4zMDA3OCA1LjEzMTg0WiI+PC9wYXRoPjwvc3ZnPjwvc3Bhbj7soIDsnqXshow8L3RoPjx0aD48c3BhbiBjbGFzcz0iaWNvbiBwcm9wZXJ0eS1pY29uIj48c3ZnIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9IndpZHRoOjE0cHg7aGVpZ2h0OjE0cHg7ZGlzcGxheTpibG9jaztmaWxsOnJnYmEoNTUsIDUzLCA0NywgMC40NSk7ZmxleC1zaHJpbms6MDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuIiBjbGFzcz0idHlwZXNNdWx0aXBsZVNlbGVjdCI+PHBhdGggZD0iTTEuOTE2MDIgNC44Mzc4OUMyLjQ0MjM4IDQuODM3ODkgMi44NzMwNSA0LjQwNzIzIDIuODczMDUgMy44NzQwMkMyLjg3MzA1IDMuMzQ3NjYgMi40NDIzOCAyLjkxNjk5IDEuOTE2MDIgMi45MTY5OUMxLjM4MjgxIDIuOTE2OTkgMC45NTIxNDggMy4zNDc2NiAwLjk1MjE0OCAzLjg3NDAyQzAuOTUyMTQ4IDQuNDA3MjMgMS4zODI4MSA0LjgzNzg5IDEuOTE2MDIgNC44Mzc4OVpNNS4xMDg0IDQuNTIzNDRIMTQuMzk4NEMxNC43NjA3IDQuNTIzNDQgMTUuMDQ3OSA0LjIzNjMzIDE1LjA0NzkgMy44NzQwMkMxNS4wNDc5IDMuNTExNzIgMTQuNzYwNyAzLjIyNDYxIDE0LjM5ODQgMy4yMjQ2MUg1LjEwODRDNC43NDYwOSAzLjIyNDYxIDQuNDU4OTggMy41MTE3MiA0LjQ1ODk4IDMuODc0MDJDNC40NTg5OCA0LjIzNjMzIDQuNzQ2MDkgNC41MjM0NCA1LjEwODQgNC41MjM0NFpNMS45MTYwMiA5LjAzNTE2QzIuNDQyMzggOS4wMzUxNiAyLjg3MzA1IDguNjA0NDkgMi44NzMwNSA4LjA3MTI5QzIuODczMDUgNy41NDQ5MiAyLjQ0MjM4IDcuMTE0MjYgMS45MTYwMiA3LjExNDI2QzEuMzgyODEgNy4xMTQyNiAwLjk1MjE0OCA3LjU0NDkyIDAuOTUyMTQ4IDguMDcxMjlDMC45NTIxNDggOC42MDQ0OSAxLjM4MjgxIDkuMDM1MTYgMS45MTYwMiA5LjAzNTE2Wk01LjEwODQgOC43MjA3SDE0LjM5ODRDMTQuNzYwNyA4LjcyMDcgMTUuMDQ3OSA4LjQzMzU5IDE1LjA0NzkgOC4wNzEyOUMxNS4wNDc5IDcuNzA4OTggMTQuNzYwNyA3LjQyMTg4IDE0LjM5ODQgNy40MjE4OEg1LjEwODRDNC43NDYwOSA3LjQyMTg4IDQuNDU4OTggNy43MDg5OCA0LjQ1ODk4IDguMDcxMjlDNC40NTg5OCA4LjQzMzU5IDQuNzQ2MDkgOC43MjA3IDUuMTA4NCA4LjcyMDdaTTEuOTE2MDIgMTMuMjMyNEMyLjQ0MjM4IDEzLjIzMjQgMi44NzMwNSAxMi44MDE4IDIuODczMDUgMTIuMjY4NkMyLjg3MzA1IDExLjc0MjIgMi40NDIzOCAxMS4zMTE1IDEuOTE2MDIgMTEuMzExNUMxLjM4MjgxIDExLjMxMTUgMC45NTIxNDggMTEuNzQyMiAwLjk1MjE0OCAxMi4yNjg2QzAuOTUyMTQ4IDEyLjgwMTggMS4zODI4MSAxMy4yMzI0IDEuOTE2MDIgMTMuMjMyNFpNNS4xMDg0IDEyLjkxOEgxNC4zOTg0QzE0Ljc2MDcgMTIuOTE4IDE1LjA0NzkgMTIuNjMwOSAxNS4wNDc5IDEyLjI2ODZDMTUuMDQ3OSAxMS45MDYyIDE0Ljc2MDcgMTEuNjE5MSAxNC4zOTg0IDExLjYxOTFINS4xMDg0QzQuNzQ2MDkgMTEuNjE5MSA0LjQ1ODk4IDExLjkwNjIgNC40NTg5OCAxMi4yNjg2QzQuNDU4OTggMTIuNjMwOSA0Ljc0NjA5IDEyLjkxOCA1LjEwODQgMTIuOTE4WiI+PC9wYXRoPjwvc3ZnPjwvc3Bhbj7tg5zqt7g8L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PHRyIGlkPSJiYjE0ODc5OS02NjU1LTQ2MzMtOTUxZC0yZmVkZTg0N2YzMjYiPjx0ZCBjbGFzcz0iY2VsbC10aXRsZSI+PGEgaHJlZj0iaHR0cHM6Ly93d3cubm90aW9uLnNvL1Byb2ZpbGUtYmIxNDg3OTk2NjU1NDYzMzk1MWQyZmVkZTg0N2YzMjYiPjxzcGFuIGNsYXNzPSJpY29uIj7wn46oPC9zcGFuPlByb2ZpbGU8L2E+PC90ZD48dGQgY2xhc3M9ImNlbGwtZ3FiJmd0OyI+PHRpbWU+QDIwMjPrhYQgM+yblCAyOeydvCDsmKTtm4QgNTo0NDwvdGltZT48L3RkPjx0ZCBjbGFzcz0iY2VsbC1qS1VTIj48YSBocmVmPSJodHRwczovL2dpdGh1Yi5jb20vQmVya2xleUxpbS9wcm9maWxlIiBjbGFzcz0idXJsLXZhbHVlIj5odHRwczovL2dpdGh1Yi5jb20vQmVya2xleUxpbS9wcm9maWxlPC9hPjwvdGQ+PHRkIGNsYXNzPSJjZWxsLWV4V18iPjxzcGFuIGNsYXNzPSJzZWxlY3RlZC12YWx1ZSBzZWxlY3QtdmFsdWUtY29sb3Itb3JhbmdlIj5SZWFjdDwvc3Bhbj48c3BhbiBjbGFzcz0ic2VsZWN0ZWQtdmFsdWUgc2VsZWN0LXZhbHVlLWNvbG9yLW9yYW5nZSI+U3ByaW5nIGJvb3Q8L3NwYW4+PHNwYW4gY2xhc3M9InNlbGVjdGVkLXZhbHVlIHNlbGVjdC12YWx1ZS1jb2xvci1ncmVlbiI+VUkvVVg8L3NwYW4+PHNwYW4gY2xhc3M9InNlbGVjdGVkLXZhbHVlIHNlbGVjdC12YWx1ZS1jb2xvci1ncmF5Ij5hd3M8L3NwYW4+PHNwYW4gY2xhc3M9InNlbGVjdGVkLXZhbHVlIHNlbGVjdC12YWx1ZS1jb2xvci1ibHVlIj5naXQ8L3NwYW4+PHNwYW4gY2xhc3M9InNlbGVjdGVkLXZhbHVlIHNlbGVjdC12YWx1ZS1jb2xvci15ZWxsb3ciPmphdmE8L3NwYW4+PHNwYW4gY2xhc3M9InNlbGVjdGVkLXZhbHVlIHNlbGVjdC12YWx1ZS1jb2xvci15ZWxsb3ciPmpwYTwvc3Bhbj48L3RkPjwvdHI+PHRyIGlkPSI0NGRmYWMzYS1mYWZmLTQ5NjUtOWNhYi1jZWM3MWUzOWQ3NzkiPjx0ZCBjbGFzcz0iY2VsbC10aXRsZSI+PGEgaHJlZj0iaHR0cHM6Ly93d3cubm90aW9uLnNvL0ludGVyaW9yLTQ0ZGZhYzNhZmFmZjQ5NjU5Y2FiY2VjNzFlMzlkNzc5Ij48c3BhbiBjbGFzcz0iaWNvbiI+8J+WvO+4jzwvc3Bhbj5JbnRlcmlvcjwvYT48L3RkPjx0ZCBjbGFzcz0iY2VsbC1ncWImZ3Q7Ij48dGltZT5AMjAyM+uFhCAz7JuUIDI57J28IOyYpO2bhCA1OjQ0PC90aW1lPjwvdGQ+PHRkIGNsYXNzPSJjZWxsLWpLVVMiPjxhIGhyZWY9Imh0dHBzOi8vZ2l0aHViLmNvbS9CZXJrbGV5TGltL2ludGVyaW9yX3Rlc3QiIGNsYXNzPSJ1cmwtdmFsdWUiPmh0dHBzOi8vZ2l0aHViLmNvbS9CZXJrbGV5TGltL2ludGVyaW9yX3Rlc3Q8L2E+PC90ZD48dGQgY2xhc3M9ImNlbGwtZXhXXyI+PHNwYW4gY2xhc3M9InNlbGVjdGVkLXZhbHVlIHNlbGVjdC12YWx1ZS1jb2xvci1vcmFuZ2UiPlNwcmluZyBib290PC9zcGFuPjxzcGFuIGNsYXNzPSJzZWxlY3RlZC12YWx1ZSBzZWxlY3QtdmFsdWUtY29sb3ItZ3JlZW4iPlVJL1VYPC9zcGFuPjxzcGFuIGNsYXNzPSJzZWxlY3RlZC12YWx1ZSBzZWxlY3QtdmFsdWUtY29sb3ItZ3JheSI+YXdzPC9zcGFuPjxzcGFuIGNsYXNzPSJzZWxlY3RlZC12YWx1ZSBzZWxlY3QtdmFsdWUtY29sb3ItYmx1ZSI+Z2l0PC9zcGFuPjxzcGFuIGNsYXNzPSJzZWxlY3RlZC12YWx1ZSBzZWxlY3QtdmFsdWUtY29sb3IteWVsbG93Ij5qYXZhPC9zcGFuPjxzcGFuIGNsYXNzPSJzZWxlY3RlZC12YWx1ZSBzZWxlY3QtdmFsdWUtY29sb3ItYmx1ZSI+amF2YXNjcmlwdDwvc3Bhbj48c3BhbiBjbGFzcz0ic2VsZWN0ZWQtdmFsdWUgc2VsZWN0LXZhbHVlLWNvbG9yLWdyZWVuIj5qcXVlcnk8L3NwYW4+PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT48L2Rpdj48cCBpZD0iYTMwYzQwZTgtYzJhNi00NzA4LWJmNTctNDU1MTllYmFmNTc0IiBjbGFzcz0iIj4KPC9wPjxociBpZD0iYjAyZGQwYWUtMjE2Yy00MGU4LWJjNjAtM2M4MTdiZTliNjhjIi8+PGRpdiBpZD0iNDQxMzFjMTktNjM4MC00YmM4LTkxMzMtOTAyNzM3YzFiNjYwIiBjbGFzcz0iY29sdW1uLWxpc3QiPjxkaXYgaWQ9ImYzOTM0NWNkLTM3MzMtNDc1Zi04Yjk1LWE2OGQ5Yzk1NzUxOCIgc3R5bGU9IndpZHRoOjMzLjMzMzMzMzMzMzMzMzMzNiUiIGNsYXNzPSJjb2x1bW4iPjxwIGlkPSIwNjQ5ODY5Zi0zYmU4LTQ1MGEtYWY2OC1jYmEyOTkyM2VjNjciIGNsYXNzPSIiPjxzdHJvbmc+PGEgaHJlZj0iaHR0cHM6Ly93d3cubm90aW9uLnNvbWFpbHRvOiI+8J+TqMKg7J2066mU7J28IOyjvOyGjCDsnoXroKXtlZjquLDihpI8L2E+PC9zdHJvbmc+PC9wPjxwIGlkPSJjOGUwNWVmNC1lZGZhLTQ3NmQtOGU5NC1iZWNhMmEzZjBhYWUiIGNsYXNzPSIiPgo8L3A+PC9kaXY+PGRpdiBpZD0iNTU5OWM0NzEtMjk5NC00ZjBhLTllMGItODUxNGVlYzJjZmZkIiBzdHlsZT0id2lkdGg6MzMuMzMzMzMzMzMzMzMzMzM2JSIgY2xhc3M9ImNvbHVtbiI+PHAgaWQ9IjhiMGQ4OTY1LTIxNzYtNDhjOC04MDU2LWE4MTRkZWViOGU2YiIgY2xhc3M9IiI+PHN0cm9uZz48YSBocmVmPSJodHRwczovL3d3dy5ub3Rpb24uc290ZWw6Ij7wn6SZwqDsoITtmZTrsojtmLgg7J6F66Cl7ZWY6riwIOKGkjwvYT48L3N0cm9uZz48L3A+PC9kaXY+PGRpdiBpZD0iMmI1NTJjNDktNzM0NS00NmExLWFkNjAtMTFjNjFlN2M3YmUyIiBzdHlsZT0id2lkdGg6MzMuMzMzMzMzMzMzMzMzMzMlIiBjbGFzcz0iY29sdW1uIj48cCBpZD0iNmRlN2VkNDItODYyMS00ZjA0LWExMzgtYTIyNjE2YTRiZDViIiBjbGFzcz0iIj48YSBocmVmPSJodHRwczovL3d3dy5ub3Rpb24uc28va28ta3IvdGVtcGxhdGVzL3Jlc3VtZSI+PHN0cm9uZz7wn5OdwqDsnbTroKXshJwg66eB7YGsIOyeheugpe2VmOq4sCDihpI8L3N0cm9uZz48L2E+PC9wPjxwIGlkPSIwMzBjZGY1My01ODhkLTQ5MTQtODU0MS03MTkyZmM3YjkzYmIiIGNsYXNzPSIiPgo8L3A+PC9kaXY+PC9kaXY+PHAgaWQ9IjRlNDNkOGE1LWFhYmEtNGEyNC04NWE1LTkxYTI3NmNlY2RhOSIgY2xhc3M9IiI+CjwvcD48L2Rpdj48L2FydGljbGU+PC9ib2R5PjwvaHRtbD4=');
/*!40000 ALTER TABLE `projectv2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smallskill`
--

DROP TABLE IF EXISTS `smallskill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smallskill`
--

LOCK TABLES `smallskill` WRITE;
/*!40000 ALTER TABLE `smallskill` DISABLE KEYS */;
INSERT INTO `smallskill` VALUES (2,'Spring boot','spring boot로 환경 설정 부터 시작하여 MongoDB, My-Batis, JPA, 스케쥴링, Oracle, No-SQL, interceptor, Session 등 다양한 기법으로 다룰 수 있습니다.',1,'small-skill'),(4,'Servlet','Java를 통해 웹 페이지를 구현을 할 수 있고, 현재 숙련도 기준은 학원에서 배운 수준으로 참조하여여 HTTPSession을 통해 로그인/로그아웃 처리가 가능하고 out.print() 메소드로 이용하여 html 입력이 가능합니다.',1,'small-skill'),(5,'JQuery','공공기관 프로젝트로 5년 이상 경험이 있습니다.',3,'small-skill'),(6,'ReactJS','SPA 기법으로 Redux와 상태관리 등등 반응형웹까지 모두 구현 가능합니다.',3,'small-skill'),(7,'Handlebarjs','TypeScript 기반으로 사용하였고, JSP 기술인 JSTL을 대처하여 사용한 것으로 성능이 매우 우수해서 자주 애용한 적 있습니다.',3,'small-skill'),(8,'Gradle','Spring, spring boot 등 환경 설정 뿐만 아닌 각각 OS 제어까지 사용 가능합니다.',4,'small-skill'),(10,'MySQL WorkBench','MySQL을 관리하는 도구 중 하나로 간단한 쿼리문 및 데이터 베이스 정보 등 쉽게 활용 할 수 있습니다.',5,'small-skill'),(11,'JSP','학원 프로젝트 및 공공기간 프로젝트로 5년간 주력으로 다뤘던 기술 중 하나입니다.',1,'small-skill'),(12,'JPA','대기업 프로젝트에서 처음으로 사용하여 N+1문제의 대해 잘 알고, 사용방법의 대해 응용 가능합니다.',1,'small-skill'),(13,'BootStrap','CSS API 중 하나로 CSS API 문서를 참고하여 개발 가능합니다. 현재 React로 이용하여 React-Strap으로 이용하여 간단하게 화면단을 구현 가능합니다. 이부분의 대해서는 응용적으로 숙련도를 올리는 것을 목표로 합니다.',12,'small-skill'),(14,'DBever','JDBC를 연동한 모델링 툴을 활용하여 데이터 조작이 가능합니다.',5,'small-skill'),(15,'JWT','Session, cookie 로그인 방식을 탈피하기 위해 사용하고 있으며 JWT의 기본 지식이 탄탄합니다.',1,'small-skill'),(16,'DraftJS','Reactjs 기반으로 사용 경험 있습니다.',3,'small-skill');
/*!40000 ALTER TABLE `smallskill` ENABLE KEYS */;
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
-- Table structure for table `together`
--

DROP TABLE IF EXISTS `together`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `together` (
  `ino` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `contents` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `viewNumber` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`ino`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `together`
--

LOCK TABLES `together` WRITE;
/*!40000 ALTER TABLE `together` DISABLE KEYS */;
/*!40000 ALTER TABLE `together` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trequest`
--

DROP TABLE IF EXISTS `trequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trequest` (
  `rno` int NOT NULL AUTO_INCREMENT,
  `company` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `person` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `object` varchar(100) DEFAULT NULL,
  `contents` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `requestTime` datetime DEFAULT CURRENT_TIMESTAMP,
  `site1` text,
  `site2` text,
  `site3` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`rno`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trequest`
--

LOCK TABLES `trequest` WRITE;
/*!40000 ALTER TABLE `trequest` DISABLE KEYS */;
INSERT INTO `trequest` VALUES (1,'My.Dev','임현식','010-6264-7643','berkleylim16@gmail.com','프로젝트 파트너 함께 해요','프로젝트 파트너 구인','현재 React와 Spring boot 주력으로 하시는 것으로 보아 같이 함께 하고자 합니다.','2023-05-20 22:00:27',NULL,NULL,NULL),(2,'my1','임현식','010-6264-7643','berkleylim16@gmail.com','퍄일 첨부 테스트','업체 구인','123','2023-05-22 20:22:05',NULL,NULL,NULL);
/*!40000 ALTER TABLE `trequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trequestfile`
--

DROP TABLE IF EXISTS `trequestfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trequestfile` (
  `rfno` int NOT NULL AUTO_INCREMENT,
  `rno` int DEFAULT NULL,
  `gupidx` int DEFAULT NULL,
  `file` blob,
  PRIMARY KEY (`rfno`),
  KEY `trequestfile_FK` (`rno`),
  CONSTRAINT `trequestfile_FK` FOREIGN KEY (`rno`) REFERENCES `trequest` (`rno`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trequestfile`
--

LOCK TABLES `trequestfile` WRITE;
/*!40000 ALTER TABLE `trequestfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `trequestfile` ENABLE KEYS */;
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

-- Dump completed on 2023-05-30 16:21:54
