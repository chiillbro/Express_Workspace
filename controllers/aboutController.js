const aboutController = (req, res) => {
  const data = {
    name: "Siva",
    id: 20,
  };
  res.render("about", data);
};

export default aboutController;
