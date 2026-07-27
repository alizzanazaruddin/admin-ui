import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";

function MainLayout(props) {
  const { children } = props;

 const themes = [
  { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
  { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
  { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
  { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
  { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
];

const [theme, setTheme] = useState(themes[0]);
  
  return (
    <>
	    <div className="flex min-h-screen">
            <aside 
                className="bg-defaultBlack w-28 text-special-bg2
            flex flex-col justify-between px-7 py-12"
            >
                <div>
                    <div className="mb-10">
                        <Logo variant="secondary" />
                    </div>
                    <nav>
                    {menu.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.link}
                            className={({ isActive }) =>
                                `flex px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 ${
                                isActive
                                    ? "bg-primary text-white font-bold"
                                    : "hover:bg-special-bg3"
                                }`
                            }
                        >
                            <div className="mx-auto sm:mx-0">{item.icon}</div>
                            <div className="ms-3 hidden sm:block">{item.name}</div>
                        </NavLink>
                    ))}
                    </nav>
                </div>
                <div>
                    <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
                        <div className="mx-auto sm:mx-0">
                            <Icon.Logout />
                        </div>
                        <div className="ms-3 hidden sm:block">Logout</div>
                    </div>
                    <div className="border my-10 border-b-special-bg"></div>
                    <div className="flex justify-center items-center">
                        <div>Avatar</div>
                        <div className="hidden sm:block">
                            <div>Username</div>
                            <div>View Profile</div>
                        </div>
                        <div className="hidden sm:block">
                            <Icon.Detail size={15} />
                        </div>
                    </div>
                </div>
            </aside>
            <div className="bg-special-mainBg flex-1 flex flex-col">
                <div className="border border-b border-gray-05 px-6 py-7 flex justify-between">
                    <div className="flex items-center">
                        <div className="font-bold text-2x1 me-6">Username</div>
                        <div className="text-gray-03 flex">
                            <Icon.ChevronRight size={20} />
                            <span>May 19, 2023</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="me-10">
                        <NotificationsIcon className="text-gray-01 scale-110" />                    
                    </div>
                    <Input backgroundColor="bg-white" border="border-white" />
                </div>
                <main className="flex-1 px-6 py-4">{children}</main>
            </div>
        </div>
    </>
  );
}

export default MainLayout;