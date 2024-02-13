import data from './data.json'
import Image from "next/image";

function Chat() {
    return (
        <div className=" w-[35rem] flex flex-col py-base h-full border-r border-border">
             <div class="flex gap-8 items-center border-b pb-[1.875rem] border-border px-base">
                <div className=" rounded-full border-2 border-[#FFE0C9] border-opacity-50 p-[0.625rem] relative">
                    <Image alt="account" className=" contacts-profile rounded-full object-cover" width={54} height={54} src={"/contacts/"+data.activeChat.image}/>
                    <div className=" top-0 left-0 rounded-full absolute  border-l-2 border-b-2 border-[#82CF9C] h-full w-full"></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className=" font-bold text-xl">{data.activeChat.name}</h3>
                    <span className=" text-sm text-muted">My Account</span>
                </div>
            </div>
        </div>
    );
}

export default Chat;