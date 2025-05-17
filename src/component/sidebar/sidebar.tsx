function SideBar() {
    return (
        <div className="relative h-screen">
            <div className="relative p-4">
                <input className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-2 px-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500" >Search</button>
            </div>
        </div>
    );
}

export default SideBar;