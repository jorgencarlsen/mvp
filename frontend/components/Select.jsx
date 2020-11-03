import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const customStyles = {
  menu: styles => ({ ...styles, backgroundColor: '#383B40', }),
  valueContainer: styles => ({ ...styles, backgroundColor: '#383B40', }),
  container: (styles, state) => ({ ...styles, backgroundColor: '#383B40', borderColor: state.isFocused ? 'rgba(76, 96, 133, 1)' : null, }),
  indicatorsContainer: styles => ({ ...styles, backgroundColor: '#383B40' }),
  control: (styles, state) => ({
    ...styles, border: 0, topMargin: '1rem',
    '&:hover': { borderColor: 'rgba(76, 96, 133, 1)', boxShadow: 'rgba(76, 96, 133, 1)', },
    borderColor: state.isFocused ? 'rgba(76, 96, 133, 1)' : null,
    color: 'rgba(255,255,255,.9)',
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isFocused ? 'rgba(57, 160, 237, .5)' : null
  }),
  singleValue: (styles, state) => ({
    ...styles,
    backgroundColor: state.isFocused ? 'rgba(57, 160, 237, .5)' : null,
    color: 'rgba(255,255,255,.9)',
  }),

}

export default function AnimatedMulti({ data, changeHandler, multi, defaultValue }) {
  console.log(defaultValue);
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti={multi}
      options={data}
      styles={customStyles}
      defaultValue={defaultValue}
      className="react-select-container"
      classNamePrefix="react-select"
      onChange={changeHandler}
    />
  );
}