class Calculator {
	constructor(currentTextElement, previousTextElement) {
		this.currentDisplay = currentTextElement;
		this.previousDisplay = previousTextElement;
		this.reset();
	}
	reset() {
		this.currentDisplay = '';
		this.previousDisplay = '';
		this.operator = undefined;
	}
	delete() {
		if (this.currentDisplay === '') return
		this.currentDisplay = this.currentDisplay.slice(0, -1);
	}
	appendNumber(number) {

		if (number === '.' && this.currentDisplay.includes('.')) return;
		this.currentDisplay = this.currentDisplay.toString() + number.toString();
	}
	operation(operator) {
		if (this.currentDisplay == '') return;
		this.operator = operator;
		this.previousDisplay = this.currentDisplay;
		this.currentDisplay = '';
	}
	compute() {
		let current = parseFloat(this.currentDisplay);
		let prev = parseFloat(this.previousDisplay);
		let computation;
		switch (this.operator) {
			case '+':
				computation = prev + current;
				break;
			case '-':
				computation = prev - current;
				break;
			case 'X':
				computation = prev * current;
				break;
			case '/':
				computation = prev / current;
				break;
			default:
				return;
		}
		this.currentDisplay = computation;
		this.operator = undefined
		this.previousDisplay = ''
	}
	getDisplay(number){
		let floatNumber = parseFloat(number)
		if (isNaN(floatNumber)) return ''
		return floatNumber.toLocaleString('en')
	}
	updateDisplay() {
		currentTextElement.innerText = this.getDisplay(this.currentDisplay)
		previousTextElement.innerText = this.previousDisplay;
	}
}

const currentTextElement = document.querySelector('.current_display');
const previousTextElement = document.querySelector('.prev_display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const deleteBtn = document.querySelector('.delete');
const resetBtn = document.querySelector('.reset');

const calculator = new Calculator(currentTextElement, previousTextElement);

numbers.forEach((number) => {
	number.addEventListener('click', () => {
		calculator.appendNumber(number.innerText);
		calculator.updateDisplay();
	});
});

deleteBtn.addEventListener('click', () => {
	calculator.delete();
	calculator.updateDisplay();
});

resetBtn.addEventListener('click', () => {
	calculator.reset();
	calculator.updateDisplay();
});

operators.forEach((operator) => {
	operator.addEventListener('click', () => {
		calculator.operation(operator.innerText);
		calculator.updateDisplay();
	});
});

equalBtn.addEventListener('click', () => {
	calculator.compute();
	calculator.updateDisplay();
});


// changing toggle and background script

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const labels = document.querySelectorAll('label')
const label = Array.from(labels)
const body = document.querySelector('body')

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', ()=>{
		switch (checkbox.className) {
			case 'on':
				body.classList.remove('white')
				body.classList.remove('purple')
				body.classList.add('default')
				label[0].classList.remove('display')
				label[1].classList.add('display')
				label[2].classList.add('display')
				break;
				case 'n/a':
					body.classList.add('white')
					body.classList.remove('purple')
					body.classList.remove('default')
					label[0].classList.add('display')
					label[2].classList.add('display')
					label[1].classList.remove('display')

				break;
			case 'off':
				body.classList.add('purple')
				body.classList.remove('white')
				body.classList.remove('default')
				label[0].classList.add('display')
				label[1].classList.add('display')
				label[2].classList.remove('display')
				
			default:
				break;
		}
	})
});

