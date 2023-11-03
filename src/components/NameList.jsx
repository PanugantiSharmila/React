import { Person } from "./Person";

export const NameList = () => {
  const names = ["apple", "orange", "banana", "grapes"];
  let nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  const persons = [
    { id: 1, name: "Sharmila", course: "java" },
    { id: 2, name: "sravani", course: ".net" },
    { id: 3, name: "sindhu", course: ".net" },
  ];
  const personList = persons.map((person) => (
    // <h2 key={person.id}>
    //   I am {person.name}.I am learning {person.course}{""}
    // </h2>
    <Person person={person} key={person.id}/>
  ));
  return (
    <div>
      {/* {nameList} */}
      {personList}
    </div>
  );
};
