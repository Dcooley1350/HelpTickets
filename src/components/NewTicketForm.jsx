import React from 'react';
import { Link } from 'react-router-dom';

function NewTicketForm(){
  return(
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'><Link to="/helpus"> Help! </Link></button>
      </form>
    </div>
  );
}

export default NewTicketForm;