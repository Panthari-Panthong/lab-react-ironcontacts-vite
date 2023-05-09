import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  // Iteration 1 | Display 5 Contacts
  const [contactsFive, setcontactsFive] = useState(contacts.slice(0, 5));

  // Iteration 3 | Add New Random Contacts
  const randomContact = () => {
    const contact = contacts.slice(5, contacts.length + 1);
    const randomCon = Math.floor(Math.random() * contact.length);
    const newCon = contact[randomCon];
    setcontactsFive([...contactsFive, newCon]);
  };

  // Iteration 4 | Sort Contacts by Name and Popularity
  const sortPopular = () => {
    contactsFive.sort((a, b) => b.popularity - a.popularity);
    setcontactsFive([...contactsFive]);
  };

  const sortName = () => {
    contactsFive.sort((a, b) => (a.name > b.name ? 1 : -1));
    setcontactsFive([...contactsFive]);
  };

  // Iteration 5 | Remove Contacts
  const deleteContact = (id) => {
    setcontactsFive(contactsFive.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button type="button" onClick={randomContact}>
        Random Contact
      </button>

      <button type="button" onClick={sortPopular}>
        Sort by popularity
      </button>
      <button type="button" onClick={sortName}>
        Sort by name
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsFive.map((ele, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={ele.pictureUrl}
                    alt={ele.name}
                    style={{ width: "150px" }}
                  />
                </td>
                <td>{ele.name}</td>
                <td>{ele.popularity.toFixed(2)}</td>
                {/* Iteration 2 | Conditionally Display Awards Info */}
                <td>{ele.wonOscar ? <span>🏆</span> : null}</td>
                <td>{ele.wonEmmy ? <span>🏆</span> : null}</td>
                <td>
                  <button type="button" onClick={() => deleteContact(ele.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
