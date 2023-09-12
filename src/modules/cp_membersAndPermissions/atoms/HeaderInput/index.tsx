import tHeader from 'modules/cp_membersAndPermissions/translation/ar/Header.json';

import style from './style.module.css';

//Todo: remove any
const HeaderInput = () => {
  return (
    <input
      type='text'
      placeholder={tHeader.searchFieldPlaceholder}
      className={style.HeaderInput}
    />
  );
};

export default HeaderInput;
