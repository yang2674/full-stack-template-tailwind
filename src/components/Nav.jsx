import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton';
import '../index.css';
import { useSelector } from 'react-redux';

function Nav() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
            <Link to="/">
                <h2 className="title w-1/4 mx-auto text-center py-5 text-white text-6xl">
                    Your App Title
                </h2>
            </Link>
            <div>
                {/* If no user is logged in, show these links */}
                {!user.id && (
                    // If there's no user, show login/registration links
                    <Link className="navLink" to="/login">
                        Login / Register
                    </Link>
                )}

                {/* If a user is logged in, show these links */}
                {user.id && (
                    <>
                        <Link className="navLink" to="/user">
                            Home
                        </Link>

                        <Link className="navLink" to="/info">
                            Info Page
                        </Link>

                        <LogOutButton className="navLink" />
                    </>
                )}

                <Link className="navLink" to="/about">
                    About
                </Link>
            </div>
        </div>
    );
}

export default Nav;
