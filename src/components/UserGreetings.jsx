export const UserGreetings = () => {
  const isLogged = false;
  return (
    //<h1>Welcome {isLogged && "CGG"}</h1>
    <h1>Welcome {isLogged ? "CGG" : ""}</h1>
  );
};
