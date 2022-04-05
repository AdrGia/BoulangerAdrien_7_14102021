
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');
const postCtrl = require('../controllers/post');

router.post('/', auth, multer, postCtrl.createPost);
router.get('/', auth, postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);
router.delete('/:id', auth, postCtrl.deletePost);
router.put('/:id', auth, postCtrl.modifyPost);

module.exports = router;