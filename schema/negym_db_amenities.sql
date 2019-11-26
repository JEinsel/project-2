CREATE DATABASE  IF NOT EXISTS `negym_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `negym_db`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: negym_db
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `amenities`
--

DROP TABLE IF EXISTS `amenities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amenities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `photo` varchar(255) NOT NULL,
  `premium` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amenities`
--

LOCK TABLES `amenities` WRITE;
/*!40000 ALTER TABLE `amenities` DISABLE KEYS */;
INSERT INTO `amenities` VALUES (1,'Cross Functional Training Area','We’ve brought the neighborhood park straight into the gym. Whether on your own or with a partner, our turf is perfect for ab workouts, stretching, foam rolling, functional strength work and mobility. Say hello to plush, padded turf. Improve your speed, agility or coordination with a variety of workout options in our expansive turf area.','https://i.ytimg.com/vi/amww8mZEF7E/maxresdefault.jpg',0,'2019-11-26 04:39:40','2019-11-26 06:35:56'),(2,'Free Weight Area','To build muscle, accelerate weight loss or tone your body, our free weights area features all the equipment you could ever want. Mirrored walls keep your form in check, make you feel connected to the gym community that surrounds you, and your selfies on point. With a variety of weights and sizes, your iron pumping options are endless.','https://s3-media3.fl.yelpcdn.com/bphoto/oljwxJpPvg7FHVlrIPzLug/o.jpg',0,'2019-11-26 04:41:55','2019-11-26 04:41:55'),(3,'Cardio Deck','Run, climb, pedal, move, warm up, cool down – our cardio deck is full of ways to get your heart pumping. Jump onto any of our machines and confidently customize your cardio routine. Go to your best and back, all without leaving your gym.','https://s3-media3.fl.yelpcdn.com/bphoto/Jk1wz0bQ1k4eYPVr4slQdw/o.jpg',0,'2019-11-26 04:43:45','2019-11-26 04:43:45'),(4,'Fitness Cinema','Workout or Movie Binge? You can have both in the N.E. Gym Cinema. Step into the privacy of our dark theater room, hop on a bike, elliptical or treadmill and let our extensive library of movies provide the distraction you need to achieve your fitness goals.','https://si.wsj.net/public/resources/images/PJ-BZ755_GYMMOV_M_20150127135529.jpg',0,'2019-11-26 04:44:28','2019-11-26 06:33:50'),(5,'Basketball Court','Pass, dribble, post up, rebound, block and swish with some friends. Take a break from your normal routine and forget that you’re even working out. Our high-end hardwood basketball courts are a slam dunk for fun.','https://recsports.ufl.edu/wp-content/uploads/2019/08/BasketballCourt.jpg',0,'2019-11-26 04:45:50','2019-11-26 04:45:50'),(6,'Pool','Splash your way to weightlessness in our large capacity pools. Whether you’re training for your next tri, recovering from an injury, or just wanting to enjoy a low impact workout in a water aerobics class, the pool is for you.','https://assets.better.org.uk/uploads/asset/attachment/29322/images_w750h330_Main_Pool.JPG',1,'2019-11-26 05:01:26','2019-11-26 05:01:26'),(7,'SPA and Sauna','Every N.E. pool is equipped with high-end spa, steam and sauna features — perfect for rejuvenating and relaxing.','https://i.pinimg.com/originals/7c/f0/36/7cf036e202be0452b5f9ccce85efb1c3.jpg',1,'2019-11-26 05:04:42','2019-11-26 05:04:42'),(8,'Hydro-massage','You’ve done it again. You’ve pushed your body through another great workout. So reward yourself! Our HydroMassage beds will soothe your sore muscles with just enough pressure to keep you coming back for more. Ah, the joy of recovering faster with world-class massage equipment at your fingertips!','https://www.ghfc.com/uploads/images/post-workout-recovery-chill-hydromassage-lounge-700x467.jpg',1,'2019-11-26 05:05:34','2019-11-26 07:42:24'),(9,'Tanning','Step into our top-of-the-line tanning beds to soak up some vitamin D. Whether you’re prepping for a fitness competition or just want to sport a sun-kissed look, N.E. Gym Tanning is a perfectly private, clean space to relax!','https://www.planetfitness.com/sites/default/files/styles/gallery_16x9/public/2018-07/Fairfield.020_Edit.jpg?itok=yM13md3z',1,'2019-11-26 05:07:17','2019-11-26 07:55:57');
/*!40000 ALTER TABLE `amenities` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-26  1:04:21
