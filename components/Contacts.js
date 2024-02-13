import Image from "next/image";
import data from './data.json'

function Contacts() {
    return (
        <div className=" w-[25rem] bg-lightGray py-[1.875rem] overflow-hidden flex flex-col">
            <div class="flex gap-8 items-center border-b pb-[1.875rem] border-border px-base">
                <div className=" rounded-full border-2 border-[#F2F2F2] p-[0.625rem]">
                    <Image alt="account" className=" contacts-profile rounded-full object-cover" width={54} height={54} src={"/contacts/"+data.accountImage}/>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className=" font-bold text-xl">{data.accountName}</h3>
                    <span className=" text-sm text-muted">My Account</span>
                </div>
            </div>
            <h1 className=" pt-6 pb-4 font-bold text-[2rem] px-base">Online Now</h1>
            <div className=" px-base flex gap-4">
                {data.onlineList.map((contact)=>
                    <div key={contact} class="relative">
                        <Image className=" contacts-profile rounded-full object-cover"  src={"/contacts/"+contact} width={56} height={56} alt="online"/>
                        <div className=" absolute rounded-full end-0 bottom-[0.25rem] w-[0.875rem] h-[0.875rem] border border-[#FFFBF4] bg-lightGreen"/>
                    </div>
                )}
                <div className=" contacts-profile rounded-full object-cover bg-[#FBE5D9] text-primary flex items-center justify-center">
                    <span className=" font-semibold text-sm">18+</span>
                </div>
            </div>
            <div className=" px-base pt-base flex justify-between mb-5">
                <h2 className=" font-bold text-xl">Messages</h2>
                <div className=" flex gap-5">
                    <Image className=" cursor-pointer" width={17} height={17} alt="edit" src="/contacts/icons/edit.svg" />
                    <Image className=" cursor-pointer" width={17} height={17} alt="favourite" src="/contacts/icons/favourite.svg" />
                </div>
            </div>
            <div className=" mx-[1.875rem] rounded-2xl py-[0.875rem] px-5 flex gap-3 bg-white orange-shadow">
                <Image className="" width={17} height={17} alt="search" src="/contacts/icons/search.svg" />
                <span className=" text-muted text-sm">Search</span>
            </div>
            <div className=" px-base mt-[1.875rem] flex flex-col gap-[0.375rem]">
                {data.contactMessages.map((contact)=>
                    <div key={contact} className={`${contact.active?"bg-white":""} rounded-3xl px-[0.625rem] py-3 `}>
                        <div  className=" overflow-hidden cursor-pointer flex items-center relative gap-[1.125rem]">
                            <div  class="relative">
                                <Image className=" contacts-profile rounded-full object-cover"  src={"/contacts/"+contact.image} width={56} height={56} alt="online"/>
                                <div className=" absolute rounded-full end-0 bottom-[0.25rem] w-[0.875rem] h-[0.875rem] border border-[#FFFBF4] bg-lightGreen"/>
                            </div>
                            <div className=" flex flex-col gap-[0.625rem] w-full overflow-hidden">
                                <div class="flex justify-between">
                                    <span className=" font-semibold">{contact.firstName+" "+contact.lastName}</span>
                                    <small className=" text-muted text-xs">{contact.sentAt}</small>
                                </div>
                                <small className=" text-muted truncate w-2/3 flex gap-2">
                                {contact.status=="typing"?
                                <>
                                    <Image width={14} height={14} alt="typing" src="/contacts/icons/typing.svg" />
                                    {contact.firstName + " is typing....."}
                                </>
                                
                                :contact.status=="picReceived"?
                                    <>
                                        <Image width={14} height={14} alt="picture" src="/contacts/icons/picture.svg" />
                                        Sent a picture
                                    </>
                                :contact.status=="fileReceived"?
                                    <>
                                        <Image width={14} height={14} alt="file" src="/contacts/icons/file.svg" />
                                        Sent an attachment
                                    </>
                                :contact.status=="msgReceived"?
                                contact.message
                                :contact.status=="msgSent"?
                                    <><span className=" text-black">You:</span> {contact.message}</>
                                :""}
                                </small>
                                
                            </div>
                            {contact.notifications>0?<div className=" absolute end-0 bottom-1 rounded-full h-min py-1 px-[0.687rem] bg-primary text-white">{contact.notifications}</div>:""}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Contacts;