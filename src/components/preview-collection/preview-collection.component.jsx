import './preview-collection.component.scss';
import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => {

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((el, index) => index < 4).map(({id, ...otherCollectionProps}) => (
                        <CollectionItem key={id} {...otherCollectionProps}/>
                        )
                    )
                }
            </div>
        </div>
    )
}


export default PreviewCollection;