-- DROP TABLE Team;

CREATE TABLE Team (
    TeamID varchar(3),
    Name varchar(255),
    Subname varchar(255),
    Ranking int
);

INSERT INTO Team
VALUES ('T01', 'asd', 'Nd', 123456),
       ('T02', 'ga', 'gg', 111),
       ('T03', 'ytu', 'rr', 222);
