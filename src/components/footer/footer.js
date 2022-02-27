import style from './footer.module.css';
import iconEmail from '../../images/icon/email.svg';
import iconTg from '../../images/icon/tg.svg';
import iconGh from '../../images/icon/github.svg';

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <a
            href='mailto:arturchuhnenko@yandex.ru'
            rel='noopener noreferrer'
            className={style.link}
            target='_blank'
          >
            <img className={style.img} src={iconEmail} alt='Иконка Email' />
          </a>
        </li>
        <li className={style.listItem}>
          <a
            href='https://t.me/CharlesMickey'
            rel='noopener noreferrer'
            className={style.link}
            target='_blank'
          >
            <img className={style.img} src={iconTg} alt='Иконка Telegram' />
          </a>
        </li>
        <li className={style.listItem}>
          <a
            href='https://github.com/CharlesMickey'
            rel='noopener noreferrer'
            className={style.link}
            target='_blank'
          >
            <img className={style.img} src={iconGh} alt='Иконка Github' />
          </a>
        </li>
      </ul>
      <p className={style.title}>
        &copy; 2022 &#945;&#961;&#964; CharlesMickey
      </p>
    </footer>
  );
}

export default Footer;
