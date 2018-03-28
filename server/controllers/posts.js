const Post = require('../models/posts');


module.exports = {
  uploadFile: (req, res) => {
    console.log('masukk ke sini')
  Post
  .create({
    title: req.body.title,
    image: req.file.cloudStoragePublicUrl,
    user_id: req.body.user_id,
    caption:req.body.caption
  }, (err, newpost) => {
      if (err) {
        return res.status(400).json({
            message: `create post erorr ${err}`,
            data: {}
        })
      }else{
        res.status(200).json({
            message: `post success`,
            data: newpost
        })
      }
    })
  },
  readFile: (req, res) => {
    console.log('massukkkk')
    Post
    .find()
    .populate('user_id')
    .populate('like')
    .exec()
    .then(allpost => {
        returnData = []
        for (let i = 0; i < allpost.length; i++) {
          returnData.push({
            _id: allpost[i].id,
            user_id: allpost[i].user_id,
            image: allpost[i].image,
            title: allpost[i].title,
            totalLike: allpost[i].like.length,
            like: allpost[i].like,
          })
        }
        res.status(200).json({
            message: `success show allpost`,
            data: returnData,
        })
    }).catch(err => {
        res.status(400).json({
            message: `cannot find post ${err}`
        })
    })
  },
  deletePost: (req, res) => {
    let post = req.params.id_post
    Post
    .findByIdAndRemove(post, (err, post) => {
        if (err) {
            res.status(400).json({
                message: `cant find post`
            })
        }else{
            res.status(200).json({
                message : `delete post success`,
                data : post
            })
        }
    })
  },
  findByCaption: (req, res) => {
    let cari = req.params.category
    Post
    .find({ category: { $regex: `.*${cari}.*`, $options: `i` } })
    .then(post => {
        res.status(200).json({
            message: ` success find categories`,
            data: post
        })
    }).catch(err => {
        res.status(400).json({
            message: `error find post categories`
        })
    })
  },

  like: (req, res) => {
    let userId = req.body.userId
    let postId = req.body.postId

    Post.findById(postId, function (err, post) {
      if (err) {
        res.status(400).json({
          status: `failed ${err}`
        });
      } else {
        post.like.forEach((postLike, index) => {
          if (postLike == userId) {
              res.status(200).json({
                message: 'You already Like this post !',
                status: 0
                });
          }else{
            post.like.push(userId)
            post.save(function (err) {
              if (err) {
                res.status(400).json({
                status: 'failed'
                });
              } else {
                res.status(200).json({
                  message: 'You Upvote this post !',
                  status: 1
                });
              }
            });
          }
        })
      }
    })
  }
}