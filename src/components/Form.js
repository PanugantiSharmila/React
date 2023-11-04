import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("Female");
  const [allchecked, setAllChecked] = useState(["React", "Java", ".net"]);
  const [country, setCountry] = useState("0");
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Welcome ${username} ${selectedOption} ${allchecked} ${country}`);
  };
  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              //console.log(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={selectedOption === "Female"}
            onChange={(event) => {
              setSelectedOption(event.target.value);
            }}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedOption === "male"}
            onChange={(event) => {
              setSelectedOption(event.target.value);
            }}
          />
          male
        </div>
        <div>
          <label>Course</label>
          <input
            type="checkbox"
            value="React"
            checked={allchecked.indexOf("React") !== -1 ? true : false}
            onChange={handleChange}
          />
          React JS
          <input
            type="checkbox"
            value="Java"
            onChange={handleChange}
            checked={allchecked.indexOf("Java") !== -1 ? true : false}
          />
          Java
          <input
            type="checkbox"
            value=".net"
            onChange={handleChange}
            checked={allchecked.indexOf(".net") !== -1 ? true : false}
          />
          .Net
        </div>
        <div>
          <label>Select Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="0" disabled>
              --Select Country--
            </option>
            <option>India</option>
            <option>US</option>
            <option>Russia</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
