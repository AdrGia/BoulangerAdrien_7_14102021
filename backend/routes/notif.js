const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const notifCtrl = require('../controllers/notif');

router.get('/', auth, notifCtrl.getNotifs);
router.delete('/:id', auth, notifCtrl.deleteOneNotif);
router.delete('/', auth, notifCtrl.deleteAllNotifs);

module.exports = router;