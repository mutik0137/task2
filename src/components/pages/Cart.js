import React, {useState, useEffect} from 'react';
import '../styles/Cart.css';
import ItemInCart from './ItemInCart';
import {connect} from 'react-redux';

function Cart(props) {
  //let itemsId = JSON.parse(localStorage.itemsId);
  /* не получается добиться рендера после удаления
    элемента из корзины без этого бесконечного цикла */
  return (
    <div className="cart">
      <div className="cart-shoppingList">
        <h3 className="cart-shoppingList__title">КОРЗИНА</h3>
        { props.itemsId.map( (id) =>
            <ItemInCart 
              key = {id}
              id = {id}
            /> 
          )
        }
      </div>
        <div className="cart-formalization">
          <div>
            СВЕДЕНИЯ
          </div>
          <div>
            <span className="cart-formalization__info">
              Промежуточный итог
            </span>
            <span className="formalization__intermediatePrice">
             xdsd
            </span>
          </div>
          <div>
            <span className="cart-formalization__info">
              Предполагаемая стоимость доставки и обработки
            </span>
            <span className="formalization__delivery">350</span>
          </div>
          <div>
            <span className="cart-formalization__info">
              ВСЕГО
            </span>
            <span className="formalization__total_price"></span>
          </div>
          <button>
            ОФОРМИТЬ ЗАКАЗ БЕЗ РЕГИСТРАЦИИ
          </button>
          <button>
            ОФОРМИТЬ ЗАКАЗ 
          </button>
          <button className>
            <img width="51" height="14" 
              src="https://www.nike.com/assets/experience/pet/payment-icons/paypal@2x.png"
              alt="PayPal"
            />
          </button>
        </div>
    </div>
  )
}

const mapStateToProps = function(state) { 
  return {
    itemsId: state.itemsId,
  }
}
export default connect(mapStateToProps)(Cart);