import React from "react";
import PracticeCustomDialog from "./PracticeCustomDialog";
import PracticeDiallog from "./PracticeDiallog";

export default function PracticeWelcomDiallog() {
  return (
    <>
      <PracticeDiallog>
        <h1>Welcom</h1>
        <h5>Thank you</h5>
      </PracticeDiallog>
      <PracticeCustomDialog title="Welcom" description="Hello World" />
    </>
  );
}
