import Column from 'modules/cp_membersAndPermissions/atoms/Column';

import RootLayout from 'modules/cp_membersAndPermissions/organisms/RootLayout';

import AddArea from './AddArea';
import CountryPlaces from './CountryPlaces';
import CountryMembers from './CountryMembers';

import style from './style.module.css';

const CP_areasAndPlaces = () => {
  return (
    <RootLayout>
      <Column>
        <div className={style.areasAndPlaces}>
          <AddArea />

          <CountryPlaces />

          <CountryMembers />

          <div className={style.areasAndPlacesBTN}>
            <button>اضف المنطقة الان</button>
          </div>
        </div>
      </Column>
    </RootLayout>
  );
};

export default CP_areasAndPlaces;
