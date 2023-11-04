import "./myStyles.css";
export const StyleSheets = ({ primary }) => {
  let className = primary ? "primary" : "";
  return <h1 className={`${className} font-xl`}> StyleSheets</h1>;
};
