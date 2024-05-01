import express from "express";

const router = express.Router();

router.get("/get", (req, res) => {
  res.send("All students");
});
router.post("/post", (req, res) => {
  res.send("Creating new Student");
});
router.put("/put", (req, res) => {
  res.send("Updating Student");
});
router.delete("/delete", (req, res) => {
  res.send("Deleting a Student from db");
});

export default router;
