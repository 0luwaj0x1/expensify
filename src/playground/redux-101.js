import { createStore } from 'redux'


const decrementBy = ({decrementBy = 5} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const store = createStore(( state = {count: 20}, action) => {
  switch (action.type) {
    case 'INCREMENT' : 
      return {
        count: state.count + 1
      };
    case 'DECREMENT': 
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      } ; 

    case 'RESET':
        return {
          count: 0
        };

    default: 
      return state;
  }
 

})


store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch({
  type: 'INCREMENT'
})

store.dispatch(decrementBy({decrementBy: 50})) 

store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'RESET'
})
