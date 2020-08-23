import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { selectLanguage, setLanguage } from './languageSlice';
import { LANGUAGES } from './options';

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  select {
    appearance: none;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const currentLang = useSelector(selectLanguage);
  const { t } = useTranslation();

  return (
    <Label>
      {t('Change language:')}
      <select
        defaultValue={currentLang}
        onChange={({ target }) => dispatch(setLanguage(target.value))}
      >
        {Object.keys(LANGUAGES).map(langCode => (
          <option key={langCode} value={langCode}>
            {LANGUAGES[langCode]}
          </option>
        ))}
      </select>
    </Label>
  );
};
