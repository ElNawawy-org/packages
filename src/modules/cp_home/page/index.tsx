//Todo: the following import is to be removed
import Column from 'modules/cp_membersAndPermissions/atoms/Column';

import UnderConstruction from 'modules/cp_home/atoms/UnderConstruction';

import RootLayout from 'modules/cp_membersAndPermissions/organisms/RootLayout';

import style from './style.module.css';

const CP_home = () => {
  return (
    <RootLayout>
      <Column>
        <div className={style.CP_home}>
          <UnderConstruction pageName='الرئيسية' />
        </div>
      </Column>
    </RootLayout>
  );
};

export default CP_home;
