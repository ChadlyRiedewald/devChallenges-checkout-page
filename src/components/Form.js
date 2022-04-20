import React from 'react';

function Form() {
    return (
        <form className='form'>
            <h1>Checkout</h1>
            <div className='form__section'>
                <h2>Contact information</h2>
                <label className='form__item' htmlFor='email'>
                    E-mail
                    <input
                        className='form__input'
                        type='email'
                        placeholder='Enter your email...'
                    />
                    <span className='material-icons'>email</span>
                </label>
                <label className='form__item' htmlFor='phone'>
                    Phone
                    <input
                        className='form__input'
                        type='number'
                        placeholder='Enter your phone...'
                    />
                    <span className='material-icons'>phone</span>
                </label>
            </div>
            <div className='form__section'>
                <h2>Shipping address</h2>
                <label className='form__item' htmlFor='fullName'>
                    Full name
                    <input
                        className='form__input'
                        type='text'
                        placeholder='Enter your name...'
                    />
                    <span className='material-icons'>account_circle</span>
                </label>
                <label className='form__item' htmlFor='address'>
                    Address
                    <input
                        className='form__input'
                        type='text'
                        placeholder='Your address...'
                    />
                    <span className='material-icons'>home</span>
                </label>
                <label className='form__item' htmlFor='city'>
                    City
                    <input
                        className='form__input'
                        type='text'
                        placeholder='Your city...'
                    />
                    <span className='material-icons'>apartment</span>
                </label>

                <div className='country-container'>
                    <label className='form__item' htmlFor='country'>
                        Country
                        <select
                            className='form__country-menu  country-container__item'
                            required
                        >
                            <option value='' disabled selected hidden>
                                Your country...
                            </option>
                            <option>Netherlands</option>
                        </select>
                        <span className='material-icons'>public</span>
                        <span class='material-icons expand'>expand_more</span>
                    </label>
                    <label className='form__item' htmlFor='postal-code'>
                        Postal code
                        <input
                            className='form__input country-container__item'
                            type='text'
                            placeholder='Your postal code...'
                        />
                        <span className='material-icons'>
                            markunread_mailbox
                        </span>
                    </label>
                </div>
                <label className='save-info' htmlFor='save-information'>
                    <input className='form__checkbox' type='checkbox' />
                    Save this information for next time
                </label>
                <button type='submit'>Continue</button>
            </div>
        </form>
    );
}

export default Form;
