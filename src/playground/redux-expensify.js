import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//ADD_EXPENSES

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
})

//REMOVE_EXPENSES

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


//EDIT_EXPENSE


const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


//DELETE_EXPENSES


//SET_TEXT_FILTER

const setTextFilter = (text) => ({ type: 'SET_TEXT_FILTER', text })

//SET_SORT_BY

const sortByAmount = () => ({type: 'SET_SORT_BY_AMOUNT'});
const sortByDate = () => ({type: 'SET_SORT_BY_DATE'});

//SET_START_DATE

const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
})


const setEndDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
})





const expenseReducerDefault = [];

const expenseReducer = (state = expenseReducerDefault, action) => {

  switch (action.type) {

    case 'ADD_EXPENSE':
     return [...state, action.expense]

     case 'REMOVE_EXPENSE': 
     return state.filter( expense => expense.id !== action.id)

     case 'EDIT_EXPENSE':
       return state.map( expense =>  {
         if (expense.id === action.id) return {...expense, ...action.updates}
         return expense;
       })

    default:
      return state;
  }

}

const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
}

const filtersReducer = (state = filtersReducerDefault, action) => {

  switch (action.type) {
      case 'SET_TEXT_FILTER' :
      return {...state, text: action.text}

      case  'SET_SORT_BY_AMOUNT': 
      return {...state, sortBy: 'amount'}

      case  'SET_SORT_BY_DATE': 
      return {...state, sortBy: 'date'}

      case  'SET_START_DATE':
        return {...state, startDate: action.startDate }

        case  'SET_END_DATE':
        return {...state, endDate: action.endDate }

    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

/* const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffe', amount: 300}))

//store.dispatch(removeExpense({ id:expenseOne.expense.id}))

store.dispatch(editExpense(expenseTwo.expense.id, { amount:500 }));

store.dispatch(setTextFilter('shack'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByDate()); */

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1025))




const demoState = {
  expenses: [{
     id: 'djksjdwwoeioweo',
     description: 'Clothes for Canada',
     note: 'Boust some ok for now',
     amount: 70000,
     createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: null,
    endDate: null
  }
}
