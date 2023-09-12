import NavDesktop from 'modules/cp_membersAndPermissions/organisms/NavDesktop';
import NavMobile from 'modules/cp_membersAndPermissions/organisms/NavMobile';

import style from './style.module.css';

const Nav = () => {
  return (
    <div className={style.Nav}>
      <NavDesktop />

      <NavMobile />
    </div>
  );
};

export default Nav;
