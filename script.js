//add variables
var numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operations'),
  dec = document.getElementById('decimal'),
  clearBtns = document.querySelectorAll('.clear_btn'),
  resultBtn = document.getElementById('result'),
  calcDisplay = document.getElementById('calc_Display_Input'),
  memoryCurrentNumber = 0,
  memoryNewNumber = false
  memoryPendingOperation = '';

//add event hadlers

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i]
  num.addEventListener('click', function (test){
    numberPress(test.target.textContent)
  })
}

for (var i = 0; i < operations.length; i++) {
  var oper = operations[i]
  oper.addEventListener('click', function (test) {
    operationPress(test.target.textContent)  
  })
}

for (var i = 0; i < clearBtns.length; i++) {
  var cleanBtn = clearBtns[i]
  cleanBtn.addEventListener('click', function (test) {
    clear(test.target.id)
  })
}

dec.addEventListener('click', decimal)

resultBtn.addEventListener('click', result) 

function numberPress(number) {
  if (calcDisplay.value === '0') {
    calcDisplay.value = number
  } else {
    calcDisplay.value += number
  }

  console.log('Клик по кнопке c цифрой ' + number)
}

function operationPress(symbol) {
  console.log('Клик по кнопке с операцией ' + symbol )
}

function clear(id) {
  console.log('click on ' + id + ' !')
}

function decimal() {
  console.log('Клик по кнопке точка')
}

function result() {
  console.log('Клик по кнопке равно')
}

/* function  () {

}  */
