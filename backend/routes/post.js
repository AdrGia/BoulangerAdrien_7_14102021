
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');
const postCtrl = require('../controllers/post');

router.post('/', auth, multer, postCtrl.newPost);
router.get('/', auth, postCtrl.allPosts);
router.get('/:id', auth, postCtrl.onePost);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;