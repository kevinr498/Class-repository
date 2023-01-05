CREATE TABLE user (
    userId SERIAL PRIMARY KEY,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    bookID varchar(255) NOT NULL,
    );

CREATE TABLE book (
    bookId SERIAL PRIMARY KEY,
    title varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    checkedOutBy varchar(255) NOT NULL,
    );

