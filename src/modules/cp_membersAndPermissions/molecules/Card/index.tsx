import Button from 'modules/cp_membersAndPermissions/atoms/Button';
import Flex from 'modules/cp_membersAndPermissions/atoms/Flex';
import Column from 'modules/cp_membersAndPermissions/atoms/Column';
import MemberImage from 'modules/cp_membersAndPermissions/atoms/MemberImage';
import MemberNationality from 'modules/cp_membersAndPermissions/atoms/MemberNationality';

import tCard from 'modules/cp_membersAndPermissions/translation/ar/Card.json';

import style from './style.module.css';

//Todo: remove any
const Card = ({ member }: any) => {
  return (
    <div className={style.Card}>
      <Column center>
        <MemberImage member={member} />

        <h2 className={style.name}>{member.name}</h2>

        <h3 className={style.position}>{member.position}</h3>

        <p className={style[member.status]}>
          ({member.status === 'inner' ? tCard.inner : tCard.outer})
        </p>

        <MemberNationality member={member} />

        <Flex
          gap
          wrap
          center
        >
          <Button solid>{tCard.conversation}</Button>

          <Button outline>{tCard.details}</Button>
        </Flex>
      </Column>
    </div>
  );
};
export default Card;
