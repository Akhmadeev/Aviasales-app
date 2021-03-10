import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { format, add } from 'date-fns';
import * as action from '../../../store/actions';
import './item.scss';
import logoAvia from './logo/S7Logo.svg'; 
import { decorPrice, stopsTicket, transitTime } from '../../../utils';

const Item = ({ arrayApi, bilets, checkboxOnline }) => {
  const [ticket, setTicket] = useState([]);

  const filterStops = (arrayFilter, arrayTickets) => {
    const newArray = [];
    const idFilter = [];
    const newArrayFilters = Object.values(arrayFilter);
    if (arrayTickets) {
      newArrayFilters.findIndex((value, index) => {
       if(value) idFilter.push(Number(index) - 1);
        return ''
      });
      arrayTickets.map((element) => {
        if (idFilter.includes(element.segments[0].stops.length)) newArray.push(element);
        return element;
      });
    }
    return newArray;
  };


  const aviaTicket = (element) => {
    const { price, carrier } = element;
    const dataDuration = element.segments[0].date;
    const itemInfo = (className, id) => {
      const { destination, date, duration, origin, stops } = element.segments[id];

      const hours = format(new Date(date), 'p');
      const result = add(new Date(date), {
        minutes: duration,
      });
      const durationHours = format(new Date(result), 'p');

      return (
        <div className={className}>
          <div className="item_indo_block">
            <span className="item_indo_block--top">
              {destination} - {origin}
            </span>
            <span className="item_indo_block--bottom">{`${hours} - ${durationHours}`}</span>
          </div>
          <div className="item_indo_block">
            <span className="item_indo_block--top">В пути</span>
            <span className="item_indo_block--bottom">{transitTime(duration)} </span>
          </div>
          <div className="item_indo_block">
            <span className="item_indo_block--top">{stopsTicket(stops)} пересадки</span>
            <span className="item_indo_block--bottom">{stops.join(', ')}</span>
          </div>
        </div>
      );
    };

    return (
      <div className="item" key={carrier + price + dataDuration}>
        <span className="item_price">{decorPrice(price)} Р </span>
        <img className="item_logo_avia" alt="logo" src={logoAvia} />
        {itemInfo('item_info', 0)}
        {itemInfo('item_info_bottom', 1)}
      </div>
    );
  };

  useEffect(() => {
    setTicket(filterStops(checkboxOnline, arrayApi).slice(0, 5));
  }, [bilets, arrayApi, checkboxOnline]);

  const main = (checkbox, array) => {
    const newArrayFilters = Object.values(checkbox);
    if (!newArrayFilters.includes(true)) {
      return (
        <div className="item_empty">
          <h3 className="title_item_empty">Рейсов, подходящих под заданные фильтры, не найдено</h3>
        </div>
      );
    }

    return array.map((element) => aviaTicket(element));
  };

  if (arrayApi[0] === 'error') {
    return (
      <div>
        <h1>{arrayApi[1]}</h1>
      </div>
    );
  }

  return <div>{main(checkboxOnline, ticket)}</div>;
};

const mapStateToProps = (state) => ({
  arrayApi: state.arrayApi[0],
  checkboxOnline: state.checkbox,
});

export default connect(mapStateToProps, action)(Item);

Item.defaultProps = {
  arrayApi: [],
  bilets: true,
  checkboxOnline: {},
};

Item.propTypes = {
  arrayApi: PropTypes.array,
  bilets: PropTypes.bool,
  checkboxOnline: PropTypes.object,
};
