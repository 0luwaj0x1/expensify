import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test("should remove expense object", () => {
  const action = removeExpense({id: '1234abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234abc'
  })
});


test("should update expense object", () => {

  const action = editExpense('123abc', {note: "some notes"});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
   updates: {
     note: 'some notes'
   }
  })
});


test("should setup add expense actions object with provided value", () => {

  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last month rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })

});

test("should setup add expense with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt:0,
      id: expect.any(String)
    }
    
  })
})