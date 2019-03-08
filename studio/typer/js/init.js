
$(document).ready(function() {
  
  var entryCount = 0;
  var displayCount = 0;


$(document).on("keypress", function(e) {


	e.preventDefault();
    entryCount ++;
    displayCount ++;
    //translate unicode to characters        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

	
	//capture function keys
  	$(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;

	displayCount --;
      if (displayCount < 0) {
        displayCount = 0;
      }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount );
      deleteElement();
    }

  });

});

var images = new Array('bg/bg1.png','bg/bg3.jpg','bg/bg4.jpg','bg/bg6.jpg','bg/bg7.jpg','bg/bg8.jpg','bg/bg9.png');

// does this work
//document.getElementById('face').src = "bg1.png";

//function displayImage() {
  var num = Math.floor(Math.random() * 7);
  console.log(num);

  document.getElementById('face').src = images[num];
  // document.appendChild();

function deleteElement() {
  $(".inner").last().remove();
  $('.elements').last().remove();
}

function createElement(k) {
  var elem = $('#cursor');
  var container = $('.background');
  if (k == "a" || k == "A") { elem.before('<span class="inner">a</span>'); container.append('<img src="images/eye2.png" style="left:454px; top: 130px; position: absolute;" class="elements">')}
  if (k == "b" || k == "B") { elem.before('<span class="inner">b</span>'); container.append('<img src="images/eye1.png" style="left:454px; top: 130px; position: absolute;" class="elements">')}
  if (k == "c" || k == "C") { elem.before('<span class="inner">c</span>'); container.append('<img src="images/eye3.png" style="left:454px; top: 130px; position: absolute;" class="elements">')}
  if (k == "d" || k == "D") { elem.before('<span class="inner">d</span>'); container.append('<img src="images/nose7.png" style="left:400px; top: 175px; position: absolute; transform: scale(0.7);" class="elements">')}
  if (k == "e" || k == "E") { elem.before('<span class="inner">e</span>'); container.append('<img src="images/mouse1.png" style="left:405px; top: 215px; position: absolute; transform: scale(0.7);" class="elements">')}
  if (k == "f" || k == "F") { elem.before('<span class="inner">f</span>'); container.append('<img src="images/eye4.png" style="left:377px; top: 140px; position: absolute;" class="elements">')}
  if (k == "g" || k == "G") { elem.before('<span class="inner">g</span>'); container.append('<img src="images/eye5.png" style="left:454px; top: 130px; position: absolute;" class="elements">')}
  if (k == "h" || k == "H") { elem.before('<span class="inner">h</span>'); container.append('<img src="images/nose2.png" style="left:400px; top: 175px; position: absolute; transform: scale(0.7);" class="elements">')}
  if (k == "i" || k == "I") { elem.before('<span class="inner">i</span>'); container.append('<img src="images/eye6.png" style="left:377px; top: 140px; position: absolute;" class="elements">')}
  if (k == "j" || k == "J") { elem.before('<span class="inner">j</span>'); container.append('<img src="images/eye7.png" style="left:454px; top: 130px; position: absolute; transform: scale(1.4);" class="elements">')}
  if (k == "k" || k == "K") { elem.before('<span class="inner">k</span>'); container.append('<img src="images/eye14.png" style="left:454px; top: 130px; position: absolute;" class="elements">')}
  if (k == "l" || k == "L") { elem.before('<span class="inner">l</span>'); container.append('<img src="images/nose4.png" style="left:400px; top: 175px; position: absolute; transform: scale(0.7);" class="elements">')}
  if (k == "m" || k == "M") { elem.before('<span class="inner">m</span>'); container.append('<img src="images/mouse3.png" style="left:405px; top: 215px; position: absolute;" class="elements">')}
  if (k == "n" || k == "N") { elem.before('<span class="inner">n</span>'); container.append('<img src="images/nose1.png" style="left:400px; top: 175px; position: absolute; transform: scale(0.5);" class="elements">')}
  if (k == "o" || k == "O") { elem.before('<span class="inner">o</span>'); container.append('<img src="images/eye9.png" style="left:377px; top: 140px; position: absolute;" class="elements">')}
  if (k == "p" || k == "P") { elem.before('<span class="inner">p</span>'); container.append('<img src="images/nose5.png" style="left:400px; top: 175px; position: absolute; transform: scale(0.6);" class="elements">')}
  if (k == "q" || k == "Q") { elem.before('<span class="inner">q</span>'); container.append('<img src="images/eye10.png" style="left:454px; top: 130px; position: absolute;" class="elements">')}
  if (k == "r" || k == "R") { elem.before('<span class="inner">r</span>'); container.append('<img src="images/mouse4.png" style="left:405px; top: 215px; position: absolute; transform: scale(0.5);" class="elements">')}
  if (k == "s" || k == "S") { elem.before('<span class="inner">s</span>'); container.append('<img src="images/mouse2.png" style="left:405px; top: 215px; position: absolute; transform: scale(0.8);" class="elements">')}
  if (k == "t" || k == "T") { elem.before('<span class="inner">t</span>'); container.append('<img src="images/nose3.png" style="left:400px; top: 175px; position: absolute; transform: scale(0.7);" class="elements">')}
  if (k == "u" || k == "U") { elem.before('<span class="inner">u</span>'); container.append('<img src="images/eye15.png" style="left:377px; top: 140px; position: absolute;" class="elements">')}
  if (k == "v" || k == "V") { elem.before('<span class="inner">v</span>'); container.append('<img src="images/eye13.png" style="left:377px; top: 140px; position: absolute;" class="elements">')}
  if (k == "w" || k == "W") { elem.before('<span class="inner">w</span>'); container.append('<img src="images/eye12.png" style="left:454px; top: 130px; position: absolute; transform: scale(0.7);" class="elements">')}
  if (k == "x" || k == "X") { elem.before('<span class="inner">x</span>'); container.append('<img src="images/mouse5.png" style="left:405px; top: 225px; position: absolute; transform: scale(0.5);" class="elements">')}
  if (k == "y" || k == "Y") { elem.before('<span class="inner">y</span>'); container.append('<img src="images/mouse6.png" style="left:405px; top: 215px; position: absolute; transform: scale(0.5);" class="elements">')}
  if (k == "z" || k == "Z") { elem.before('<span class="inner">z</span>'); container.append('<img src="images/nose4.png" style="left:400px; top: 175px; position: absolute; transform: scale(0.7);" class="elements">')}
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }
  if (k == "?") { elem.before('<span class="inner">?</span>'); }
  if (k == "!") { elem.before('<span class="inner">!</span>'); }

}

