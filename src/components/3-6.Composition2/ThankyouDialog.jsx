import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialog() {
  return (
    <Dialog
      title="Thanks"
      description="It is nice to meet you"
      button={
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Close
        </button>
      }
    />
  );
}
