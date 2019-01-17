import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'NachoIsADog',
    description: 'January Rent',
    note: 'This is the first payment for this address',
    amount: 140000,
    createdAt: 0
  }]
};