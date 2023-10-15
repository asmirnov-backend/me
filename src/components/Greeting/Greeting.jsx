import s from "./Greeting.module.css";

export const Greeting = () => {
  return (
    <div className={s.greeting}>
      <h2 className={s.greeting_phrase}>Привет! Я</h2>
      <h1 className={s.greeting_name}>Андрей Смирнов</h1>
      <p className={s.greeting_prof}>&gt; Backend developer</p>

      {/*eslint-disable-next-line */}
      <p className={s.greeting_comment}>// Вы можете найти меня на GitHub</p>
      <p className={s.greeting_link}>
        <span className={s.violet}>const </span>
        <span className={s.green}>GitHub </span>
        {/*eslint-disable-next-line */}
        <span className={s.white}>= </span>
        <a href="https://github.com/asmirnov-backend" className={s.orange}>
          "asmirnov-backend"
        </a>
      </p>
      <p className={s.greeting_comment}>// Или написать в Telegram</p>
      <p className={s.greeting_link}>
        <span className={s.violet}>const </span>
        <span className={s.green}>Telegram </span>
        {/*eslint-disable-next-line */}
        <span className={s.white}> = </span>
        <a href="https://t.me/smirnovandrew1999" className={s.orange}>
          "smirnovandrew1999"
        </a>
      </p>
    </div>
  );
};
