DROP TABLE IF EXISTS test;

CREATE TABLE test (
  id SERIAL,
  youtube TEXT,
  facebook TEXT
);

INSERT INTO test(youtube) VALUES('https://www.youtube.com/channel/UCJf_UQSeQ470ugV4GiFo3eA');
INSERT INTO test(facebook) VALUES('https://www.facebook.com/LifeTreeBand');

