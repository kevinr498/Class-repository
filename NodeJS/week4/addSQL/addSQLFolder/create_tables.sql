CREATE TABLE inputs (
    id INTEGER REFERENCES users (id),
    type varchar(255) NOT NULL,
    color varchar(255) NOT NULL,
    quantity varchar(255)
    );


-- CREATE TABLE comments (
-- 	id SERIAL PRIMARY KEY,
-- 	comment_text VARCHAR,
-- 	user_id INTEGER REFERENCES users (id)
-- );

