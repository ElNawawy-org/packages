import CircleImg from 'modules/cp_membersAndPermissions/atoms/CircleImg';

import style from './style.module.css';

//Todo: Remove any
const MemberImage = ({ member }: any) => {
  return (
    <div className={style.MemberImage}>
      <CircleImg
        width='width100'
        image={member.img}
      />

      <div className={style.MemberFlagMobile}>{member.flag}</div>
    </div>
  );
};

export default MemberImage;
