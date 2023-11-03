/****************************/
/*** UNA TABLA **************/
/****************************/

/*1.- ¿Cuántos clientes hay registrados?*/ 
SELECT COUNT(*) AS totalRegisteredCustomers FROM customers;

/*2.- ¿Cuántos pedidos?*/
SELECT COUNT(*) AS totalOrders FROM orders;

/*3.- ¿Qué clientes viven en Londres y su nombre (CustomerName) empieza por A?*/
SELECT CustomerName, City FROM customers WHERE City = 'London' AND CustomerName LIKE 'A%';

/*4.- ¿Cuántos clientes hay que son de Londres?*/ 
SELECT COUNT(*) AS totalCustomersLondon FROM customers WHERE City = 'London';

/*5.- ¿Cuántos clientes hay en cada ciudad?*/ 
SELECT City, COUNT(*) AS totalCustomersCities FROM customers GROUP BY City;

/*6.- ¿Cuántos empleados nacieron después del 1 de Junio de 1965?*/ 
SELECT COUNT(*) AS employeesBornAfter1965 FROM employees WHERE BirthDate > '1965-06-01';

/*7.- Hazme un informe que diga «El empleado N nació el N», siendo N, nombre (FirstName y LastName) y día de nacimiento (BirthDate).*/
SELECT CONCAT('El empleado ',FirstName, ' ',LastName, ' nació el ', BirthDate) AS infoEmployee FROM employees;

/*8.- Dime los países que tengan más de 5 clientes, ordenados por el nombre del país.*/ 
SELECT Country, COUNT(*) AS totalCustomers FROM customers GROUP BY Country HAVING COUNT(*) > 5 ORDER BY Country;


/****************************/
/*** VARIAS TABLAS **********/
/****************************/

/*1.- Dime el nombre del cliente del pedido 10360.*/
SELECT C.CustomerName
FROM customers C
JOIN orders O ON C.CustomerID = O.CustomerID
WHERE O.OrderID = 10360;

/*2.-  Dime el nombre completo de los clientes con los pedidos 10360, 10253 y 10440.*/
SELECT DISTINCT C.CustomerName
FROM customers C
JOIN orders O ON C.CustomerID = O.CustomerID
WHERE O.OrderID IN (10360, 10253, 10440);

/*3.- Dime las ciudades y el número de pedidos de clientes en esa ciudad.*/
SELECT C.City, COUNT(O.OrderID) AS numberOrders
FROM customers C
LEFT JOIN orders O ON C.CustomerID = O.CustomerID
GROUP BY C.City;

/*4.- ¿Cuáles son los tres países desde los que tengo más pedidos?*/
SELECT C.Country, COUNT(O.OrderID) AS numberOrders
FROM customers C
LEFT JOIN orders O ON C.CustomerID = O.CustomerID
GROUP BY C.Country
ORDER BY numberOrders DESC
LIMIT 3;

/*5.- Necesito un informe con el nombre completo de los empleados y el número de pedidos que registraron.*/
SELECT CONCAT(E.FirstName, ' ', E.LastName) AS infoEmployee, COUNT(O.OrderID) AS numberOrders
FROM employees E
LEFT JOIN orders O ON E.EmployeeID = O.EmployeeID
GROUP BY E.EmployeeID;

/*6.- En el informe anterior, solo necesito los empleados cuyo nombre comience por M.*/
SELECT CONCAT(E.FirstName, ' ', E.LastName) AS infoEmployee, COUNT(O.OrderID) AS numberOrders
FROM employees E
LEFT JOIN orders O ON E.EmployeeID = O.EmployeeID
WHERE E.FirstName LIKE 'M%'
GROUP BY E.EmployeeID;

/*7.- Quiero saber el número de pedido, qué empleado (solo el nombre) lo registró y el cliente.*/
SELECT O.OrderID, CONCAT(E.FirstName, ' ', E.LastName) AS infoEmployee, C.CustomerName AS infoCustomer
FROM orders O
JOIN employees E ON O.EmployeeID = E.EmployeeID
JOIN customers C ON O.CustomerID = C.CustomerID;

/*8.- ¿Hay algún cliente que haya hecho más de un pedido registrado por el mismo empleado?*/
SELECT C.CustomerName, E.FirstName AS infoEmployee, COUNT(O.OrderID) AS numberOrders
FROM customers C
JOIN orders O ON C.CustomerID = O.CustomerID
JOIN employees E ON O.EmployeeID = E.EmployeeID
GROUP BY C.CustomerID, E.EmployeeID
HAVING COUNT(O.OrderID) > 1;

/*9.- Quiero saber los clientes que hayan hecho más de un pedido y que hayan sido registrados por un empleado cuyo nombre sea Margaret.*/ 
SELECT C.CustomerName, E.FirstName AS infoEmployee, COUNT(O.OrderID) AS numberOrders 
FROM customers C 
JOIN orders O ON C.CustomerID = O.CustomerID 
JOIN employees E ON O.EmployeeID = E.EmployeeID 
WHERE E.FirstName = 'Margaret' 
GROUP BY C.CustomerID, E.EmployeeID 
HAVING COUNT(O.OrderID) > 1;


/****************************/
/*** SUB CONSULTAS **********/
/****************************/

/*1.- ¿Cual es el producto con el precio mínimo más bajo? (usando subconsultas)*/
SELECT 
P.ProductName, P.Price
FROM products P
WHERE P.Price = (SELECT MIN(SP.Price) FROM products SP);

/*2.- ¿Cual es el producto cuyo precio sea al menos 10 veces el pedido mínimo (quantity) de los pedidos (OrderDetails)? */
SELECT P.ProductName
FROM products P
WHERE P.Price >= ALL (
	SELECT MIN(SOD.Quantity) * 10
    FROM orderdetails SOD
    WHERE SOD.ProductID = P.ProductID
);

/*3.- ¿Cuales son los registros de productos (Products) cuyo precio (price) sea mayor que el máximo de los precios de los productos cuyo id sea 3, 6, 9 y 10?*/
SELECT *
FROM products P
WHERE P.Price > ALL (SELECT MAX(SP.Price) FROM products SP WHERE SP.ProductID IN (3, 6, 9, 10));

/*4.- ¿Cuales son los registros de productos (Products) cuyo ProductID sea un valor que esté en Shippers.ShipperID? */
SELECT *
FROM products P
WHERE P.ProductID IN (SELECT SS.ShipperID FROM shippers SS);

/*5.- ¿Qué clientes (Customers) tenemos registrados, que estén en ciudades de nuestros proveedores (Suppliers)?*/
SELECT DISTINCT C.CustomerName
FROM customers C
WHERE C.City IN (SELECT DISTINCT SS.City FROM suppliers SS)