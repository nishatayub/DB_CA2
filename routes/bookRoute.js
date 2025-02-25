const express = require("express");
const { addBooks, getBooks, updateBooks, deleteBooks } = require("../controllers/bookController");

const router = express.Router();

router.post("/books", addBooks);
router.get("/books/:id?", getBooks);
router.put("/books/:id", updateBooks);
router.delete("/books/:id", deleteBooks);

module.exports = router;