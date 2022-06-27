const qty = db.produtos.countDocuments({});

db.resumoProdutos.insertOne(
  {
    franquia: "McDonalds",
    totalProdutos: qty,
  },
);
db.resumoProdutos.find({}, { _id: false });