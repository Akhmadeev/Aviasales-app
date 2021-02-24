import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { format, add } from 'date-fns';
import * as action from '../../../store/actions';
import './item.scss';
import logoAvia from './logo/S7Logo.svg';

const Item = ({ arrayApi, bilets }) => {
  const [ticket, setTicket] = useState([]);

  const decorPrice = (num) => {
    const number = num.toString();
    return `${number.slice(0, -3)} ${number.slice(-3)}`;
  };

  const transitTime = (value) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}ч ${minutes}м`;
  };

  const aviaTicket = (element) => {
    const { price } = element;

    const itemInfo = (className, id) => {
      const { destination, date, duration, origin, stops } = element.segments[id];

      const hours = format(new Date(date), 'p');
      const result = add(new Date(date), {
        minutes: duration,
      });
      const durationHours = format(new Date(result), 'p');

      const stopsTicket = (value) => {
        if (value.length === 0) return 'без';
        if (value) return value.length;
        return 'дынных нет';
      };

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
      <div className="item" key={price}>
        <span className="item_price">{decorPrice(price)} Р </span>
        <img className="item_logo_avia" alt="logo" src={logoAvia} />
        {itemInfo('item_info', 0)}
        {itemInfo('item_info_bottom', 1)}
      </div>
    );
  };

  useEffect(() => {
    const arr = arrayApi.slice(0, 5);
    setTicket(arr);
  }, [bilets, arrayApi]);

  if (arrayApi[0] === 'error') {
    return (
      <div>
        <h1>{arrayApi[1]}</h1>
      </div>
    );
  }

  return <div>{ticket.map((element) => aviaTicket(element))}</div>;
};;

const mapStateToProps = (state) => ({
  arrayApi: state.arrayApi[0],
});

export default connect(mapStateToProps, action)(Item);


Item.defaultProps = {
  arrayApi: [],
  bilets: true,
};

Item.propTypes = {
  arrayApi: PropTypes.array,
  bilets: PropTypes.bool,
};

//  <div className='item'>
//    <div className='itemblock'>
//      <span>13 400 Р</span>
//      <img src={logoAvia}></img>
//    </div>
//    <div className='itemblock'>
//      <div className='block_info'>
//        <span className='sity'>mow - hkt</span>
//        <span className='time'>10:45 - 08:00</span>
//      </div>
//    </div>
//    <div className='itemblock'></div>
//  </div>;