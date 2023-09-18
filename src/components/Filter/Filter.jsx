import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

function Filter() {
  const filter = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name:
        <br />
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
  );
}

export default Filter;
