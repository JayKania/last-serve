import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



function UpdateRestaurantProfile() {

    
    const [restaurantName, setRestaurantName] = useState('Subway');
    const [address, setAddress] = useState('133, Spring Garden Road');
    const [postalcode, setPostalCode] = useState('B3J 2K9');
    const [phoneNumber, setPhoneNumber] = useState('1231231234');

    const [restaurantNameError, setRestaurantNameError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [postalcodeError, setPostalcodeError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [blankFromError, setBlankFormError] = useState('');

    const commonRegEx = new RegExp('^[A-Za-z]+$');
    const phoneRegEx = new RegExp('^[0-9]{10}$');

    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if ('restaurantName' === name) {
            setRestaurantName(value);
        } else if ('address' === name) {
            setAddress(value);
        } else if ('postalcode' === name) {
            setPostalCode(value);
        }else if('phonenumber' === name){
            setPhoneNumber(value);
        }
    }

    const handleInputValidation = e => {
        const { name, value } = e.target;
        if ('restaurantName' === name) {
            console.log(value);
            console.log(value.match(commonRegEx));
            if (!value) {
                setRestaurantNameError('Enter Restaurant name');
                setDisabled(true);
            } else if (!value.match(commonRegEx)) {
                setRestaurantNameError('Restaurant name can contain only alphabets');
                setDisabled(true);
            } else {
                setRestaurantNameError('');
                setDisabled(false);
            }
        } else if ('address' === name) {
            if (!value) {
                setAddressError('Enter address');
                setDisabled(true);
            } else {
                setAddressError('');
                setDisabled(false);
            }
        }else if ('postalcode' === name) {
            if (!value) {
                setPostalcodeError('Enter postalcode');
                setDisabled(true);
            } else {
                setPostalcodeError('');
                setDisabled(false);
            }
        } else if ('phonenumber' === name) {
            if (!value) {
                setPhoneNumberError('Enter phonenumber');
                setDisabled(true);
            } else if (!value.match(phoneRegEx)) {
                setPhoneNumberError('phone number must be of 10 digits.');
                setDisabled(true);
            }else {
                setPhoneNumberError('');
                setDisabled(false);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleInputValidation(e);
        console.log(blankFromError);
        if (restaurantNameError || addressError || postalcodeError || phoneNumberError) {
            setBlankFormError('Enter mandatory fields');
        } else {
            navigate('/restaurantSideBar');
        }
    }

    return (
        <StyledSignupImgWrapper className="login-img-wrapper">
            <StyledForm className='form'>
                <div className='formContent'>
                    <div className='formTitle'>
                        <h3>Register Details</h3>
                    </div>

                    <div className='inputWrapper'>
                        <label className='formLabel'>Restaurant Name*</label>
                        <input className='formInput' type='text' name='restaurantName' value={restaurantName} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Restaurant Name' />
                    </div>
                    <div className='err'>
                        {<span className='err'>{restaurantNameError}</span>}
                    </div>

                    <div className='inputWrapper'>
                        <label className='formLabel'>Address*</label>
                        <input className='formInput' type='text' name='address' value={address} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='Address' />
                    </div>
                    <div className='err'>
                        {<span className='err'>{addressError}</span>}
                    </div>

                    <div className='inputWrapper'>
                        <label className='formLabel'>PostalCode*</label>
                        <input className='formInput' type='text' name='postalcode' value={postalcode} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='PostalCode' />
                    </div>
                    <div className='err'>
                        {<span className='err'>{postalcodeError}</span>}
                    </div>

                    <div className='inputWrapper'>
                        <label className='formLabel'>PhoneNumber*</label>
                        <input className='formInput' type='text' name='phonenumber' value={phoneNumber} onChange={(e) => handleInputChange(e)} onBlur={handleInputValidation} placeholder='PhoneNumber' />
                    </div>
                    <div className='err'>
                        {<span className='err'>{phoneNumberError}</span>}
                    </div>

                    <div className='footNote'>
                        <p>* Mandatory fields</p>
                    </div>

                    <div className='err'>
                        {<span className='blank-err'>{blankFromError}</span>}
                    </div>

                    <button disabled={disabled} className='registerBtn' type='submit' onClick={(e) => handleSubmit(e)}>Update</button>
                </div>
            </StyledForm>
        </StyledSignupImgWrapper>
    );
};

const StyledSignupImgWrapper = styled.div`
    display: flex;
    width: 60%;
    margin: 1rem auto;
    padding: 3rem;
    .myclass {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

const StyledForm = styled.form`
    margin:2rem auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 0rem;
    .formContent {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .inputWrapper{
        display: flex;
        font-size: 1.5rem;
        flex-direction: column;
        gap: 1rem;
    }
    .inputWrapper > input {
        padding: 1rem;
        outline: none;
        border: none;
        box-shadow: 1px 1px 2px 2px #ccc;
        border-radius: 5px;
    }
    .err{
    padding: 0rem;
    color: red;
    font-size: small;
    text-align: right;
    }
    .registerBtn {
    width: fit-content;
    margin: 0 auto;
    padding: 0.5rem;
    background-color: rgb(16, 109, 240);
    border-radius: 5px;
    border:none;
    box-shadow: 1px 1px 1px 1px #ccc;
    color: white;
    letter-spacing: 1px;
    }
    .registerBtn:hover{
    cursor: pointer;
    }
    .registerBtn:disabled,
    .registerBtn[disabled]{
    cursor: not-allowed;
    color: #666666;
    background-color: #ccc;
    }
    .formTitle{
    text-align: center;
    font-size: 2rem;
    }
    .footNote{
    color: red;
    justify-content: left;
    font-size: small;
    padding: 0rem;
    }
`

export default UpdateRestaurantProfile;