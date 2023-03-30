import React from "react";
import Link from "./Link";
import { Button } from 'technotic'
import Profile from "./Profile";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">
                Home
            </Link>
            <Link href="/about" className="item">
                about
            </Link>
            {/* <Link href="/profile" className="item">
            Profile
        </Link> */}
            <div className="item">
                <Button className="item" link="/profile" element={<Profile />}>
                    profile
                </Button>
            </div>
        </div>
    );
};

export default Header;