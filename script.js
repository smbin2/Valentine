window.onload = function () {
  var img = document.querySelector("img");
  var yesButton = document.getElementById("yes");
  var noButton = document.getElementById("no");
  var h1 = document.getElementById("h1");

  var scale = 1;
  var messages = [
    "J'ai découvert une nouvelle utilisation au gif pour te CHOQUER",
    "Tu veux vraiment continuer à voir ce gif ???",
    "Pitié t'en as pas marre ?",
    "'Mmmhhhh ketchup, quelle grâce' - Pikachu",
    "T'appuies un peu trop sur le bouton à mon goût",
    "Mdrrrrrr non c'est bon allez RATIO",
  ];
  var currentIndex = 0;
  var counter = 0

  yesButton.addEventListener("click", function () {
    document.body.innerHTML =
        "<div style='text-align: center; color: black;'><h1>C'est 100% moi là</h1><img id='ketnipz' src='ketnipz-b.gif' alt='Love Image' style='max-width: 100%; height: auto;'><img id='code' src='Spotifycode.jpeg' alt='https://open.spotify.com/playlist/1Vf2vXgjzIyZHGTfyyRnTM?si=Y-C8y3LWROuwXmz3-kE6SA' style='max-width: 100%; height: auto;'></div>";
  });

  noButton.addEventListener("click", function () {
    // Update "No" button text
    this.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
    
    counter++;

    // Change IMG
    img.src = "pikachu.gif";

    // Resize "Yes" button
    var newWidth =
      parseInt(yesButton.style.width || yesButton.offsetWidth) + 40; // Increase by 40px
    var newHeight =
      parseInt(yesButton.style.height || yesButton.offsetHeight) + 25; // Increase by 25px
    yesButton.style.width = newWidth + "px";
    yesButton.style.height = newHeight + "px";

    // Resize button text
    var fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 2; // Increase by 2px
    yesButton.style.fontSize = fontSize + "px";

    // Check if "Yes" button occupies 75% of the screen
    if ( counter === 6 ) {
      yesButton.style.width = "100vw";
      yesButton.style.height = "100vh";
      yesButton.style.fontSize = "5em"; // Adjust font size for full screen
      yesButton.textContent = "Ce serait chouette oui marko";
      noButton.style.display = "none";
      img.style.display = "none";
      h1.style.display = "none";
      p.style.display = "none";

      // Change content on "Yes" button click when full screen
      yesButton.onclick = function () {
        document.body.innerHTML =
          "<div style='text-align: center; color: black;'><h1>C'est 100% moi là</h1><img id='ketnipz' src='ketnipz-b.gif' alt='Love Image' style='max-width: 100%; height: auto;'><img id='code' src='Spotifycode.jpeg' alt='https://open.spotify.com/playlist/1Vf2vXgjzIyZHGTfyyRnTM?si=Y-C8y3LWROuwXmz3-kE6SA' style='max-width: 100%; height: auto;'></div>";
      };
    }
  });
};
