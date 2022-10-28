import Router from "next/router";
import Link from "next/link";
import NavBar from "../components/Navbar";
export default function Home() {
  return (
    
    <div className="container-fluid">
      <NavBar />
      {/* <button onClick={() => Router.push("/login")}>Login</button> */}
      {/* <Link href="/login">
        <button>Login</button>
      </Link> */}
      {/* <div>Landing Page</div> */}
    </div>
  );
}
