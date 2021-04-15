//add variables
var numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operations'),
  dec = document.getElementById('decimal'),
  clearBtns = document.querySelectorAll('.clear_btn'),
  resultBtn = document.getElementById('result'),
  calcDisplay = document.getElementById('calc_Display_Input'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false
    MemoryPendingOperation = ''

//add event hadlers

for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i]
  num.addEventListener('click', function (test) {
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
  if (MemoryNewNumber) {
    calcDisplay.value = number
    MemoryNewNumber = false
  } else {
    if (calcDisplay.value === '0') {
      calcDisplay.value = number
    } else {
      calcDisplay.value += number
    }
  }
}

function operationPress(symbol) {
  let localOperationMemory = calcDisplay.value

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    calcDisplay.value = MemoryCurrentNumber
  } else {
    MemoryNewNumber = true
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory)
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory)
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory)
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory)
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory)
    }
    calcDisplay.value = MemoryCurrentNumber
    MemoryPendingOperation = symbol
  }
}

function decimal(argument) {
  var localDecimalMemory = calcDisplay.value

  if (MemoryNewNumber) {
    localDecimalMemory = '0.'
    MemoryNewNumber = false
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.'
    }
  }
  calcDisplay.value = localDecimalMemory
}


function clear(id) {
  if (id == 'ce') {
    calcDisplay.value = '0'
    MemoryNewNumber = true
  } else if (id === 'c') {
    calcDisplay.value = '0'
    MemoryNewNumber = true
    MemoryCurrentNumber = 0; 
    MemoryPendingOperation = ''
  }
  
}

