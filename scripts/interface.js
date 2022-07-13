document.addEventListener("DOMContentLoaded", () => {

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
  
    square.addEventListener('click',handleClick);

  });

});

function handleClick(event){

  let square = event.target;
  let position = square.id;

  if(handleMove(position)){
    setTimeout(() => {
      if(playerTime == 0){
        alert('O Jogador Vencedor foi  X')
      }else{
        alert('O Jogador Vencedor foi  O')
      }
      location.reload();
    },10);

  };
  
  updateSquare(position);

}

function updateSquare(position){
  let symbol = board[position];
  let square = document.getElementById(position.toString());
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetar(){

    location.reload();

}

// -------------------------------------------------------------------------------------

// Segunda forma de como fazer updateSquare

// function updateSquares(){

//   let squares = document.querySelectorAll(".square");

//   squares.forEach((square) => {
    
//     let position = square.id;
//     let symbol = board[position];
//     console.log(symbol);
//     if(symbol != ''){
//       square.innerHTML = `<div class='${symbol}'></div>`;
//     }

//   });

// }