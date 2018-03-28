const express           = require('express');
const router            = express.Router();
const {uploadFile,readFile,deletePost,like,findByCaption} = require('../controllers/posts');
const {sendUploadToGCS} = require('../middleware/uploadGCS') 
const multer = require('multer')

const upload = multer({
   storage  : multer.memoryStorage(),
   limits   : {
     fileSize: 10*1024*1024
  } 
 })

router.post('/upload',upload.single('post'),sendUploadToGCS,uploadFile)
router.get('/',readFile)
router.get('/search/:id',findByCaption)
router.delete('/:id_post',deletePost) 
router.post('/like', like)


module.exports = router;