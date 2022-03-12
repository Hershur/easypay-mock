const Dashboard = ()=>{
    return (
        <div className=" w-9/12 m-auto flex bg-gray-100 rounded-xl shadow-xl">
            <aside className="flex px-6 space-y-16 overflow-hidden m-3 flex-col items-center justify-center rounded-tl-xl rounded-bl-xl bg-blue-800 shadow-lg">
                <div className="flex items-center justify-center p-4">
                    <h1 className="flex gap-2 text-2xl text-white font-bold mr-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Easypay.
                    </h1>
                </div>
                <ul>
                    <li className="flex space-x-2 mt-4 py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg
                        ><a href="">Home</a>
                    </li>
                    <li className="flex space-x-2 mt-4  py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg
                        ><a href="">Company</a>
                    </li>
                    <li className="flex space-x-2 mt-4  py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
                        ><a href="">Payment</a>
                    </li>
                    <li className="flex space-x-2 mt-4  py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg
                        ><a href="">CLient</a>
                    </li>
                    <li className="flex space-x-2 mt-4  py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg
                        ><a href="">Methods</a>
                    </li>
                    <li className="flex space-x-2 mt-4  py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg
                        ><a href="">Invoices</a>
                    </li>
                    <li className="flex space-x-2 mt-4  py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg
                        ><a href="">Settings</a>
                    </li>
                    <li className="flex space-x-2 mt-4  py-4 text-white hover:bg-white hover:text-blue-800 font-bold  transition duration-100 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg
                        ><a href="">Bills</a>
                    </li>
                </ul>
            </aside>
            <main className="flex-col bg-indigo-50 w-full ml-4 pr-6">

                <h1 className="text-2xl m-8 font-bold text-gray-700">Billing Details</h1>
                

                <div className="flex justify-between mt-4 space-x-4 s">
                <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
                    <img src="https://i.imgur.com/VHc5SJE.png" alt="" />
                    <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">534</h1>
                    <span className="text-gray-500">Coaches</span>
                    </div>
                </div>
                <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
                    <img src="https://i.imgur.com/Qnmqkil.png" alt="" />
                    <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">9.7k</h1>
                    <span className="text-gray-500">Kids</span>
                    </div>
                </div>
                <div className="bg-white w-1/3 rounded-xl shadow-lg flex items-center justify-around">
                    <img src="https://i.imgur.com/dJeEVcO.png" alt="" />
                    <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">50 M</h1>
                    <span className="text-gray-500">Revenue</span>
                    </div>
                </div>
                </div>
                <div className="flex space-x-4 flex-wrap">
                <div className="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
                    <h1 className="text-xl font-bold text-gray-800 mt-4">Today’s Status</h1>
                    <div className="flex justify-between space-x-4 text-center mt-6">
                    <div className="bg-indigo-50 rounded-xl p-10">
                        <h3>8.7K</h3>
                        <spnan>Total Present</spnan>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-10">
                        <h3>99</h3>
                        <spnan>Registrations</spnan>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-10">
                        <h3>30</h3>
                        <spnan>Totals Session</spnan>
                    </div>
                    </div>
                </div>
                <div className="justify-between rounded-xl mt-4 p-4 bg-white shadow-lg">
                    <h1 className="text-xl font-bold text-gray-800 mt-4">Today’s Status</h1>
                    <div className="flex justify-between space-x-4 text-center mt-6">
                    <div className="bg-indigo-50 rounded-xl p-10">
                        <h3>8.7K</h3>
                        <spnan>Total Present</spnan>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-10">
                        <h3>99</h3>
                        <spnan>Registrations</spnan>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-10">
                        <h3>30</h3>
                        <spnan>Totals Session</spnan>
                    </div>
                    </div>
                </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;