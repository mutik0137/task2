import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import '../styles/Item.css';

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from '@material-ui/core/styles';


import {byItem} from "../action";

const styles = { // Стили для кнопки добавления товара в корзину
  root: {
    backgroundColor: 'white',
    borderRadius: 3,
    color: 'black',
    height: 40,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  },
  
};

function Item(props) {
  const { classes } = props;

  const addItem = useCallback ( () => {
    if (props.itemsId.length > 1 || props.itemsId.indexOf(props.id) !== -1) { /* Если этот элемент уже в корзине,
                                    не нужно добавлять его заново и увеличивать цену  */
      return;
    }

    props.buyItem(props.id);
    props.increaseСost(props.price);
    /* localStorage.price = parseFloat(localStorage.price) + parseFloat(props.price); */
  }, [props])

  return (
    <div className="item">
      <div className="item__img">
        <img src={props.src} alt=''></img>
      </div>
      <div className="item-info">
        <div>
          <span className="item-info__model">{props.model}</span>
          <span className="item-info__price">{props.price}</span>
        </div>
        <div  className="item-info__category">
          <span>{props.category}</span>
          <Button className={classes.root} onClick={addItem}>
            <AddIcon />
          </Button>        
        </div>
      </div>
    </div>
  )
}
 
const mapStateToProps = (state) => { 
  return {
    itemsId: state.itemsId,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps,
    dispatch => ({
      buyItem: (id) => {
        dispatch(byItem(id));
      },
      increaseСost: (price) => {
        dispatch({ type: 'CHANGE_PRICE', value: price});
      },
    })
  ),
)(Item);