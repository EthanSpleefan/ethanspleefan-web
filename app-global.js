import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const { useState, useEffect } = React;

const Scrambles = props => {
  const shuffle = word => {
    return word.
    split("").
    sort(() => {
      return 0.7 - Math.random();
    }).
    join("");
  };

  const gen = () => {
    let textArray = [];
    if (props.text) {
      //variations with change in size
      for (let i = props.text.length; i >= 0; i--) {
        let tmp = shuffle(props.text);
        tmp = tmp.slice(0, props.text.length - i);
        textArray.push(tmp);
      }
      //variations without change in size
      for (let i = 0; i < 6; i++) {
        textArray.push(shuffle(props.text));
      }
      //normal text
      textArray.push(props.text);
    }
    return textArray;
  };

  const [textArray] = useState(gen);
  const [activeText, setActiveText] = useState(0);
  const [play, setPlay] = useState(false);

  const click = () => {
    if (activeText == textArray.length - 1) {
      setActiveText(0);
    }
    setPlay(true);
  };

  useEffect(() => {
    let interval = null;
    if (play && activeText < textArray.length - 1) {
      interval = setInterval(() => {
        setActiveText(activeText + 1);
      }, 90);
    } else if (!play) {
      click();
    }
    return () => clearInterval(interval);
  }, [play, activeText]);

  return /*#__PURE__*/(
    React.createElement("div", { onClick: click }, /*#__PURE__*/
    React.createElement("h1", null, textArray[activeText]), /*#__PURE__*/));


};

ReactDOM.render( /*#__PURE__*/React.createElement(Scrambles, { text: "Ethan$pl33fan" }), document.getElementById("scrambled_txt"));