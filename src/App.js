import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });
  function clickHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === "checked" ? checked : value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the form data", formData);
  }
  return (
    <div className="flex flex-col items-center mt-4">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          placeholder="Aman"
          onChange={clickHandler}
          className="outline"
        ></input>
        <br></br>
        <br></br>

        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          placeholder="SInghal"
          onChange={clickHandler}
          className="outline"
        ></input>

        <br></br>
        <br></br>

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="example@example.com"
          onChange={clickHandler}
          className="outline"
        ></input>

        <br></br>
        <br></br>

        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={clickHandler}
          className="outline"
        >
          <option>India</option>
          <option>Canada</option>
          <option>United States</option>
          <option>Mexico</option>
        </select>

        <br></br>
        <br></br>

        <label htmlFor="streetAddress">streetAddress</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          placeholder="streetAddress"
          onChange={clickHandler}
          className="outline"
        ></input>

        <br></br>
        <br></br>

        <label htmlFor="city">city</label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          placeholder="Pune"
          onChange={clickHandler}
          className="outline"
        ></input>

        <br></br>
        <br></br>

        <label htmlFor="state">state</label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          placeholder="Maharashtra"
          onChange={clickHandler}
          className="outline"
        ></input>

        <br></br>
        <br></br>

        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          value={formData.postalCode}
          placeholder="0001"
          onChange={clickHandler}
          className="outline"
        ></input>

        <br></br>
        <br></br>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              id="comments"
              type="checkbox"
              checked={formData.comments}
              name="comments"
              onChange={clickHandler}
            ></input>
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get Notified when someone posts the comments</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              type="checkbox"
              checked={formData.candidates}
              name="candidates"
              onChange={clickHandler}
            ></input>
            <div>
              <label htmlFor="candidates">candidates</label>
              <p>Get Notified when someone posts the comments</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              type="checkbox"
              checked={formData.offers}
              name="offers"
              onChange={clickHandler}
            ></input>
            <div>
              <label htmlFor="offers">offers</label>
              <p>Get Notified when someone posts the comments</p>
            </div>
          </div>
        </fieldset>

        <br></br>
        <br></br>
        <fieldset>
          <legend>Push Notifications</legend>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="everything"
            onChange={clickHandler}
          ></input>
          <label htmlFor="pushEverything">Everything</label>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same As Email"
            onChange={clickHandler}
          ></input>
          <label htmlFor="pushEmail">Push Email</label>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notification"
            onChange={clickHandler}
          ></input>
          <label htmlFor="pushNothing">Nothing</label>
        </fieldset>

        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
