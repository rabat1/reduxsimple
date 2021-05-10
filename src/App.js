/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './App.css';
import {incNumber,decNumber} from './actions/index'
import {useSelector,useDispatch} from 'react-redux';
export default function App() {
  const myState = useSelector((state) => state.changeTheNumber); //to get data from store 
 const dispatch = useDispatch();
 //decnum withour arguments inc num with arguments
  return (
    <div>
      <h1>Learn increment and decrement through redux</h1>
      <div class='container'>
        <a class='quantity_minus' title='Decrement' onClick={()=> dispatch(decNumber())}><button>-</button></a>
        <input name='quantity' type='text' value={myState} class='quantity_input' />
        <a class='quantity_plus' onClick={()=> dispatch(incNumber(5))} title='Increment'><button>+</button></a>
        </div>
    </div>
  )
}
