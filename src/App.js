import "./styles.css";
import React, { useState } from "react";

//database
var emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "❤️": "Heart",
  "😒": "Annoyance",
  "😠": "Angry Face",
  "😘": "Kiss on face",
  "😎": "Smiling with sunglasses",
  "😂": "Tears of Joy",
  "😍": "Smiling with hearts",
  "👍": "Thumbs up"
};

var emojis = Object.keys(emojiDictionary); //converting dictionary to array

export default function App() {
  const [meaning, setMeaning] = useState(""); //view in browser

  function emojiInputHandler(event) {
    //processing
    const userInput = event.target.value; //taking value

    var meaning = emojiDictionary[userInput]; //checking value is in dictionary

    if (meaning === undefined) {
      meaning = "Can't able to find database";
    }
    // console.log(meaning);
    setMeaning(meaning); //react call to show value in the view
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react call to show value in the view
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input
        onChange={emojiInputHandler}
        placeholder="Enter emoji to know meaning..."
      />

      <h2>emojis we know</h2>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)} //passing value from the list
            style={{ padding: "0.5rem", fontSize: "2rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <h2 style={{ marginTop: "3rem" }}>meaning👇</h2>
      <h2
        style={{
          border: "1px solid #000",
          width: "40%",
          margin: "auto",
          padding: "1rem",
          borderRadius: "5px"
        }}
      >
        {meaning}
      </h2>
      {/* Output set by using useState */}
    </div>
  );
}
