import WhitePlusIcon from 'modules/cp_membersAndPermissions/assets/icons/WhitePlusIcon';

import tHeader from 'modules/cp_membersAndPermissions/translation/ar/Header.json';

import style from './style.module.css';

const HeaderButton = () => {
  return (
    <button className={style.HeaderButton}>
      <WhitePlusIcon />

      <p className={style.newMember}>{tHeader.addMember}</p>
    </button>
  );
};

export default HeaderButton;
