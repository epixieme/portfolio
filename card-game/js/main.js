

 document.querySelector("button").addEventListener("click", drawTwo);
 let deckId=''
function fetchCards() {

 

  fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`) // try and see if I can use local storage to stop the deck being changed each time its refreshed
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
    deckId = data.deck_id;
     
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

}



function drawTwo(deckId) {
  fetchCards()
console.log(deckId)
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      let player1 = document.querySelector("#player1");
      let player2 = document.querySelector("#player2");
      player1.src = data.cards[0].image;
      player2.src = data.cards[1].image;
      let player1Value = convertToNum(data.cards[0].value);
      let player2Value = convertToNum(data.cards[1].value);
      let result = document.querySelector(".result");
      if (player1Value > player2Value) {
        result.innerText = "Player1 Wins";
      } else if (player1Value < player2Value) {
        result.innerText = "Player2 Wins";
      } else {
        result.innerText = "war";
      }
    });

}

function convertToNum(val) {
  if (val === "ACE") {
    return 14;
  } else if (val === "KING") {
    return 13;
  } else if (val === "QUEEN") {
    return 12;
  } else if (val === "JACK") {
    return 11;
  } else {
    return +val;
  }
}

Math.ceil(Math.random() * 64);
