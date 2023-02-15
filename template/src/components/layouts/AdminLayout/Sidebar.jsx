import { Link, useLocation } from 'react-router-dom';
import { adminSidebarItems } from '../../../constants/sidebarItems';

export default function Sidebar({ minimize, setMinimize }) {
    return (
        <div className={`fixed hidden md:hidden lg:block bg-green-800 overflow-y-auto overflow-x-hidden left-0 ${minimize ? "md:w-24" : "md:w-64"}  h-screen transition-all duration-300 border-none z-10 sidebar`}>
            {!minimize && <Title />}
            <HamburgerIcon minimize={minimize} setMinimize={setMinimize} />
            <div className="flex flex-col justify-between h-full gap-5 pt-24">
                <SidebarItems minimize={minimize} />
                <div className='flex flex-col items-center gap-2 pb-5 text-sm text-center text-white'>
                    <button className={`flex gap-2 p-2 rounded-lg hover:bg-white hover:text-red-500 `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                        </svg>
                        <span className='transition  duration-100 '>{!minimize && "Logout"}</span>
                    </button>
                    <>{new Date().getFullYear()}</>
                </div>
            </div>
        </div>
    )
}

const HamburgerIcon = ({ minimize, setMinimize }) => {
    return <div className={`absolute top-3 ${minimize ? "right-6" : "right-3"} transition-all duration-300`}>
        <button
            onClick={() => (minimize ? setMinimize(false) : setMinimize(true))}
            className="flex items-start px-3 py-2 ml-2 text-white rounded "
        >
            {!minimize ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            }
        </button>
    </div>
}

const Title = () => {
    return <div className={`absolute transition-all duration-1000 delay-1000  top-3 left-3 `}>
        <h1 className="flex items-start px-3 py-2 ml-2 text-xl text-white rounded">Admin </h1>
    </div>
}

const SidebarItems = ({ minimize }) => {
    const location = useLocation();
    return <aside className="px-6">
        <ul className="space-y-2 ">
            {adminSidebarItems.map((item, index) => {
                return (
                    <li key={index} className="text-white hover:text-gray-500">
                        <Link
                            to={item.link}
                            className={`flex items-center justify-center p-2 font-normal  rounded-lg  hover:bg-gray-100 ${location.pathname === item.link && "bg-gray-100 text-black "} `}
                        >
                            {item.icon}
                            {!minimize && < span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </aside >
}

