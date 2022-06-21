import React from "react";
import PracticeDiallog from "./PracticeDiallog";

export default function PracticeCustomDialog(props) {
  return (
    <PracticeDiallog>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </PracticeDiallog>
  );
}
