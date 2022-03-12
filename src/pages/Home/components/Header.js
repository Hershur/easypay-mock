const Header = ()=> {
    return (
        <header class="h-24 sm:h-32 flex items-center z-30 w-full bg-[#F6F9FE]">
            <div class="container mx-auto px-6 flex items-center justify-between">
                <div class="text-gray-800 font-black text-4xl">
                    <span>Easypay</span> 
                    <span className="text-6xl text-red-600">.</span>
                </div>
                <div class="flex items-center">
                    <nav class="font-sen text-gray-800 text-lg lg:flex items-center hidden">
                        <a href="#customers" class="py-2 px-6 flex">
                            Customers
                        </a>
                        <a href="#features" class="py-2 px-6 flex">
                            Features
                        </a>
                        <a href="#partners" class="py-2 px-6 flex">
                            Partners
                        </a>
                        <a href="#resource" class="py-2 px-6 flex">
                            Resource
                        </a>
                    </nav>
                    <button class="lg:hidden flex flex-col ml-4">
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                        </span>
                    </button>
                </div>

                <div class="flex items-center gap-4">
                    <button>Login</button>
                    <button className="bg-[#7162B7] px-5 py-2 rounded text-white">Register</button>
                </div>
            </div>
        </header>
    )
};

export default Header;