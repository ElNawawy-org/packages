import { Link } from 'react-router-dom';
const T_CP_login = () => {
  return (
    <div>
      <h1>مرحبا بك</h1>
      <div>
        <label>البريد الالكتروني</label>
        <input
          type='text'
          placeholder='البريد...'
        />
      </div>
      <div>
        <label>رمز المرور</label>
        <input
          type='password'
          placeholder='رمز المرور...'
        />
      </div>
      <button>
        <Link to='/'>Login</Link>
      </button>
    </div>
  );
};

export default T_CP_login;
