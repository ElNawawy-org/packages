import { Routes, Route } from 'react-router-dom';

import CP_membersAndPermissions from 'modules/cp_membersAndPermissions/page';
import CP_areasAndPlaces from 'modules/cp_areasAndPlaces/page';
import CP_home from 'modules/cp_home/page';
import CP_login from 'modules/cp_login/page';

const dir = 'rtl';

const App = () => {
  return (
    <div dir={dir}>
      <Routes>
        <Route
          path='/'
          element={<CP_home />}
        />

        <Route
          path='/CP_membersAndPermissions'
          element={<CP_membersAndPermissions />}
        />

        <Route
          path='/CP_areasAndPlaces'
          element={<CP_areasAndPlaces />}
        />
        <Route
          path='/CP_login'
          element={<CP_login />}
        />
      </Routes>
    </div>
  );
};

export default App;
