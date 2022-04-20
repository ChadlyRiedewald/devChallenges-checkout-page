import React from 'react';

function Product({image, title, newPrice, oldPrice}) {
    return (
        <div className='product'>
            <img src={image} alt={title} />
            <div className='product__info'>
                <div className='up'>
                    <h3 className='product__title'>{title}</h3>
                    <div className='price-container'>
                        <p className='newPrice'>{newPrice}</p>
                        <p className='oldPrice'>{oldPrice}</p>
                    </div>
                </div>
                <input
                    className='product__amount'
                    type='number'
                    placeholder='1'
                />
                <span class='material-icons remove'>remove</span>
                <span class='material-icons add'>add</span>
            </div>
        </div>
    );
}

export default Product;
