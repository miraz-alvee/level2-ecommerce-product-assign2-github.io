"# level2-ecommerce-product-assign2-github.io" 


## E-commerce API
## This is a simple E-commerce API built with Express and MongoDB, using Mongoose for data modeling.

## Getting Started
## Prerequisites
## Node.js
## MongoDB

Installation

Clone the repository
## git clone https://github.com/miraz-alvee/level2-ecommerce-product-assign2-github.io
Navigate to the project directory

cd ecommerce-api

npm install
Set up your MongoDB connection string in a .env file at the root of the project
env
Copy code
## MONGODB_URI=mongodb://localhost:27017/yourdbname
Running the Application
To run the application locally in development mode, use the following command:

bash
Copy code
## npm run start:dev-alvee

Get all products
## GET -> /api/products

Get a single product by ID
## GET -> /api/products/:id(specific id )

Find products by search term

## GET ->  /api/products?searchTerm=(:name)

Delete a product by ID

## DELETE -> /api/products/:id(specific deleted id )
Update a product by ID
http
Copy code
## PUT-> /api/products/:id(specific modified id )

## Orders
Get all orders
## GET -> /api/orders

Get a single order by ID
## GET -> /api/orders/:id

Find orders by email
## GET -> /api/orders?email=email

## Response:

json
Copy code
{
  "success": true,
  "message": "All products fetched successfully",
  "data": [...]
}
Get Single Product by ID
http
Copy code
GET /api/products/60d21b4667d0d8992e610c85
Response:

json
Copy code
{
  "success": true,
  "message": "Product fetched successfully",
  "data": {...}
}
Find Products by Search Term
http
Copy code
GET /api/products?searchTerm=iphone
Response:

json
Copy code
{
  "success": true,
  "message": "Products matching \"iphone\" fetched successfully",
  "data": [...]
}
Delete a Product by ID
http
Copy code
DELETE /api/products/60d21b4667d0d8992e610c85
Response:

json
Copy code
{
  "success": true,
  "message": "Product deleted successfully",
  "data": {...}
}
Update a Product by ID
http
Copy code
PUT /api/products/60d21b4667d0d8992e610c85
Body:

json
Copy code
{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  ...
}
Response:

json
Copy code
{
  "success": true,
  "message": "Product updated successfully",
  "data": {...}
}
Get All Orders
http
Copy code
GET /api/orders
Response:

json
Copy code
{
  "success": true,
  "message": "All orders fetched successfully",
  "data": [...]
}
Get Single Order by ID
http
Copy code
GET /api/orders/60d21b4667d0d8992e610c85
Response:

json
Copy code
{
  "success": true,
  "message": "Order fetched successfully",
  "data": {...}
}
Find Orders by Email
http
Copy code
GET /api/orders?email=email
Response:

json
Copy code
{
  "success": true,
  "message": "Orders matching \"email\" fetched successfully",
  "data": [...]
}
