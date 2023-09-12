//import { useState, useEffect } from 'react';

import T_CP_membersAndPermissions from 'modules/cp_membersAndPermissions/template';

import { members } from 'modules/cp_membersAndPermissions/dummy_data/members';

/*
import data from 'modules/cp_membersAndPermissions/dummy_data/responses/login_response.json';

const getMembersAPI = 'Users/GetListUsers';

const token = data.data.token;

const Latitude = '31.964909';
const Longitude = '35.883818';
*/

const CP_membersAndPermissions: React.FC = () => {
  /* APIs */
  /*
  const [Members, setMembers] = useState<number[]>();

  const getMembers = () => {
    fetch(`${REACT_APP_BASE_URL}${getMembersAPI}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
        Latitude,
        Longitude,
      },
    })
      .then(res => res.json())
      .then(data => setMembers(data.data));
  };

  useEffect((): any => {
    getMembers();
  }, []);
*/

  return (
    <T_CP_membersAndPermissions
      //membersAPI={Members}
      members={members}
    />
  );
};

export default CP_membersAndPermissions;
