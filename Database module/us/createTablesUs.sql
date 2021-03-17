CREATE TABLE `us`.`user` (
  `ID` VARCHAR(45) NOT NULL COMMENT 'Identification number of the user',
  `Name` VARCHAR(45) NOT NULL COMMENT 'Name of the user',
  `middleName` VARCHAR(45) COMMENT 'Middle name of the user',
  `firstLastName` VARCHAR(45) NOT NULL COMMENT 'First last name of the user',
  `secondLastName` VARCHAR(45) NOT NULL COMMENT 'Second last name of the user',
  `Username` VARCHAR(45) NOT NULL COMMENT 'Identification name of the user',
  `phoneNumber`  MEDIUMINT UNSIGNED NOT NULL COMMENT 'Phone number of the user',
  `Department` VARCHAR(45) NOT NULL COMMENT 'Department of the user',
  `Address` VARCHAR(100) NOT NULL COMMENT 'Address of the user',
  `Password` VARCHAR(45) NOT NULL COMMENT 'Password of the user',
  `date_creation` DATE NOT NULL COMMENT 'Date of creation',
  `user_creation` VARCHAR(45) NOT NULL COMMENT 'User who created it',
  `date_last_modification` DATE NULL COMMENT 'Date of the last modification',
  `user_last_modification` VARCHAR(45) NULL COMMENT 'Last user who modified it',
  PRIMARY KEY (`Username`),
  UNIQUE INDEX `user_id_uk` (`ID` ASC) VISIBLE)
COMMENT = 'Table that stores data of users';