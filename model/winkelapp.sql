
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE if EXISTS `products`;
DROP TABLE if EXISTS `users`;
DROP TABLE if EXISTS `orders`;
DROP TABLE if EXISTS `order_products`;

CREATE TABLE `products` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`category` varchar(255) NOT NULL,
	`product_name` varchar(255) NOT NULL,
	`price` DECIMAL NOT NULL,
	`description` varchar(255) NOT NULL,
	`stock_quantity` INT NOT NULL,
	`user_id` INT NOT NULL,
	`img` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`address_line_1` varchar(255) NOT NULL,
	`address_line_2` varchar(255) NOT NULL,
	`town` varchar(255) NOT NULL,
	`postcode` INT(5) NOT NULL,
	`state` varchar(20) NOT NULL,
	`contact_number` INT NOT NULL,
	`email` varchar(255) NOT NULL,
	`role` varchar(50) NOT NULL,
	`username` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `orders` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`quantity` INT NOT NULL,
	`product_id` INT NOT NULL,
	`user_id`INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `order_products` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`order_id` INT NOT NULL,
	`product_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

SET FOREIGN_KEY_CHECKS = 1;