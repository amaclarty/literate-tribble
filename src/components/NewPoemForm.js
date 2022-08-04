import React from "react";
import {useState} from 'react'

function NewPoemForm({handleNewPoem}) {
  const [title, setTitle] =useState('')
  const [author, setAuthor] =useState('')
  const [textArea, setTextArea] =useState('')

  function poemSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:8004/poems', {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify( {
          title: title,
          author: author,
          textArea: textArea,
        } )
    })
          .then((r) => r.json())
          .then((newPoem) => handleNewPoem(newPoem))
  }

  return (
    <form className="new-poem-form" onSubmit={(e) => poemSubmit(e)}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
      <input type="submit" value="Share your masterpiece"  />
    </form>
  );
}

export default NewPoemForm;
