const path = require('path');
const fs = require('fs');


function createNewNote(body, db) {
  const note = body;
  db.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ db }, null, 2)
  );
  return note;
}

function deleteOldNote(id, notes) {
  let db = notes.filter(el => {
    if (el.id == id) {
      return false
    } else {
      return true
    }
  })

  let index = 0;
  db.forEach(note => {
    note.id = index;
    index += 1;
  });

  fs.writeFile(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({db}, null, 2)
  );
  return db;
}

module.exports = {
  createNewNote,
  deleteOldNote
};