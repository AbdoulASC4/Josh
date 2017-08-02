$.ajax({
 url: 'https://randomuser.me/api/',
 dataType: 'json',
 success: function(data) {
   console.log(data.results[0]);
   var userFirstName = data.results[0].name.first;
       var userLastName = data.results[0].name.last;
       var picture = data.results[0].picture;
       $("body").append("<h1>This is "+userFirstName + " " +userLastName);
      $ ("body").append("<img src =https://randomuser.me/api/portraits/med/men/83.jpg></img>")
 }
});