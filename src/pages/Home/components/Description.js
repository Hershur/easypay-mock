const Description = ()=> {
    return (
        <div className=" bg-[#F6F9FE] flex relative z-20 items-center overflow-hidden rounded-b-[30%]">
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <h1 className="font-bebas-neue text-3xl sm:text-5xl font-black flex flex-col leading-none text-[#0B244B]">
                        The new standard in spend management
                    </h1>
                    <p className="text-sm sm:text-base text-[#0E274B] py-4">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div className="flex mt-8">
                        <a href="#get-started" className="py-3 px-4 rounded-lg bg-[#7162B7] border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            For online stores
                        </a>
                        <a href="#read-more" className="text-[#0E274B] py-3 px-8 rounded-lg bg-transparent border border-[#7162B7] hover:bg-[#7162B7] hover:text-white text-md">
                            For SMEs
                        </a>
                    </div>
                </div>
                
                <div className="max-w-2xl mx-auto">
                    <div
                        className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 ">
                        <h1>Pay this Invoice</h1>
                        <form className="space-y-4" action="#">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                            <div>
                                <label for="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
                            </div>
                                <div>
                                    <label for="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
                                </div>
                                    <div className="flex items-start">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                                            </div>
                                                <div className="text-sm ml-3">
                                                    <label for="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                                </div>
                                            </div>
                                            <a href="#" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost
                                                Password?</a>
                                        </div>
                                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create
                                                account</a>
                                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;