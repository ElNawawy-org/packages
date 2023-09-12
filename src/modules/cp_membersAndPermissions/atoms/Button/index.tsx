import style from './style.module.css';

//Todo: remove any
const Button = ({ children, solid = false, outline = false }: any) => {
  return (
    <button
      className={`${style.Button} ${solid && style.solid} ${
        outline && style.outline
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
