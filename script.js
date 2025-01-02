let currentPlayer = "O";
let array = Array(9).fill(null);

const reset = document.getElementById('reset')

reset.addEventListener('click', () => {
  const box = document.querySelectorAll('.col')
  for(let i=0; i<9;i++){
    array[i] = null;
    box.item(i).innerText = ' '
  }
})

function checkwinner(){
  if(
    (array[0] !== null && array[0]===array[1] && array[1]===array[2]) ||
    (array[0] !== null && array[0]===array[3] && array[3]===array[6]) || (array[3] !== null && array[3]===array[4] && array[4]===array[5]) || (array[1] !== null && array[1]===array[4] && array[4]===array[7]) || (array[6] !== null && array[6]===array[7] && array[7]===array[8]) || (array[2] !== null && array[2]===array[5] && array[5]===array[8]) || (array[0] !== null && array[0]===array[4] && array[4]===array[8]) || (array[2] !== null && array[2]===array[4] && array[4]===array[6])
  ){
    document.getElementById('message').innerText = `Winner is ${currentPlayer}`
    return 0;
  }
  if(!array.some((e) => e === null)){
    document.getElementById('message').innerText = 'Draw !!'
    return 0;
  }
  return 1;
}


function handleclick(el){
  const id = Number(el.id);
  if(array[id]!== null) return;
  array[id] = currentPlayer;
  el.innerText = currentPlayer;
  if(!checkwinner()) return;
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`
}