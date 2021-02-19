import React from 'react';
import './item.scss';
import logoAvia from './logo/S7Logo.svg';

const Item = () => (
      <div className='item'>
        <span className='item_price'>13 400 Р</span>
        <img className='item_logo_avia' alt='logo' src={logoAvia} />
        <div className='item_info'>
          <div className='item_indo_block'>
            <span className='item_indo_block--top'>MOW - HRT</span>
            <span className='item_indo_block--bottom'>8:00 - 12:00</span>
          </div>
          <div className='item_indo_block'>
            <span className='item_indo_block--top'>В пути</span>
            <span className='item_indo_block--bottom'>13ч 30м</span>
          </div>
          <div className='item_indo_block'>
            <span className='item_indo_block--top'>2 пересадки</span>
            <span className='item_indo_block--bottom'>HKG, JNB</span>
          </div>
        </div>
        <div className='item_info_bottom'>
          <div className='item_indo_block'>
            <span className='item_indo_block--top'>MOW - HRT</span>
            <span className='item_indo_block--bottom'>8:00 - 12:00</span>
          </div>
          <div className='item_indo_block'>
            <span className='item_indo_block--top'>В пути</span>
            <span className='item_indo_block--bottom'>13ч 30м</span>
          </div>
          <div className='item_indo_block'>
            <span className='item_indo_block--top'>2 пересадки</span>
            <span className='item_indo_block--bottom'>HKG, JNB</span>
          </div>
        </div>
      </div>
    )

export default Item;

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