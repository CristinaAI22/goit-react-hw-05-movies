import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.container}>
      <div>
        <div>
          <ul className={css.navList}>
            <li>
              <NavLink className={css.text} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.text} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
