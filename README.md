# books-rest-api

Rest API that allows register of books, categories and authors as its relationships.

## Tecnologies used

- NodeJS/Express for the server
- Knex for the database communication, seeding, and migrations
- Sqlite as the development database
- Beekeeper to visualize the database in a graphic interface
- Insomnia to test the http requests

## Running the application

### Dependencies

`npm i`

</i> will install the dependencies</i>

### Starting

`npm start`

</i> will run at the application at http://127.0.0.1:3000/</i>

### Migrations

`npx knex migrate:up `

<i>will generate the tables</i>

### Seeding

`npx knex seed:run`

<i>will insert 3 authors, 3 categories and 3 books in the database</i>

## API Endpoints

### Categories

| Method | Url                  | What does it do?        | Required Fields |
| ------ | -------------------- | ----------------------- | --------------- |
| GET    | /category            | Shows all categories    | none            |
| POST   | /category            | Inserts a new category  | name / String   |
| GET    | /category/show/:id   | Shows a single category | none            |
| PATCH  | /category/update/:id | Updates a category      | name / String   |
| DELETE | /category/delete/:id | Deletes a category      | none            |

### Authors

| Method | Url                | What does it do?      | Required Fields |
| ------ | ------------------ | --------------------- | --------------- |
| GET    | /author            | Shows all authors     | none            |
| POST   | /author            | Inserts a new author  | name / String   |
| GET    | /author/show/:id   | Shows a single author | none            |
| PATCH  | /author/update/:id | Updates an author     | name / String   |
| DELETE | /author/delete/:id | Deletes an author     | none            |

### Books

| Method | Url              | What does it do?    | Required Fields                                            |
| ------ | ---------------- | ------------------- | ---------------------------------------------------------- |
| GET    | /book            | Shows all books     | none                                                       |
| POST   | /book            | Inserts a new book  | name / String, category_id / integer / author_id / integer |
| GET    | /book/show/:id   | Shows a single book | none                                                       |
| PATCH  | /book/update/:id | Updates a book      | name / String, category_id / integer / author_id / integer |
| DELETE | /book/delete/:id | Deletes a book      | none                                                       |

## To do list

- Exception handling on Author, Book & Category controllers
- Return the category e author name when requesting a book information
- Avoid deletion if the specified row is a dependency of another row
- Show endpoints responses examples in the documentation
