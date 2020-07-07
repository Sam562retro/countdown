      var count = "Jun 19,2022 10:14:00";
      var CountDownDate = new Date(count).getTime();
      var setInterval;
      var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = CountDownDate - now;
      var Days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
      var Sec = Math.floor((distance % (1000 * 60 )) / 1000);
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('output').innerHTML = ('the time has finally arrived');
        return;
        }
      else{
        document.getElementById('output').innerHTML = (Days + ':' + Hours  + ":" + Minutes + ":" + Sec);
        }
      }, 1000);
