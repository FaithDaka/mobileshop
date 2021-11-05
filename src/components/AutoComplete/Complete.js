import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const AutoComplete = ({ options }) => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const history = useHistory();

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = options.filter((v) => {
        const regex = new RegExp(`^${text}`, "gi");
        return v.title.match(regex);
      });
      setSuggestions(matches);
      setText(text);
    }
  };

  const suggestionSelected = (text) => {
    setText(text);
    setSuggestions([]);
    history.push(`/search?q=${text}`);
    console.log("Search Value", text);
  };

  return (
    <div className="autocomplete">
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
      {suggestions &&
        suggestions.map((suggestion, i) => 
          <div
            className="suggestions"
            key={suggestion._id}
            onClick={() => suggestionSelected(suggestion.slug)}
          >
            {suggestion.title}
          </div>
        )}
    </div>
  );
};

export default AutoComplete;
