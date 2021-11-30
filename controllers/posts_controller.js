const Post = require('../models/post');

module.exports.create = function(req, res){
   Post.create({
       content: req.body.content,
       user: req.user._id
   }, function(err, post){
       if(err){console.log('error in creating a post'); return;}
       return res.redirect('back');
   });
}

// This can work only if you are logged in. First complete your task of logging in then come to this part. This will work fine. 
// First finish task of log in . ok
//yeah , sure
// Ok I am resolving this now. you complete logging in part from the video then if you still face error raise again. I will pick it 
// ok?
//yes, thank you
// Bye. Please rate :)