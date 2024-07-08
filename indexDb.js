const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// env
require("dotenv").config();
// In Node.js, process is a built-in object that gives information about and
// control over the running Node.js program. You can use it anywhere in your
//code without needing to import it. Common uses include accessing environment
//variables, command-line arguments, and managing the program's execution.mongoose

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log("Failed", err);
	});

// mvc-architecture imports
const productRoutes = require("./routes/productRoutes");

app.use('/api/products', productRoutes)

const userRoutes = require("./routes/userRoutes");

app.use('/api/user', userRoutes)


app.listen(3002, () => {
	console.log("Server sarted at port 3002");
});
