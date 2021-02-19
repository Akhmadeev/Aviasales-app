import React, { useState } from 'react';
import './tabs.scss';
import Item from './Item/item';

const Tabs = () => {

  const [leftBtn, setLeftBtn] = useState("btn_left active_btn");
  const [rightBtn, setRightBtn] = useState("btn_rigth btn");

  const regulitorLeft = () => {
    setLeftBtn("btn_left active_btn");
    setRightBtn("btn_rigth btn");
  }
   const regulitorRight = () => {
     setLeftBtn("btn_left btn");
     setRightBtn("btn_rigth active_btn");
   };
  
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
          <Item />
        </div>
      </div>
    );
}

export default Tabs;