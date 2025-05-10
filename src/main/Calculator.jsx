import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button/Button';
import Display from '../components/Display/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentIndexValue: 0
}

export default class Calculator extends Component {
    
    state = {...initialState}

    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clear() {
        this.setState({...initialState})
    }

    calculate(num1, num2, operation) {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '–':
                return num1 - num2;
            case '×':
                return num1 * num2;
            case '÷':
                return num1 / num2;
            default:
                return
        }
    }

    setOperation(operator) {
        if (this.state.currentIndexValue === 0) {
            this.setState({ operation: operator, currentIndexValue: 1, clearDisplay: true });
        } else if (this.state.currentIndexValue === 1 && operator !== '=') {
            const values = [...this.state.values]
            values[0] = this.calculate(this.state.values[0], this.state.values[1], this.state.operation);
            values[1] = 0;
            this.setState({ values, clearDisplay: true, operation:operator});
        }
        
        if (operator === '=') {
            const displayValue = this.calculate(this.state.values[0], this.state.values[1], this.state.operation)
            this.setState({displayValue})
        }

    }

    addDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return;
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

        const currentValue = clearDisplay ? '' : this.state.displayValue;

        const displayValue = currentValue + digit;

        this.setState({ displayValue, clearDisplay: false });
        
        if (digit !== '.') {
            const currentIndex = this.state.currentIndexValue;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values]
            values[currentIndex] = newValue
            this.setState({values})

        }

    }


    render() {

        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clear} triple/>
                <Button label="÷" click={this.setOperation} operator />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="×" click={this.setOperation} operator />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="–" click={this.setOperation} operator />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operator />
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operator />
            </div>
        )
    }
}