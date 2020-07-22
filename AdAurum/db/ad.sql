-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 22 2020 г., 09:10
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ad`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comment_address`
--

CREATE TABLE `comment_address` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_address` text NOT NULL,
  `comment_company_id` int(10) UNSIGNED NOT NULL,
  `comment_user_id` int(10) UNSIGNED NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `comment_director`
--

CREATE TABLE `comment_director` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_director` text NOT NULL,
  `comment_company_id` int(10) UNSIGNED NOT NULL,
  `comment_user_id` int(10) UNSIGNED NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `comment_director`
--

INSERT INTO `comment_director` (`comment_id`, `comment_director`, `comment_company_id`, `comment_user_id`, `comment_date`) VALUES
(1, 'Комментарий к директору Стали', 5, 1, '2020-07-20 08:30:36');

-- --------------------------------------------------------

--
-- Структура таблицы `comment_general`
--

CREATE TABLE `comment_general` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_general` text NOT NULL,
  `comment_company_id` int(10) UNSIGNED NOT NULL,
  `comment_user_id` int(10) UNSIGNED NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `comment_inn`
--

CREATE TABLE `comment_inn` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_inn` text NOT NULL,
  `comment_company_id` int(10) UNSIGNED NOT NULL,
  `comment_user_id` int(10) UNSIGNED NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `comment_name`
--

CREATE TABLE `comment_name` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_name` text NOT NULL,
  `comment_company_id` int(10) UNSIGNED NOT NULL,
  `comment_user_id` int(10) UNSIGNED NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `comment_overall`
--

CREATE TABLE `comment_overall` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_desc` text NOT NULL,
  `comment_company_id` int(10) UNSIGNED NOT NULL,
  `comment_user_id` int(10) UNSIGNED NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `comment_overall`
--

INSERT INTO `comment_overall` (`comment_id`, `comment_desc`, `comment_company_id`, `comment_user_id`, `comment_date`) VALUES
(1, 'Комментарий для компании Никель', 7, 1, '2020-07-22 05:31:33'),
(2, 'Коммент 2 для компании Никель', 7, 1, '2020-07-22 05:31:33'),
(3, 'Новый комментарий', 7, 1, '2020-07-22 06:08:46'),
(4, 'Комментарий компании Алюминий', 6, 1, '2020-07-22 06:09:19');

-- --------------------------------------------------------

--
-- Структура таблицы `comment_phone`
--

CREATE TABLE `comment_phone` (
  `comment_id` int(10) UNSIGNED NOT NULL,
  `comment_phone` text NOT NULL,
  `comment_company_id` int(10) UNSIGNED NOT NULL,
  `comment_user_id` int(10) UNSIGNED NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Структура таблицы `companies`
--

CREATE TABLE `companies` (
  `company_id` int(10) UNSIGNED NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_inn` varchar(32) NOT NULL,
  `company_general` text NOT NULL,
  `company_director` varchar(255) NOT NULL,
  `company_address` varchar(255) NOT NULL,
  `company_phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `companies`
--

INSERT INTO `companies` (`company_id`, `company_name`, `company_inn`, `company_general`, `company_director`, `company_address`, `company_phone`) VALUES
(5, 'ООО Сталь', '23456', 'Информация о компании Сталь', 'Стальной В.В.', 'Санкт-Петербург, ул. Стальных, 40', '888888888'),
(6, 'ООО Алюминий', '2345678', 'Информация о компании Алюминий', 'Нестальной А.А.', 'Тосно, ул. Нестальных, 38', '456456'),
(7, 'ООО Никель', '345623451', 'Информация о компании ООО Никель', 'Никелев Н.Н. ', 'г. Норильск, ул. неизвестная, 23', '876543'),
(8, 'ОАО Чугун', '9083045', 'Информация о компании ОАО Чугун', 'Чугунов В.В.', 'Псков, ул. Чугунная, 67', '65432'),
(16, 'ООО Сланец', 'Отсутствует', 'Информация о компании ООО Сланец', 'Отсутствует', 'г. Сланцы', '88005553555');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`user_id`, `user_name`) VALUES
(1, 'Sergey'),
(2, 'Aleks');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `comment_address`
--
ALTER TABLE `comment_address`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_company_id` (`comment_company_id`,`comment_user_id`),
  ADD KEY `comment_user_id` (`comment_user_id`);

--
-- Индексы таблицы `comment_director`
--
ALTER TABLE `comment_director`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_company_id` (`comment_company_id`,`comment_user_id`),
  ADD KEY `comment_user_id` (`comment_user_id`);

--
-- Индексы таблицы `comment_general`
--
ALTER TABLE `comment_general`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_company_id` (`comment_company_id`,`comment_user_id`),
  ADD KEY `comment_user_id` (`comment_user_id`);

--
-- Индексы таблицы `comment_inn`
--
ALTER TABLE `comment_inn`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_company_id` (`comment_company_id`,`comment_user_id`),
  ADD KEY `comment_user_id` (`comment_user_id`);

--
-- Индексы таблицы `comment_name`
--
ALTER TABLE `comment_name`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_company_id` (`comment_company_id`,`comment_user_id`),
  ADD KEY `comment_user_id` (`comment_user_id`);

--
-- Индексы таблицы `comment_overall`
--
ALTER TABLE `comment_overall`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_company_id` (`comment_company_id`),
  ADD KEY `comment_user_id` (`comment_user_id`);

--
-- Индексы таблицы `comment_phone`
--
ALTER TABLE `comment_phone`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_company_id` (`comment_company_id`,`comment_user_id`),
  ADD KEY `comment_user_id` (`comment_user_id`);

--
-- Индексы таблицы `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `comment_address`
--
ALTER TABLE `comment_address`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `comment_director`
--
ALTER TABLE `comment_director`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `comment_general`
--
ALTER TABLE `comment_general`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `comment_inn`
--
ALTER TABLE `comment_inn`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `comment_name`
--
ALTER TABLE `comment_name`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `comment_overall`
--
ALTER TABLE `comment_overall`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `comment_phone`
--
ALTER TABLE `comment_phone`
  MODIFY `comment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `companies`
--
ALTER TABLE `companies`
  MODIFY `company_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `comment_address`
--
ALTER TABLE `comment_address`
  ADD CONSTRAINT `comment_address_ibfk_1` FOREIGN KEY (`comment_user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comment_address_ibfk_2` FOREIGN KEY (`comment_company_id`) REFERENCES `companies` (`company_id`);

--
-- Ограничения внешнего ключа таблицы `comment_director`
--
ALTER TABLE `comment_director`
  ADD CONSTRAINT `comment_director_ibfk_1` FOREIGN KEY (`comment_user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comment_director_ibfk_2` FOREIGN KEY (`comment_company_id`) REFERENCES `companies` (`company_id`);

--
-- Ограничения внешнего ключа таблицы `comment_general`
--
ALTER TABLE `comment_general`
  ADD CONSTRAINT `comment_general_ibfk_1` FOREIGN KEY (`comment_user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comment_general_ibfk_2` FOREIGN KEY (`comment_company_id`) REFERENCES `companies` (`company_id`);

--
-- Ограничения внешнего ключа таблицы `comment_inn`
--
ALTER TABLE `comment_inn`
  ADD CONSTRAINT `comment_inn_ibfk_1` FOREIGN KEY (`comment_user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comment_inn_ibfk_2` FOREIGN KEY (`comment_company_id`) REFERENCES `companies` (`company_id`);

--
-- Ограничения внешнего ключа таблицы `comment_name`
--
ALTER TABLE `comment_name`
  ADD CONSTRAINT `comment_name_ibfk_1` FOREIGN KEY (`comment_user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comment_name_ibfk_2` FOREIGN KEY (`comment_company_id`) REFERENCES `companies` (`company_id`);

--
-- Ограничения внешнего ключа таблицы `comment_overall`
--
ALTER TABLE `comment_overall`
  ADD CONSTRAINT `comment_overall_ibfk_1` FOREIGN KEY (`comment_user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comment_overall_ibfk_2` FOREIGN KEY (`comment_company_id`) REFERENCES `companies` (`company_id`);

--
-- Ограничения внешнего ключа таблицы `comment_phone`
--
ALTER TABLE `comment_phone`
  ADD CONSTRAINT `comment_phone_ibfk_1` FOREIGN KEY (`comment_user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `comment_phone_ibfk_2` FOREIGN KEY (`comment_company_id`) REFERENCES `companies` (`company_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
