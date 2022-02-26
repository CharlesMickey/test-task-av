import Card from '../card/card';
import styleMain from './card-list.module.css';

function CardList({ handleCardClick, list, handleCardDelete }) {
  return (
    list && (
      <section className={styleMain.section}>
        <div className={styleMain.container}>
          {list.map((item) => {
            return (
              <Card
                key={item.id}
                card={item}
                handleCardDelete={handleCardDelete}
                handleCardClick={handleCardClick}
              />
            );
          })}
        </div>
      </section>
    )
  );
}

export default CardList;
