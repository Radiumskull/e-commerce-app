const router = require("express").Router();

const Product = require("../models/Product");

router.get("/", async (req, res) => {
  category = req.query.category;
  search = req.query.search;
  let query;
  try {
    if (category === undefined && search !== undefined) {
      query = await Product.find({
        name: { $regex: "(" + search + ")", $options: "i" },
      }).limit(20);
    } else if (category !== undefined && search === undefined) {
      query = await Product.find({
        category: { $regex: "(" + category + ")", $options: "i" },
      }).limit(20);
    } else if (category !== undefined && search !== undefined) {
      query = await Product.find({
        name: { $regex: "(" + search + ")", $options: "i" },
        category: { $regex: "(" + category + ")", $options: "i" },
      }).limit(20);
    } else {
      query = await Product.find({}).limit(20);
    }
    res.send(query);
  } catch (e) {
    res.send(e);
  }
});

router.get("/top", async (req, res) => {
  const query = await Product.find({}).sort({ buy_count: -1 }).limit(10);
  res.send(query);
});

// router.get('/add', async (req, res) => {
//     const product = Product(req.body);
//     await product.save();
//     res.send(product);
// })

module.exports = router;
