import Flex from 'modules/cp_membersAndPermissions/atoms/Flex';
import HeaderButton from 'modules/cp_membersAndPermissions/atoms/HeaderButton';

import HeaderSearchField from 'modules/cp_membersAndPermissions/molecules/HeaderSearchField';

import tHeader from 'modules/cp_membersAndPermissions/translation/ar/Header.json';

import style from './style.module.css';

const Header = () => {
  return (
    <Flex
      wrap
      gap
    >
      <p className={style.title}>{tHeader.title}</p>

      <HeaderSearchField />

      <HeaderButton />
    </Flex>
  );
};

export default Header;
