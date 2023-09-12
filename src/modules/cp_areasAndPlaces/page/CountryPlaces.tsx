import { areas } from './Data';

import style from './style.module.css';

const CountryPlaces = () => {
  return (
    <div className={style.CountryPlaces}>
      <h3>اماكن الدولة</h3>
      <div className={style.areas}>
        {areas.map((area: any) => (
          <div
            className={style.area}
            key={area.id}
          >
            <div className={style.areaImg}>
              <img
                src={area.buildingImg}
                alt=''
              />
            </div>
            <div className={style.areaContent}>
              <div className={style.areaContentLocation}>
                <img
                  src={area.location}
                  alt=''
                />
              </div>
              <div className={style.areaContentName}>
                <p>{area.name}</p>
              </div>
              <div className={style.areaContentEagle}>
                <img
                  src={area.eagle}
                  alt=''
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPlaces;
