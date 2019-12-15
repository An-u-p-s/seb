-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 15, 2019 at 06:17 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `upn`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_db_info`
--

CREATE TABLE IF NOT EXISTS `app_db_info` (
  `database` varchar(30) NOT NULL,
  `version` int(11) NOT NULL,
  `updatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`database`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `upsc_exam_info`
--

CREATE TABLE IF NOT EXISTS `upsc_exam_info` (
  `upsc_yr` varchar(4) NOT NULL,
  `notifyReleased` varchar(1) NOT NULL,
  `notifyReleaseOn` varchar(15) NOT NULL,
  `prelimExamMonth` varchar(15) NOT NULL,
  `mainExamMonth` varchar(15) NOT NULL,
  PRIMARY KEY (`upsc_yr`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `upsc_exam_info`
--

INSERT INTO `upsc_exam_info` (`upsc_yr`, `notifyReleased`, `notifyReleaseOn`, `prelimExamMonth`, `mainExamMonth`) VALUES
('', '', '', '', ''),
('2020', 'N', 'FEBRUARY', 'MAY', 'SEPTEMBER'),
('2021', 'N', 'JANUARY', 'APRIL', 'AUGUST'),
('2022', 'N', 'DECEMBER', 'MARCH', 'JULY'),
('2023', 'N', 'NOVEMBER', 'FEBRUARY', 'JUNE');

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE IF NOT EXISTS `user_accounts` (
  `account_Id` varchar(15) NOT NULL DEFAULT 'UUID()',
  `name` varchar(35) NOT NULL,
  `email` varchar(55) NOT NULL,
  `acc_pwd` varchar(100) NOT NULL,
  `prep_plan_year` varchar(4) NOT NULL,
  PRIMARY KEY (`account_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_accounts`
--

INSERT INTO `user_accounts` (`account_Id`, `name`, `email`, `acc_pwd`, `prep_plan_year`) VALUES
('UUID()', 'BBB', 'JNJK', 'BB,KL', '2019');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
