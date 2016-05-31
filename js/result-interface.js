// var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#search').submit(function() {
    event.preventDefault();
    var user = $('#username').val();
    console.log(user);
    // $('#username').val("");
    // $.get('https://api.github.com/users/' + user +  '?access_token=' + apiKey).then(function(response) {
    //   console.log(response);
      $('.showUsername').text(user);
      $('.showUsername').show();
    // }).fail(function(error) {
    //   console.log(error.responseJSON.message);
      // $('.showWeather').text(error.responseJSON.message);
    // });
  });
});

// require(...) imports the exports package which contains the ajaxRequest function module
// var ajaxRequest = require('./../js/search-request.js').ajaxRequest;

// empty fields
// function resetFields () {
//   $("#username").val("");
// }
//
// var displayFunction = function(response) {
//   // response is returned from the weather api in JSON format or an array of objects
//   // 'cod' is a property of the response array/object
//   if (response.cod === "404") {
//     alert("username not found");
//   } else {
//     // Aha! displayFunction is the hiddenFunction that will execute when we call ajaxRequest() but only after the response has been received
//     $("#returnUserName").text(response.users.username);
//     $("#returnRepoName").text(response.users.username.repos);
//   }
// };
//
// $(document).ready(function() {
//   // what to do on submit
//   $("#search").submit(function(event) {
//     event.preventDefault();
//     var usernameInput = $('#username').val();
//     var newSearch = new Search(usernameInput);
//     // resetFields
//     resetFields();
//     // display section
//     $("#return").text();
//     // make weather request with CORS(cross-origin resource sharing). Collect response then feed it as an argument into displayFunction()
//     ajaxRequest(displayFunction);
//
//   // end of submit event
//   });
// // end of document ready
// });
