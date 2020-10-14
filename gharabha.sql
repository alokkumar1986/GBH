-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2020 at 02:02 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gharabha`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `name`, `status`) VALUES
(1, 'Class IV-VIII', 'active'),
(2, 'Class IX-X', 'active'),
(3, 'Class XI-XII', 'active'),
(4, 'Engineering Entrance', 'active'),
(5, 'Medical Entrance', 'active'),
(6, 'Computer Teacher', 'active'),
(7, 'Graduation Level', 'active'),
(8, 'BCA-BSc Tutor', 'active'),
(9, 'Engineering Subject', 'active'),
(10, 'Spoken English', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `purpose` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `mobile`, `address`, `purpose`, `date`) VALUES
(1, 'Srikant Kumar', 'srikantdklthe@gmail.com', '8093127043', 'bbsr', 'call back me', '2013-07-28 08:30:00'),
(2, 'Deba', 'debabrata@gmail.com', '9437776505', 'lingaraj vihar, pokhariput', 'for a tuter.', '2013-09-25 21:00:00'),
(3, 'Debaprasad', 'alokkumar.nayak2009@gmail.com', '7873965399', 'Jagatsinghpur', 'Tutor', '2013-12-25 22:00:00'),
(4, 'Alok Kumar Nayak', 'alokkumar.nayak@gmail.com', '9437776505', 'Jspur', 'Home tution', '2013-12-27 22:00:00'),
(5, 'Dr.sachi nandan Moahntys', 'sachinandan09@gmail.com', '9437322121', '80, Sobhagya Nagar Bhubaneswar', 'Home Tutor for LKG', '2014-07-14 21:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `greeting_gallery`
--

CREATE TABLE `greeting_gallery` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `source` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `roll` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `user_id`, `pass`, `roll`, `date`) VALUES
(1, 'gharabhada', 'bbsr', 'admin', '2013-12-28 03:07:10'),
(2, 'admin', 'gharabhada', 'admin', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `regstd`
--

CREATE TABLE `regstd` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `mob` varchar(100) NOT NULL,
  `intin` varchar(100) NOT NULL,
  `class` varchar(100) NOT NULL,
  `board` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `regstd`
--

INSERT INTO `regstd` (`id`, `name`, `address`, `email`, `mob`, `intin`, `class`, `board`, `date`) VALUES
(1, 'Srikant Kumar', 'bbsr', 'srikantkumarpratihary@gmail.com', '8093127043', '1', 'Class IX-X,Class XI-XII,Engineering Entrance,Medical Entrance,', 'cbse', '2013-07-28 08:30:00'),
(2, 'ABC', 'bbsr', 'srikantkumarpratihary@gmail.com', '8093127043', 'Institutes', 'Class IV-VIII,Class IX-X,Class XI-XII,Engineering Entrance,', 'CBSE', '2013-07-28 08:30:00'),
(3, 'Alok Kumar Nayak', 'Jspur', 'alokkumar.nayak2009@gmail.com', '9437776505', 'Home Tuition', 'Class IV-VIII,Class IX-X,', 'CHSE', '2013-12-25 22:00:00'),
(4, 'Alokkumar Nayak', 'Jagatsinghpur', 'alokkumar.nayak@gmail.com', '9437776505', 'Home Tuition', 'Class IV-VIII,Class IX-X,', 'CHSE', '2013-12-27 22:00:00'),
(5, 'dipti ranjna ghadei', 'unit-9, bhubaneswar-22', 'ghadei.dipu@rediffmail.com', '9777720393', 'Home Tuition', 'Class IV-VIII,', 'CBSE', '2014-03-17 22:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `regtutor`
--

CREATE TABLE `regtutor` (
  `id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Age` int(11) NOT NULL,
  `Gender` varchar(100) NOT NULL,
  `DOB` varchar(100) NOT NULL,
  `Address` text NOT NULL,
  `Locality` varchar(100) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Pin` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` varchar(100) NOT NULL,
  `Mobile` varchar(100) NOT NULL,
  `Photo` varchar(100) NOT NULL,
  `Interested` varchar(100) NOT NULL,
  `Spoken_English` varchar(100) NOT NULL,
  `Qualification` varchar(100) NOT NULL,
  `Teaching_Sub` varchar(100) NOT NULL,
  `Teaching_Exp` int(11) NOT NULL,
  `Classes_Perferred` varchar(100) NOT NULL,
  `Fee_Exp` varchar(100) NOT NULL,
  `Assignments` varchar(100) NOT NULL,
  `Additional` text NOT NULL,
  `Teaching_Area` varchar(100) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `regtutor`
--

INSERT INTO `regtutor` (`id`, `Name`, `Age`, `Gender`, `DOB`, `Address`, `Locality`, `State`, `Pin`, `Email`, `Phone`, `Mobile`, `Photo`, `Interested`, `Spoken_English`, `Qualification`, `Teaching_Sub`, `Teaching_Exp`, `Classes_Perferred`, `Fee_Exp`, `Assignments`, `Additional`, `Teaching_Area`, `Date`, `status`) VALUES
(3, 'Mr. Srikant Pratihary', 26, '1', '09-02-1987', 'Bhubaneswar', 'BHubaneswar', 'Odisha', '759020', 'srikantdklthe@gmail.com', '', '9437776505', '4zvwgx.jpg', 'All', 'Good', 'MCA', 'Engineering Subject,', 2, 'Spoken English,Class IV-VIII,11,', '20000 Per Month', '', '', '195,196,', '2013-07-27 08:30:00', 'active'),
(4, 'Mr. Alok Kumar', 27, '1', '16-12-1984', 'bbsr', 'Bhubaneswar', 'Odisha', '759020', 'alokkumar.nayak2009@gmail.com', '', '9437776505', 'live-img.jpg', 'Home Tuition', 'Good', 'MCA', 'Mathematics,Physics,Chemistry,English,', 0, 'Class IV-VIII,Class IX-X,Class XI-XII,', '20000 Per Month', '', '', 'Bhubaneswar,Cuttack,', '2013-07-28 08:30:00', 'active'),
(5, 'Mr. Debaprasad Nayak', 27, '1', '08-07-1986', 'Jagatsinghpur', 'Tirtol', 'Odisha', '754138', 'alokkumar.nayak@gmail.com', '', '9437776505', 'Hanuman.jpg', 'Home Tuition', 'Good', 'MCA', 'Mathematics,Physics,Computer Science,', 2, 'Class IV-VIII,Class IX-X,Class XI-XII,Computer Teacher,', '1000 Per Month', '', 'Nothing', 'Bhubaneswar,Cuttack,', '2013-12-27 22:00:00', 'active'),
(6, 'Mr. DILLIPKUMAR BISWAL', 24, '1', '19-05-1990', 'CHAMPATIPUR,ITAMATI, NAYAGARH', 'NAYAGARH', 'Odisha', '752068', 'dilliprbiswal@gmail.com', '', '9778342346', 'my phoo.1.jpg', 'All', 'Good', 'MTECH(I.T.), UTKAL UNIVERSITY', 'Computer Science,', 0, 'Engineering Entrance,Computer Teacher,Graduation Level,BCA-BSc Tutor,', '250 Per Hour', '', '', 'Bhubaneswar,Cuttack,Puri,', '2014-02-27 22:00:00', 'active'),
(7, 'Mr. Pramod Sethy', 25, '1', '14-06-1988', 'Madhusudan chhatrabas\r\nhostel no-2\r\nroom no-136\r\nutkal university,vani vihar', 'vani vihar', 'Odisha', '751004', 'pk4pramod@gmail.com', '', '8594926123', '0612244.jpg', 'Home Tuition', 'Excellent', 'MCA with two times UGC-NET Qualified & 4 times GATE Qualified', 'Mathematics,', 3, 'Class IV-VIII,', '3000 Per Month', '', '', 'Bhubaneswar,', '2014-05-03 21:00:00', 'active'),
(8, 'Mr. arup kar', 25, '1', '20-08-1990', 'Baragada brit colony ,Bjb Nagar,kalpana Area\r\nBhubaneswar', 'Kalpna Area,Bjb Nagar  Rasulgarha,Ravi takils', 'Odisha', '751014', 'arupkar22@gmail.com', '', '9132475480', 'DSC_0217.JPG', 'Home Tuition', 'Excellent', 'M.sc, Phy', 'Mathematics,Physics,Chemistry,English,Biology,Computer Science,', 5, 'Class IV-VIII,Class IX-X,Class XI-XII,Computer Teacher,Spoken English,', '3000.00 Per Month', '', '', 'Bhubaneswar,', '2014-05-08 21:00:00', 'active'),
(9, 'Mr. Kishore Parichha', 25, '1', '05-07-1988', 'Jaydev Bihar, Bishnu Priya Apartment,Near May Fair\r\nBhubaneswar', 'Jaydev bihar,Achrya Bihar,Nayapali,chandrasekher pur', 'Odisha', '751013', 'kishorpupun@gmail.com', '', '7504748992', 'Picture 005 - Copy.jpg', 'Home Tuition', 'Excellent', 'M.sc, Phy', 'Mathematics,Physics,Chemistry,English,Biology,', 5, 'Class IV-VIII,Class IX-X,Class XI-XII,', '3000.00 Per Month', '', '', 'Bhubaneswar,', '2014-05-08 21:00:00', 'active'),
(10, 'Mr. pradeep Behera', 24, '1', '13-05-1990', 'AT -Utkal University', 'vani bihar', 'Odisha', '754001', 'madadhabpradeep@gmail.com', '', '9040164732', 'PHT.jpg', 'Home Tuition', 'Satisfactory', 'M.A IN PHILOSOPHY', 'Mathematics,Physics,Chemistry,English,Biology,', 4, 'Class IX-X,', '3000 Per Month', '', '', 'Bhubaneswar,', '2014-06-07 21:00:00', 'active'),
(11, 'Mr. SOUMYA PRAKASH', 22, '1', '10-06-1992', 'AT- UTKAL UNIVERSITY VANIVIHAR,BBSR', 'VANIVIHAR', 'Odisha', '751004', 'soumyapandaa@gmail.com', '', '7894946565', '1479460_612763752124422_946090218_n.jpg', 'Home Tuition', 'Good', 'B.COM FROM RAVENSHAW,M.COM COMPLETED FROM UTKAL UNIVERSITY', 'Accounting,', 1, 'Class IV-VIII,Class IX-X,Class XI-XII,Graduation Level,', '4000-5000 Per Month', '', 'CHARTED ACCOUNTANT CONTINUING', 'Bhubaneswar,Cuttack,', '2014-06-08 21:00:00', 'active'),
(12, 'Mr. Bedabyasa sahoo', 22, '1', '16-05-1992', 'fakirmohan chhatrabas\r\nroom no-65,utkal university,vanivihar\r\nbhubaneswar ', 'vanivihar', 'Odisha', '751004', 'beda.sahoo@gmail.com', '', '9178272340', 'PHONO.jpg', 'Home Tuition', 'Good', 'M.sc applied geology', 'Mathematics,', 2, 'Class IV-VIII,', '2000 Per Month', '', '', 'Bhubaneswar,', '2014-06-25 21:00:00', 'active'),
(13, 'Mr. DILLIP PARIDA', 22, '1', '23-07-1991', 'BOYS HOSTEL NO-2,UTKAL UNIVERSITY,VANIVIHAR,UTKAL UNIVERSITY', 'BUBANESWAR', 'Odisha', '751004', 'cooldillipparida@gmail.com', '', '9658817166', 'PHOTO.jpg', 'All', 'Good', 'MASTER DEGREE', 'Mathematics,Physics,Chemistry,Biology,', 3, 'Class IV-VIII,Class IX-X,', '2000 Per Month', '', '', 'Bhubaneswar,', '2014-07-13 21:00:00', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `name`, `status`) VALUES
(1, 'Mathematics', 'active'),
(2, 'Physics', 'active'),
(3, 'Chemistry', 'active'),
(4, 'English', 'active'),
(5, 'Biology', 'active'),
(6, 'Computer Science', 'active'),
(7, 'Spoken English', 'active'),
(8, 'Economics', 'active'),
(9, 'Accounting', 'active'),
(10, 'Engineering Subject', 'active'),
(11, 'abc', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `greeting_gallery`
--
ALTER TABLE `greeting_gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regstd`
--
ALTER TABLE `regstd`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `regtutor`
--
ALTER TABLE `regtutor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `greeting_gallery`
--
ALTER TABLE `greeting_gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `regstd`
--
ALTER TABLE `regstd`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `regtutor`
--
ALTER TABLE `regtutor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
