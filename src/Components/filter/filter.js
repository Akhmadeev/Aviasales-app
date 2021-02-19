import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as action from "../../store/actions";
import "./filter.scss";

const Filter = ({
  all,
  other_input,
  withoutTransfers,
  oneTransfers,
  twoTransfers,
  threeTransfers,
  all_true,
  all_false,
}) => {

  
    const arrayFilters = [
      {
        name: 'withoutTransfers',
        bool: withoutTransfers,
        value: 'Без пересадок',
        id: 1,
      },
      {
        name: 'oneTransfers',
        bool: oneTransfers,
        value: '1 пересадка',
        id: 2,
      },
      {
        name: 'twoTransfers',
        bool: twoTransfers,
        value: '2 пересадки',
        id: 3,
      },
      {
        name: 'threeTransfers',
        bool: threeTransfers,
        value: '3 пересадки',
        id: 4,
      },
    ];

  const inputValueAll = (bubl) => {
    if (bubl.target.checked) return all_true(arrayFilters);
    return all_false(arrayFilters);
  };

  const filter_item = (element) => {
    
    const { name, bool, value, id } = element;
    
    return (
      <label htmlFor={name} key={id}>
        <input
          id={name}
          type="checkbox"
          className="checkbox_deleted"
          name={name}
          checked={bool}
          onChange={(event) => other_input(name, event.target.checked)}
        />
        <span className="check__box" />
        <span className="check__name">{value}</span>
      </label>
    );
  };

  useEffect(() => {
    const array = arrayFilters.map((item) => item.bool);
    if (!array.includes(false)) return all_true();
    if (array.includes(false)) return other_input('all', false);
    return arrayFilters;
  }, [arrayFilters]);

  return (
    <div className='filter'>
      <div className='container_filter'>
        <h3 className='title_filter'>количество пересадок</h3>
        <label htmlFor='all'>
          <input
            id='all'
            type='checkbox'
            className='checkbox_deleted'
            name='all'
            checked={all}
            onChange={(el) => inputValueAll(el)}
           />
          <span className='check__box' />
          <span className='check__name'>Все</span>
        </label>
        {arrayFilters.map((element) => filter_item(element))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
    all: state.checkbox.all,
    withoutTransfers: state.checkbox.withoutTransfers,
    oneTransfers: state.checkbox.oneTransfers,
    twoTransfers: state.checkbox.twoTransfers,
    threeTransfers: state.checkbox.threeTransfers,
  });

export default connect(mapStateToProps, action)(Filter);

Filter.defaultProps = {
  all: false,
  other_input: () => {},
  withoutTransfers: false,
  oneTransfers: false,
  twoTransfers: false,
  threeTransfers: false,
  all_true: () => {},
  all_false: () => {},
};

Filter.propTypes = {
  all: PropTypes.bool,
  other_input: PropTypes.func,
  withoutTransfers: PropTypes.bool,
  oneTransfers: PropTypes.bool,
  twoTransfers: PropTypes.bool,
  threeTransfers: PropTypes.bool,
  all_true: PropTypes.func,
  all_false: PropTypes.func,
};
