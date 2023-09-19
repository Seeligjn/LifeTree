DROP TABLE IF EXISTS test;

CREATE TABLE test (
  id SERIAL,
  description TEXT
);

INSERT INTO test(description) VALUES('Do the dishes');
INSERT INTO test(description) VALUES('Walk the dog');
INSERT INTO test(description) VALUES('Sweep the floor');
INSERT INTO test(description) VALUES('Do your homework');
INSERT INTO test(description) VALUES('Beat Elden Ring');
