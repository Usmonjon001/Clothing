import React, { Component } from 'react';
import SHOP_DATA from '../../data/shop_data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import './shop.scss'

export default class Shop extends Component {

    constructor(props) {
        super(props);


        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {

        const {collections} = this.state

        console.log(collections);

        return (
            <div className="shop-page container">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} id={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}
