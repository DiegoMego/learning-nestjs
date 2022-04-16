import React, { useEffect, useRef, useState } from 'react';
import styles from '../../assets/scss/filters/input.module.scss';

export default function InputFilter(
  {
    name,
    onChange,
    onTitleClick,
    placeholder,
    title,
    value,
  }:
  {
    name: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    onTitleClick: () => void,
    placeholder: string,
    title: string,
    value: string,
  },
) {
  return (
    <div className={styles.container}>
      <span
        className={styles.title}
        onClick={() => onTitleClick()}
        onKeyDown={() => null}
        role="button"
        style={{
          display: `${value ? 'inline' : 'none'}`,
        }}
        tabIndex={0}
      >
        {title}
      </span>
      <input
        className={styles.input}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
