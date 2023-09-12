import style from './style.module.css';

//Todo: remove any
const Container = ({ children }: any) => {
  return <div className={style.Container}>{children}</div>;
};

export default Container;
