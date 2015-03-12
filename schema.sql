drop table if exists tenants;
create table tenants(
	id integer primary key autoincrement,
	name text not null,
	number text not null
);
