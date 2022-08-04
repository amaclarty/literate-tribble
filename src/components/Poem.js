import React from "react";
import {useState} from 'react'

function Poem({poem, poems}) {
  const [buttonText, setButtonText] =useState('Mark as read')
  const [readBool, setReadBool] =useState(true)

  function toggleRead() {
    setReadBool(!readBool)
    readBool ? setButtonText('Mark as Read') : setButtonText('Mark as Unread')
  }
  return (
    <div>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>{poem.author}</strong>
      </p>
      <button onClick={() => toggleRead()}>{buttonText}</button>
    </div>
  );
}

export default Poem;
