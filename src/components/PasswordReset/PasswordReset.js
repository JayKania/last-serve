import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import passreset_img from '../../assets/passreset.jpg'
import Footer from '../Footer/Footer';

function PasswordReset() {

  const [email, setEmail] = useState('');
  const [resetKey, setResetKey] = useState('');
  const [ipWrapDisable, setipWrapDisable] = useState('input-wrapper-disabled');
  const [newPassBtn, setNewPasBtn] = useState('newpass-btn-disabled');
  const [resend, setResend] = useState("Send");

  const [emailError, setEmailError] = useState();
  const [resetKeyError, setResetKeyError] = useState();

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if ("email" === name) {
      setEmail(value);
    }
    if ("resetKey" === name) {
      setResetKey(value);
    }
  }

  const handleInputValidation = e => {
    const { name, value } = e.target;
    if ("email" === name) {
      if (!value) {
        setEmailError('Enter an email');
      } else if (!('abc@gmail.com' === value)) {
        setEmailError('Entered email is not a registered email');
      } else {
        setEmailError('');
      }
    }
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    setipWrapDisable('input-wrapper');
    setNewPasBtn('newpass-btn');
    setResend("Resend");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ("abc123" === resetKey && "abc") {
      navigate('/newPassword');
    } else {
      setResetKeyError('Invalid Reset Key');
    }
  }

  return (
    <>
      <StyledResetImgWrapper className='reset-img-wrapper'>
        <StyledReset className='pass-reset-form' >
          <div className='form-title'>
            <h3>Reset Password</h3>
          </div>
          <div className='input-wrapper'>
            <label className='form-label'>Registered E-mail*</label>
            <input className='form-input' type='text' name='email' value={email} onChange={(e) => handleOnChange(e)} onBlur={handleInputValidation} placeholder='E-mail'></input>
          </div>
          <div className='err'>
            {<span className='err'>{emailError}</span>}
          </div>
          <div className={ipWrapDisable}>
            <label className='form-label'>Reset Key*</label>
            <input className='form-input' type='text' name='resetKey' value={resetKey} onChange={(e) => handleOnChange(e)} placeholder='Reset Key'></input>
          </div>
          <div className='err'>
            {<span className='err'>{resetKeyError}</span>}
          </div>
          <button className={newPassBtn} onClick={(e) => handleSubmit(e)}>Set New Password</button>
          <button className='reset-btn' onClick={(e) => handleOnClick(e)}>{resend} Reset Key</button>
        </StyledReset>
        <StyledResetImg className="login-img">
          <img src={passreset_img} alt="passreset_img" />
        </StyledResetImg>
      </StyledResetImgWrapper>
      <Footer />
    </>
  )
}

const StyledResetImgWrapper = styled.div`
  display: flex;
  width: 60%;
  box-shadow: 1px 1px 2px 2px #ccc;
  border-radius: 5px;
  margin: 5rem auto;
  padding: 4rem;
`;

const StyledReset = styled.form`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
  .form-title{
     font-size: 2rem;
     text-align: center;
  }
  .input-wrapper {
    display: flex;
    font-size: 2rem;
    flex-direction: column;
    gap: 1rem;
    input {
      padding: 1rem;
      outline: none;
      border: none;
      box-shadow: 1px 1px 2px 2px #ccc;
      border-radius: 5px;
    }
  }
  .input-wrapper-disabled{
    display: none;
  }
  button {
    background-color: rgb(0, 127, 255);
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 1rem;
    margin-top: auto;
    :hover {
      cursor: pointer;
    }
  }
  .err{
    padding: 0rem;
    color: red;
    font-size: small;
    text-align: center;
  }
  .newpass-btn-disabled{
    display: none;
  }
`;

const StyledResetImg = styled.div`
  flex-basis: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default PasswordReset;