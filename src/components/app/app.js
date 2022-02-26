import React, { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import AppHeader from '../app-header/app-header';
import style from './app.module.css';
import MainPage from '../main-page/main-page';
import { ListContext } from '../../context/ListContext';
import { SELECT_ALBUM } from '../../utils/constants';
import ImagePopup from '../image-popup/image-popup';

function App() {
  const [defaultList, setDefaultList] = useState(null);
  const [list, setList] = useState(null);
  const [value, setValue] = useState('');
  const [card, setCard] = useState(null);

  useEffect(() => {
    getData()
      .then((res) => {
        setDefaultList(res);
        setList(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    return (
      defaultList !== null &&
      setList(() =>
        defaultList.filter((card) =>
          card.albumId === Number(value)
            ? true
            : value === SELECT_ALBUM
            ? true
            : false
        )
      )
    );
  }, [value]);

  const handleCardDelete = (id) => {
    return setList((list) =>
      list.filter((card) => (card.id === id ? false : true))
    );
  };

  const handleCardClick = (card) => {
    return setCard(card);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const closePopup = () => {
    setCard(null);
  };

  function closePopupEsc(e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  }

  return (
    <ListContext.Provider value={list}>
      <div
        className={style.app}
        onKeyDown={closePopupEsc}
        tabIndex='0'
      >
        <AppHeader />
        {list && (
          <MainPage
            handleCardClick={handleCardClick}
            handleChange={handleChange}
            value={value}
            handleCardDelete={handleCardDelete}
            itemsPerPage={30}
          />
        )}
      </div>
      <ImagePopup close={closePopup} card={card} />
    </ListContext.Provider>
  );
}

export default App;
