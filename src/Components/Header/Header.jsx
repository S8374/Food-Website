import { useContext, useState } from "react"; 
import { AuthContext } from "../AuthProvider/AuthProvider"; 
import { FaChevronDown, FaUserAlt, FaMapMarker, FaSignOutAlt } from "react-icons/fa"; 
import { NavLink } from "react-router-dom"; 
import { IoCartSharp } from "react-icons/io5";
const Header = () => { 
    const { logout, user } = useContext(AuthContext); 
    const [isSearchVisible, setIsSearchVisible] = useState(false); 
   
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = () => { 
        logout()
            .then(() => console.log('User logged out successfully')) 
            .catch(error => console.log(error)); 
    };

    const toggleSearch = () => setIsSearchVisible(!isSearchVisible); 
 
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);



    return ( 
        <div className="max-w-full  ">

        <div className="navbar text-neutral-content bg-[#ffffff]">
                   <div className="flex-1">
                                <div className="relative ml-4"> 
                                    <div className="flex text-white items-center cursor-pointer" onClick={toggleDropdown}> 
                                        <img className="w-8 h-8 rounded-full shadow-lg color-white" src={user?.photoURL || 'https://th.bing.com/th/id/OIP.jixXH_Els1MXBRmKFdMQPAHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7'} alt="Profile" /> 
                                        <span className="ml-2 text-black  font-medium">{user?.displayName || 'John Alex'}</span> 
                                        <FaChevronDown className="ml-2 text-black" /> 
                                    </div> 
                                    {isDropdownOpen && (
                                        <div className="absolute  mt-2 w-48 color-white bg-white border border-gray-200 rounded-lg shadow-lg"> 
                                            <ul className="py-2"> 
                                                <li className="px-4 py-2 hover:bg-gray-100"> 
                                                    <a href="#" className="flex items-center"> 
                                                        <FaUserAlt className="mr-2 text-gray-600" /> Profile 
                                                    </a> 
                                                </li> 
                                                <li className="px-4 py-2 hover:bg-gray-100"> 
                                                    <a href="#" className="flex items-center"> 
                                                        <FaMapMarker className="mr-2 text-gray-600" /> Create Time: {user?.metadata?.creationTime || 'Unknown'} 
                                                    </a> 
                                                </li> 
                                                <li className="px-4 py-2 hover:bg-gray-100" onClick={handleLogout}> 
                                                    <a href="#" className="flex items-center"> 
                                                        <FaSignOutAlt className="mr-2 text-black" /> Logout 
                                                    </a> 
                                                </li> 
                                            </ul> 
                                        </div> 
                                    )} 
                                </div>
                                <div onClick={toggleSearch} className="cursor-pointer pl-6"> 
                                    <svg className="fill-current text-black w-5 h-5  transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> 
                                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path> 
                                    </svg> 
                                </div> 

 

                   </div>
          <div className="md:flex">
            <ul className="menu text-black menu-horizontal ">
            
              <li className="p-1 text-4xl"><NavLink href="#"><IoCartSharp /><span>0</span> </NavLink></li>
              
            </ul>
          </div>
     
        </div>
        <div className={`relative w-full bg-[#dcdcdc] shadow-xl ${isSearchVisible ? 'block' : 'hidden'}`}> 
                        <div className="container mx-auto py-4 text-black"> 
                            <input type="search" placeholder="Search..." autoFocus className="w-full border-none outline-none bg-[#dcdcdc] text-gray-800 p-3 text-lg lg:text-xl rounded-lg focus:ring-2 " /> 
                        </div> 
                    </div> 
        
        
      </div>  
    ); 
}; 

export default Header;
