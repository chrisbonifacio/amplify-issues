import React from "react";
import Link from "next/link";

const PhonePage = ({ user }) => {
  console.log({ user });
  return (
    <div>
      <h1>Your phone number is: {user?.attributes?.phone_number}</h1>
      <div style={{ fontSize: "1.5rem" }}>
        <Link href="/">Back</Link>
      </div>
    </div>
  );
};

export default PhonePage;
