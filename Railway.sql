create database reservation;
use reservation;
show tables;
select * from users;
select * from roles;
select * from reservation;
select * from train_details;
drop table role;

desc uer_roles;

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

drop table pay_info;

	delimiter //
	
	CREATE PROCEDURE dorepeat(p1 INT)
BEGIN
  SET @x = 0;
  REPEAT SET @x = @x + 1; UNTIL @x > p1 END REPEAT;
END //

	delimiter ;
    
    CALL dorepeat(1000);

















# login
create table login_credentials ( login_id int primary key, password varchar(8));

#Register
create table registration ( username varchar(30), password varchar(8),age int, phone numeric, email varchar(30), gender varchar(10)); 

# Ticket Reservation
create table Ticket_reservation ( PNR_no int primary key, to_date date, from_date varchar(20), to_station varchar(20),
from_station varchar(20), Train_no int);
drop table Ticket_reservation;

#Train 
create table Train (Train_no int primary key, distance numeric, Train_name varchar(20), Start_time time, End_time time,
Start_Station_Code numeric, End_Station_Code numeric);

#Train Fare
create table ticket_fare (to_date date, from_date date, to_km numeric, from_km numeric, fare int, class_id int);

#Seat Availability
create table seat_availability (train_no int, class_code int, number_of_seats int);

#Class
create table class (Class_id int primary key, coach_prefix varchar(10), class_code int, Class_name varchar(10), seat_per_coach int);

#Station
create table station (station_id int primary key, station_code int, station_name varchar(20));

#pay
create table pay_info (payment_id int primary key, pay_mode varchar(20), amount numeric, pay_date date, PNR_no numeric);


#insert data into train_details
INSERT INTO train_details VALUES (1, "17:30", "2023-06-25", "17:35", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12056");
INSERT INTO train_details VALUES (2, "08:15", "2023-06-26", "08:25", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12951");
INSERT INTO train_details VALUES (3, "11:45", "2023-06-27", "11:50", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12007");
INSERT INTO train_details VALUES (4, "14:20", "2023-06-28", "14:25", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12271");
INSERT INTO train_details VALUES (5, "19:05", "2023-06-29", "19:10", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12735");
INSERT INTO train_details VALUES (6, "09:30", "2023-06-30", "09:35", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12008");
INSERT INTO train_details VALUES (7, "12:55", "2023-07-01", "13:00", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12952");
INSERT INTO train_details VALUES (8, "15:40", "2023-07-02", "15:45", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12736");
INSERT INTO train_details VALUES (9, "20:20", "2023-07-03", "20:25", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12057");
INSERT INTO train_details VALUES (10, "10:10", "2023-07-04", "10:15", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12009");
INSERT INTO train_details VALUES (11, "13:35", "2023-07-05", "13:40", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12272");
INSERT INTO train_details VALUES (12, "18:20", "2023-07-06", "18:25", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12953");
INSERT INTO train_details VALUES (13, "08:45", "2023-07-07", "08:50", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12737");
INSERT INTO train_details VALUES (14, "11:10", "2023-07-08", "11:15", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12010");
INSERT INTO train_details VALUES (15, "13:45", "2023-07-09", "13:50", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12954");
INSERT INTO train_details VALUES (16, "16:30", "2023-07-10", "16:35", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12738");
INSERT INTO train_details VALUES (17, "21:10", "2023-07-11", "21:15", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12058");
INSERT INTO train_details VALUES (18, "11:00", "2023-07-12", "11:05", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12011");
INSERT INTO train_details VALUES (19, "14:25", "2023-07-13", "14:30", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12273");
INSERT INTO train_details VALUES (20, "19:10", "2023-07-14", "19:15", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12955");
INSERT INTO train_details VALUES (21, "09:35", "2023-07-15", "09:40", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12739");
INSERT INTO train_details VALUES (22, "12:00", "2023-07-16", "12:05", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12012");
INSERT INTO train_details VALUES (23, "14:35", "2023-07-17", "14:40", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12956");
INSERT INTO train_details VALUES (24, "17:20", "2023-07-18", "17:25", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12740");
INSERT INTO train_details VALUES (25, "22:00", "2023-07-19", "22:05", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12059");
INSERT INTO train_details VALUES (26, "12:50", "2023-07-20", "12:55", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12013");
INSERT INTO train_details VALUES (27, "15:15", "2023-07-21", "15:20", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12274");
INSERT INTO train_details VALUES (28, "20:00", "2023-07-22", "20:05", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12957");
INSERT INTO train_details VALUES (29, "10:25", "2023-07-23", "10:30", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12741");
INSERT INTO train_details VALUES (30, "12:50", "2023-07-24", "12:55", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12014");
INSERT INTO train_details VALUES (31, "15:25", "2023-07-25", "15:30", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12958");
INSERT INTO train_details VALUES (32, "18:10", "2023-07-26", "18:15", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12742");
INSERT INTO train_details VALUES (33, "22:50", "2023-07-27", "22:55", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12060");
INSERT INTO train_details VALUES (34, "13:40", "2023-07-28", "13:45", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12015");
INSERT INTO train_details VALUES (35, "16:05", "2023-07-29", "16:10", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12275");
INSERT INTO train_details VALUES (36, "20:50", "2023-07-30", "20:55", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12959");
INSERT INTO train_details VALUES (37, "11:15", "2023-07-31", "11:20", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12743");
INSERT INTO train_details VALUES (38, "13:40", "2023-08-01", "13:45", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12016");
INSERT INTO train_details VALUES (39, "16:15", "2023-08-02", "16:20", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12960");
INSERT INTO train_details VALUES (40, "19:00", "2023-08-03", "19:05", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12744");
INSERT INTO train_details VALUES (41, "23:40", "2023-08-04", "23:45", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12061");
INSERT INTO train_details VALUES (42, "14:30", "2023-08-05", "14:35", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12017");
INSERT INTO train_details VALUES (43, "16:55", "2023-08-06", "17:00", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12276");
INSERT INTO train_details VALUES (44, "21:40", "2023-08-07", "21:45", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12961");
INSERT INTO train_details VALUES (45, "12:05", "2023-08-08", "12:10", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12745");
INSERT INTO train_details VALUES (46, "14:30", "2023-08-09", "14:35", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12018");
INSERT INTO train_details VALUES (47, "17:05", "2023-08-10", "17:10", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12962");
INSERT INTO train_details VALUES (48, "19:50", "2023-08-11", "19:55", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12746");
INSERT INTO train_details VALUES (49, "00:30", "2023-08-12", "00:35", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12062");
INSERT INTO train_details VALUES (50, "15:20", "2023-08-13", "15:25", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12019");

INSERT INTO train_details VALUES (51, "17:50", "2023-08-14", "17:55", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12277");
INSERT INTO train_details VALUES (52, "08:25", "2023-08-15", "08:30", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12963");
INSERT INTO train_details VALUES (53, "11:00", "2023-08-16", "11:05", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12747");
INSERT INTO train_details VALUES (54, "13:25", "2023-08-17", "13:30", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12020");
INSERT INTO train_details VALUES (55, "18:10", "2023-08-18", "18:15", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12964");
INSERT INTO train_details VALUES (56, "09:35", "2023-08-19", "09:40", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12748");
INSERT INTO train_details VALUES (57, "12:00", "2023-08-20", "12:05", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12063");
INSERT INTO train_details VALUES (58, "14:35", "2023-08-21", "14:40", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12021");
INSERT INTO train_details VALUES (59, "17:10", "2023-08-22", "17:15", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12278");
INSERT INTO train_details VALUES (60, "21:55", "2023-08-23", "22:00", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12965");
INSERT INTO train_details VALUES (61, "11:15", "2023-08-24", "11:20", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12749");
INSERT INTO train_details VALUES (62, "13:40", "2023-08-25", "13:45", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12022");
INSERT INTO train_details VALUES (63, "16:15", "2023-08-26", "16:20", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12966");
INSERT INTO train_details VALUES (64, "19:00", "2023-08-27", "19:05", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12750");
INSERT INTO train_details VALUES (65, "23:40", "2023-08-28", "23:45", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12064");
INSERT INTO train_details VALUES (66, "14:30", "2023-08-29", "14:35", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12023");
INSERT INTO train_details VALUES (67, "16:55", "2023-08-30", "17:00", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12279");
INSERT INTO train_details VALUES (68, "21:40", "2023-08-31", "21:45", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12967");
INSERT INTO train_details VALUES (69, "12:05", "2023-09-01", "12:10", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12751");
INSERT INTO train_details VALUES (70, "14:30", "2023-09-02", "14:35", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12024");
INSERT INTO train_details VALUES (71, "17:05", "2023-09-03", "17:10", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12968");
INSERT INTO train_details VALUES (72, "19:50", "2023-09-04", "19:55", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12752");
INSERT INTO train_details VALUES (73, "00:30", "2023-09-05", "00:35", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12065");
INSERT INTO train_details VALUES (74, "15:20", "2023-09-06", "15:25", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12025");
INSERT INTO train_details VALUES (75, "17:45", "2023-09-07", "17:50", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12280");
INSERT INTO train_details VALUES (76, "22:30", "2023-09-08", "22:35", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12969");
INSERT INTO train_details VALUES (77, "13:55", "2023-09-09", "14:00", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12753");
INSERT INTO train_details VALUES (78, "16:20", "2023-09-10", "16:25", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12026");
INSERT INTO train_details VALUES (79, "19:05", "2023-09-11", "19:10", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12970");
INSERT INTO train_details VALUES (80, "21:50", "2023-09-12", "21:55", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12754");
INSERT INTO train_details VALUES (81, "02:30", "2023-09-13", "02:35", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12066");
INSERT INTO train_details VALUES (82, "17:30", "2023-09-14", "17:35", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12027");
INSERT INTO train_details VALUES (83, "19:55", "2023-09-15", "20:00", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12281");
INSERT INTO train_details VALUES (84, "00:40", "2023-09-16", "00:45", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12971");
INSERT INTO train_details VALUES (85, "11:05", "2023-09-17", "11:10", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12755");
INSERT INTO train_details VALUES (86, "13:30", "2023-09-18", "13:35", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12028");
INSERT INTO train_details VALUES (87, "16:05", "2023-09-19", "16:10", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12972");
INSERT INTO train_details VALUES (88, "18:50", "2023-09-20", "18:55", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12756");
INSERT INTO train_details VALUES (89, "23:30", "2023-09-21", "23:35", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12067");
INSERT INTO train_details VALUES (90, "14:20", "2023-09-22", "14:25", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12029");
INSERT INTO train_details VALUES (91, "16:45", "2023-09-23", "16:50", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12282");
INSERT INTO train_details VALUES (92, "21:30", "2023-09-24", "21:35", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12973");
INSERT INTO train_details VALUES (93, "12:55", "2023-09-25", "13:00", "Bangalore", 710, "Hyderabad", "GARIB RATH", "12757");
INSERT INTO train_details VALUES (94, "15:20", "2023-09-26", "15:25", "Chennai", 300, "Kolkata", "SHATABDI EXPRESS", "12030");
INSERT INTO train_details VALUES (95, "18:15", "2023-09-27", "18:20", "Ahmedabad", 420, "Mumbai", "RAJDHANI EXPRESS", "12974");
INSERT INTO train_details VALUES (96, "20:50", "2023-09-28", "20:55", "Hyderabad", 710, "Bangalore", "GARIB RATH", "12758");
INSERT INTO train_details VALUES (97, "01:30", "2023-09-29", "01:35", "Lucknow", 600, "Delhi", "SUPER EXPRESS", "12068");
INSERT INTO train_details VALUES (98, "16:10", "2023-09-30", "16:15", "Kolkata", 320, "Chennai", "SHATABDI EXPRESS", "12031");
INSERT INTO train_details VALUES (99, "18:35", "2023-10-01", "18:40", "Delhi", 500, "Lucknow", "DURONTO EXPRESS", "12283");
INSERT INTO train_details VALUES (100, "23:20", "2023-10-02", "23:25", "Mumbai", 420, "Ahmedabad", "RAJDHANI EXPRESS", "12975");
INSERT INTO train_details VALUES (101, "16:30", "2023-06-25", "16:35", "Lucknow", 600, "Delhi", "RAJDHANI EXPRESS", "13576");
INSERT INTO train_details VALUES (102, "07:15", "2023-06-26", "07:25", "Mumbai", 420, "Ahmedabad", "SUPER EXPRESS", "13578");
INSERT INTO train_details VALUES (103, "110:45", "2023-06-27", "10:50", "Kolkata", 320, "Chennai", "DURONTO EXPRESS", "13579");
INSERT INTO train_details VALUES (104, "13:20", "2023-06-28", "13:25", "Delhi", 500, "Lucknow", "SHATABDI EXPRESS", "13580");
INSERT INTO train_details VALUES (105, "18:05", "2023-06-29", "18:10", "Bangalore", 710, "Hyderabad", "SHATABDI EXPRESS", "13735");
INSERT INTO train_details VALUES (106, "08:30", "2023-06-30", "08:35", "Chennai", 300, "Kolkata", "GARIB RATH", "13740");
INSERT INTO train_details VALUES (107, "11:55", "2023-07-01", "12:00", "Ahmedabad", 420, "Mumbai", "GARIB RATH", "13741");
INSERT INTO train_details VALUES (108, "14:40", "2023-07-02", "14:45", "Hyderabad", 710, "Bangalore", "RAJDHANI", "13742");
INSERT INTO train_details VALUES (109, "19:20", "2023-07-03", "19:25", "Lucknow", 600, "Delhi", "SHATABDI EXPRESS", "13743");
INSERT INTO train_details VALUES (110, "09:10", "2023-07-04", "09:15", "Kolkata", 320, "Chennai", "SUPER EXPRESS", "13748");
