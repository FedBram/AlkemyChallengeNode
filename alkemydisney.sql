-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2022 a las 16:13:27
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alkemydisney`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `weigth` int(11) DEFAULT NULL,
  `story` text DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `movieId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`id`, `name`, `age`, `weigth`, `story`, `img`, `createdAt`, `updatedAt`, `movieId`) VALUES
(1, 'Simba', 5, 190, 'He is the son of Mufasa and Sarabi, who was destined to rule the Pride Lands, as king. When Mufasa was murdered by his treacherous brother, Scar, Simba was exiled from the Pride Lands after his uncle tricked him into taking the blame for his fathers death.', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Simba_%28_Disney_character_-_adult%29.png/220px-Simba_%28_Disney_character_-_adult%29.png', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 1),
(2, 'Belle', 18, 60, 'She is the only daughter of Maurice, an inventor with whom she resides in a small, French village. The townsfolk labeled Belle an outcast because of her free spirit. She is also a proud bibliophile, her favorite genres being fantasy and adventure. Belles passion for fantastical stories, coupled with her outcast status, left her yearning for a life of adventure outside her small village. ', 'https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Belle.jpeg/revision/latest/scale-to-width-down/516?cb=20190312024430', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 2),
(3, 'Susan Evers', 11, 30, 'She lives with her divorced father, Mitch, in California. Shes also the aunt of Nikki Ferris.', 'https://static.wikia.nocookie.net/disney/images/1/1b/Susan_Evers.jpg/revision/latest/scale-to-width-down/516?cb=20160622084619', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 4),
(4, 'Beast', 20, 130, 'A prince by birth, he was cursed into becoming a monster by a mysterious Enchantress as punishment for his selfish and cruel manners. Only loving another and earning their love in return can free the Beast and those affected by the spell before time runs out.', 'https://static.wikia.nocookie.net/disney/images/8/84/Profile_-_Beast.jpeg/revision/latest/scale-to-width-down/516?cb=20190312024919', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 2),
(5, 'Wayne Szalinski', 40, 65, 'Wayne is an inventor who is struggling to get his shrinking machine to work. He tests it out on an apple, but rather than shrinking it, it blows it up instead.', 'https://static.wikia.nocookie.net/disney/images/2/24/Wayne_Szalinski_HWSO.png/revision/latest/scale-to-width-down/350?cb=20150503065207', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 3),
(6, 'Woody', 30, 1, 'He is a vintage cowboy doll that originally belonged to a boy named Andy Davis. As Andys favorite since kindergarten, Woody served as the leader of Andys toys', 'https://static.wikia.nocookie.net/disney/images/2/22/Profile_-_Woody.jpeg/revision/latest/scale-to-width-down/516?cb=20200711052417', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 6),
(7, 'Coach Herman Boone', 36, 80, 'American high school football coach who coached the 1971 T. C. Williams High School football team', 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Herman-Boone.Remember-the-Titans.webp', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 5),
(8, 'Buzz Lightyear', 0, 1, 'He is a spaceman action figure originally belonging to Andy Davis based on the fictitious character of the same name.', 'https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest/scale-to-width-down/516?cb=20190623020017', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 6),
(9, 'Tarzan ', 21, 75, 'Commonly known as the Ape Man, Tarzan was rescued and raised by a colony of apes after his parents were killed by the bloodthirsty Sabor. With help from his childhood friends Terk and Tantor, Tarzan would grow to become the valiant protector of the apes and the jungle at large—all the while never knowing the outside world.', 'https://static.wikia.nocookie.net/disney/images/2/2e/Profile_-_Tarzan.png/revision/latest/scale-to-width-down/516?cb=20190821020257', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 7),
(10, 'Mary Poppins', 33, 61, 'She is a nanny who uses her magical powers to help the Banks family. Since her debut, she has become one of Disneys most iconic and endearing characters.', 'https://static.wikia.nocookie.net/disney/images/5/5c/Mary_Poppins_-_Julie_Andrews.jpg/revision/latest/scale-to-width-down/515?cb=20160212083150', '2022-04-30 13:59:42', '2022-04-30 13:59:42', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`, `img`, `createdAt`, `updatedAt`) VALUES
(1, 'Animation', 'https://www.filmsite.org/images/animated-genre.jpg', '2022-04-30 13:59:42', '2022-04-30 13:59:42'),
(2, 'Comedy', '', '2022-04-30 13:59:42', '2022-04-30 13:59:42'),
(3, 'Sport', '', '2022-04-30 13:59:42', '2022-04-30 13:59:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `genreId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `date`, `img`, `rate`, `createdAt`, `updatedAt`, `genreId`) VALUES
(1, 'The Lion King', 1994, 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Lion_King_poster.jpg/220px-The_Lion_King_poster.jpg', 5, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 1),
(2, 'Beauty and the Beast', 1991, 'https://static.wikia.nocookie.net/disney/images/0/0b/Beauty_and_the_Beast_theatrical_poster.jpg/revision/latest/scale-to-width-down/516?cb=20160715084901', 4, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 1),
(3, 'Honey, I Shrunk the Kids', 1989, 'https://static.wikia.nocookie.net/disney/images/8/86/Honey%2C_I_Shrunk_the_Kids_poster.jpg/revision/latest/scale-to-width-down/516?cb=20120219003506', 3, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 2),
(4, 'The Parent Trap', 1961, 'https://static.wikia.nocookie.net/disney/images/8/8b/Parent_trap_%281961%29.jpg/revision/latest/scale-to-width-down/516?cb=20210611005805', 4, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 2),
(5, 'Remember the Titans', 2000, 'https://static.wikia.nocookie.net/disney/images/d/d1/Remember_the_titansposter.jpg/revision/latest/scale-to-width-down/338?cb=20210807032849', 3, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 3),
(6, 'Toy Story', 1995, 'https://static.wikia.nocookie.net/disney/images/1/13/Toy_Story.jpg/revision/latest/scale-to-width-down/516?cb=20151003163558', 5, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 1),
(7, 'Tarzan', 1999, 'https://static.wikia.nocookie.net/disney/images/d/d2/Tarzan_Second_Poster.jpg/revision/latest/scale-to-width-down/516?cb=20140316164818', 4, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 1),
(8, 'Mary Poppins', 1964, 'https://static.wikia.nocookie.net/disney/images/f/ff/Mary_Poppins_1964_poster.jpg/revision/latest/scale-to-width-down/516?cb=20210411011028', 5, '2022-04-30 13:59:42', '2022-04-30 13:59:42', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `movieId` (`movieId`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `genreId` (`genreId`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
