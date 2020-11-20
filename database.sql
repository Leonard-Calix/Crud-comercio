create table comercio (
	idComercio int PRIMARY KEY,
	nombreComercio varchar(50),
	fechaReguistro date,
	direccion varchar(50),
	tipoComercio varchar(50)
);

insert into comercio values(1, 'Larach', '2016-10-20', 'Colonia la era','Cafeteria, Eladeria' );
insert into comercio values(1, 'Bigos', '2016-10-20', 'Colonia la era','Restaurantes' );