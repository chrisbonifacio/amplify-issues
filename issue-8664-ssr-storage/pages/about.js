import Link from "next/link";

const About = (props) => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about me page</p>
      <Link href="/">
        <button className="bg-purple-500 py-1 px-2 rounded text-white">
          Go back to homepage
        </button>
      </Link>

      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default About;
