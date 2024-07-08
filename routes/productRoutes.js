const router = require('express').Router();
const productController = require("../controllers/productControllers")

// router.post("/api/products", productController.createProduct);

// router.post("/api/products/bulk",productController.createManyProducts);

// router.get("/api/products", productController.getProducts);

// router.get("/api/products/:id", productController.getProductById);

// router.put("/api/products/:id", productController.putProductById);

// router.delete("/api/products/:id",productController.deleteProductById);


router.post("", productController.createProduct);

router.post("/bulk",productController.createManyProducts);

router.get("", productController.getProducts);

router.get("/:id", productController.getProductById);

router.put("/:id", productController.putProductById);

router.delete("/:id",productController.deleteProductById);


module.exports = router;