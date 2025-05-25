import { MouseEvent } from "react";
const ListGroup = () => {
  let cities = [
    "Mumbai",
    "Pune",
    "Nasik",
    "Delhi",
    "Banglore",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Ahmedabad",
    "Surat",
  ];
  // handle events
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <h1>No Elements</h1>}
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city} onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
