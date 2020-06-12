import React, { useState, useEffect } from "react";
import axios from "axios";

import { Topbar } from "./components/Topbar";
import { Filters } from "./components/Filters";
import { Contacts } from "./components/Contacts";
import "./App.scss";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const hook = () => {
    axios
      .get("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((res) => {
        setContacts(res.data); //now countries are inside 'countries' state variable (array)
      });
  };
  useEffect(hook, []);
  console.log("contacts:", contacts);

  return (
    <React.Fragment>
      <Topbar />
      <Filters />
      <Contacts contacts={contacts} />
    </React.Fragment>
  );
};

export default App;
