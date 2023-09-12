import style from './style.module.css';

//Todo: remove any
const Column = ({ children, center = false }: any) => {
  return (
    <div className={`${style.Column} ${center && style.center}`}>
      {children}
    </div>
  );
};

export default Column;
