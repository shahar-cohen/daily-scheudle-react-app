import * as React from 'react';
import './checkbox.scss';

export const Checkbox = ({
 onClick, checked, onDelete, label, time, onKeyUp,
}) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input tabIndex="-1" type="checkbox" checked={checked} onChange={onClick} />
      <span className="time">{time}</span>
      <p className={checked ? 'checkbox-checked title' : 'title'}>{label}</p>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
      x
    </button>
  </div>
);
