export default function Wish(props) {
  //console.log(props)
  //console.log(props)
const {name,company,children}=props
  return (
    <div>
      <h1>HEllo</h1>
      <p>I am wishing you {name} {company} 
      {children}</p>
    </div>
  );
}
