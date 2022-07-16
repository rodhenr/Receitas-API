const updateCheck = (req, res, next) => {
  const { field } = req.params;
  const validFields = [
    "name",
    "description",
    "ingredients",
    "source",
    "tags",
    "image",
  ];

  const filter = validFields.some((i) => i === field.toLowerCase());

  if (!filter)
    return res.status(400).json({
      message: "Campo inválido.",
      error: `Campo '${field}' não encontrado.`,
    });

  next();
};

module.exports = { updateCheck };
