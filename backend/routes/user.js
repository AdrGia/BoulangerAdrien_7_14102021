const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');
const userCtrl = require('../controllers/user');
const validate = require('../middlewares/validate');

router.post('/signup', validate.user, userCtrl.signup);
router.post('/login', validate.user, userCtrl.login);
router.delete('/:id', auth, userCtrl.deleteAccount);
router.put('/:id/picture', auth, multer, userCtrl.changeProfilePicture);
router.put('/:id/admin', auth, userCtrl.changeAdmin);

module.exports = router;