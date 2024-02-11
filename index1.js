

var i = 0;
var speed = 50;
var message1 = "//----------TEACHER INFORMATION----------";
var message2 = 'String teacherName = "Mr. Spence Riggs";';
var message2_0 = 'String';
var message2_1 = ' teacherName ';
var message2_2 = '=';
var message2_3 = ' "Mr. Spence Riggs"';
var message2_4 = ';';
var message3 = 'String[] subjectsTaught = {"Computer Science", "Web Development", "Game Design"};';
var message3_0 = 'String[]';
var message3_1 = ' subjectsTaught ';
var message3_2 = '=';
var message3_3 = ' {';
var message3_4 = '"Computer Science", "Web Development", "Game Design"';
var message3_5 = '};';
var message4 = 'String[] programmingLanguages = {"Java", "Python", "JavaScript", "HTML/CSS"};';
var message4_0 = 'String[]';
var message4_1 = ' programmingLanguages ';
var message4_2 = '=';
var message4_3 = ' {';
var message4_4 = '"Java", "Python", "JavaScript", "HTML/CSS", "C#"';
var message4_5 = '};';
var message5 = 'More Info >>'
var message1Complete = false;
var message2Complete = false;
var message2_0Complete = false;
var message2_1Complete = false;
var message2_2Complete = false;
var message2_3Complete = false;
var message2_4Complete = false;
var message3Complete = false;
var message3_0Complete = false;
var message3_1Complete = false;
var message3_2Complete = false;
var message3_3Complete = false;
var message3_4Complete = false;
var message3_5Complete = false;
var message3_6Complete = false;
var message4Complete = false;
var message4_0Complete = false;
var message4_1Complete = false;
var message4_2Complete = false;
var message4_3Complete = false;
var message4_4Complete = false;
var message4_5Complete = false;
var message4_6Complete = false;
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

    if(i < message2_0.length && message1Complete && !message2_0Complete){
        document.getElementById("demo2_0").innerHTML += message2_0.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message2_0.length){
            message2_0Complete = true;
            i = 0;
        }
    }

    if(i < message2_1.length && message1Complete && message2_0Complete && !message2_1Complete){
        document.getElementById("demo2_1").innerHTML += message2_1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message2_1.length){
            message2_1Complete = true;
            i = 0;
        }
    }

    if(i < message2_2.length && message1Complete && message2_0Complete && message2_1Complete & !message2_2Complete){
        document.getElementById("demo2_2").innerHTML += message2_2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message2_2.length){
            message2_2Complete = true;
            i = 0;
        }
    }

    if(i < message2_3.length && message1Complete && message2_0Complete && message2_1Complete & message2_2Complete && !message2_3Complete){
        document.getElementById("demo2_3").innerHTML += message2_3.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message2_3.length){
            message2_3Complete = true;
            i = 0;
        }
    }

    if(i < message2_4.length && message1Complete && message2_0Complete && message2_1Complete & message2_2Complete && message2_3Complete && !message2_4Complete){
        document.getElementById("demo2_4").innerHTML += message2_4.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message2_4.length){
            message2_4Complete = true;
            message2Complete = true;
            i = 0;
        }
    }

    //3rd Row


    if(i < message3_0.length && message1Complete && message2Complete && !message3_0Complete){
        document.getElementById("demo3_0").innerHTML += message3_0.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message3_0.length){
            message3_0Complete = true;
            i = 0;
        }
    }

    if(i < message3_1.length && message1Complete && message2Complete && message3_0Complete && !message3_1Complete){
        document.getElementById("demo3_1").innerHTML += message3_1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message3_1.length){
            message3_1Complete = true;
            i = 0;
        }
    }

    if(i < message3_2.length && message1Complete && message2Complete && message3_0Complete && message3_1Complete & !message3_2Complete){
        document.getElementById("demo3_2").innerHTML += message3_2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message3_2.length){
            message3_2Complete = true;
            i = 0;
        }
    }

    if(i < message3_3.length && message1Complete && message2Complete && message3_0Complete && message3_1Complete & message3_2Complete && !message3_3Complete){
        document.getElementById("demo3_3").innerHTML += message3_3.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message3_3.length){
            message3_3Complete = true;
            i = 0;
        }
    }

    if(i < message3_4.length && message1Complete && message2Complete && message3_0Complete && message3_1Complete & message3_2Complete && message3_3Complete && !message3_4Complete){
        document.getElementById("demo3_4").innerHTML += message3_4.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message3_4.length){
            message3_4Complete = true;
            i = 0;
        }
    }

    if(i < message3_5.length && message1Complete && message2Complete && message3_0Complete && message3_1Complete & message3_2Complete && message3_3Complete && message3_4Complete && !message3_5Complete){
        document.getElementById("demo3_5").innerHTML += message3_5.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message3_5.length){
            message3_5Complete = true;
            message3Complete = true;
            i = 0;
        }
    }


    //4th Row
    if(i < message4_0.length && message1Complete && message2Complete && message3Complete && !message4_0Complete){
        document.getElementById("demo4_0").innerHTML += message4_0.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message4_0.length){
            message4_0Complete = true;
            i = 0;
        }
    }

    if(i < message4_1.length && message1Complete && message2Complete && message3Complete && message4_0Complete && !message4_1Complete){
        document.getElementById("demo4_1").innerHTML += message4_1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message4_1.length){
            message4_1Complete = true;
            i = 0;
        }
    }

    if(i < message4_2.length && message1Complete && message2Complete && message3Complete && message4_0Complete && message4_1Complete & !message4_2Complete){
        document.getElementById("demo4_2").innerHTML += message4_2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message4_2.length){
            message4_2Complete = true;
            i = 0;
        }
    }

    if(i < message4_3.length && message1Complete && message2Complete && message3Complete && message4_0Complete && message4_1Complete & message4_2Complete && !message4_3Complete){
        document.getElementById("demo4_3").innerHTML += message4_3.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message4_3.length){
            message4_3Complete = true;
            i = 0;
        }
    }

    if(i < message4_4.length && message1Complete && message2Complete && message3Complete && message3_0Complete && message4_1Complete & message4_2Complete && message4_3Complete && !message4_4Complete){
        document.getElementById("demo4_4").innerHTML += message4_4.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message4_4.length){
            message4_4Complete = true;
            i = 0;
        }
    }

    if(i < message4_5.length && message1Complete && message2Complete && message3Complete && message4_0Complete && message4_1Complete & message4_2Complete && message4_3Complete && message4_4Complete && !message4_5Complete){
        document.getElementById("demo4_5").innerHTML += message4_5.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      
        if(i == message4_5.length){
            message4_5Complete = true;
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



