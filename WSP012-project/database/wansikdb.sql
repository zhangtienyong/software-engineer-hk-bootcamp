/* Create database name wansik */
CREATE DATABASE wansik;

Table users {
  id int [pk]
  name varchar
  email varchar
  password varchar
  phone varchar
  created_at timestamp
  updated_at timestamp
}

Table user_history {
  id int [pk]
  user_id int [ref: > users.id]
  guest_name varchar
  date date
  time time
  restaurant_name varchar
  accept boolean
  cancel boolean
}

Table restaurants {
  id int [pk]
  name varchar
  address varchar
  latitude decimal
  longitude decimal
  created_at timestamp
}

Table appointment_ticket {
  id int [pk]
  user_id int [ref: > users.id]
  restaurant_id int [ref: > restaurants.id]
  number_of_users int
  date date
  time time
  user_name varchar
  phone varchar
  email varchar
  note varchar
  purpose_appointment boolean
}

Table appointment_ticket_guest {
  id int [pk]
  appointment_ticket_id int [ref: > appointment_ticket.id]
  guest_id int [ref: > guest.id]
}

Table guest {
  
}

Table reviews {
  id int [pk]
  user_id int [ref: > users.id]
  restaurant_id int [ref: > restaurants.id]
  review_content varchar
  image_upload varchar
  date_of_review date
  time_of_review time
}

