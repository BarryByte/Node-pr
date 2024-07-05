const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://abhayraj12667:cBVKwBvFzSpdYn53@cluster0.3adiawg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });


// product schema
const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true,
        
    },
    product_price : {
        type : String,
        required : true,
    },
    isInStock : {
        type : Boolean,
        required : true,
    },
    category : {
        type : String,
        required : true,
    }
    
});

const productModel = mongoose.model('products',productSchema);

// create a product
app.post('/api/products', async(req, res) => {
    
    const product = productModel.create({
        product_name : req.body.product_name,
        product_price :req.body.product_price,
        isInStock : req.body.isInStock,
        category : req.body.category
    
    });
    console.log(product);

    return res.status(201).json({message  : "product is created"});
})


app.listen(3002, () => {
  console.log("Server sarted at port 3002");
});
