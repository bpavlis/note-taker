const router = require('express').Router();


const {createNewNote, deleteOldNote} = require('../../create.delete');
let {db} = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let dbResults = db;
  res.json(dbResults);
});

router.post('/notes', (req, res) => {
  if (db) {
    req.body.id = db.length.toString();
  } else {
    {req.body.id = 0}
    res.json(createNewNote(req.body, db))
  }
})
 
router.delete('/notes/:id', async (req, res) => {
  const {id} = req.params
  db = await deleteOldNote(id, db);
  res,json(db);
})

module.exports = router;