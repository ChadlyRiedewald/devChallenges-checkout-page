import React from 'react';
import ImageOne from '../assets/photo1.png';
import ImageTwo from '../assets/photo2.png';
import Product from './Product';

function Summary() {
    return (
        <div className='summary'>
            <div className='summary__products'>
                <Product
                    image={ImageOne}
                    title='Vintage Backbag'
                    newPrice={54.99}
                    oldPrice={94.99}
                />
                <Product
                    image={ImageTwo}
                    title='Levi Shoes'
                    newPrice={74.99}
                    oldPrice={124.99}
                />
            </div>

            <div className='summary__total'>
                <div className='line'></div>
                <div className='total-costs'>
                    <h2>Shipping</h2>
                    <p>$19</p>
                </div>
                <div className='line'></div>
                <div className='total-costs'>
                    <h2>Total</h2>
                    <p>$148.98</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;
