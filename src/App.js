import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojisDict = {
    "♒": "Aquarius (The water bearer)",
    "♓": "Pisces (The fish)",
    "♈": "Aries (The Ram)",
    "♉": "Taurus (The bull)",
    "♊": "Gemini (The Twins)",
    "♋": "Cancer (The Crab)",
    "♌": "Leo (The Lion)",
    "♍": "Virgo (The Virgin)",
    "♎": "Libra (The Scales)",
    "♏": "Scorpio (The Scorpion)",
    "♐": "Sagittarius (Centaur The Archer)",
    "♑": "Capricorn (Goat-horned, The sea goat)"
  };
  const emojisArr = Object.keys(emojisDict);

  const [output, setOutput] = useState("");

  function setValue(value) {
    setOutput(value);
  }

  function inputChangeHandler(event) {
    var input = event.target.value;
    if (emojisDict[input] === undefined) {
      setValue("Nothing found");
    } else {
      setValue(emojisDict[input]);
    }
  }

  function emojiCLickHandler(item) {
    setValue(emojisDict[item]);
  }

  return (
    <div className="App">
      <h1>Horoscope Emoji Evaluator</h1>
      <input id="emojiInput" onChange={inputChangeHandler}></input>
      <p id="emojiName">{output}</p>
      <h3>Horoscope emojis that we already know</h3>
      {emojisArr.map((item) => (
        <span id="emojis" key={item} onClick={() => emojiCLickHandler(item)}>
          {item}
        </span>
      ))}
    </div>
  );
}
