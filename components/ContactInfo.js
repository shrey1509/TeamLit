'use client'
import Image from "next/image";
import data from './data.json'
function ContactInfo() {
    return (
        <div className=" w-full max-w-xs 1.5xl:max-w-[23.75rem] flex-col py-base h-full border-border overflow-y-scroll no-scrollbar hidden xl:flex  ">
            <div class="flex flex-col gap-1 items-center border-b border-border px-base pb-6">
                <Image alt="account" className=" info-profile rounded-full object-cover" width={74} height={74} src={"/contacts/"+data.contactInfo.image}/>
                <h2 className=" text-xl font-bold">{data.contactInfo.name}</h2>
                <small className=" text-muted">{data.contactInfo.tag}</small>
                
            </div>
            <div class="flex justify-evenly border-b border-border px-base cursor-pointer">
                <div className=" py-4 text-muted">
                    Participants
                </div>
                <div className=" font-medium py-4 border-b-2 border-primary">
                    Shared Files
                </div>
            </div>
            <div className=" flex flex-col gap-[1.875rem] p-base">
                <div class="flex flex-col gap-5">
                    <div className=" w-full flex justify-between items-center">
                        <div class="flex gap-4">
                            <Image alt="pic"  width={16} height={16} src={"/contactInfo/icons/pic.svg"}/>
                            <h6 className=" font-semibold">Shared Media</h6>
                        </div>
                        <Image alt="options" className=" cursor-pointer" width={3} height={16} src={"/contactInfo/icons/options.svg"}/>
                    </div>
                    <div class="grid gap-5 grid-cols-2">
                        {data.contactInfo.media.length>0&&data.contactInfo.media.map((image)=>
                            <Image key={image} alt="media" className=" info-media rounded-[1.25rem] object-cover cursor-pointer" width={150} height={150} src={"/contactInfo/"+image}/>
                        )}
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <div className=" w-full flex justify-between items-center">
                        <div class="flex gap-4">
                            <Image alt="file"  width={16} height={16} src={"/contactInfo/icons/file.svg"}/>
                            <h6 className=" font-semibold">Shared Files</h6>
                        </div>
                    </div>
                    <div class="flex flex-col gap-5 ">
                        {data.contactInfo.files.length>0&&data.contactInfo.files.map((file)=>
                            <div key={file.name} className=" flex items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-[0.875rem]">
                                    <div className="h-[2.5rem] w-[2.5rem] rounded-full object-cover bg-[#F7F5F4] flex items-center justify-center">
                                        <Image alt="file"  width={15} height={18} src={"/contactInfo/icons/file.svg"}/>
                                    </div>
                                    <div className=" flex flex-col gap-[0.375rem]">
                                        <span className=" font-medium">{file.name}</span>
                                        <small className=" text-xs text-muted">{file.date}</small>
                                    </div>
                                </div>
                                <Image alt="options"  width={3} height={16} src={"/contactInfo/icons/options.svg"}/>
                            </div>
                        )}
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <div className=" w-full flex justify-between items-center">
                        <div class="flex gap-4">
                            <Image alt="link"  width={16} height={16} src={"/contactInfo/icons/link.svg"}/>
                            <h6 className=" font-semibold">Shared Links</h6>
                        </div>
                    </div>
                    {data.contactInfo.links.length>0&&data.contactInfo.links.map((link)=>
                        <div key={link} className=" flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-[0.875rem]">
                                <div className="h-[2.5rem] w-[2.5rem] rounded-full object-cover bg-[#F7F5F4] flex items-center justify-center">
                                    <Image alt="link"  width={15} height={18} src={"/contactInfo/icons/link.svg"}/>
                                </div>
                                <small className=" text-xs truncate w-2/3">{link}</small>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;