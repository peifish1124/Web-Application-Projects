import CalButton from "../components/button";
import { useState } from 'react'

const CalculatorApp = () => {

  const [count, setCount] = useState(0);
  const [store, setStore] = useState(0);
  const [reset, setReset] = useState(false);
  const [operator, setOperator] = useState('');
  const [index, setIndex] = useState(1);
  const [point, setPoint] = useState('');
  const [memory, setMemory] = useState(0);
  const ac = () => {
    setCount(0);
    setStore(0);
    setReset(false);
    setOperator('');
  }
  const addNumber = (value) => {
    if(reset === false){
      if(point === '.') {
        setCount(count+value*Math.pow(0.1,index));
        setIndex(index+1);
      }
      else setCount(count*10+value);
    } else {
      setCount(value);
      setReset(false);
    }
  }
  const operateNum = (value) => {
      // setStore(count);
      setReset(true);

      if(operator === '+'){
        setStore(store+count);
      } else if(operator === '-'){
        setStore(store-count);
      } else if(operator === 'x'){
        setStore(store*count);
      } else if(operator === '/'){
        setStore(store/count);
      } else if(operator === '%'){
        setStore(store%count);
      } else {
        setStore(count);
      }

      if(value === '+') {
        setOperator('+');
        setIndex(1); setPoint('');
      } else if (value === '-') {
        setOperator('-');
        setIndex(1); setPoint('');
      } else if (value === 'x') {
        setOperator('x');
        setIndex(1); setPoint('');
      } else if (value === '/') {
        setOperator('/');
        setIndex(1); setPoint('');
      } else if (value === '%') {
        setOperator('%');
        setIndex(1); setPoint('');
      }
  }
  const equalNum = () => {
    if(operator === '+'){
      setCount(store+count);
      setStore(0);
      setOperator('');
      setReset(true);
    } else if(operator === '-'){
      setCount(store-count);
      setStore(0);
      setOperator('');
      setReset(true);
    } else if(operator === 'x'){
      setCount(store*count);
      setStore(0);
      setOperator('');
      setReset(true);
    } else if(operator === '/'){
      setCount(store/count);
      setStore(0);
      setReset(true);
      setOperator('');
    } else if(operator === '%'){
      setCount(store%count);
      setStore(0);
      setReset(true);
      setOperator('');
    }  
  }

  const memoryNum = (value) => { 
    if(value==='+')setMemory(memory+count);
    else setMemory(memory-count);
  }
  const mc = () => {
    setMemory(0);
  }

  const backSpace = () => {
    // var last = count % 10;
    // setCount((count-last)/10);
    var str = String(count);
    var cutStr = str.substring(0, str.length - 1);
    setCount(parseFloat(cutStr));
  }

  const opposite = () => {
    setCount(-count);
  }
  const powerNum = () => {
    setCount(Math.pow(count,2));
    // setReset(true);
  }
  const powerHalfNum = () => {
    setCount(Math.pow(count,1/2));
    // setReset(true);
  }
  const smallerNum = () => {
    setCount(count/100);
    setReset(true);
  }

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Calculator</h1>
      </header>
      <div className="top_screen">
        <div className="input">{count}</div>
      </div>
      <div className="buttom_button">
        <div className="line_1">
          <CalButton text='AC' index='1' onClick={ () => ac() }/>  
          <CalButton text='+/-' index='2' onClick={ () => opposite() }/> 
          <CalButton text='餘數' index='3' onClick={ () => operateNum('%') }/> 
          <CalButton text='7' index='4' onClick={ () => addNumber(7) }/> 
          <CalButton text='8' index='5' onClick={ () => addNumber(8) }/>
          <CalButton text='9' index='6' onClick={ () => addNumber(9) }/>
          <CalButton text='x' index='7'onClick={ () => operateNum('x') }/>
        </div>
        <div className="line_2">
          <CalButton text='√' index='8' onClick={ () => powerHalfNum() }/>  
          <CalButton text='%' index='9' onClick={ () => smallerNum() }/> 
          <CalButton text='x^2' index='10' onClick={ () => powerNum() }/> 
          <CalButton text='4' index='11' onClick={ () => addNumber(4) }/> 
          <CalButton text='5' index='12' onClick={ () => addNumber(5) }/>
          <CalButton text='6' index='13' onClick={ () => addNumber(6) }/>
          <CalButton text='-' index='14' onClick={ () => operateNum('-') }/>
        </div>
        <div className="line_3">
          <CalButton text='MR+' index='15' onClick={ () => memoryNum('+')}/>  
          <CalButton text='MC' index='16' onClick={ () => mc() }/> 
          <CalButton text='MR-' index='17' onClick={ () => memoryNum('-')}/>
          <CalButton text='1' index='18' onClick={ () => addNumber(1) }/> 
          <CalButton text='2' index='19' onClick={ () => addNumber(2) }/>
          <CalButton text='3' index='20' onClick={ () => addNumber(3) }/>
          <CalButton text='+' index='21' onClick={ () => operateNum('+') }/>
        </div>
        <div className="line_4">
          {/* <CalButton text='MR' index='22'/>  
          <CalButton text='MC' index='23'/> 
          <CalButton text='MC' index='24'/> */}
          <div className="left">M: {memory}</div>
          <CalButton text='◀' index='24' onClick={ () => backSpace() }/> 
          <CalButton text='0' index='25' onClick={ () => addNumber(0) }/>
          <CalButton text='.' index='26' onClick={ () => setPoint('.') }/> 
          <CalButton text='/' index='27' onClick={ () => operateNum('/') }/> 
          <CalButton text='=' index='28' onClick={ () => equalNum() }/>
        </div>
      </div>    
    </div>
  );
}

export default CalculatorApp;
