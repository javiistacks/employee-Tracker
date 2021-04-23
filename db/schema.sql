DROP DATABASE IF EXISTS employee_roster4;
CREATE DATABASE employee_roster4;

USE employee_roster4;

CREATE TABLE departments (
    id INT NOT NULL auto_increment PRIMARY KEY
  , dept_name VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL auto_increment PRIMARY KEY
  , title VARCHAR(30)
  , salary DECIMAL(8, 2)
  , dept_id INT, CONSTRAINT fkDept_id FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INT NOT NULL auto_increment PRIMARY KEY
  , first_name VARCHAR(30)
  , last_name VARCHAR(30)
  , role_id INT, CONSTRAINT fkRole_id FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
  , manager_id INT, CONSTRAINT fkMgr_id FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);