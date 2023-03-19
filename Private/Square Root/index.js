function squareroot(number) {
    var number;
    for (var i = number; i >= 1; i--) {
        if (i * i === number) {
            number = i;
            break;
       }
   }
   return number;
}

 alert(squareroot(64))
 