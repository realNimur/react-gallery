import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import styles from './styles.module.scss';

const InputTag = function InputTag() {
  const { value, onChange } = useInput();
  const themeColor = useSelector((store) => store.themeColor);
  return (
    <input
      className={cn(styles.input, themeColor === 'white' && styles.input_white)}
      type="text"
      placeholder="Name"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputTag;
