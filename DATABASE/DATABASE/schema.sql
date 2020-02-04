DROP DATABASE IF EXISTS trippin_db;

CREATE DATABASE trippin_db;

\c trippin_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users
(
   id SERIAL PRIMARY KEY,
   username TEXT,
   password TEXT,
   firstname TEXT,
   lastname TEXT,
   age INT,
   profile_pic TEXT
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE CASCADE,
    body TEXT
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    commenter_id INT REFERENCES users(id) ON DELETE CASCADE,
    posts_id INT REFERENCES posts(id) ON DELETE CASCADE,
    body TEXT
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE CASCADE,
    posts_id INT REFERENCES posts (id) ON DELETE CASCADE
);

CREATE TABLE albums
(
    id SERIAL PRIMARY KEY,
    creator_id INT REFERENCES users(id) ON DELETE CASCADE,
    album_title TEXT
);

CREATE TABLE pictures
(
    id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums(id) ON DELETE CASCADE,
    photo_url TEXT
);

INSERT INTO users
    (username,password,firstname,lastname,age,profile_pic)
VALUES
('Agent_Smith','EatSteak1','John', 'Smith',28,'../../avatars/3.eps'),
('HAL','Daisy1','Stanley','Kubrik',8,'../../avatars/4.eps'),
('Flower_Girl','Fauna12','Blossom', 'Utopium', 11,'../../avatars/5.eps'),
('Sports_fiend','Stadium12','Vince', 'Campbell',40,'../../avatars/6.eps'),
('Griph','Karma12','Geoff','Ramsey',43,'../../avatars/7.eps');

INSERT INTO posts
(poster_id,body)
VALUES
(1,'This is the begining of a great day.' ),
(2,'Momentos Ive kept throughout the years'),
(3,'The most meaningful thing Ive ever done'),
(4,'See if you can pick out the person who fell right after'),
(5,'Bet you cant guess where this is');

INSERT INTO comments
(commenter_id,posts_id,body)
VALUES
(1,1,'Nice'),
(2,2,'I like that.'),
(3,3,'This is great'),
(4,4,'I remember this'),
(5,5,'Wish I was there');

INSERT INTO likes
(liker_id,posts_id)
VALUES
(1,1),
(1,3),
(3,1),
(4,2),
(5,1);

INSERT INTO albums
(creator_id, album_title)
VALUES
(1,'Movies'),
(2, 'Memories'),
(3, 'Family'),
(4, 'Friends'),
(5, 'Vacation');

INSERT INTO pictures
(album_id, photo_url)
VALUES
(1,'../../pictures/architecture-building-business-cinema-436413.jpg'),
(2,'../../pictures/photos-in-the-wooden-box-5841.jpg'),
(3,'../../pictures/greayscale-photo-of-baby-feet-with-father-and-mother-hands-in-733881.jpg'),
(4,'../../pictures/people-silhouette-during-sunset-853168.jpg'),
(5,'../../pictures/cottages-in-the-middle-of-beach-753626.jpg');


