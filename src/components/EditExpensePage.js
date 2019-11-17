import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage = (props) => (
  <div>
    <ExpenseForm 
      expense={props.expense}
      onSubmit={(expense) => {
       // console.log( expense)
        props.dispatch(editExpense(props.match.params.id, expense));
        props.history.push('/');
      }}
    />

      <button onClick={ (e) => {
        console.log(props.expense.id)
      props.dispatch(removeExpense({id: props.match.params.id}))
       props.history.push('/');
        }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find( expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage);