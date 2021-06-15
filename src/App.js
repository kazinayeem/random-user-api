import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [api, setapi] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?gender=male")
      .then((res) => res.json())
      .then((data) => {
        setapi(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 
  return (
    <div className="App container">
      <br />
      <hr />
      <header>
        <h2 className="maintext">Random user api</h2>
      </header>
      <hr />
      <main>
        {api.map((user) => {
          return (
            <div className="maindiv" key={user.email}>
              <div className="card" style={{ width: "18erm" }} key={user.email}>
                <br /><br />
                <img
                  src={user.picture.large}
                  className="card-img-top image "
                  alt={user.name.title}
                />
                <br />
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="name">Name:</span> {user.name.title}{" "}
                    {user.name.first} {user.name.last}
                  </h5>
                  <p className="card-text">
                    <h4>Email: {user.email}</h4>
                    <h4>Phone: {user.phone}</h4>
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Country: {user.location.country}
                  </li>
                  <li className="list-group-item">
                    Post Code : {user.location.postcode}
                  </li>
                  <li className="list-group-item">
                    State: {user.location.state}
                  </li>
                </ul>
                <div className="card-body"></div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
