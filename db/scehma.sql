DROP DATABASE IF EXISTS library;

CREATE DATABASE library;

USE library;

CREATE TABLE Book (
    id INT NOT NULL IDENTITY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(255) NOT NULL,
    pages INT NOT NULL,
    available bit NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Costumer (
    id INT NOT NULL IDENTITY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Staff (
    id INT NOT NULL IDENTITY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Costumer_Book (
    id INT NOT NULL IDENTITY,
    costumer_id INT NOT NULL,
    book_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (costumer_id) REFERENCES Costumer(id),
    FOREIGN KEY (book_id) REFERENCES Book(id)
);

CREATE TABLE Costumer_fees (
    id INT NOT NULL IDENTITY,
    costumer_id INT NOT NULL,
    fee INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (costumer_id) REFERENCES Costumer(id)
);

-- CREATE TABLE Store_Profile (

-- }

CREATE TABLE Movie (
    id INT NOT NULL IDENTITY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Event (
    id INT NOT NULL IDENTITY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    location VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- seeds
INSERT INTO Book (title, author, isbn, pages, available) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 180, 1);
INSERT INTO Book (title, author, isbn, pages, available) VALUES ('The Catcher in the Rye', 'J. D. Salinger', '9780316769488', 234, 1);
INSERT INTO Book (title, author, isbn, pages, available) VALUES ('The Grapes of Wrath', 'John Steinbeck', '9780143039433', 464, 1);
INSERT INTO Book (title, author, isbn, pages, available) VALUES ('To Kill a Mockingbird', 'Harper Lee', '9780446310789', 281, 1);
INSERT INTO Book (title, author, isbn, pages, available) VALUES ('The Color Purple', 'Alice Walker', '9780156028356', 304, 1);
INSERT INTO Book (title, author, isbn, pages, available) VALUES ('Ulysses', 'James Joyce', '9780679722762', 736, 1);

INSERT INTO Costumer (name, email, password) VALUES ('John Doe1', 'joen', 'password');
INSERT INTO Costumer (name, email, password) VALUES ('John Doe2', 'joen', 'password');
INSERT INTO Costumer (name, email, password) VALUES ('John Doe3', 'joen', 'password');


INSERT INTO Staff (name, email, password, role) VALUES ('John Doe1', 'ddj', 'password', 'librarian');
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe2', 'ddj', 'password', 'librarian');
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe3', 'ddj', 'password', 'librarian');

-- manager
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe4', 'ddj', 'password', 'manager');
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe5', 'ddj', 'password', 'manager');
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe6', 'ddj', 'password', 'manager');

-- customer support
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe7', 'ddj', 'password', 'customer support');
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe8', 'ddj', 'password', 'customer support');
INSERT INTO Staff (name, email, password, role) VALUES ('John Doe9', 'ddj', 'password', 'customer support');

-- costumer_book
INSERT INTO Costumer_Book (costumer_id, book_id) VALUES (1, 1);
INSERT INTO Costumer_Book (costumer_id, book_id) VALUES (1, 2);
INSERT INTO Costumer_Book (costumer_id, book_id) VALUES (1, 3);


-- costumer_fees
INSERT INTO Costumer_fees (costumer_id, fee) VALUES (1, 10);
INSERT INTO Costumer_fees (costumer_id, fee) VALUES (2, 20);
INSERT INTO Costumer_fees (costumer_id, fee) VALUES (3, 30);


-- delete customer 







