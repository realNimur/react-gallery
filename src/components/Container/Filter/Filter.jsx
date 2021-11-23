import React from 'react';
import SelectTag from '../../SelectElement/SelectTag';
import InputTag from '../../InputTag';
import useFilter from '../../../hooks/useFilter';
import styles from './styles.module.scss';

const Filter = function Filter() {
  useFilter();
  return (
    <div className={styles.filter}>
      <InputTag />
      <SelectTag type="authors" caption="Authors" />
      <SelectTag type="locations" caption="Locations" />
      <SelectTag type="created" caption="Created" />
    </div>
  );
};

export default Filter;
