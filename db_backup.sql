-- MySQL dump 10.13  Distrib 5.7.17, for osx10.11 (x86_64)
--
-- Host: localhost    Database: facelespedia
-- ------------------------------------------------------
-- Server version	5.7.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Continent`
--

DROP TABLE IF EXISTS `Continent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Continent` (
  `ContinentID` int(11) DEFAULT NULL,
  `ContinentName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Continent`
--

LOCK TABLES `Continent` WRITE;
/*!40000 ALTER TABLE `Continent` DISABLE KEYS */;
INSERT INTO `Continent` VALUES (1,'Sea & Oceania'),(2,'Europe &CIS'),(3,'Americas'),(4,'China');
/*!40000 ALTER TABLE `Continent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContinentPlayer`
--

DROP TABLE IF EXISTS `ContinentPlayer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContinentPlayer` (
  `ContinentID` int(11) DEFAULT NULL,
  `PlayerID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContinentPlayer`
--

LOCK TABLES `ContinentPlayer` WRITE;
/*!40000 ALTER TABLE `ContinentPlayer` DISABLE KEYS */;
INSERT INTO `ContinentPlayer` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18),(1,19),(1,20),(1,21),(1,22),(1,23),(1,24),(1,25),(1,26),(1,27),(1,28),(1,29),(1,30),(1,31),(1,32),(1,33),(1,34),(1,35),(1,36),(1,37),(1,38),(1,39),(1,40),(1,41),(1,42),(1,43),(1,44),(1,45),(1,46),(1,47),(1,48),(1,49),(1,50),(2,51),(2,52),(2,53),(2,54),(2,55),(2,56),(2,57),(2,58),(2,59),(2,60),(2,61),(2,62),(2,63),(2,64),(2,65),(2,66),(2,67),(2,68),(2,69),(2,70),(2,71),(2,72),(2,73),(2,74),(2,75),(2,76),(2,77),(2,78),(2,79),(2,80),(2,81),(2,82),(2,83),(2,84),(2,85),(2,86),(2,87),(2,88),(2,89),(2,90),(2,91),(2,92),(2,93),(2,94),(2,95),(2,96),(2,97),(2,98),(2,99),(2,100),(3,101),(3,102),(3,103),(3,104),(3,105),(3,106),(3,107),(3,108),(3,109),(3,110),(3,111),(3,112),(3,113),(3,114),(3,115),(3,116),(3,117),(3,118),(3,119),(3,120),(3,121),(3,122),(3,123),(3,124),(3,125),(3,126),(3,127),(3,128),(3,129),(3,130),(3,131),(3,132),(3,133),(3,134),(3,135),(3,136),(3,137),(3,138),(3,139),(3,140),(3,141),(3,142),(3,143),(3,144),(3,145),(3,146),(4,147),(4,148),(4,149),(4,150),(4,151),(4,152),(4,153),(4,154),(4,155),(4,156),(4,157),(4,158),(4,159),(4,160),(4,161),(4,162),(4,163),(4,164),(4,165),(4,166),(4,167),(4,168),(4,169),(4,170),(4,171),(4,172),(4,173),(4,174),(4,175),(4,176),(4,177),(4,178),(4,179),(4,180),(4,181),(4,182),(4,183),(4,184),(4,185),(4,186),(4,187),(4,188),(4,189),(4,190),(4,191),(4,192),(4,193),(4,194),(4,195),(4,196),(4,197);
/*!40000 ALTER TABLE `ContinentPlayer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContinentTeam`
--

DROP TABLE IF EXISTS `ContinentTeam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContinentTeam` (
  `ContinentID` int(11) DEFAULT NULL,
  `TeamID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContinentTeam`
--

LOCK TABLES `ContinentTeam` WRITE;
/*!40000 ALTER TABLE `ContinentTeam` DISABLE KEYS */;
INSERT INTO `ContinentTeam` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(2,11),(2,12),(2,13),(2,14),(2,15),(2,16),(2,17),(2,18),(2,19),(2,20),(3,21),(3,22),(3,23),(3,24),(3,25),(3,26),(3,27),(3,28),(3,29),(3,30),(4,31),(4,32),(4,33),(4,34),(4,35),(4,36),(4,37),(4,38),(4,39),(4,40);
/*!40000 ALTER TABLE `ContinentTeam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Hero`
--

DROP TABLE IF EXISTS `Hero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Hero` (
  `HeroID` int(11) DEFAULT NULL,
  `HeroName` varchar(255) DEFAULT NULL,
  `HeroType` varchar(255) DEFAULT NULL,
  `HeroAttackType` varchar(255) DEFAULT NULL,
  `HeroRole` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Hero`
--

LOCK TABLES `Hero` WRITE;
/*!40000 ALTER TABLE `Hero` DISABLE KEYS */;
INSERT INTO `Hero` VALUES (1,'Abanndon','Str','Melee','Tanker'),(2,'Alchemist','Str','Melee','Hard-Carry'),(3,'Ancient Apparition','Int','Range','Support'),(4,'Anti mage','Agi','Melee','Hard-Carry'),(5,'Arc Warden','Agi','Range','Hard-Carry'),(6,'Axe','Str','Melee','Tanker'),(7,'Bane','Int','Range','Support'),(8,'Batrider','Int','Range','Roamer'),(9,'BeastMaster','Str','Melee','Offlaner'),(10,'Bloodseeker','Agi','Melee','Hard-Carry'),(11,'Bounty Hunter','Agi','Melee','Roamer'),(12,'Brewmaster','Str','Melee','Tanker'),(13,'Bristleback','Str','Melee','Tanker'),(14,'Broodmother','Agi','Melee','Semi-Carry'),(15,'Centuar Warruner','Str','Melee','Tanker'),(16,'Choas Knight','Str','Melee','Hard-Carry'),(17,'Chen','Int','Range','Support'),(18,'Clinkz','Agi','Range','Hard-Carry'),(19,'Clockwerk','Str','Melee','Tanker'),(20,'Crystal Maiden','Int','Range','Support'),(21,'Dark seer','Int','Melee','Offlaner'),(22,'Dazzle','Int','Range','Support'),(23,'Death prophet','Int','Range','Roamer'),(24,'Distrupter','Int','Range','Support'),(25,'Doom','Str','Melee','Tanker'),(26,'Dragon knight','Str','Melee','Tanker'),(27,'Drowranger','Agi','Range','Hard-Carry'),(28,'Earthsprit','Str','Melee','Support'),(29,'Earthsaker','Str','Melee','Support'),(30,'Elder Titan','Str','Melee','Support'),(31,'Ember Spirit','Agi','Melee','Hard-Carry'),(32,'Enchantress','Int','Range','Semi-Carry'),(33,'Enigma','Int','Range','Offlaner'),(34,'Faceless Void','Agi','Melee','Hard-Carry'),(35,'Gyrocopter','Agi','Range','Hard-Carry'),(36,'Huskar','Str','Range','Semi-Carry'),(37,'Invoker','Int','Range','Roamer'),(38,'Io','Int','Range','Support'),(39,'Jakiro','Int','Range','Support'),(40,'Juggernaut','Agi','Melee','Hard-Carry'),(41,'Keeper of Light','Int','Range','Support'),(42,'Kunkka','Str','Melee','Roamer'),(43,'Legion Commander','Str','Melee','Hard-Carry'),(44,'Lershrac','Int','Range','Roamer'),(45,'Lich','Int','Range','Support'),(46,'Lifestealer','Str','Melee','Hard-Carry'),(47,'Lina','Int','Range','Semi-Carry'),(48,'Lion','Int','Range','Support'),(49,'Lone Druid','Agi','Range','Hard-Carry'),(50,'Luna','Agi','Range','Hard-Carry'),(51,'Lycan','Str','Melee','Tanker'),(52,'Magnus','Str','Range','Offlaner'),(53,'Medusa','Agi','Melee','Hard-Carry'),(54,'Meepo','Str','Melee','Hard-Carry'),(55,'Mirana','Agi','Range','Semi-Carry'),(56,'Monkey King','Agi','Melee','Roamer'),(57,'Morphing','Agi','Range','Hard-Carry'),(58,'Naga Siren','Agi','Melee','Semi-Carry'),(59,'Nartue\'s Phrophet','Int','Range','Semi-Carry'),(60,'Nechrophos','Int','Range','Semi-Carry'),(61,'Night Stalker','Str','Melee','Tanker'),(62,'Nyx Assassin','Agi','Melee','Roamer'),(63,'Orge Magi','Str','Melee','Support'),(64,'Omiknight','Str','Melee','Support'),(65,'Oracle','Int','Range','Support'),(66,'Outworld Devourer','Int','Range','Semi-Carry'),(67,'Phantom Assassin','Agi','Melee','Hard-Carry'),(68,'Phantom Lancer','Agi','Melee','Hard-Carry'),(69,'Phoenix','Str','Range','Support'),(70,'Puck','Int','Range','Roamer'),(71,'Pudge','Str','Melee','Roamer'),(72,'Pugna','Int','Range','Roamer'),(73,'Queen of Pain','Int','Range','Roamer'),(74,'Razor','Agi','Range','Semi-Carry'),(75,'Riki','Agi','Melee','Semi-Carry'),(76,'Rubick','Int','Range','Support'),(77,'Sandking','Str','Melee','Offlaner'),(78,'Shadow Demon','Int','Range','Support'),(79,'Shadow Fiend','Agi','Range','Hard-Carry'),(80,'Shadow Shaman','Int','Range','Support'),(81,'Silencer','Int','Range','Semi-Carry'),(82,'Skywrath Mage','Int','Range','Support'),(83,'Slardar','Str','Melee','Tanker'),(84,'Slark','Agi','Melee','Hard-Carry'),(85,'Sniper','Agi','Range','Hard-Carry'),(86,'Spectre','Agi','Melee','Hard-Carry'),(87,'Spirit Breaker','Str','Melee','Roamer'),(88,'Storm Spirit','Int','Range','Semi-Carry'),(89,'Sven','Str','Melee','Hard-Carry'),(90,'Techies','Int','Range','Support'),(91,'Templar Assassin','Agi','Range','Hard-Carry'),(92,'Terrorblade','Agi','Melee','Hard-Carry'),(93,'TideHunter','Str','Melee','Tanker'),(94,'Timbersaw','Str','Melee','Tanker'),(95,'Tinker','Int','Range','Roamer'),(96,'Tiny','Str','Melee','Roamer'),(97,'Treant Protector','Str','Melee','Roamer'),(98,'Trollwarlord','Agi','Melee','Hard-Carry'),(99,'Tusk','Str','Melee','Roamer'),(100,'Underlord','Str','Melee','Tanker'),(101,'Undying','Str','Melee','Tanker'),(102,'Ursa','Agi','Melee','Hard-Carry'),(103,'Vengeful spirit','Agi','Range','Semi-Carry'),(104,'Venomancer','Agi','Range','Support'),(105,'Viper','Agi','Range','Semi-Carry'),(106,'Visage','Str','Range','Support'),(107,'Warlock','Int','Range','Support'),(108,'Weaver','Agi','Range','Hard-Carry'),(109,'Windranger','Int','Range','Roamer'),(110,'Winter Wyvern','Int','Range','Support'),(111,'Witch Doctor','Int','Range','Support'),(112,'Wraith King','Str','Melee','Hard-Carry'),(113,'Zeus','Int','Range','Roamer');
/*!40000 ALTER TABLE `Hero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HeroMostWin`
--

DROP TABLE IF EXISTS `HeroMostWin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HeroMostWin` (
  `PlayerID` int(11) DEFAULT NULL,
  `Hero1` int(11) DEFAULT NULL,
  `Hero2` int(11) DEFAULT NULL,
  `Hero3` int(11) DEFAULT NULL,
  `Hero4` int(11) DEFAULT NULL,
  `Hero5` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HeroMostWin`
--

LOCK TABLES `HeroMostWin` WRITE;
/*!40000 ALTER TABLE `HeroMostWin` DISABLE KEYS */;
INSERT INTO `HeroMostWin` VALUES (1,89,49,84,92,105),(2,94,66,95,98,2),(3,83,559,87,9,62),(4,103,28,83,76,63),(5,20,15,113,27,103),(6,18,15,53,96,2),(7,31,24,91,17,37),(8,113,6,101,11,92),(9,63,101,28,95,21),(10,76,107,20,24,48),(11,50,66,54,67,92),(12,55,40,46,94,66),(13,8,62,43,6,19),(14,83,76,38,103,78),(15,78,65,38,22,76),(16,89,70,40,46,26),(17,37,66,31,70,79),(18,15,6,83,94,21),(19,62,20,56,83,77),(20,78,76,11,65,30),(21,58,40,55,44,51),(22,86,80,15,42,23),(23,79,27,58,23,66),(24,103,111,28,22,30),(25,103,2,55,113,22),(26,102,36,27,34,91),(27,23,68,44,40,86),(28,55,70,9,22,93),(29,31,25,103,39,24),(30,3,38,11,81,99),(31,102,40,46,108,86),(32,37,79,88,49,66),(33,15,83,21,6,70),(34,41,62,108,61,20),(35,76,24,20,57,30),(36,73,35,70,40,89),(37,31,26,43,37,70),(38,34,15,109,86,84),(39,105,91,26,88,31),(40,110,30,7,42,83),(41,108,27,86,50,49),(42,18,105,68,40,31),(43,15,1,6,94,43),(44,83,77,28,95,8),(45,86,111,62,89,80),(46,63,7,55,103,40),(47,47,91,66,70,2),(48,6,43,21,55,59),(49,9,19,83,62,63),(50,34,83,20,24,103),(51,92,23,30,48,38),(52,2,88,66,31,26),(53,15,42,6,33,113),(54,30,65,110,69,24),(55,59,94,25,24,93),(56,46,50,27,86,9),(57,55,26,31,96,23),(58,15,21,8,83,89),(59,83,48,58,29,103),(60,12,111,63,78,73),(61,49,4,102,68,60),(62,74,36,2,79,92),(63,59,43,9,12,29),(64,38,83,29,76,41),(65,11,87,17,99,58),(66,33,34,93,77,15),(67,67,113,40,27,104),(68,92,31,37,66,70),(69,33,107,11,101,58),(70,76,11,62,55,63),(71,2,67,46,54,27),(72,86,57,37,4,89),(73,99,15,6,83,21),(74,83,11,63,30,28),(75,3,111,78,48,41),(76,26,72,58,40,68),(77,91,85,19,6,23),(78,52,99,94,19,15),(79,45,106,99,82,87),(80,47,55,104,97,109),(81,55,85,59,98,43),(82,94,88,23,52,71),(83,9,59,77,37,31),(84,78,38,77,7,103),(85,17,101,110,63,78),(86,37,83,112,57,103),(87,112,98,55,23,12),(88,13,64,93,8,19),(89,55,42,33,38,76),(90,41,11,29,22,99),(91,25,86,40,89,9),(92,113,12,31,23,81),(93,60,108,15,30,95),(94,3,7,20,103,99),(95,83,71,28,17,111),(96,23,83,102,109,103),(97,95,81,52,85,73),(98,113,8,14,87,83),(99,87,25,97,48,29),(100,112,1,22,104,76),(101,67,91,95,51,74),(102,91,47,94,66,88),(103,99,94,108,34,29),(104,112,7,8,30,111),(105,110,30,28,39,47),(106,73,31,96,26,55),(107,67,12,50,96,49),(108,87,29,99,83,31),(109,30,45,93,3,33),(110,69,30,25,78,103),(111,98,92,79,34,31),(112,15,6,87,9,26),(113,28,68,30,102,76),(114,94,9,25,34,99),(115,85,2,73,91,79),(116,88,8,91,73,26),(117,33,55,45,87,28),(118,107,44,26,41,21),(119,55,12,25,88,37),(120,54,46,55,31,66),(121,109,32,34,13,76),(122,41,111,70,51,22),(123,111,87,7,28,103),(124,50,88,73,91,27),(125,88,4,40,84,35),(126,62,9,77,15,19),(127,101,63,55,48,42),(128,22,76,110,48,78),(129,46,50,6,27,67),(130,27,81,14,85,107),(131,21,8,61,15,34),(132,65,63,39,38,41),(133,65,48,22,17,24),(134,27,40,102,46,84),(135,37,26,77,113,1),(136,87,113,8,93,25),(137,83,70,24,69,99),(138,24,103,20,78,76),(139,109,73,37,88,91),(140,36,88,95,2,91),(141,83,6,59,8,77),(142,101,42,11,83,63),(143,55,77,48,97,44),(144,57,37,88,47,4),(145,23,58,70,34,25),(146,87,110,45,108,97),(147,9,29,83,32,59),(148,88,73,31,37,79),(149,56,103,75,65,110),(150,107,81,20,106,41),(151,72,112,105,57,51),(152,47,79,95,37,66),(153,15,43,52,83,6),(154,89,50,46,40,51),(155,40,2,91,31,88),(156,62,6,25,83,58),(157,41,111,42,101,110),(158,113,44,104,80,20),(159,43,23,55,40,88),(160,34,8,93,25,77),(161,7,81,17,45,106),(162,100,97,61,11,103),(163,46,37,84,40,89),(164,92,89,35,57,74),(165,91,79,40,95,73),(166,34,83,15,87,99),(167,9,71,11,48,83),(168,3,20,48,55,63),(169,57,58,92,86,4),(170,98,73,57,12,26),(171,49,101,62,6,19),(172,11,99,26,109,46),(173,65,76,48,41,103),(174,57,34,51,27,40),(175,79,94,55,8,37),(176,15,9,6,8,79),(177,11,30,3,65,103),(178,17,41,111,3,87),(179,89,6,51,74,15),(180,31,47,66,88,95),(181,76,11,25,8,109),(182,59,69,44,48,33),(183,58,41,76,77,17),(184,102,70,46,26,57),(185,85,91,79,72,62),(186,62,8,6,77,43),(187,80,29,106,45,39),(188,71,55,103,107,11),(189,102,27,46,50,53),(190,6,66,112,23,70),(191,29,59,108,93,40),(192,7,110,33,45,76),(193,25,28,32,69,30),(194,40,66,46,29,2),(195,15,25,94,77,21),(196,37,74,91,70,47),(197,103,64,81,82,11),(198,25,103,24,47,110);
/*!40000 ALTER TABLE `HeroMostWin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HeroStat`
--

DROP TABLE IF EXISTS `HeroStat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HeroStat` (
  `HeroID` int(11) DEFAULT NULL,
  `Winratepercent` int(11) DEFAULT NULL,
  `PercentPick` int(11) DEFAULT NULL,
  `PercentContest` int(11) DEFAULT NULL,
  `PercentBanned` int(11) DEFAULT NULL,
  `PercentFirstPick` int(11) DEFAULT NULL,
  `PercentFirstBanned` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HeroStat`
--

LOCK TABLES `HeroStat` WRITE;
/*!40000 ALTER TABLE `HeroStat` DISABLE KEYS */;
INSERT INTO `HeroStat` VALUES (1,52,3,12,30,1,5),(2,50,11,37,26,0,10),(3,51,4,9,5,0,0),(4,47,5,9,4,0,0),(5,54,0,1,1,0,0),(6,49,5,30,13,1,4),(7,53,5,6,1,0,0),(8,50,12,51,28,4,16),(9,53,14,36,22,5,18),(10,51,1,1,1,0,0),(11,55,10,30,20,2,15),(12,45,1,2,1,0,0),(13,45,3,3,1,0,0),(14,53,2,7,5,0,0),(15,55,10,18,8,3,5),(16,48,2,3,1,0,0),(17,56,3,7,4,0,1),(18,51,4,6,3,0,0),(19,49,7,10,3,0,1),(20,59,10,12,2,1,0),(21,48,22,51,29,3,15),(22,50,15,22,7,1,1),(23,50,7,18,12,0,1),(24,49,23,13,10,1,1),(25,48,9,19,10,4,8),(26,51,9,16,7,0,0),(27,53,12,38,26,3,17),(28,51,23,44,21,5,0),(29,41,3,4,0,0,14),(30,53,5,25,13,3,10),(31,48,12,12,12,0,2),(32,45,5,12,7,1,5),(33,57,3,6,2,0,1),(34,50,17,38,20,3,11),(35,48,4,7,3,0,0),(36,52,3,12,9,0,0),(37,49,21,44,22,0,3),(38,53,2,37,25,4,22),(39,46,4,5,1,0,0),(40,50,31,56,26,1,3),(41,49,10,19,9,1,5),(42,51,11,19,8,1,4),(43,47,8,13,5,0,1),(44,53,3,0,1,0,1),(45,44,3,6,2,0,1),(46,52,24,54,30,2,11),(47,53,12,7,2,0,1),(48,48,16,21,5,1,1),(49,51,7,27,14,2,10),(50,54,12,12,11,1,3),(51,50,3,7,4,0,1),(52,51,6,17,11,1,8),(53,49,5,9,5,0,0),(54,56,8,14,12,0,7),(55,52,18,29,29,2,5),(56,49,3,10,5,2,5),(57,49,9,18,9,0,0),(58,54,5,17,12,0,5),(59,46,4,7,3,0,2),(60,51,1,2,1,0,0),(61,42,6,11,6,0,3),(62,52,13,27,1,1,6),(63,51,9,29,10,4,5),(64,49,1,0,5,0,2),(65,46,16,30,13,2,5),(66,52,12,33,22,1,8),(67,51,5,8,3,0,0),(68,41,2,4,2,0,0),(69,47,9,15,6,1,4),(70,48,11,22,11,0,0),(71,47,5,7,2,0,1),(72,50,1,2,1,0,0),(73,48,7,12,5,0,0),(74,42,4,8,4,0,0),(75,50,8,26,18,1,12),(76,50,23,28,5,3,2),(77,46,18,32,14,3,7),(78,50,17,39,19,7,16),(79,51,9,18,8,0,0),(80,46,2,36,0,0,0),(81,51,7,12,5,0,1),(82,48,3,3,1,0,0),(83,52,31,60,1,9,21),(84,45,13,31,18,0,0),(85,50,4,11,6,0,0),(86,47,3,6,3,0,0),(87,53,4,6,2,0,0),(88,48,9,21,12,0,0),(89,52,10,19,10,0,0),(90,0,0,0,0,0,0),(91,54,8,16,8,0,0),(92,55,2,12,13,0,3),(93,50,10,18,8,0,2),(94,48,18,36,18,1,5),(95,46,9,28,19,0,2),(96,45,3,5,2,0,0),(97,52,2,3,11,0,1),(98,48,3,4,2,0,0),(99,42,4,5,1,0,0),(100,47,3,9,6,1,5),(101,53,6,10,4,0,1),(102,53,9,15,10,0,1),(103,50,21,28,7,2,1),(104,52,3,5,2,0,1),(105,46,3,6,4,0,0),(106,46,2,2,1,0,0),(107,52,11,17,6,2,3),(108,50,13,24,11,1,3),(109,43,3,4,2,0,0),(110,49,5,8,3,0,0),(111,47,15,19,4,0,0),(112,54,2,2,1,0,0),(113,47,1,2,1,0,0);
/*!40000 ALTER TABLE `HeroStat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Player`
--

DROP TABLE IF EXISTS `Player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Player` (
  `PlayerID` int(11) DEFAULT NULL,
  `PlayerName` varchar(255) DEFAULT NULL,
  `GameName` varchar(255) DEFAULT NULL,
  `MMR` int(11) DEFAULT NULL,
  `Nation` varchar(255) DEFAULT NULL,
  `Winrate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Player`
--

LOCK TABLES `Player` WRITE;
/*!40000 ALTER TABLE `Player` DISABLE KEYS */;
INSERT INTO `Player` VALUES (1,'Marc Polo Luis Fausto','Raven',7884,'Philippines',54),(2,'Carlo Palad','Kuku',7845,'Philippines',55),(3,'Samson Solomon Enojosa Hidalgo','Sam_H',7629,'Philippines',58),(4,'Timothy Randrup','Tims',7843,'Philippines',56),(5,'Ryo Hasegawa','ryOyr',6869,'Philippines',52),(6,'Dominik Reitmeier','Black^',8090,'Germany',57),(7,'Anucha Jirawong','Jabz',8617,'Thailand',52),(8,'Daryl Koh Pei Xiang','iceiceice',8051,'Singapore',65),(9,'Toh Wai Hong','xy-',7007,'Singapore',68),(10,'Wong Jeng Yih','Nutz',5505,'Singapore',56),(11,'Lai Jay Son','Ahjit',7650,'Malaysia',62),(12,'Kam Boon Seng','NaNa',8139,'Malaysia',59),(13,'Chua Soon Khong','KaNG',7235,'Malaysia',51),(14,'Tue Soon Chuan','Ahfu',7050,'Malaysia',61),(15,'Yap Jian Wei','xNova-',7061,'Malaysia',53),(16,'Kim Villafuerte','Gabbi',7425,'Philippines',56),(17,'Armel Paul Tabios','Armel',7915,'Philippines',58),(18,'Rafael Sicat Palo','Rapy',7215,'Philippines',53),(19,'Marvin Rushton','Boombacs',6849,'Philippines',55),(20,'Kenneth Coloma','Flysolo',7268,'Philippines',52),(21,'Lee Kong Yang','kYxY',7506,'Malaysia',61),(22,'Chai Yee Fung','Mushi',7661,'Malaysia',65),(23,'Ryan Jay Qui','Bimbo',6976,'Philippines',53),(24,'Nico Barcelon','eyyou',6530,'Philippines',58),(25,'Michael Ross Jr.','ninjaboogie',7115,'Malaysia',54),(26,'Galvin Kang Jian Wen','Meracle',7371,'Singapore',52),(27,'Kim Seon-yeop','QO',8630,'South Korea',50),(28,'Chong Xin Khoo','Ohaiyo',7855,'Malaysia',66),(29,'Djardel Jicko B. Mampusti','DJ',6899,'Philippines',59),(30,'Kim Yong-min','Febby',7244,'South Korea',48),(31,'Bruce Ervandi','ilLogic',6109,'Indonesia',57),(32,'Ramzi Bayhaki','Ramz',7165,'Indonesia',60),(33,'Adit Rosenda','Aville',7426,'Indonesia',57),(34,'Indra Utama','Vlaicu',6540,'Indonesia',55),(35,'Chang Tu Hai','2hoi',6430,'Indonesia',54),(36,'Fernando Mendoza','Nando',7234,'Philippines',45),(37,'Mark Redira','Shanks',6825,'Philippines',47),(38,'Earlwin Libre','Ewe',7140,'Philippines',44),(39,'Abeng Dicdican','Abeng',6199,'Philippines',52),(40,'Kimuel Rodis','Kim0',6452,'Philippines',49),(41,'Byron Young Meng Keen','Syeonix',7242,'Malaysia',48),(42,'John Linuel Abanto','Teehee',7869,'Philippines',52),(43,'Kim Tae-sung','Velo',8261,'Australia',42),(44,'Roger Tan','Roddgeee',7591,'Malaysia',44),(45,'Wai Pern Lim','Net',7025,'Malaysia',64),(46,'Julius De Leon','Julz',7244,'Philippines',51),(47,'Benhur Lawis','Benhur',7985,'Philippines',55),(48,'Jayjay Garan','Yaj',7797,'Philippines',47),(49,'Jessie Cristy Cuyco','JessieVash',6314,'Philippines',51),(50,'Ralph Richard Peñano','RR',8002,'Philippines',54),(51,'Johan Sundstein','N0tail',7602,'Denmark',62),(52,'Anathan Pham','ana',9144,'Australia',74),(53,'Gustav Magnusson','s4',8734,'Sweden',70),(54,'Jesse Vainikka','JerAx',7315,'Finland',54),(55,'Tal Aizik','Fly',7828,'Israel',61),(56,'Roman Kushnarev','Ramez666',9095,'Russia',60),(57,'Vladimir Minenko','No[o]ne',8653,'Ukraine',60),(58,'Pavel Khvastunov','9pasha',7675,'Russia',62),(59,'Ilya Ilyuk','Lil',7578,'Russia',59),(60,'Alexei Berezin','Solo',6540,'Russia',56),(61,'Lasse Urpalainen','MATUMBAMAN',8871,'Finland',51),(62,'Amer Al-Barkawi','Miracle--',9248,'Jordan',60),(63,'Ivan Borislavov','Mind_Control',8609,'Bulgaria',60),(64,'Maroun Merhej','GH',8966,'Lebanon',52),(65,'Kuro Salehi Takhasomi','Kuroky',8975,'Germany',62),(66,'Johan Åström','Pieliedie',8338,'Sweden',45),(67,'Pyo No-a','MP',8614,'South Korea',54),(68,'Yeik Nai Zheng','MidOne',9053,'Malaysia',69),(69,'Maurice Gutmann','Khezu',7795,'Germany',60),(70,'Clement Ivanov','Puppey',8859,'Estonia',69),(71,'Vladimir Kuzmenko','Chappie',8170,'Russia',55),(72,'Rostislav Lozovoi','fn',8484,'Russia',46),(73,'Andrey Kadyk','Ghostik',7675,'Ukriane',51),(74,'Yaroslav Naidenov','Miposhka',7974,'Russia',49),(75,'Rinat Abdullin','KingR',7378,'Russia',45),(76,'Jonathan Berg','Loda',6073,'Sweden',59),(77,'Linus Blomdin','Limmp',9078,'Sweden',48),(78,'Jonas Lindholm','jonassomfan',7295,'Sweden',48),(79,'Simon Haag','Handsken',7861,'Sweden',50),(80,'Jerry Lundkvist','EGM',7470,'Sweden',59),(81,'Per Anders Olsson Lille','Pajkatt',8645,'Sweden',50),(82,'Danil Ishutin','Dendi',7978,'Ukraine',60),(83,'Victor Nigrini','GeneRaL',7608,'Ukraine',48),(84,'Roman Paley','rmNz-',7772,'Russia',44),(85,'Malthe Winther','Biver',8442,'Denmark',54),(86,'Feras Hroob','Feero',8110,'Jordan',37),(87,'Adrian Trinks','FATA-',7901,'Germany',59),(88,'Lee Sang-don','Forev',9006,'South Korea',53),(89,'Yazied Jaradat','YapzOr',7524,'Jordan',42),(90,'Adam Erwann Shah bin Akhtar Hussein','343-Flyy',6825,'Malaysia',56),(91,'Vadim Musorin','Sedoy',7685,'Russia',52),(92,'Andrey Afonin','Afoninje',8162,'Russia',53),(93,'Maxim Abramovskikh','Shachlo',7510,'Russia',46),(94,'Arseniy Usov','ArsZeeqq',7207,'Russia',51),(95,'Vladimir Nikogosyan','RodjER',7316,'Russia',44),(96,'Stanislav Glushan','Bzz',8091,'Russia',51),(97,'Bogdan Vasilenko','Iceberg',7271,'Ukriane',51),(98,'Alexander Kucheria','DkPhobos',7025,'Ukriane',54),(99,'Artsiom Barshak','fng',7895,'Belarus',53),(100,'Ivan Skorokhod','VANSKOR',7838,'Russia',58),(101,'Artour Babaev','Arteezy',8584,'Canada',70),(102,'Sumail Hassan','SumaiL',7141,'Parkistan',63),(103,'Saahil Arora','UNiVeRse',7951,'United tate',62),(104,'Ludwig Wåhlberg','zai',7952,'Sweden',71),(105,'Andreas Nielsen','Cr1t',8105,'Denmark',50),(106,'Roman Fominok','Resolut1on',8404,'Ukraine',58),(107,'Aliwi Omar','W33',7824,'Syria',54),(108,'David Tan','Moonmeander',7791,'Canada',59),(109,'Rasmus Filipsen','Misery',6823,'Denmark',57),(110,'Martin Sazdov','Saksa',8632,'Macedonia',56),(111,'Jacky Mao','EternalEnvy',8404,'Canada',61),(112,'Arif Anwar','MSS',8123,'United State',56),(113,'Kurtis Ling','AUI_2000',8025,'Canada',59),(114,'David Hull','Moo',8451,'United State',58),(115,'Eric Dong','747',9019,'United State',43),(116,'Jaron Clinton','monkeys-forever',7471,'United State',45),(117,'Zakari Freedman','Zfreek',6000,'United State',51),(118,'Kyle Freedman','melonzz',7266,'United State',51),(119,'Mason Venne','mason',7283,'United States',62),(120,'Abed Azel L. Yusop','Abed',9011,'Philippines',57),(121,'Kanishka Sosale','BuLba',7808,'United States',55),(122,'Jimmy Ho','DeMoN',6483,'United States',55),(123,'Kim Doo-young','DuBu',7937,'South Korea',44),(124,'William Medeiros','hFn',7915,'Brazil',42),(125,'Adriano Machado','4dr',7623,'Brazil',37),(126,'Otavio Gabriel','Tavo',7363,'Brazil',38),(127,'Danylo Nascimento','KINGRD',7351,'Brazil',37),(128,'Emilano Ito','c4t',5530,'Brazil',40),(129,'Marcus Hoelgaard','Ace',7998,'Denmark',48),(130,'Jon Andersen','13abyKnight',7732,'Denmark',59),(131,'Mikki Mørch Junget','HeStEJoE-RoTTeN',8111,'Denmark',56),(132,'Danny Mørch Junget','NoiA',8545,'Denmark',60),(133,'Christoffer Borregaard Winther','Ryze',7430,'Denmark',48),(134,'Benjamin Lanaos','Benjaz',7650,'Peru',44),(135,'Enzo Gianoli','Timado',6946,'Peru',40),(136,'Jose Andree Nicosia','Sword',7446,'Peru',40),(137,'Farith Puente','Matthew',6954,'Peru',38),(138,'Christian Cruz','Accel',6842,'Peru',52),(139,'Leonardo Sifuentes','LeoStyle-',7361,'Peru',40),(140,'Alonso Lion','Kotarō Hayama',6004,'Peru',53),(141,'Renato Garcia','Kingteka',7616,'Peru',55),(142,'Steven Vargas','StingeR',6780,'Peru',53),(143,'Jair Alex Dávila Matallana','Masoku',6440,'Peru',52),(144,'Yawar Hassan','YawaR',7628,'Pakistan',50),(145,'Jingjun Wu','Sneyking',8144,'United State',54),(146,'Hà Quốc Đạt','Biryu',7206,'Vietnam',57),(147,'Aaron Kim','Clairvoyance',6998,'United State',53),(148,'Francis Lee','FLee',8719,'United Stat',47),(149,'Ye Zhibiao','Boboka',7597,'China',55),(150,'Fu Bin','Q',7209,'China',51),(151,'Xu Zhilei','BurNing',8399,'China',61),(152,'Ou Peng','Op',8287,'China',59),(153,'Lin Jing','Xxs',8552,'China',55),(154,'Xu Han','uuu9',8366,'China',42),(155,'Song Chun','Sccc',8671,'China',48),(156,'Damien Chok','kpii',7994,'Australia',55),(157,'Hu Liangzhi','Kaka',8853,'China',54),(158,'Zeng Hongda','Faith',7298,'China',57),(159,'Xu Zichen','Sakata',7493,'China',50),(160,'Yang Xiaodong','InJuly',7906,'China',49),(161,'Su Peng','super.',7394,'China',48),(162,'Gao Tianpeng','Dogf1ghts',8027,'China',47),(163,'Zhang Chengjun','Paparazi',9329,'China',49),(164,'Yang Pu','END',7585,'China',48),(165,'Zeng Jiaoyang','Ori',9025,'China',60),(166,'Zhou Haiyang','Yang',8557,'China',49),(167,'Xu Zhi','Hym',8025,'China',50),(168,'Wong Hock Chuan','ChuaN',6717,'Malaysia',60),(169,'Wang Chunyu','Ame',8315,'China',51),(170,'Lu Yao','Maybe',8389,'China',57),(171,'Ren Yangwei','old eLeVeN',7830,'China',49),(172,'Yao Zhengzheng','Yao',7054,'China',57),(173,'Chen Guanhong','Victoria',8032,'China',50),(174,'Chu Zeyu','shadow',8169,'China',51),(175,'Zhou Yang','bLink',7214,'China',51),(176,'Zhang Ruida','Faith_bian',8219,'China',49),(177,'Zhang Yiping','y',6708,'China',52),(178,'Li Peng','iceice',7868,'China',53),(179,'Sun Zheng','Agressif',8388,'China',49),(180,'Liu Chang','Freeze',7727,'China',27),(181,'Bai Fan','rOtk',7275,'China',54),(182,'Xu Linsen','fy',8237,'China',59),(183,'Lu Chao','Fenrir',7363,'China',60),(184,'Du Peng','Monet',8390,'China',43),(185,'Xie Junhao','Super',7779,'China',59),(186,'Xiao Zihao','Jixing',7713,'China',33),(187,'Leong Fat-meng','DDC',7591,'Macau',55),(188,'Luo Puchao','Lpc',6706,'China',45),(189,'Su lei','Flyby',7839,'China',44),(190,'He Yongzheng','Inflame',7410,'China',46),(192,'Xiao Zuoyi','demons',6936,'China',43),(193,'Xue Zhichuan','September',8155,'China',53),(194,'Jin Zhiyi','zhizhizhi',9204,'China',35),(195,'Zhai Jingkai','zhai',7246,'China',35),(196,'Song Runxi','dark',6412,'China',35),(197,'Jiang An','An',7162,'China',38),(198,'Chen Jingwu','Rong',7748,'China',45),(198,'asdads','asdd',9700,'Thailand',40),(198,'asdads','asdd',9700,'Thailand',40),(198,'asdads','asdd',9700,'Thailand',40);
/*!40000 ALTER TABLE `Player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Team`
--

DROP TABLE IF EXISTS `Team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Team` (
  `TeamID` int(11) DEFAULT NULL,
  `TeamName` varchar(255) DEFAULT NULL,
  `TeamsubName` varchar(255) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Nation` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Team`
--

LOCK TABLES `Team` WRITE;
/*!40000 ALTER TABLE `Team` DISABLE KEYS */;
INSERT INTO `Team` VALUES (1,'TnC','TnC',1227,'Philippines'),(2,'Team Faceless','Faceless',1214,'Singapore'),(3,'WarriorsGaming.Unity','WG',1160,'Malaysia'),(4,'Clutch Gamers','Clucth',1144,'Philippines'),(5,'Mineski','Mskni',1113,'Philippines'),(6,'Fnatic','FnC',1095,'Malaysia'),(7,'EVOS','EVOS',1081,'Indonesia'),(8,'Execration','Exec',1079,'Philippines'),(9,'Geek Fam','Geek',1078,'Malaysia'),(10,'HappyFeet','HappyFeet',1062,'Philippines'),(11,'OG','OG',1358,'Europe'),(12,'Virtus Pro','VP',1326,'Russia'),(13,'Team Liquid','Liquid',1264,'Europe'),(14,'Team Secret','Secret',1230,'Europe'),(15,'Team Empire','Empire',1141,'Russia'),(16,'Alliance','Alliance',1129,'Sweden'),(17,'Natus Vincere','Navi',1124,'Ukriane'),(18,'B)ears','Bear',1099,'Russia'),(19,'!Rebels!','Rebel',1095,'CIS'),(20,'Team Spirit','Spirit',1094,'CIS'),(21,'Evil Geniuses','EG',1317,'United State'),(22,'Digital Chaos','DC',1257,'United State'),(23,'Team NP','NP',1210,'North America'),(24,'compLexity Gaming','compLexity Gaming',1168,'United State'),(25,'Team Onyx','Onyx',1138,'North America'),(26,'SG e-sports','SG',1137,'Brazil'),(27,'Cloud 9','C9',1093,'United State'),(28,'Infamous','Infamous',1063,'Peru'),(29,'Not Today','Not Today',1051,'Peru'),(30,'Doo Wop','Doo Wop',1035,'United State'),(31,'Invictus Gaming','IG',1327,'China'),(32,'Newbee','Newbee',1263,'China'),(33,'iG Vitality','IG.V',1231,'China'),(34,'Vici Gaming','VG',1215,'China'),(35,'LGD Gaming','LGD',1192,'China'),(36,'Wings Gaming','Wing',1142,'China'),(37,'Vici Gaming J','VG.J',1140,'China'),(38,'LGD.Forever Young','LGD.fy',1106,'China'),(39,'CDEC Gaming','CDEC',1072,'China'),(40,'EHOME.Keen','Ehome.k',1065,'China');
/*!40000 ALTER TABLE `Team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TeamMember`
--

DROP TABLE IF EXISTS `TeamMember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TeamMember` (
  `TeamID` int(11) DEFAULT NULL,
  `PlayerID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TeamMember`
--

LOCK TABLES `TeamMember` WRITE;
/*!40000 ALTER TABLE `TeamMember` DISABLE KEYS */;
INSERT INTO `TeamMember` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,6),(2,7),(2,8),(2,9),(2,10),(3,11),(3,12),(3,13),(3,14),(3,15),(4,16),(4,17),(4,18),(4,19),(4,20),(5,21),(5,22),(5,23),(5,24),(5,25),(6,26),(6,27),(6,28),(6,29),(6,30),(7,31),(7,32),(7,33),(7,34),(7,35),(8,36),(8,37),(8,38),(8,39),(8,40),(9,41),(9,42),(9,43),(9,44),(9,45),(10,46),(10,47),(10,48),(10,49),(10,50),(11,51),(11,52),(11,53),(11,54),(11,55),(12,56),(12,57),(12,58),(12,59),(12,60),(13,61),(13,62),(13,63),(13,64),(13,65),(14,66),(14,67),(14,68),(14,69),(14,70),(15,71),(15,72),(15,73),(15,74),(15,75),(16,76),(16,77),(16,78),(16,79),(16,80),(17,81),(17,82),(17,83),(17,84),(17,85),(18,86),(18,87),(18,88),(18,89),(18,90),(19,91),(19,92),(19,93),(19,94),(19,95),(20,96),(20,97),(20,98),(20,99),(20,100),(21,101),(21,102),(21,103),(21,104),(21,105),(22,106),(22,107),(22,108),(22,109),(22,110),(23,111),(23,112),(23,113),(24,114),(24,115),(24,116),(24,117),(24,118),(25,119),(25,120),(25,121),(25,122),(25,123),(26,124),(26,125),(26,126),(26,127),(26,128),(27,129),(27,130),(27,131),(27,132),(27,133),(28,134),(28,135),(28,136),(28,137),(28,138),(29,139),(29,140),(29,141),(29,142),(29,143),(30,144),(30,145),(30,146),(30,147),(31,148),(31,149),(31,150),(31,151),(31,152),(32,153),(32,154),(32,155),(32,156),(32,157),(33,158),(33,159),(33,160),(33,161),(33,162),(34,163),(34,164),(34,165),(34,166),(34,167),(35,168),(35,169),(35,170),(35,171),(35,172),(36,173),(36,174),(36,175),(36,176),(36,177),(37,178),(37,179),(37,180),(37,181),(37,182),(38,183),(38,184),(38,185),(38,186),(38,187),(39,188),(39,189),(39,190),(39,191),(39,192),(40,193),(40,194),(40,195),(40,196),(40,197);
/*!40000 ALTER TABLE `TeamMember` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-09  8:43:38
