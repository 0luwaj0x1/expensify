//SET_TEXT_FILTER

export const setTextFilter = (text = "") => ({ type: 'SET_TEXT_FILTER', text })

//SET_SORT_BY

export const sortByAmount = () => ({type: 'SET_SORT_BY_AMOUNT'});
export const sortByDate = () => ({type: 'SET_SORT_BY_DATE'});

//SET_START_DATE

export const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
})


export const setEndDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
})
