import React from 'react';
import { ALBUM_ID, SELECT_ALBUM } from '../../utils/constants';
import style from './select-option-list.module.css';

function SelectOptionList({ value, handleChange }) {
  return (
    <form className={style.form}>
      <select
        className={style.select}
        value={value}
        onChange={handleChange}
        id='select-list-item'
      >
        <option className={style.option}>{SELECT_ALBUM}</option>
        {ALBUM_ID.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </form>
  );
}

export default SelectOptionList;
