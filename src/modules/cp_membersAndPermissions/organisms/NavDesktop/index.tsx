import Flex from 'modules/cp_membersAndPermissions/atoms/Flex';

import DownArrowIcon from 'modules/cp_membersAndPermissions/assets/icons/DownArrowIcon';
import CommentQuestionIcon from 'modules/cp_membersAndPermissions/assets/icons/CommentQuestionIcon';
import SearchIcon from 'modules/cp_membersAndPermissions/assets/icons/SearchIcon';
import FilterIcon from 'modules/cp_membersAndPermissions/assets/icons/FilterIcon';
import CommentIcon from 'modules/cp_membersAndPermissions/assets/icons/CommentIcon';
import BellIcon from 'modules/cp_membersAndPermissions/assets/icons/BellIcon';

import person from 'modules/cp_membersAndPermissions/assets/images/person.png';

import style from './style.module.css';

const NavDesktop = () => {
  return (
    <div className={style.NavDesktop}>
      <Flex>
        <div className={style.rightSide}>
          <div className={style.questionSVG}>
            <BellIcon />
          </div>

          <div className={style.questionSVG}>
            <CommentIcon />
          </div>

          <div className={style.headingSearch}>
            <div className={style.inputFiled}>
              <input
                type='text'
                placeholder='ابحث هنا...'
              />

              <div className={style.searchSVG}>
                <SearchIcon />
              </div>

              <div className={style.filterSVG}>
                <FilterIcon />
              </div>
            </div>

            <div className={style.searchBtn}>
              <button>Search</button>
            </div>
          </div>
        </div>

        <div className={style.leftSide}>
          <div className={style.questionSVG}>
            <CommentQuestionIcon />
          </div>

          <div className={style.inputField_name}>
            <div className={style.mainData}>
              <div className={style.image}>
                <img
                  src={person}
                  alt=''
                />
              </div>

              <div className={style.name}>
                <p>محمد مصطفي علي</p>
              </div>
            </div>

            <div className={style.downArrow}>
              <DownArrowIcon />
            </div>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default NavDesktop;
