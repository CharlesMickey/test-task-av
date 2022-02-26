import style from './main-page.module.css';
import ReactPaginate from 'react-paginate';
import CardList from '../card-list/card-list';
import { useContext, useEffect, useState } from 'react';
import SelectOptionList from '../select-option-list/select-option-list';
import { ListContext } from '../../context/ListContext';

function MainPage({
  handleCardClick,
  itemsPerPage,
  handleCardDelete,
  handleChange,
  value,
}) {
  const list = useContext(ListContext);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (itemOffset > list.length) {
      setItemOffset(0);
    }
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(list.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(list.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, list, pageCount]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;
    setItemOffset(newOffset);
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    list && (
      <main className={style.main}>
        <SelectOptionList handleChange={handleChange} value={value} />
        <CardList
          handleCardClick={handleCardClick}
          handleCardDelete={handleCardDelete}
          list={currentItems}
        />
        <ReactPaginate
          breakLabel='...'
          nextLabel='next'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='previous'
          renderOnZeroPageCount={null}
          containerClassName={style.container}
          pageClassName={style.pageItem}
          pageLinkClassName={style.pageLink}
          previousClassName={style.pageItem}
          previousLinkClassName={style.pageLink}
          nextClassName={style.pageItem}
          nextLinkClassName={style.pageLink}
          breakClassName={style.pageItem}
          breakLinkClassName={style.pageLink}
          activeClassName={style.active}
        />
      </main>
    )
  );
}

export default MainPage;
