import {CART_DATA} from '../pages/shop/CartData';
import {updateItems} from './actions/updateItems';

const initialState = {
     count: 0,
     cart: [],
     CART_DATA
}

const ItemsReducer = (state=initialState, action)=> {
     switch(action.type){
         case 'ADD_TO_CART':
             const newCart = state.cart;
             return {
                 ...state,
                 cart:  [...newCart, state.CART_DATA.items[action.payload]],
                 count: state.count + 1
             }
          case 'SEARCH':
              const newItems = state.CART_DATA.items.filter(item => item.name.toLowerCase().includes(action.payload));
              return {
                  ...state,
                  CART_DATA: state.CART_DATA
              }
          case 'INCREASE':
              return {
                  ...state,
                  count: state.count + 1
              }
          case 'DECREASE':
              return {
                  ...state,
                  count: count > 1 ? state.count - 1 : updateItems(state, action.payload)
              }
          case 'REMOVE_ITEM':
              return {
                  ...state,
                  cart: [...updateItems(state, action.payload)]
              }
         default:
             return state;
     }
};

export default ItemsReducer;