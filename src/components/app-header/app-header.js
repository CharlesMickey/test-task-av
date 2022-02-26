import style from './app-header.module.css';

function AppHeader() {
  return (
    <header className={style.header}>
      <h1 className={style.text}>Test Task</h1>
    </header>
  );
}

export default AppHeader;
