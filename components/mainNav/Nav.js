import React from "react";
import classes from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
    return (
        <div className={classes.nav}>
            <nav
                className={`mainContainer flex items-center justify-between h-full px-4`}
            >
                <div className={classes.img}>
                    <img src="/image/ride_logo_1.png" alt="ride logo" />
                </div>
                <div className="flex gap-4 items-center">
                    <p>
                        <span className="text-3xl">احمد محمد</span>
                    </p>
                    <Link href="/sign_in">تسجيل الخروج</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
