import express from "express";
import path from "path";

import bodyParser from "body-parser";

import products from "./routes/products.js";
import students from "./routes/student.js";

import teachers from "./routes/teacher.js";

import router from "./routes/route.js";

// console.clear();
const app = express();

// app.get(
//   "/three-cb",
//   (req, res, next) => {
//     console.log("single callback");
//     res.send("First Callback");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Second callback");
//     res.send("Second Callback");
//     next();
//   },
//   (req, res) => {
//     res.send("Third Callback");
//   }
// );

// app
//   .route("/student")
//   .get((req, res) => res.send("All students"))
//   .post((req, res) => res.send("Create student"))
//   .put((req, res) => res.send("Update student"))
//   .delete((req, res) => res.send("delete student"));

// app.use("/students", students);
// app.use("/teachers", teachers);

// app.param("id", (req, res, next, id) => {
//   console.log(`id : ${id}`);
//   next();
// });

// app.get("/product/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(`model : ${id}`);
// });

// app.get("/product", (req, res) => {
//   const { category, id } = req.query;
//   res.send(`Category : ${category} , id : ${id}`);
// });

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(process.cwd(), "./public/index.html"));
// });
// app.set("view engine", "ejs");
// app.use("/", router);
app.use(bodyParser.json());

app.post("/post", (req, res) => {
  const { name, role, age } = req.body;
  res.send(`${name}, ${role}, ${age}`);
});
app.listen(8000, () => console.log("server up baby!"));
