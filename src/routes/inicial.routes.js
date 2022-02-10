const router = require('express').Router();
router.get('/',(req, res) => {
    res.json({message: 'To ficando bom nisso'})
})
module.exports = router;