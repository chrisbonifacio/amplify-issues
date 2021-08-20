import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "2em" }}>
      <Link style={{ color: "blue" }} href="/">
        Sorry, this page wasn&apos;t found. Click here to return to the
        homepage.
      </Link>
    </div>
  );
}
