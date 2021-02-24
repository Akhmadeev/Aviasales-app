import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
import './tabs.scss';
import Item from './Item/item';

const Tabs = ({ arrayApi, sort_cheap, sort_time }) => {
  console.log(arrayApi);
  const [leftBtn, setLeftBtn] = useState('btn_left active_btn');
  const [rightBtn, setRightBtn] = useState('btn_rigth btn');
  const [bilet, setBilet] = useState(false)

  const regulitorLeft = () => {
    setLeftBtn('btn_left active_btn');
    setRightBtn('btn_rigth btn');
    sort_cheap(arrayApi);
    setBilet(true);
  };
  const regulitorRight = () => {
    setLeftBtn('btn_left btn');
    setRightBtn('btn_rigth active_btn');
    sort_time(arrayApi);
    setBilet(false);
  };

  useEffect(() => {
    setBilet(true)
  }, [])

  return (
    <div>
      <div className="block_btn">
        <button className={leftBtn} onClick={regulitorLeft} type="submit">
          Самый дешевый
        </button>
        <button className={rightBtn} onClick={regulitorRight} type="submit">
          Самый быстрый
        </button>
      </div>
      <div>
        <Item bilets={bilet} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  arrayApi: state.arrayApi[0],
});

export default connect(mapStateToProps, action)(Tabs);

Tabs.defaultProps = {
  arrayApi: [],
  sort_cheap: () => {},
  sort_time: () => {},
};

Tabs.propTypes = {
  arrayApi: PropTypes.array,
  sort_cheap: PropTypes.func,
  sort_time: PropTypes.func,
};