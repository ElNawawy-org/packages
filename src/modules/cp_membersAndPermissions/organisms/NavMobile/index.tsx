import Flex from 'modules/cp_membersAndPermissions/atoms/Flex';

import BurgerIcon from 'modules/cp_membersAndPermissions/assets/icons/BurgerIcon';
import BellIcon from 'modules/cp_membersAndPermissions/assets/icons/BellIcon';
import CommentIcon from 'modules/cp_membersAndPermissions/assets/icons/CommentIcon';
import LogoIcon from 'modules/cp_membersAndPermissions/assets/icons/LogoIcon';

import style from './style.module.css';

const NavMobile = () => {
  return (
    <div className={style.NavMobile}>
      <Flex>
        <div className={style.bell_comment}>
          <BellIcon />

          <CommentIcon />
        </div>

        <div className={style.logo}>
          <LogoIcon />
        </div>

        <div className={style.burger}>
          <BurgerIcon />
        </div>
      </Flex>
    </div>
  );
};

export default NavMobile;
