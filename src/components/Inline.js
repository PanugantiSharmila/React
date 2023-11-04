export const Inline = () => {
  const heading = {
    fontSize: "72px",
    color: "brown",
  };
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className="error">Error msg</h1>
    </div>
  );
};
