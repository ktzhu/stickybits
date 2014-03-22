/* GET story page. */
exports.index = function(req, res){
  res.render('story', { title: 'Silicon Valley' });
};
