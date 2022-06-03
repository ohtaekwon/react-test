import React from "react";

function UserGreeting({ name, count }) {
  return (
    <p>
      {name && name + ","} Welcome! {Boolean(count) && `It's ${count} times`}
    </p>
  );
}

function GuestGreeting(props) {
  return <h1>Please Sign Up</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="jimy" count={0} />;
  // }
  // return <GuestGreeting />;

  return props.isLoggedIn ? (
    <UserGreeting name="jimiy" count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
