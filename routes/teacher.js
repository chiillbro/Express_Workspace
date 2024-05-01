import express from "express";

const router = express.Router();

router.get("/get", (req, res) => {
  res.send("All Teachers");
});
router.post("/post", (req, res) => {
  res.send("Creating new Teacher");
});
router.put("/put", (req, res) => {
  res.send("Updating Teacher");
});
router.delete("/delete", (req, res) => {
  res.send("Deleting a Teacher from db");
});

export default router;
