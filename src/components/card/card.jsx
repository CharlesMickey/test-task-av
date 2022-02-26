import style from './card.module.css';

function Card({ card, handleCardDelete, handleCardClick }) {
  const deleteCard = () => {
    handleCardDelete(card.id);
  };

  const handleImgClick = () => {
    handleCardClick(card);
  };

  return (
    <article className={style.card}>
      <button
        type='button'
        className={style.buttonDelete}
        onClick={deleteCard}
      ></button>
      <img
        onClick={handleImgClick}
        className={style.img}
        src={card.thumbnailUrl}
        alt={card.title}
      />
      <p className={style.title}>{card.title}</p>
    </article>
  );
}

export default Card;
