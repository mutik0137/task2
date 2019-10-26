import React from "react";
import {connect} from "react-redux";

import Item from "./Item/Item";

import { makeStyles } from "@material-ui/core/styles";

import { itemsGetData } from "../../actions/action"


const useStyles = makeStyles({
  "main-grid": {
    float: "left",
    width: "75%",
    marginTop: "20px",
    marginLeft: "1%",
  }
})

function MainGrid(props) {
  const classes = useStyles();

  props.getData("products");
  return (
    <div className={classes["main-grid"]}>
      { props.items.map( (item) =>
        <Item
          src={item.src}
          model={item.model}
          price={item.price}
          category={item.category} 
          id={item.id} 
          key={item.id}>   
        </Item>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.fetchItems.items,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getData: (url) => { 
    dispatch(itemsGetData(url));
  },
  setNumbers: (numbers) => {
    dispatch({ type: "ADD_ITEMS", value: numbers});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);