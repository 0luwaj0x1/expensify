import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test("should setup default filter values", () =>{
  const state = filtersReducers(undefined, {type: '@@INIT'});

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
})


test("should set sortBy to amount", () => {
  const state = filtersReducers(undefined, { type: 'SET_SORT_BY_AMOUNT'});

  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
      text: '',
      startDate: null,
      endDate: null,
      sortBy: 'amount'
  };

  const action = {type: 'SET_SORT_BY_DATE'};

  const state = filtersReducers(currentState, action)
  expect(state.sortBy).toBe('date')

})

test('should set text filter', () => {
  const text = 'one'
  const state = filtersReducers(undefined, {type: 'SET_TEXT_FILTER', text: text});
  expect(state.text).toBe(text)
})

test('should set startDate', () => {
  const startDate = moment(0);
  const state = filtersReducers(undefined, {type: 'SET_START_DATE', startDate});
  expect(state.startDate).toBe(startDate);
})

test('should set end date', () => {
  const endDate = moment(2);
  const state = filtersReducers(undefined, {type: 'SET_END_DATE', endDate});
  expect(state.endDate).toBe(endDate);
})