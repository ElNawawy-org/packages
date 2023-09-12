import style from './style.module.css';

//Todo: remove any
const Flex = ({ children, gap = false, wrap = false, center = false }: any) => {
  return (
    <div
      className={`${style.Flex}  ${gap && style.gap}  ${wrap && style.wrap}  ${
        center && style.center
      }`}
    >
      {children}
    </div>
  );
};

export default Flex;
