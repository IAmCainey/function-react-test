import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";

function App() {
  const name = "paul caine";
  const age = "40, only just";
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count} times and ${count} * 2 = ${count * 2}`;
  });

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <h1>functions and testing</h1>
      <p>this is all just a test</p>
      <h2>click counter</h2>
      <h1 className="sum">{count}</h1>
      <button onClick={() => setCount(count + 1)}>add 1</button>
      <button onClick={() => setCount(count - 1)}>minus 1</button>

      <button
        className="toggle"
        onClick={() => setDarkMode(!darkMode)}
      ></button>

      <p>
        also while your clicking like a clown to see if you can beat the
        numbers, check the page title BABY!
      </p>
      <br />
      <p>
        name : <span>{name}</span> <br />
        fooking age : <span>{age}</span>
      </p>

      <p>test the button above</p>
      <p>
        onso did you know that the number above times by 2 is the number below!
      </p>
      <h1 className="sum">{count * 2}</h1>
      <p>
        this is a cool way to learn react{" "}
        <b>
          <i>useStats</i>
        </b>
      </p>

      <section>
        <h2>look at me dad, im coding!</h2>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.giphy.com%2Fmedia%2FdZX3AduGrY3uJ7qCsx%2Fgiphy.gif&f=1&nofb=1"
          alt="a fucking gif!"
        />
      </section>

      <section>
        <h1>i wouldnt!!!!</h1>

        <button onClick={() => alert("i fucking told you")}>
          {" "}
          dont do it!
        </button>
      </section>
    </div>
  );
}

export default App;
