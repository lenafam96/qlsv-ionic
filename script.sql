DROP TABLE IF EXISTS `students`;

CREATE TABLE `students` (
  `id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(100) NULL COLLATE 'utf8mb4_unicode_ci',
  `address` VARCHAR(100) NULL COLLATE 'utf8mb4_unicode_ci',
  `avatar` VARCHAR(250) NULL COLLATE 'utf8mb4_unicode_ci',
  `score` FLOAT DEFAULT 0,
  PRIMARY KEY (`id`))
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB;

INSERT INTO `students` (`id`,`name`,`address`,`avatar`,`score`)
VALUES 
    ('1','Lê Công Minh','Hoà Bình','avatar',9),
    ('2','Phan Thanh Hải','Thái Bình Bình','avatar',9),
    ('3','Hoàng Thảo Trang','Vũ Bình','avatar',9);