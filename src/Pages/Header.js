import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
        <Link href="/" className="item">
            Home
        </Link>
        <Link href="/about" className="item">
            about
        </Link>
        <Link href="/profile" className="item">
            profile
        </Link>
    </div>
  );
};

export default Header;