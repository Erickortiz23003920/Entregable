create database entregable;
use entregable;

create table usuarios (
id int not null auto_increment primary key,
nombre varchar(100) not null,
pass varchar(255) not null);

select * from usuarios;

insert into usuarios values(77, 'Jose Perez', 'HolaMundo1');

drop table productos;

CREATE TABLE Productos (
  id_producto INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre_producto VARCHAR(200) NOT NULL,
  proveedor VARCHAR(255) NOT NULL,
  descripcion_producto VARCHAR(255) NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  existencia INT NOT NULL
);

create table proveedores(
idproveedor int not null auto_increment primary key,
nombre varchar(255) not null,
direccion varchar(255) not null,
telefono varchar(12) not null) ;

INSERT INTO productos VALUES
(1, 'Azucar don justo cabal', 'Distribuidora el corosalSA', '1kg de azucar blanca','Azucares', 100),
(2, 'Incaparina', 'El punto', 'Bolsa de atol 500g','Atoles', 55),
(3, 'Aceite mazola', 'AbarrotecaSA', 'Aceite vegetal 1 litro','Aceites', 48), 
(4, 'Cloro Magia Blanca', 'pdc', 'Botella de Cloro magia blanca 550ml','Productos de limpieza', 25),
(5, 'Nescafe', 'Cafe Feliz SA', 'Frasco de cafe 250g','Cafe', 25);

