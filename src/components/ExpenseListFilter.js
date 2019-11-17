import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';



class ExpenseListFilter extends React.Component {

  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

 
  render() {
      return (
        <div>
        <input type="text" value={this.props.filters.text} onChange={ (e) => {
          this.props.dispatch(setTextFilter(e.target.value))
        }} />
    
        <select value={this.props.filters.sortBy} onChange={ (e) => {
          const selectFilter = e.target.value ;
          if(selectFilter === 'date') {
            this.props.dispatch(sortByDate())
          }else if(selectFilter === 'amount') {
            this.props.dispatch(sortByAmount())
          }
          
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />

      </div>

    
      );
  }
}


const mapStateToProps = (state) => ({
  filters: state.filters
})


export default connect(mapStateToProps)(ExpenseListFilter);