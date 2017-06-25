$(document).ready(function(){
  var users = ["roblox","comster404", "imaqtpie", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var holder = document.getElementsByClassName("holder")[0];
  users.forEach(function(user){
    console.log(" It's time for " + user)
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+ user, function(data){
      var can = document.createElement("div");
      can.className += "can";

      var img = document.createElement("div");
      img.className += "img";
      img.style.backgroundImage = "url(' " + data.logo + "')";

      var status = document.createElement("div");
      status.className += "status";



      var name = document.createElement("div");
      name.className += "name";
      if (data.name == undefined){
        name.innerHTML = "<center>" + user + "</center>";
        img.style.backgroundImage = "url('')";
        img.innerText = "Oh snap! This account doesn't exist!";
        img.className += " deleted"
      } else {
        name.innerHTML = "<center>" + data.name + "</center>";
      }


      can.appendChild(img);
      can.appendChild(status);
      can.appendChild(name);
      holder.appendChild(can);

      can.addEventListener("click", function(){
        
        window.open("https://www.twitch.tv/" + data.name);
      });
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + user,  function(streams){
        if (streams.stream == null){
          console.log(user + " is offline");
          status.className += " offline";
        } else {
          console.log(user + " is online");
          status.className += " online";

          name.innerHTML = "<center>" + data.name + " is streaming <span class='game'>" + streams.stream.game + "</span></center>";
        }
      })

    })
  })
})
