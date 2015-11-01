var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
var rounds = 0;
function generateFaces(){
      for (var i = 0; i < numberOfFaces; i++) {
              smile = document.createElement("img");
              smile.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
              var randomTop = Math.random() * 401;
              randomTop = Math.floor(randomTop);
              var randomLeft = Math.random() * 401;
              randomLeft = Math.floor(randomLeft);
              smile.style.top = randomTop + "px";
              smile.style.left = randomLeft + "px";
              theLeftSide.appendChild(smile);
      }

      leftSideImages = theLeftSide.cloneNode(true);
      leftSideImages.removeChild(leftSideImages.lastChild);
      theRightSide.appendChild(leftSideImages);

      theLeftSide.lastChild.onclick = function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 5;
            rounds ++;
            removeAllChildren(theLeftSide);
            removeAllChildren(theRightSide);
            generateFaces();
      }

      theBody.onclick = function gameOver(){
            alert("Game Over!\n\n" + "You have got through " + rounds + " rounds!");
            theLeftSide.lastChild.style.background = "red";
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
      }
}
function removeAllChildren (parent){
      while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
      }
}
