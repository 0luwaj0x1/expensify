import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'




const ExpenseListItem  =  ({description, amount, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
    <p>
    {description}  for {amount} 
    
    </p>
    </Link>
    
  
  </div>
);



export default ExpenseListItem;