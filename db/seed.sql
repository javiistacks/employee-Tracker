INSERT INTO departments (dept_name)
VALUES
  ('None'),
  ('President'),
  ('Executive'),
  ('Education'),
  ('Support'),
  ('Scholarship'),
  ('Pupil'),
  ('Alumni'),
  ('Deceased');

INSERT INTO roles (title, salary, dept_id)
VALUES
  ('None',                0,      1),
  ('Headmaster',          200000, 2),
  ('Deputy',              150000, 3),
  ('Head of House',       120000, 3),
  ('Professor',           100000, 4),
  ('Support Staff',       50000,  5),
  ('Prefect',             10000,  6),
  ('Student',             0,      7),
  ('Alumni',              0,      8),
  ('Ghosts',              0,      9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('No',              'Manager',      1,  1),
  ('Micheal',         'Jordan',       2,  1),
  ('Kobe',            'Bryant',       3,  2),
  ('Charles',         'Barkely',      4,  2),
  ('Shaq',            'ONeil',        4,  2),
  ('Jason',           'Kidd',         4,  2),
  ('Allen',           'Iverson',      5,  2),
  ('Lebron',          'James',        6,  2),
  ('Dwayne',          'Wade',         7,  3),
  ('Scottie',         'Pippen',       8,  3),
  ('Chris',           'Paul',         8,  5),
  ('Vanessa',         'Williams',     8,  6),
  ('Candace',         'Parker',       8,  4),
  ('Jasmine',         'Price',        10, 1),
  ('Stephanie',       'Lopez',        9,  1);
