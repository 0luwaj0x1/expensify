import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';


test("should generate set start date action object", () => {

  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })

})

test("should generate set end date action oblect", () => {

  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })

});

test("should generate text filter", () => {
  const action = setTextFilter('something');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'something'
  })
});

test("should generate text filter default", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});


test("should generate sort by amount", () => {
  const action  = sortByAmount()
  expect(action).toEqual({
    type: 'SET_SORT_BY_AMOUNT'
  })
});

test("should generate sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SET_SORT_BY_DATE'
  })
})