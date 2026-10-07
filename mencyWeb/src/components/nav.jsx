export function Nav() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 flex h-20 px-7 justify-between bg-[#C19000] items-center rounded-b-3xl">
            <p className="text-white text-[18px] cursor-default">
                Início
            </p>

            <button className="cursor-pointer bg-white text-black text-[18px] py-1 px-12 rounded-xl transition duration-300 hover:scale-102">
                Login
            </button>
        </nav>
    );
}