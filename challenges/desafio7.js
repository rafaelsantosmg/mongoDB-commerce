db.produtos.find(
  { $and: [{ tags: { $exists: false } }, { vendidos: { $ne: 50 } }] },
  { nome: true, vendidos: true, _id: false },
);