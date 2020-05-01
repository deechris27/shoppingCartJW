import React from 'react';
import ShoppingList from '../../components/shoppinglist/ShoppingList.Component';
import './ShopPage.styles.scss';
import Filter from '../../components/filter/Filter.Component';
import Sort from '../../components/sort/Sort.Component';
import Header from '../../components/header/Header.Component';
import {connect} from 'react-redux';

class ShopPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            test: 0
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header count={this.props.count}/>
                <div className="results-section">
                    <div className="filters">
                        <Filter />
                    </div>
                    <div className="search-results">
                        <Sort />
                        <ShoppingList shopItems={this.props.items} addToCart={this.props.addToCart} />
                    </div>
                </div>
            </React.Fragment>)
    }
}

const mapStateToProps = state => ({
   items: state.itemsReducer.CART_DATA.items,
   count: state.itemsReducer.count
});

const mapDispatchToProps = dispatch => ({
    addToCart: (id) => dispatch({type: 'ADD_TO_CART', payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);