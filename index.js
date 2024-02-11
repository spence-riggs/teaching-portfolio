

var i = 0;
var speed = 100;
var message1 = "//----------TEACHER INFORMATION----------";
var message2 = 'String teacherName = "Mr. Spence Riggs";';
var message3 = 'String[] subjectsTaught = {"Computer Science", "Web Development", "Game Design"};';
var message4 = 'String[] programmingLanguages = {"Java", "Python", "JavaScript", "HTML/CSS"};';
var message5 = 'More Info >>'
var message1Complete = false;
var message2Complete = false;
var message3Complete = false;
var message4Complete = false;
var message5Complete = false;


function typeWriter() {
    if (i < message1.length && message1Complete == false && message2Complete == false && message3Complete == false && message4Complete == false) {
      document.getElementById("demo1").innerHTML += message1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
        
      if(i == message1.length){
        message1Complete = true;
        
        i = 0;
        
    }
    }
    
   
    
    if ( i < message2.length && message1Complete && message2Complete == false && message3Complete == false && message4Complete == false){
        document.getElementById("demo2").innerHTML += message2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message2.length){
            message2Complete = true;
            i = 0;
        }
    }
    
    if ( i < message3.length && message1Complete && message2Complete && message3Complete == false && message4Complete == false){
        document.getElementById("demo3").innerHTML += message3.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message3.length){
            message3Complete = true;
            i = 0;
        }
    }

    if ( i < message4.length && message1Complete && message2Complete && message3Complete && message4Complete == false){
        document.getElementById("demo4").innerHTML += message4.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message4.length){
            message4Complete = true;
            i = 0;
        }
    }

    if ( i < message5.length && message1Complete && message2Complete && message3Complete && message4Complete && message5Complete == false){
        document.getElementById("demo5").style.visibility = "visible";
        document.getElementById("demo5").innerHTML += message5.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message5.length){
            message5Complete = true;
            i = 0;
        }
    }
    
  }

  // Navbar Scroll Function



