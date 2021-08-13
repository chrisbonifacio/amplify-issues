import React from "react";
import Link from "next/link";

const DataPage = ({ user }) => {
  console.log({ user });
  return (
    <div>
      <div style={{ fontSize: "1.5rem" }}>
        <Link href="/">Back</Link>
      </div>
      <pre>{JSON.stringify({ user }, null, 2)}</pre>
    </div>
  );
};

export default DataPage;
