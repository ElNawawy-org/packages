import style from './style.module.css';

//Todo: remove any
const UnderConstruction = ({ pageName }: any) => {
  return (
    <div className={style.UnderConstruction}>
      <h1>{pageName}</h1>

      <h1>تحت الإنشاء</h1>
    </div>
  );
};

export default UnderConstruction;
