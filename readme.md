-- sql commands
-- View all books   
"SELECT * FROM Book;"

-- view all fees with costumer info using join
"SELECT CF.id, CF.fee, C.name AS customer_name
FROM Costumer_fees CF
JOIN Costumer C ON CF.costumer_id = C.id;"

-- pay fees where it updates the costumer_fees table
"UPDATE Costumer_fees SET fee = 0 WHERE costumer_id = 1;"

-- Check-in a book and update the book status
"DELETE FROM Costumer_Book WHERE costumer_id = 1 AND book_id = 1;"
"UPDATE Book SET available = 1 WHERE id = 1;"

-- Check-out a book
"INSERT INTO Costumer_Book (costumer_id, book_id) VALUES (1, 1);"
"UPDATE Book SET available = 0 WHERE id = 1;"

-- remove a book
"DELETE FROM Book WHERE id = 1;"
"DELETE FROM Costumer_Book WHERE book_id = 1;"

-- add a fee
"INSERT INTO Costumer_fees (costumer_id, fee) VALUES (1, 10);"

--remove a fee
"DELETE FROM Costumer_fees WHERE id = 1;"

-- edit customer info
"UPDATE Costumer SET name = 'John Doe' WHERE id = 1;"

-- add a staff member
"INSERT INTO Staff (name, email, password, role) VALUES ('John Doe', 'johndoe@gmail.com', 'password', 'librarian');"

-- remove a staff member
"DELETE FROM Staff WHERE id = 1;"

-- remove a manager from the staff table
"DELETE FROM Staff WHERE id = 1 AND role = 'manager';"

-- add manager to staff table
"INSERT INTO Staff (name, email, password, role) VALUES ('John Doe', 'johndoe@gmail.com', 'password', 'manager');"

-- add customer support to staff table
"INSERT INTO Staff (name, email, password, role) VALUES ('John Doe', 'johndoe@gmail.com', 'password', 'customer support');"

-- remove customer support from staff table
"DELETE FROM Staff WHERE id = 1 AND role = 'customer support';"

-- add a book
"INSERT INTO Book (title, author, isbn, pages, available) VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 180, 1);"

-- change the price of a book
"UPDATE Book SET price = 10 WHERE id = 1;"

-- edit a book
"UPDATE Book SET title = 'The Great Gatsby', author = 'F. Scott Fitzgerald', isbn = '9780743273565', pages = 180, available = 1 WHERE id = 1;"

-- view summary of all books (for status instead of boolean value, set it to availabe if the status is 1 and 0 otherwise), costumers, and staff, and fees
"SELECT id, title, author, isbn, pages,
       CASE WHEN available = 1 THEN 'Available' ELSE 'Unavailable' END AS availability FROM Book;"
"SELECT * FROM Costumer;"
"SELECT * FROM Staff;"
"SELECT * FROM Costumer_fees "
"SELECT B.id, B.title, B.author, B.isbn, B.pages, 
       CASE WHEN B.available = 1 THEN 'Available' ELSE 'Unavailable' END AS availability, 
       C.id AS customer_id, C.name AS customer_name
FROM Book B
JOIN Costumer_Book CB ON B.id = CB.book_id
JOIN Costumer C ON C.id = CB.costumer_id;"
