# book-record-management API

# /users
 /users 
POST: Create a new user GET: Get all list of users

/users/{id}
GET: Get a user by thier ID PUT: Update a user by ID DELETE: Delete a user by thier ID (Check if the user still has an issued book && is there any fine to be collected from the user)

/users/subscription-details/{id}
GET: Get user subscription details

Date of Subscription
Valid till ??
Fine if any ??

# /books
/books
GET: Get all books POST: Add a new book

/books/{id}
GET: Get a book by id PUT: Update a book by Id

/books/issued
GET: Get all issued books here

/books/issued/withFine
GET: Get all issued books with fine

# subscription type

