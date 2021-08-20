import Link from "next/link";

export async function getServerSideProps() {
  let users = [];

  try {
    users = await fetch("http://localhost:3000/api/users");
    users = await users.json();
  } catch (error) {
    console.log(error);
  }

  return { props: { users } };
}

const Users = ({ users }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {users.map((user) => {
        return (
          <Link href={`users/${user.id}`} key={user.id}>
            <div
              style={{
                display: "block",
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                cursor: "pointer",
              }}
            >
              <h3>{user.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Users;
