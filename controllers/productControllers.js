const productModel = require("../models/product")
exports.createProduct = async (req, res) => {
	const product = productModel.create({
		product_name: req.body.product_name,
		product_price: req.body.product_price,
		isInStock: req.body.isInStock,
		category: req.body.category
	});
	console.log(product);

	return res.status(201).json({ message: "product is created" });
};

exports.createManyProducts = async (req, res) => {
	try {
		const products = await productModel.insertMany(req.body);
		console.log(products);
		return res.status(201).json({ message: "Products are created" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Error creating products" });
	}
};

exports.getProducts = async (req, res) => {
	const products = await productModel.find({});
	return res.status(200).json(products);
};

exports.getProductById  = async (req, res) => {
	const product = await productModel.findById(req.params.id);
	return res.status(200).json(product);
};

exports.putProductById  = async (req, res) => {
	const product = await productModel.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	return res.status(200).json(product);
};

exports.deleteProductById = async (req, res) => {
	const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
	return res.status(204).json({ message: "product deleted" });
};
