"use client";
import { useState } from "react";
import "../app/globals.css";
export default function home() {
  const [name, setName] = useState("Farhan");
  const fruit = () => {
    setName("tariq");
  };
  const Innercomp=()=>{
    return(
      <div>
        <h1>inner component</h1>
      </div>
    )
  }
    const Outercomp=()=>{
    return(
      <div>
        <h1>Outer component</h1>
      </div>
    )
  }
  return (
    <div>
      <h3>
        <User name="farhan" />
      </h3>
      <User name="Daddy" />
      <h1>Welcome to {name} website</h1>
      <button onClick={() => fruit()}>click me</button>
      <Innercomp/>
      {Innercomp()}
      <Outercomp/>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>Hi this is {props.name}</h1>
    </div>
  );
};
