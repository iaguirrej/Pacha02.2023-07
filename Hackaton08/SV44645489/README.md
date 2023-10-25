# HACKATHON08

### TÍTULO: Base de Datos
Utilizar SQL DML y DDL para definir las consultas mediante el uso de Objetos de Base de datos para resolver el problema
EL PROBLEMA: 
Se nececita crear una base de datos que tenga las siguientes caracteristicas:

La empresa de produccion de armarios necesita llevar el control de las siguientes rutinas:

#### Gestion de personal
Para la gestión de personal se creó las siguientes tablas:
- Tabla type_identity_document: Aquí se registran los tipos de documento de identidad como DNI, RUC, PASAPORTE, etc.
- Tabla role: Aquí se registran los roles de un usuario como proveedor, comprador, administrador, cliente, vendedor, etc.
- Tabla user: Aquí se registran las persona, tanto natrales como jurídicas
- Tabla user_role: Aquí se asocia al usuario con diferentes roles, ya que un un administrador también puede ser cliente.

#### Compra de Materia Prima y Compra de Insumos
Para la compra de Materia Prima e insumos se creó las siguientes tablas:
- Tabla element: Aquí se resgitraran tanto materias primas y insumos
- Tabla type_document: Aquí se registran los tipos de documento como boleta y factura.
- Tabla buy: Aquí se resgistran las compras (comprador, proveedor, tipo documento(boleta factura))
- Tabla buy_detail: Aquí se resgistran el detalle de la compra (materias primas e insumos)

#### Produccion
Para registrar la producción se creó las siguientes tablas:
- Tabla product: Aquí se registran los productos.
- Tabla income: Aquí se registra el responsable y el producto que se va registrar.
- Tabla income_detail: Aqui se registaran las materia e insumos que se utilizo para producir un producto.

