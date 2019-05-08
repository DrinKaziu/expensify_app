import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer, // --> root state name: reducer that manages it
      filters: filtersReducer
    }),
    applyMiddleware(thunk)
  );

  return store
}
