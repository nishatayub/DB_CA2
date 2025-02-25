const Books = require("../models/bookModel.js");

exports.getBooks = async (req,res) => {
    try{
        const { id } = req.params;
    if(id){
        const book = await Books.findById(id);
        if(!book){
            res.status(404).json("Book not found");
        }
        res.status(200).json(book);
        };
    res.status(200).json(Books);
    }catch(err){
        res.status(500).json("Server Error");
    }   
}

exports.addBooks = async (req,res) => {
    try{
        const {title, author, genre, publishedYear, availableCopies } = req.body;

    const newBook = new Books({
        title,
        author,
        genre,
        publishedYear,
        availableCopies
    });
    await newBook.save();
    res.status(200).json(newBook);
    }catch(err){
        res.status(500).json("Server Error");
    }
    
}

exports.updateBooks = async(req,res) => {
    try{
        const { id } = req.params;
        const {title, author, genre, publishedYear, availableCopies } = req.body;
    
        const updatedBook = await Books.findByIdAndUpdate(id, {
            title,
            author,
            genre,
            publishedYear,
            availableCopies
        });
        res.status(200).json(updatedBook); 
    }catch(err){
        res.status(500).json("Server Error");
    }
};

exports.deleteBooks = async (req,res) => {
    try{
        const { id } = req.params;
    const deletedBook = await Books.findByIdAndDelete(id);

    if(!deletedBook){
        res.status(404).json("Book Not Found");
    }

    res.status(200).json(deletedBook);
    }catch(err){
        res.status(500).json("Server Error");
    }
    
};
