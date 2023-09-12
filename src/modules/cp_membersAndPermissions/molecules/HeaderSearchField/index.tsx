import HeaderInput from 'modules/cp_membersAndPermissions/atoms/HeaderInput';
import HeaderSearchIcon from 'modules/cp_membersAndPermissions/atoms/HeaderSearchIcon';
import HeaderFilterIcon from 'modules/cp_membersAndPermissions/atoms/HeaderFilterIcon';

import style from './style.module.css';

const HeaderSearchField = () => {
  return (
    <div className={style.HeaderSearchField}>
      <HeaderInput />

      <HeaderSearchIcon />

      <HeaderFilterIcon />
    </div>
  );
};

export default HeaderSearchField;
