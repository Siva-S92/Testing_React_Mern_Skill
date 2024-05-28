import Product from "../lib/models/productModel.js";

export const uploadProduct = async (req, res) => {
  try {
    const payload = req.body;
    const products = await Product.create(payload);
    if (products) {
      return res.status(200).json({
        success: true,
        products,
        message: "The Products Uploaded Sucessfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { page, search } = req.body;
    const limit = parseInt(8);
    let query = {};
    if (search !== "") {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
          { tags: { $regex: search, $options: "i" } },
          { brand: { $regex: search, $options: "i" } },
        ],
      };
    }

    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);
    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    return res.status(200).json({
      success: true,
      products,
      totalPages,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server/Network Error",
    });
  }
};
