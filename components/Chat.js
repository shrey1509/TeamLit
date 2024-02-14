'use client'
import data from './data.json'
import Image from "next/image";

function Chat() {
    return (
        <div className="w-full max-w-[35rem] 2xl:max-w-none flex flex-col py-base h-full border-r border-border overflow-hidden">
            <div class="flex gap-8 items-center border-b pb-[1.875rem] border-border px-base">
                <div className=" rounded-full border-2 border-[#FFE0C9] border-opacity-50 p-[0.625rem] relative">
                    <Image alt="account" className=" contacts-profile rounded-full object-cover" width={54} height={54} src={"/contacts/"+data.activeChat.image}/>
                    <div className=" top-0 left-0 rounded-full absolute  border-l-2 border-b-2 border-[#82CF9C] h-full w-full"></div>
                </div>
                <div class="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <h3 className=" font-bold text-xl">{data.activeChat.name}</h3>
                        <div className="flex pl-3">
                            {data.activeChat.participants.length>0&&data.activeChat.participants.map((contact)=><Image key={contact} className=" -ml-3 rounded-full border border-white object-cover participants-profile"  src={"/contacts/"+contact} width={30} height={30} alt="group members"/>)}
                            <div className=" -ml-3 h-[1.875rem] w-[1.875rem] rounded-full object-cover bg-primary flex items-center justify-center">
                                <span className=" font-semibold text-xs text-white">7+</span>
                            </div>
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <div className="h-[3.125rem] w-[3.125rem] rounded-full cursor-pointer object-cover bg-[#F7F5F4] flex items-center justify-center">
                            <Image alt="video"  width={18} height={14} src={"/chat/icons/video.svg"}/>
                        </div>
                        <div className="h-[3.125rem] w-[3.125rem] rounded-full cursor-pointer object-cover bg-[#F7F5F4] flex items-center justify-center">
                            <Image alt="call"  width={18} height={18} src={"/chat/icons/call.svg"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" px-base overflow-y-scroll no-scrollbar">
                {
                    data.activeChat.messages.length>0&&data.activeChat.messages.map((day)=>
                        <div key={day.day} className=" flex flex-col gap-5 pt-5">
                            <small className=" w-full text-center">{day.day}</small>
                            {day.messageList.map((contact)=>
                                <div key={contact.name} className={`${contact.isUser?' self-end flex-row-reverse':'self-start flex-row'} self flex gap-5`}>
                                    <div class="relative h-min">
                                        <Image alt="account" className=" contacts-profile rounded-full object-cover" width={56} height={56} src={"/contacts/"+contact.image}/>
                                        {contact.online?<div className=" absolute rounded-full end-0 bottom-[0.25rem] w-[0.875rem] h-[0.875rem] border border-[#FFFBF4] bg-lightGreen"/>:""}
                                    </div>
                                    <div className={`${contact.isUser?' items-end':' items-start'} flex flex-col gap-[0.625rem]`}>
                                        <div className=" flex gap-1 items-baseline">
                                            <span className=" font-semibold">{contact.name}</span>
                                            <small className=" text-muted text-xs">{contact.sentAt}</small>
                                        </div>
                                        {contact.msgs.map((msg)=>
                                            <div key={msg} className={`${contact.isUser?'bg-primary text-white rounded-se-none':'bg-lightGray text-black rounded-ss-none'}   rounded-2xl p-3 w-fit text-sm`}>
                                                {msg}
                                            </div>
                                        )}

                                    </div>
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
            <div class="mt-auto w-full flex flex-col gap-7">
                {data.activeChat.typing.length>0&&data.activeChat.typing.map((contact)=>
                    <div key={contact.name} className="flex gap-2 items-center px-base">
                        <Image alt="account" className="typing-profile rounded-full object-cover" width={28} height={28} src={"/contacts/"+contact.image}/>
                        <span className=" text-muted text-sm"><span className=" text-black">{contact.name}</span> is typing.....</span>
                    </div>
                )}
                <div className=" self-center min-w-[30rem] 3xl:min-w-[40rem] cursor-pointer mx-[1.875rem] rounded-2xl py-[0.875rem] px-5 flex gap-3 justify-between bg-white orange-shadow">
                    <div class="flex gap-3">
                        <Image className="" width={14} height={14} alt="edit" src="/chat/icons/edit.svg" />
                        <input className=" text-sm focus:outline-none" placeholder="Your message....." />
                    </div>
                    <div class="flex gap-4">
                        <Image className="" width={14} height={14} alt="mic" src="/chat/icons/mic.svg" />
                        <Image className="" width={14} height={14} alt="pic" src="/chat/icons/pic.svg" />
                        <Image className="" width={14} height={14} alt="attach" src="/chat/icons/attach.svg" />
                        <Image className="" width={14} height={14} alt="send" src="/chat/icons/send.svg" />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Chat;