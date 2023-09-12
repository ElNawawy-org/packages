import Flex from 'modules/cp_membersAndPermissions/atoms/Flex';

import style from './style.module.css';

//Todo: Remove any
const MemberNationality = ({ member }: any) => {
  return (
    <div className={style.MemberNationality}>
      <Flex
        gap
        center
      >
        <div className={style.MemberFlagDesktop}>{member.flag}</div>

        <div className={style.MemberCountry}>{member.country}</div>
      </Flex>
    </div>
  );
};

export default MemberNationality;
