function random() {
    var random = Math.floor(Math.random() * 6) + 1;
    if (random == 1) {
        document.body.style.backgroundImage = "url('bgs/basic.jpg')";
    } else {
       if (random == 2) {
        document.body.style.backgroundImage = "url('bgs/beach.jpeg')";
       } else {
          if (random == 3) {
            document.body.style.backgroundImage = "url('bgs/Ghost.jpg')";
          } else {
            if (random == 4) {
              document.body.style.backgroundImage = "url('bgs/gold.jpeg')";
            } else {
              if (random == 5) {
                document.body.style.backgroundImage = "url('bgs/mini.webp')";
              } else {
                if (random == 6) {
                  document.body.style.backgroundImage = "url('bgs/shadow.jpg')";
                }
              }
            }
          }
       }
    }  
}