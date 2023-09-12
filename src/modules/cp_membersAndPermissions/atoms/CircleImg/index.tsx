import style from './style.module.css';

//Todo: remove any
const CircleImg = ({ width = 'defaultWidth', image }: any) => {
  return (
    <div className={`${style.CircleImg} ${style[width]}`}>
      <img
        src={image}
        alt='person'
      />
    </div>
  );
};

export default CircleImg;
