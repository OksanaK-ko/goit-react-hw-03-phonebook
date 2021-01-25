import React from 'react'
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChangeFilter}) => {
  return (
          <label className={s.label} >
            Find contacts by name
            <input
              type="text"
              value={value}
              onChange={onChangeFilter}
            ></input>
      </label>
     )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;