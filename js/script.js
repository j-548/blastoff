function timer() {

  var time = 11;

  var countdown = setInterval(function() {

        time--;

        document.getElementById('timerDisplay').style.fontSize = "20vw";
        document.getElementById("timerDisplay").textContent = time;

        if (time <= 0) {
        clearInterval(countdown);
        document.getElementById('timerDisplay').style.fontSize = "10vw";
        document.getElementById('timerDisplay').textContent = "Blast Off!!";
      }

    },
    1000);
}
