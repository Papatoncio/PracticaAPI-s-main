import Product from "../models/Product";

//Crea Productos
export const createProduct = async (req, res) => {
  const { name, category, description, price, stock, imgUrl } = req.body;

  const newProduct = new Product({
    name,
    category,
    description,
    price,
    stock,
    imgUrl,
  });

  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

//Lista Productos
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

//Lista Productos por Id
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

//Actualizar Producto
export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const { productId } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(productId);
  res.status(204).json();
};
