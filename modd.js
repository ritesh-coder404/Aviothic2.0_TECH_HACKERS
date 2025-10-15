const player = document.getElementById("player");

    const happyVideo = "rS4G5az-MKA";
    const sadVideo = "35zHT7prDdU";
    const chillVideo = "HqUeSjsYLNU";
     const PatrioticVideo = "nDsIy6kRhms";
      const SleepyVideo = "_s3iubAXihM";

    
    document.getElementById("happy").onclick = () => {
      document.body.className = "happy";
      player.src = `https://www.youtube.com/embed/${happyVideo}?autoplay=1&loop=1&playlist=${happyVideo}`;
      hideMenu();
    };

    document.getElementById("sad").onclick = () => {
      document.body.className = "sad";
      player.src =` https://www.youtube.com/embed/${sadVideo}?autoplay=1&loop=1&playlist=${sadVideo}`;
      hideMenu();
    };

    document.getElementById("chill").onclick = () => {
      document.body.className = "chill";
      player.src = `https://www.youtube.com/embed/${chillVideo}?autoplay=1&loop=1&playlist=${chillVideo}`;
      hideMenu();
    };
     document.getElementById("Patriotic").onclick = () => {
      document.body.className = "Patriotic";
      player.src = `https://www.youtube.com/embed/${PatrioticVideo}?autoplay=1&loop=1&playlist=${PatrioticVideo}`;
      hideMenu();
    };
     document.getElementById("Sleepy").onclick = () => {
      document.body.className = "Sleepy";
      player.src = `https://www.youtube.com/embed/${SleepyVideo}?autoplay=1&loop=1&playlist=${SleepyVideo}`;
      hideMenu();
    };

    
    const moodMenuBtn = document.getElementById("moodMenuBtn");
    const moodMenu = document.getElementById("moodMenu");

    moodMenuBtn.onclick = () => {
      moodMenu.classList.toggle("show");
    };

    
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        if (moodMenu.classList.contains('show')) {
          moodMenu.classList.remove('show');
        }
      }
    };

    function hideMenu() {
      moodMenu.classList.remove('show');
    }
