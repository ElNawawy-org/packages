import React from 'react';
import style from './style.module.css';
import { members } from './Data';
const CountryMembers = () => {
  return (
    <div className={style.CountryMembers}>
      <h2 className={style.CountryMembersHeading}>اعضاء الدولة</h2>
      <div className={style.members}>
        {members.map((member: any) => (
          <div
            className={style.member}
            key={member.id}
          >
            <div className={style.memberImg}>
              <img
                src={member.img}
                alt=''
              />
            </div>
            <h2>{member.name}</h2>
            <h3>{member.position}</h3>
            <div className={style.memberBtns}>
              <button>تفاصيل</button>
              <button>محادثة</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryMembers;
