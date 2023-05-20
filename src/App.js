import React from 'react';
import './style.css';
import { sculptureList } from './data.js';

console.log(sculptureList);

function Gallery() {
  const [index, setIndex] = React.useState(0);
  const [showMore, setShowMore] = React.useState(false);
  let hasNext = index < sculptureList.length - 1;

  function clickNext() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function show(){
    setShowMore(!showMore)
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={clickNext}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={show}>{showMore ? "Hide" : "Show"}</button>
      <p>{showMore && sculpture.description}</p>
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}

export default function App() {
  return <Gallery />;
}
