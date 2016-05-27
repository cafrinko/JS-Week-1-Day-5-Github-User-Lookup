var apiKey = require('../.env').apiKey;

exports.Search = function(){
  this.username = username;
};

exports.getRepos = function(){
  $.get('https://api.github.com/users/' + this.username + 'repos?access_token=' + apiKey).then(function(response){
    console.log(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
