const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Users list');
});
router.post('/', (req, res) => {
  // 处理用户创建逻辑
  res.send('User created successfully');
});
module.exports = router;