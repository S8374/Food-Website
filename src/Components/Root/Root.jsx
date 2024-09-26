import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider"; // Adjust the path as necessary
import Header from "../Header/Header"; // Import your Header component
import LoginSignUp from "../LoginSignUp/LoginSignUp";
import ProfilePage from "../ProfilePage/ProfilePage";
import Main from "../Main/Main";

const Root = () => {
    const { user } = useContext(AuthContext); // Get user from AuthContext

    return (
        <div style={{ width: '100%'}} >
            {/* Conditionally apply class or styles to hide/show components */}
            <div className={user ? "block" : "hidden"}>
                <Main />
            </div>
            <div className={!user ? "block" : "hidden"}>
                <ProfilePage />
            </div>
        </div>
    );
};

export default Root;
