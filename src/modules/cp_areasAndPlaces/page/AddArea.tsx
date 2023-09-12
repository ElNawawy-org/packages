import style from './style.module.css';

const AddArea = () => {
  return (
    <div className={style.AddArea}>
      <h2>اضافة منطقة جديدة</h2>
      <div className={style.AddArea_inputs}>
        <div className={style.inputField}>
          <label>رمز بريد العاصمة</label>
          <input
            type='text'
            placeholder='اكتب هنا'
            //dir='rtl'
          />
        </div>

        <div className={style.inputField}>
          <label>اختر علم الدولة</label>
          <input
            type='text'
            placeholder='اكتب هنا'
            //dir='rtl'
          />
        </div>
        <div className={style.inputField}>
          <label>اسم الدوله</label>
          <input
            type='text'
            placeholder='اكتب هنا'
            //dir='rtl'
          />
        </div>
      </div>
    </div>
  );
};

export default AddArea;
