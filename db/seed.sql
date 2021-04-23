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

