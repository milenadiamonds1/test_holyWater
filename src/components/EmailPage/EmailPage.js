import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question, Task } from '../../styles/styles';
import { useLanguage } from '../LocalizationComponent/LocolizationComponent';
import {
  EmailPageContainer,
  Input,
  ErrorText,
  NewButton,
  EmailContainer,
} from './styles';
import LocalStorageService from '../../services/LocalStorageService/LocaleStorageService';

const EmailPage = ({ messages }) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  const language = useLanguage();
  const localeStorageService = new LocalStorageService();

  const { enterEmail, yourEmail, agreement, privacyPolicy, and, termsOfUse } =
    messages[language.language];

  useEffect(() => {
    const emailData = { question: 'Email', type: 'email', options: email };

    localeStorageService.saveData('email', emailData);
  }, [email]);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleNextClick = () => {
    navigate('/quiz/thankyou');
  };

  return (
    <EmailContainer>
      <EmailPageContainer>
        <Question>Email</Question>
        <Task>{enterEmail}</Task>
        <Input
          type='email'
          placeholder={yourEmail}
          value={email}
          onChange={handleEmailChange}
          isValid={isValidEmail}
        />
        {!isValidEmail && <ErrorText>Please enter a valid email</ErrorText>}
        <Task>
          {agreement}
          {' '}
          <a href='/quiz/email' style={{ color: '#e4229c' }}>{privacyPolicy}</a>
          {' '}
          {and}
          {' '}
          <a href='/quiz/email' style={{ color: '#e4229c' }}>{termsOfUse}</a>
        </Task>
      </EmailPageContainer>
      <NewButton
        onClick={handleNextClick}
        disabled={!isValidEmail || email.trim().length === 0}
      >
        Next
      </NewButton>
    </EmailContainer>
  );
};

export default EmailPage;
