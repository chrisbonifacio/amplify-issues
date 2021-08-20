import { useRouter } from "next/router";

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

const User = ({ users }) => {
  const router = useRouter();
  const { id } = router.query;

  const user = users.find((u) => Number(u.id) === Number(id));

  return (
    <h1 style={{ textAlign: "center" }}>User: {user?.name || "unknown"}</h1>
  );
};

export default User;
