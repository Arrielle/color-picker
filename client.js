$(document).ready(function(){
  //appends my color blocks

  var colorArray = ['pink', 'blue', 'green', 'tan', 'orange'];

  for (var i = 0; i < colorArray.length; i++) {
    $('body').append('<div id = \'' + colorArray[i] + '\'></div>');
    $('#' + colorArray[i]).css({"background-color":colorArray[i], "float":"left" , "width":"150px", "heigh":"150px" });
  }

  // var pink = $('body').append('<div id = "pink"><h1>PINK COLOR BLOCK</h1></div>');
  // var blue = $('body').append('<div id = "blue"><h1>BLUE COLOR BLOCK</h1></div>');
  // var green = $('body').append('<div id = "block" class = "green"><h1>GREEN COLOR BLOCK</h1></div>');
  // var tan = $('body').append('<div id = "block" class = "tan"><h1>TAN COLOR BLOCK</h1></div>');
  // var orange = $('body').append('<div id = "block" class = "orange"><h1>ORANGE COLOR BLOCK</h1></div>');

  // var colorArray = ['pink', 'blue', 'green', 'tan', 'orange'];
  //
  // for (var i = 0; i < array.length; i++) {
  //   array[i] =
  // }
  //
  // $('div').on('click', function () {
  //
  //   $(this).css('background-color'); //finds the css color rgb a
  //
  // });
  //
  // for (var i = 0; i < array.leng; i++) {
  //
  // }



  //picks a random number
  // function randomNumber(min, max){
  //     var randomNumberReturn = Math.floor(Math.random() * (1 + max - min) + min);
  //     return randomNumberReturn;
  // }
  //
  // randomNumber(1, 5);
  //
  // $('#block').on('click', function(){
  //
  //   if ($(this).css('background-color') == randomNumberReturn) {
  //     console.log('YUP');
  //   }
  //
  // });


  //
  // var divColor = $("#block").css('background-color');
  // var divBlockObject = new ColorBlock(divColor);

  // var backgroundColor = $('#block').data('color', $(this).css("background-color"));
  //
  // console.log(backgroundColor);

  // function randomNumber(min, max){
  //   return Math.floor(Math.random() * (1 + max - min) + min);
  // }

  // //empty array
  // var colorArray = [];
  //
  // $('#block').on('click', function(){
  //
  //   //creates an object (with what data? )
  //   var newColorBlock = new ColorBlock(backgroundColor); //NEEDS TO BE ONCLICK
  //   colorArray.push(newColorBlock); //NEEDS TO BE ON CLICK
  // });
  //
  //
  // var outputOfRandomNumber = randomNumber(0, colorArray.length);
  //
  // colorBlockObject[i] == outputOfRandomNumber;
  //
  // if (colorBlockObject.color = colorBlockObject[i]) {
  //   console.log("SUCCESS");
  // } else {
  //   console.log("FAILURE");
  // }
  //
  // //randomly generate number needs to randomly generate color
  // //set colors to number? ARRAY NUMBER!!
  //
  //
  // //   //divs are created.
  //
  // //   //accesses the divs color
  // //   $('.pink').css('background-color');
  // //   $('.blue').css('background-color');
  // //   $('.green').css('background-color');
  // //   $('.tan').css('background-color');
  // //   $('.orange').css('background-color');
  // //   // creates and empty array
  // //   //put block objects in with the color property?
  //
  // //
  // // // for (var i = 0; i < array.length; i++) {
  // //
  // // // }
  // //
  // // $('#block').on('click', function(){
  // //   //if/else my div color = randomly generated color, message
  // //
  // // }); //end on click function
  //

});//end document ready

//Step 1: Append four or more divs onto the DOM with jQuery. Each colored a different color.
//Step 2: Prompt the player to pick one of the color blocks you created at random.
//Step 3: If the player picks the correct color block give them a success message
//        If the player picks the incorrect color block give them a failure message
//Step 4: Once the player has picked the correct color block, prompt the player to pick
//        another color block and keep playing
//
//Keep in mind: Make it easy to add or remove color blocks.
//HINT: Use an array to store the colors in and base all of my code off of the array.


//INITIAL TRAIN OF THOUGH

//EMPTY ARRAY
//PUSH OBJECT TO ARRAY
//OBJECT IS BUILT FROM DIV
//EX DIV 1 {COLOR: PINK}
