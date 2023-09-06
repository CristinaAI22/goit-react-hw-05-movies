import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Button.module.css';

export default function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={css.buttonContainer}>
      <button className={css.button} type="button" onClick={handleGoBack}>
        <span>&larr;</span>GO BACK
      </button>
    </div>
  );
}
