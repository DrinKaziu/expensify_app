import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer 
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(expense => {
        return action.id !== expense.id
      });
    default: 
      return state;
  }
};

// Filters Reducer 
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state; 
  }
};

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer, // --> root state name: reducer that manages it
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 140000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 250}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const demoState = {
  expenses: [{
    id: 'NachoIsADog',
    description: 'January Rent',
    note: 'This is the first payment for this address',
    amount: 140000,
    createdAt: 0
  }], 
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};