const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
// env
// In Node.js, process is a built-in object that gives information about and
// control over the running Node.js program. You can use it anywhere in your
//code without needing to import it. Common uses include accessing environment
//variables, command-line arguments, and managing the program's execution.mongoose
require("dotenv").config();
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DB connected");
	})
	.catch((err) => {
		console.log("Failed", err);
	});

// product schema
const productSchema = new mongoose.Schema({
	product_name: {
		type: String,
		required: true
	},
	product_price: {
		type: String,
		required: true
	},
	isInStock: {
		type: Boolean,
		required: true
	},
	category: {
		type: String,
		required: true
	}
});

const productModel = mongoose.model("products", productSchema);

// create a product
app.post("/api/products", async (req, res) => {
	const product = productModel.create({
		product_name: req.body.product_name,
		product_price: req.body.product_price,
		isInStock: req.body.isInStock,
		category: req.body.category
	});
	console.log(product);

	return res.status(201).json({ message: "product is created" });
});

app.post("/api/products/bulk", async (req, res) => {
	try {
		const products = await productModel.insertMany(req.body);
		console.log(products);
		return res.status(201).json({ message: "Products are created" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Error creating products" });
	}
});

app.get("/api/products", async (req, res) => {
	const products = await productModel.find({});
	return res.status(200).json(products);
});

app.get("/api/products/:id", async (req, res) => {
	const product = await productModel.findById(req.params.id);
	return res.status(200).json(product);
});

app.put("/api/products/:id", async (req, res) => {
	const product = await productModel.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	return res.status(200).json(product);
});

app.delete("/api/products/:id", async (req, res) => {
	const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
	return res.status(204).json({ message: "product deleted" });
});

app.listen(3002, () => {
	console.log("Server sarted at port 3002");
});
