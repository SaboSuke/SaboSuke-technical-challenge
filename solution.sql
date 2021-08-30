-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2021 at 07:10 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `solution`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_equipe`
--

CREATE TABLE `t_equipe` (
  `e_id` int(11) NOT NULL,
  `e_label` varchar(255) NOT NULL,
  `e_entraineur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_equipe`
--

INSERT INTO `t_equipe` (`e_id`, `e_label`, `e_entraineur`) VALUES
(1, 'equipe 1', 'Amine'),
(2, 'equipe 2', 'Hammadi'),
(3, 'equipe 3', 'Hamza'),
(4, 'equipe 4', 'Essam'),
(5, 'equipe5', 'salah');

-- --------------------------------------------------------

--
-- Table structure for table `t_equipe_joueur`
--

CREATE TABLE `t_equipe_joueur` (
  `ej_id` int(11) NOT NULL,
  `j_id` int(11) NOT NULL,
  `e_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_equipe_joueur`
--

INSERT INTO `t_equipe_joueur` (`ej_id`, `j_id`, `e_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 4, 2),
(4, 3, 2),
(5, 5, 3),
(6, 6, 3),
(7, 7, 4),
(8, 8, 4),
(9, 11, 5),
(10, 12, 5),
(11, 16, 5),
(12, 16, 5),
(13, 17, 5),
(14, 15, 5);

-- --------------------------------------------------------

--
-- Table structure for table `t_joueur`
--

CREATE TABLE `t_joueur` (
  `j_id` int(11) NOT NULL,
  `j_nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_joueur`
--

INSERT INTO `t_joueur` (`j_id`, `j_nom`) VALUES
(1, 'j1'),
(2, 'j2'),
(3, 'j3'),
(4, 'j4'),
(5, 'j5'),
(6, 'j6'),
(7, 'j7'),
(8, 'j8'),
(11, 'j9'),
(12, 'j10'),
(13, 'j11'),
(14, 'j12'),
(15, 'j13'),
(16, 'j14'),
(17, 'j15');

-- --------------------------------------------------------

--
-- Table structure for table `t_match`
--

CREATE TABLE `t_match` (
  `m_id` int(11) NOT NULL,
  `t_id` int(11) NOT NULL,
  `m_label` varchar(255) NOT NULL,
  `e1_id` int(11) NOT NULL,
  `e2_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_match`
--

INSERT INTO `t_match` (`m_id`, `t_id`, `m_label`, `e1_id`, `e2_id`) VALUES
(1, 1, 'match 1', 1, 2),
(2, 1, 'match 2', 3, 4);

-- --------------------------------------------------------

--
-- Table structure for table `t_tournoi`
--

CREATE TABLE `t_tournoi` (
  `t_id` int(11) NOT NULL,
  `t_label` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_tournoi`
--

INSERT INTO `t_tournoi` (`t_id`, `t_label`) VALUES
(1, 'Champions League');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_equipe`
--
ALTER TABLE `t_equipe`
  ADD PRIMARY KEY (`e_id`);

--
-- Indexes for table `t_equipe_joueur`
--
ALTER TABLE `t_equipe_joueur`
  ADD PRIMARY KEY (`ej_id`),
  ADD KEY `fk_ej_joueur` (`j_id`),
  ADD KEY `fk_ej_equipe` (`e_id`);

--
-- Indexes for table `t_joueur`
--
ALTER TABLE `t_joueur`
  ADD PRIMARY KEY (`j_id`);

--
-- Indexes for table `t_match`
--
ALTER TABLE `t_match`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `fk_match_tournoi` (`t_id`),
  ADD KEY `fk_equipe1_match` (`e1_id`),
  ADD KEY `fk_equipe2_match` (`e2_id`);

--
-- Indexes for table `t_tournoi`
--
ALTER TABLE `t_tournoi`
  ADD PRIMARY KEY (`t_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_equipe`
--
ALTER TABLE `t_equipe`
  MODIFY `e_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `t_equipe_joueur`
--
ALTER TABLE `t_equipe_joueur`
  MODIFY `ej_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `t_joueur`
--
ALTER TABLE `t_joueur`
  MODIFY `j_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `t_match`
--
ALTER TABLE `t_match`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t_tournoi`
--
ALTER TABLE `t_tournoi`
  MODIFY `t_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `t_equipe_joueur`
--
ALTER TABLE `t_equipe_joueur`
  ADD CONSTRAINT `fk_ej_equipe` FOREIGN KEY (`e_id`) REFERENCES `t_equipe` (`e_id`),
  ADD CONSTRAINT `fk_ej_joueur` FOREIGN KEY (`j_id`) REFERENCES `t_joueur` (`j_id`);

--
-- Constraints for table `t_match`
--
ALTER TABLE `t_match`
  ADD CONSTRAINT `fk_equipe1_match` FOREIGN KEY (`e1_id`) REFERENCES `t_equipe` (`e_id`),
  ADD CONSTRAINT `fk_equipe2_match` FOREIGN KEY (`e2_id`) REFERENCES `t_equipe` (`e_id`),
  ADD CONSTRAINT `fk_match_tournoi` FOREIGN KEY (`t_id`) REFERENCES `t_tournoi` (`t_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
