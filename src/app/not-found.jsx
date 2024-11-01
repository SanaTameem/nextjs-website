import Link from "next/link";

function NotFound() {
  return (
    <section className="container mt-5 py-5 d-flex justify-content-center flex-column align-items-center">
      <h1>Not Found</h1>
      <p>The page you are looking for is not found!</p>
      <Link href="/">Return Home</Link>
    </section>
  );
}

export default NotFound;
