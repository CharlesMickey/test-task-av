import style from './image-popup.module.css';

function ImagePopup({ card, close }) {


  function closePopupClickOnOverlay(e) {
    if (e.target.matches('.popup')) {
      close();
    }
  }

  return (
    <section
      onClick={closePopupClickOnOverlay}
      className={`popup ${style.popup} ${card && style.popupOpened}`}
      id='popup-image'
    >
      <figure className={style.container}>
        <img
          className={style.img}
          src={`${card ? card.url : ''}`}
          alt={card ? card.title : ''}
        />
        <figcaption className={style.title}>{`${
          card ? card.title : ''
        }`}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
