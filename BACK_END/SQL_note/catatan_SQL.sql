create database toko;
create database latihan;
create database toko3;
drop database toko;
use classicmodels;
create table test;

use classicmodels;

SELECT * FROM classicmodels.customers;

-- select coloumn yang ingin dilihat
select customerNumber, customerName, creditLimit from customers;

-- order data
-- ascending
select customerNumber, customerName, creditLimit from customers order by customerName;
-- descending
select customerNumber, customerName, creditLimit from customers order by customerName desc;

-- where = filtering with condition
select customerNumber, customerName, country from customers where country = 'USA' order by customerName;
select customerNumber, customerName, city from customers where city = 'San francisco' order by customerName;

-- where + and
select customerName, customerName, country, salesRepEmployeeNumber from customers where country = 'USA' and salesRepEmployeeNumber= 1166;
SELECT * FROM classicmodels.products;
select productCode, productName, productLine, productScale from products where productLine = 'Vintage Cars' and productScale='1:18';

-- where + or salah satu condition terpenuhi sudah masuk
select productCode, productName, productLine, productScale from products where productLine = 'Vintage Cars' or productScale='1:18';

-- where + between
select * from employees where officeCode between 1 and 3;
select * from products where buyPrice between 0 and 50.00;

-- where + in
select customerNumber, customerName, country from customers where country in ('USA', 'France');
select productCode, productName, productLine from products where productLine in ('Vintage Cars', 'Classic Cars');

-- where + like
select * from employees;
select * from employees where lastName like 'bo%' ; -- ini cari yang depannya 'bo'
select * from employees where lastName like '%son' ; -- ini cari yang akhirnya 'son'
select * from employees where lastName like '%se%' ;
select * from employees where lastName like '%p%' ; -- ini full search jadi cari nama yg ada 'p' nya

-- where + not
select * from products where productLine not in ('Classic Cars', 'vintage cars');
select * from employees where lastName not like 'bo%' ; -- ini cari yang depannya tidak ada 'bo'
select * from employees where officeCode not between 1 and 3;

-- is null & is not null
select * from customers where state is null;
select * from customers where state is not null;

--- MATH OPERATOR (<, >, =, <=, =>)
select customerNumber, customerName, creditLimit from customers where creditLimit > 100000;
select customerNumber, customerName, creditLimit from customers where creditLimit < 100000;
select customerNumber, customerName, creditLimit from customers where creditLimit = 0;
select * , 200000 - amount as sisa_Limit from payments;
select customerNumber, customerName, creditLimit, 50000 + creditLimit as final_credit_limit from customers;
select customerNumber, customerName, creditLimit, 2 * creditLimit as double_credit_limit from customers;
select customerNumber, customerName, creditLimit, creditLimit / 2 as half_credit_limit from customers;

-- LIMIT and OFFSET
select * from offices limit 5;
select * from offices limit 3 offset 3; -- maksudnya limit adalah data yang dishow dan offset itu mulai dari data ke berapa
select * from offices limit 3, 2; -- cara kedua, digit pertama itu offset (3) dan data kedua itu limit (2)
select customerNumber, customerName, country from customers where country in ('USA', 'France') limit 10;

-- dapatkan data dari customers, ambil kolom city, state, country, cari yang countrynya di USA dan France, order by customer name, limit 5 dimulai dari data ke 3
select customerNumber, customerName, city, state, country from customers where country in ('USA' , 'France') order by customerName limit 5 offset 3;

-- get data customer salesRepEmployee !== null, country = germany, nama mengandung huruf n dan urutkan berdasarkan nama
select * from customers;
select * from customers where salesRepEmployeeNumber is not null and country = 'Germany' and customerName like '%n%' order by customerName;
-- get data customer salerRepEmployee != null dan credit limit > 60000, urutkan berdasarkan credit limit dan di kasih limit 4 data dimulai dari data ke 10
select * from customers where salesRepEmployeeNumber is not null and creditLimit > 60000 order by creditLimit limit 4 offset 10;

-- AGGREGATE FUNCTION => CONCAT, COUNT, MIN, MAX, AVG, SUM
-- CONCAT, menyambung antara satu kolom dengan kolom yang lain
select * from customers;
select customerNumber, customerName, concat(contactLastName, ' ', contactFirstName) as fullName from customers having fullName like '%z%'; 
-- kalau pake 'having' (pengganti where) bisa pake coloumn yang kita baru buat untuk di filter

-- COUNT, menghitung total keseluruhan data
select count(*) as total_office from offices;

-- MIN => mencari data terndah, MAX => mencari data terbesar
select * from payments;
select min(amount) as jumlah_min from payments;
select max(amount) as jumlah_max from payments;

-- AVG => mencari rata-rata
select avg(amount) as jumlah_avg from payments;

-- SUM => menjumlah data
select sum(amount) as jumlah_pembelian from payments;

-- EXAMPLE
-- mencari data dari order details untuk order number 10100
select sum(quantityOrdered) as total_quantity_10100 from orderdetails
where orderNumber = 10100;

-- select distinct => membuat data yang duplicate menjadi satu jenis
use classicmodels;
select * from customers;
select distinct state , city from customers where state is not null;
select lastName from employees;
select distinct lastName from employees;

-- GROUP BY => grouping data
select country, count(*) as total_cust_percountry from customers group by country order by country;
select * from orders;
select orderNumber, status from orders order by status;
select status, count(*) as total_perStatus from orders group by status order by status;
select orderNumber, sum(quantityOrdered) as total_qty from orderdetails group by orderNumber order by orderNumber;


-- get total data user , group by salesRepEmployeeNumber and count total customer
select salesRepEmployeeNumber, count(*) as total_customer from customers 
where salesRepEmployeeNumber is not null
group by salesRepEmployeeNumber 
order by salesRepEmployeeNumber; 

select * from orderdetails;
select orderNumber, sum(quantityOrdered) as total_qty, sum(quantityOrdered * priceEach) as total_price from orderdetails 
group by orderNumber order by orderNumber;

-- HAVING => conditional search
select * from orderdetails;
select orderNumber, sum(quantityOrdered) as total_qty, sum(quantityOrdered * priceEach) as total_price from orderdetails 
group by orderNumber having total_qty > 200 and total_price > 10000;

select salesRepEmployeeNumber, count(*) as total_cust from customers where salesRepEmployeeNumber is not null
group by salesRepEmployeeNumber having total_cust > 6 order by salesRepEmployeeNumber; 

select * from customers;
select country, count(*) as total_customer, avg(creditLimit) as avg_creditLimit from customers group by country
having avg_creditLimit > 50000
order by country;

-- SUB QUERY => (query 1 (query 2 ( query 3))), EXECUTION ORDER => query 3, query 2, query 1
select country, avg(creditLimit) as avg_USA from customers where country = 'USA';

-- contoh querry
select country, count(*) as total_customer, avg(creditLimit) as avg_creditLimit from customers group by country
having avg_creditLimit > (
select avg(creditLimit) as avg_USA from customers where country = 'USA'
)
order by avg_creditLimit;

SELECT 
    COUNT(*) AS result
FROM
    (SELECT 
        country,
            COUNT(*) AS total_customer,
            AVG(creditLimit) AS avg_creditLimit
    FROM
        customers
    GROUP BY country
    HAVING avg_creditLimit > (SELECT 
            AVG(creditLimit) AS avg_USA
        FROM
            customers
        WHERE
            country = 'USA')
    ORDER BY avg_creditLimit) AS list_credit_limit;
    
-- JOIN, INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN
-- INNER JOIN, data yang tidak cocok akan dibuang
select * from employees;
select * from offices;

select e.employeeNumber, concat (e.firstName, ' ', e.lastName) as name, e.email, e.officeCode, o.city, o.phone from employees e
INNER JOIN offices o on e.officeCode = o.officeCode;

-- INNER JOIN WITH USING, ketika nama kolomnya sama
select e.employeeNumber, concat(e.firstName, ' ', e.lastName) as name, e.email, e.office;
use classicmodels;

-- JOIN, INNER JOIN, LEFT JOIN, RIGHT JOIN, CROSS JOIN
-- INNER JOIN, menggabung tabel dengan foregin key, data yang tidak cocok akan dibuang
CREATE TABLE members (
    member_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (member_id)
);

CREATE TABLE committees (
    committee_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (committee_id)
);

INSERT INTO members(name)
VALUES('John'),('Jane'),('Mary'),('David'),('Amelia');

INSERT INTO committees(name)
VALUES('John'),('Mary'),('Amelia'),('Joe');

select * from members;
select * from committees;

-- INNER JOIN WITH ON, ketika nama kolom nya beda
select * from members m
INNER JOIN committees c
on m.name = c.name;

-- INNER JOIN WITH USING, ketika nama kolomnya sama
select * from members m
INNER JOIN committees c
using(name);

-- LEFT JOIN, kalau ada data yang tidak cocok, dia tidak dibuang tapi datanya dinull kan, table utama sebelah kiri
select * from members m
LEFT JOIN committees c
on m.name = c.name;

-- RIGHT JOIN, kalau ada data yang tidak cocok, dia tidak dibuang tapi datanya dinull kan, table utama sebelah kanan
select * from members m
RIGHT JOIN committees c
on m.name = c.name;

-- CROSS JOIN, tidak membutuhkan condition, tiap item dari table sebelah kiri, akan dipasangkan dengan tiap item di table sebelah kanan
select * from members m
CROSS JOIN committees c;

-- tampilkan data customers yang ada di negara USA yang mempunyai credit limit diatas rata2 credit limit customers di Germany
select country, avg(creditLimit) as avg_crLimitGerm from customers where country = 'Germany';

select customerNumber, customerName, country, creditLimit from customers
where country = 'USA'
order by customerName;

select customerNumber, customerName, country, creditLimit from customers
where country = 'USA' and creditLimit >= (
	select avg(creditLimit) as avg_crLimitGerm from customers where country = 'Germany'
)
order by creditLimit;

select cs.customerNumber, cs.customerName, cs.country, cs.creditLimit, em.employeeNumber, concat(em.lastname, ', ', em.firstName) as sales_name, em.email from customers cs
join employees em
on cs.salesRepEmployeeNumber = em.employeeNumber
order by customerNumber;

-- tampilkan data orderdetail, hitunglah total quantity dan total price per order number
-- dengan ketentuan total price diatas rata2 semua total price per order number dan 
-- total quantity diatas rata2 semua total quantity per order number
select * from orderdetails;

-- cari dahulu total quantity diatas rata2 semua total quantity per order number
select orderNumber, sum(quantityOrdered) total_qty from orderdetails
group by orderNumber;

select avg(total_qty) as avg_total_qty from (
select sum(quantityOrdered) total_qty from orderdetails
group by orderNumber
) list_total_qty;

-- cari dahulu rata2 semua total price per order number
select orderNumber, sum(quantityOrdered * priceEach) as total_price from orderdetails
group by orderNumber;

select avg(total_price) as avg_total_price from (
select orderNumber, sum(quantityOrdered * priceEach) total_price from orderdetails
group by orderNumber
) list_total_price;


select count(*) result from (
SELECT 
    orderNumber,
    SUM(quantityOrdered) total_qty,
    SUM(quantityOrdered * priceEach) total_price
FROM
    orderdetails
GROUP BY orderNumber
HAVING total_qty > (SELECT 
        AVG(total_qty) AS avg_total_qty
    FROM
        (SELECT 
            SUM(quantityOrdered) total_qty
        FROM
            orderdetails
        GROUP BY orderNumber) AS list_total_qty)
    AND total_price > (SELECT 
        AVG(total_price) AS avg_total_price
    FROM
        (SELECT 
            orderNumber, SUM(quantityOrdered * priceEach) total_price
        FROM
            orderdetails
        GROUP BY orderNumber) AS list_total_price)
) as list_result; -- list result bisa dihapus kalau mau liat hasil tabelnya




    
    
    
    







