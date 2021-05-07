const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.send(`request ${req.params.id} category!`);
});

module.exports = router;
