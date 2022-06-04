import React from "react";
import CustomDialog from "./CustomDialog";
// import Dialog from "./Dialog";

export default function WelcomeDialog() {
  return (
    // <Dialog title="Welcom" message="Thank you for visiting our spacecraft!" />
    <CustomDialog
      title="Welcom"
      description="Thank you for visiting our spacecraft!"
    />
  );
}
