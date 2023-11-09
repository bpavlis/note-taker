const path = require('path');
const router = require('express').Router();


//home html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
});

//notes html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

//* html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router;




/*
ex code from class: 
----------------------------------------------
const router = require("express").Router()

// Html page for listing all records
router.get("/users", (req, res) => {
  // res.sendFile("path to file")
})


// Html page for a single record
router.get("/user", (req, res) => {
  // res.sendFile("path to file")
})


module.exports = router;
*/