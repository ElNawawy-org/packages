import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from 'modules/cp_membersAndPermissions/assets/icons/LogoIcon';
import DownArrowIcon from 'modules/cp_membersAndPermissions/assets/icons/DownArrowIcon';

import style from './style.module.css';

const SideNavbar = () => {
  const [itemSelected, setItemSelected] = useState<string>('');

  return (
    <div className={style.SideNavbar}>
      <div className={style.logoSVG}>
        <LogoIcon />
      </div>

      <ul>
        <li
          onClick={() => setItemSelected('main')}
          className={`${itemSelected === 'main' && style.NavItemBG}`}
        >
          <Link to='/'>
            <p>الرئيسية</p>

            <div>8</div>
          </Link>
        </li>

        <li
          onClick={() => setItemSelected('members')}
          className={`${itemSelected === 'members' && style.NavItemBG}`}
        >
          <Link to='/CP_membersAndPermissions'>
            <p>الأعضاء و الصلاحيات</p>

            <div>4</div>
          </Link>
        </li>

        <li
          onClick={() => setItemSelected('areas')}
          className={`${itemSelected === 'areas' && style.NavItemBG}`}
        >
          <Link to='/CP_areasAndPlaces'>
            <p>المناطق و الاماكن</p>

            <div className={style.downArrow}>
              <DownArrowIcon />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
