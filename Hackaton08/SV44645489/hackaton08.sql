-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-10-2023 a las 19:36:36
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hackaton08`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buy`
--

CREATE TABLE `buy` (
  `idBuy` int NOT NULL,
  `idTipDoc` int NOT NULL,
  `serieDoc` varchar(6) COLLATE utf32_spanish_ci NOT NULL,
  `numeroDoc` varchar(8) COLLATE utf32_spanish_ci NOT NULL,
  `idUserBuyer` int NOT NULL,
  `idUserSupplier` int NOT NULL,
  `dateBuy` date NOT NULL,
  `mtoBuy` decimal(10,0) NOT NULL,
  `mtoIGV` decimal(10,0) NOT NULL,
  `mtoSubTot` decimal(10,0) NOT NULL,
  `mtoTot` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buy_detail`
--

CREATE TABLE `buy_detail` (
  `idBuyDetail` int NOT NULL,
  `idBuy` int NOT NULL,
  `idElement` int NOT NULL,
  `idUniMean` int NOT NULL,
  `multiple` int NOT NULL,
  `quantity` int NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  `valBuy` decimal(10,0) NOT NULL,
  `IGV` decimal(10,0) NOT NULL,
  `valGV` decimal(10,0) NOT NULL,
  `valSubTot` decimal(10,0) NOT NULL,
  `valTotal` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `element`
--

CREATE TABLE `element` (
  `idElement` int NOT NULL,
  `dsElement` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `typeElement` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `idUniMean` int NOT NULL,
  `multiple` int NOT NULL,
  `quantity` int NOT NULL,
  `cost` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `income`
--

CREATE TABLE `income` (
  `idIncome` int NOT NULL,
  `idUserResponsible` int NOT NULL,
  `idProduct` int NOT NULL,
  `idUniMean` int NOT NULL,
  `multiple` int NOT NULL,
  `quantity` int NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  `utility` decimal(10,0) NOT NULL,
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `income_detail`
--

CREATE TABLE `income_detail` (
  `idIncDet` int NOT NULL,
  `idIncome` int NOT NULL,
  `idElement` int NOT NULL,
  `idUniMean` int NOT NULL,
  `multiple` int NOT NULL,
  `quantity` int NOT NULL,
  `cost` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `idProduct` int NOT NULL,
  `dsProduct` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `idUniMean` int NOT NULL,
  `multiple` int NOT NULL,
  `quantity` int NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  `utility` decimal(10,0) NOT NULL,
  `price` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `idRole` int NOT NULL,
  `dsRole` varchar(50) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `role`
--

INSERT INTO `role` (`idRole`, `dsRole`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'CLIENTE'),
(3, 'PROVEEDOR'),
(4, 'VENDEDOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_document`
--

CREATE TABLE `type_document` (
  `idTipDoc` int NOT NULL,
  `dsTipDoc` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `abrTipDoc` varchar(50) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `type_document`
--

INSERT INTO `type_document` (`idTipDoc`, `dsTipDoc`, `abrTipDoc`) VALUES
(1, 'FACTURA', 'FAC'),
(2, 'BOLETA', 'BOL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_identity_document`
--

CREATE TABLE `type_identity_document` (
  `idTipDocIde` int NOT NULL,
  `dsTipDocIde` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `abrTipDocIde` varchar(50) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `type_identity_document`
--

INSERT INTO `type_identity_document` (`idTipDocIde`, `dsTipDocIde`, `abrTipDocIde`) VALUES
(1, 'Documento Nacional de Identidad', 'DNI'),
(2, 'Registro Único de Contribuyente', 'RUC'),
(3, 'Pasaporte', 'PASAPORTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unit_measurement`
--

CREATE TABLE `unit_measurement` (
  `idUniMean` int NOT NULL,
  `dsUniMean` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `multiple` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `unit_measurement`
--

INSERT INTO `unit_measurement` (`idUniMean`, `dsUniMean`, `multiple`) VALUES
(1, 'UNIDAD', 1),
(2, 'METRO', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `idUser` int NOT NULL,
  `idTipDocIde` int NOT NULL,
  `nroDocIde` varchar(20) COLLATE utf32_spanish_ci NOT NULL,
  `dsUser` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `nomUser` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `appUser` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `apmUser` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `razSocial` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `nomComercial` varchar(100) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`idUser`, `idTipDocIde`, `nroDocIde`, `dsUser`, `nomUser`, `appUser`, `apmUser`, `razSocial`, `nomComercial`) VALUES
(1, 1, '44645489', 'IMER NELSON AGUIRRE JARA', 'IMER NELSON', 'AGUIRRE', 'JARA', '', ''),
(2, 1, '34324534', 'YOVANA TORRES CHAUCAYANQUI', 'YOVANA', 'TORES', 'CHAUCAYANQUI', '', ''),
(3, 2, '23454567678', 'SODIMAC SAC', '', '', '', 'SODIMAC SAC', 'IMPORTA PERU');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_role`
--

CREATE TABLE `user_role` (
  `idUserRole` int NOT NULL,
  `idUser` int NOT NULL,
  `idRole` int NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `user_role`
--

INSERT INTO `user_role` (`idUserRole`, `idUser`, `idRole`, `active`) VALUES
(1, 1, 1, 1),
(2, 1, 4, 1),
(3, 2, 2, 1),
(4, 2, 3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`idBuy`),
  ADD KEY `FK_buy_idTipDoc` (`idTipDoc`),
  ADD KEY `FK_buy_idUserBuyer` (`idUserBuyer`),
  ADD KEY `FK_buy_idUserSupplier` (`idUserSupplier`);

--
-- Indices de la tabla `buy_detail`
--
ALTER TABLE `buy_detail`
  ADD PRIMARY KEY (`idBuyDetail`),
  ADD KEY `FK_buy_detail_idBuy` (`idBuy`),
  ADD KEY `FK_buy_detail_idElement` (`idElement`),
  ADD KEY `FK_buy_detail_idUniMean` (`idUniMean`);

--
-- Indices de la tabla `element`
--
ALTER TABLE `element`
  ADD PRIMARY KEY (`idElement`),
  ADD KEY `FK_element_detail_idUniMean` (`idUniMean`);

--
-- Indices de la tabla `income`
--
ALTER TABLE `income`
  ADD PRIMARY KEY (`idIncome`),
  ADD KEY `FK_income_idUserResponsible` (`idUserResponsible`),
  ADD KEY `FK_income_idProduct` (`idProduct`),
  ADD KEY `FK_income_idUniMean` (`idUniMean`);

--
-- Indices de la tabla `income_detail`
--
ALTER TABLE `income_detail`
  ADD PRIMARY KEY (`idIncDet`),
  ADD KEY `FK_income_detail_idIncome` (`idIncome`),
  ADD KEY `FK_income_detail_idElement` (`idElement`),
  ADD KEY `FK_income_detail_idUniMean` (`idUniMean`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `FK_idUniMean` (`idUniMean`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`idRole`);

--
-- Indices de la tabla `type_document`
--
ALTER TABLE `type_document`
  ADD PRIMARY KEY (`idTipDoc`);

--
-- Indices de la tabla `type_identity_document`
--
ALTER TABLE `type_identity_document`
  ADD PRIMARY KEY (`idTipDocIde`);

--
-- Indices de la tabla `unit_measurement`
--
ALTER TABLE `unit_measurement`
  ADD PRIMARY KEY (`idUniMean`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `FK_user_idTipDocIde` (`idTipDocIde`);

--
-- Indices de la tabla `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`idUserRole`),
  ADD KEY `FK_user_role_idUser` (`idUser`),
  ADD KEY `FK_user_role_idRole` (`idRole`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `buy`
--
ALTER TABLE `buy`
  MODIFY `idBuy` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `buy_detail`
--
ALTER TABLE `buy_detail`
  MODIFY `idBuyDetail` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `element`
--
ALTER TABLE `element`
  MODIFY `idElement` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `income`
--
ALTER TABLE `income`
  MODIFY `idIncome` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `income_detail`
--
ALTER TABLE `income_detail`
  MODIFY `idIncDet` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `idRole` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `type_document`
--
ALTER TABLE `type_document`
  MODIFY `idTipDoc` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `type_identity_document`
--
ALTER TABLE `type_identity_document`
  MODIFY `idTipDocIde` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `unit_measurement`
--
ALTER TABLE `unit_measurement`
  MODIFY `idUniMean` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user_role`
--
ALTER TABLE `user_role`
  MODIFY `idUserRole` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `buy`
--
ALTER TABLE `buy`
  ADD CONSTRAINT `FK_type_document_idTipDoc` FOREIGN KEY (`idTipDoc`) REFERENCES `type_document` (`idTipDoc`),
  ADD CONSTRAINT `FK_user_idUserBuyer` FOREIGN KEY (`idUserBuyer`) REFERENCES `user` (`idUser`),
  ADD CONSTRAINT `FK_user_idUserSupplier` FOREIGN KEY (`idUserSupplier`) REFERENCES `user` (`idUser`);

--
-- Filtros para la tabla `buy_detail`
--
ALTER TABLE `buy_detail`
  ADD CONSTRAINT `FK_buy_detail` FOREIGN KEY (`idBuy`) REFERENCES `buy` (`idBuy`),
  ADD CONSTRAINT `FK_buy_detail_idElement` FOREIGN KEY (`idElement`) REFERENCES `element` (`idElement`),
  ADD CONSTRAINT `FK_buy_detail_idUniMean` FOREIGN KEY (`idUniMean`) REFERENCES `unit_measurement` (`idUniMean`);

--
-- Filtros para la tabla `element`
--
ALTER TABLE `element`
  ADD CONSTRAINT `FK_element_detail_idUniMean` FOREIGN KEY (`idUniMean`) REFERENCES `unit_measurement` (`idUniMean`);

--
-- Filtros para la tabla `income`
--
ALTER TABLE `income`
  ADD CONSTRAINT `FK_income_idUniMean` FOREIGN KEY (`idUniMean`) REFERENCES `unit_measurement` (`idUniMean`),
  ADD CONSTRAINT `FK_product_idProduct` FOREIGN KEY (`idProduct`) REFERENCES `product` (`idProduct`),
  ADD CONSTRAINT `FK_user_idUserResponsible` FOREIGN KEY (`idUserResponsible`) REFERENCES `user` (`idUser`);

--
-- Filtros para la tabla `income_detail`
--
ALTER TABLE `income_detail`
  ADD CONSTRAINT `FK_income_detail_idElement` FOREIGN KEY (`idElement`) REFERENCES `element` (`idElement`),
  ADD CONSTRAINT `FK_income_detail_idIncome` FOREIGN KEY (`idIncome`) REFERENCES `income` (`idIncome`),
  ADD CONSTRAINT `FK_income_detail_idUniMean` FOREIGN KEY (`idUniMean`) REFERENCES `unit_measurement` (`idUniMean`);

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_idUniMean` FOREIGN KEY (`idUniMean`) REFERENCES `unit_measurement` (`idUniMean`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_idTipDocIde` FOREIGN KEY (`idTipDocIde`) REFERENCES `type_identity_document` (`idTipDocIde`);

--
-- Filtros para la tabla `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `FK_idRole` FOREIGN KEY (`idRole`) REFERENCES `role` (`idRole`),
  ADD CONSTRAINT `FK_idUser` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
