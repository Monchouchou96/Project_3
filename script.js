//add variables
let numbers = document.querySelectorAll('.number'),
  operations = document.querySelectorAll('.operations'),
  dec = document.getElementById('decimal'),
  clearBtns = document.querySelectorAll('.clearBtn'),
  resultBtn = document.getElementById('result'),
  calcDisplay = document.getElementById('calcDisplayInput'),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false
  MemoryPendingOperation = ''

//add event hadlers

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i]
  num.addEventListener('click', function (test) {
    numberPress(test.target.textContent)
  })
}

for (let i = 0; i < operations.length; i++) {
  let oper = operations[i]
  oper.addEventListener('click', function (test) {
    operationPress(test.target.textContent)
  })
}

for (let i = 0; i < clearBtns.length; i++) {
  let cleanBtn = clearBtns[i]
  cleanBtn.addEventListener('click', function (test) {
    clear(test.target.id)
  })
}

dec.addEventListener('click', decimal)

resultBtn.addEventListener('click', result)

function PressNumber(number) {
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

function PressOperation(symbol) {
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
  let localDecimalMemory = calcDisplay.value

  if (MemoryNewNumber) {
    localDecimalMemory = '0.'
    MemoryNewNumber = false
  } else {
    if (localDecimalMemory.includes('.') === -1) {
      localDecimalMemory += '.'
    }
  }
  calcDisplay.value = localDecimalMemory
}

function clear(button) {
  if (button == 'clearBtnCE') {
    calcDisplay.value = '0'
    MemoryNewNumber = true
  } else if (button === 'clearBtnC') {
    calcDisplay.value = '0'
    MemoryNewNumber = true
    MemoryCurrentNumber = 0
    MemoryPendingOperation = ''
  }
}
