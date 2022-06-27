db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  {
    $pull: {
      ingredientes: "cebola",
  } },
);
db.produtos.find({}, { nome: true, ingredientes: true, _id: false });