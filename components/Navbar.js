import Image from "next/image";
function Navbar() {
    return (
        <div className=" h-full w-min py-10 px-3 xl:px-base hidden xl:flex flex-col justify-between">
            <div className="flex flex-col items-center gap-6 3xl:gap-[2.625rem] ">
                <Image alt="logo" className="cursor-pointer mb-8 navbar-logo object-contain" src="/navbar/logo.svg" width={18} height={18}/>
                <div className="rounded-full xl:p-2 1.5xl:p-3">
                    <Image alt="home" className="cursor-pointer  navbar-icon object-contain" src="/navbar/home.svg" width={18} height={18}/>
                </div>
                <div className="rounded-full bg-primary xl:p-2 1.5xl:p-3">
                    <Image alt="chat" className="cursor-pointer navbar-icon object-contain" src="/navbar/chat.svg" width={18} height={18}/>
                </div>
                <div className="rounded-full xl:p-2 1.5xl:p-3">
                    <Image alt="contacts" className="cursor-pointer  navbar-icon object-contain" src="/navbar/contacts.svg" width={18} height={18}/>
                </div>
                <div className="rounded-full xl:p-2 1.5xl:p-3">
                    <Image alt="call" className="cursor-pointer  navbar-icon object-contain" src="/navbar/call.svg" width={18} height={18}/>
                </div>
                <div className="rounded-full xl:p-2 1.5xl:p-3">
                    <Image alt="bookmark" className="cursor-pointer  navbar-icon object-contain" src="/navbar/bookmark.svg" width={18} height={18}/>
                </div>
                <div className="rounded-full xl:p-2 1.5xl:p-3">
                    <Image alt="info" className="cursor-pointer  navbar-icon object-contain" src="/navbar/info.svg" width={18} height={18}/>
                </div>
            </div>
            <div className="rounded-full xl:p-2 1.5xl:p-3">
                <Image alt="logout" className="cursor-pointer  navbar-icon object-contain" src="/navbar/logout.svg" width={18} height={18}/>
            </div>
        </div>
    );
}

export default Navbar;