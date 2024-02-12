import Image from "next/image";

function Contacts() {
    return (
        <div className=" w-[25rem] bg-lightGray py-[1.875rem]">
            <div class="flex gap-8 items-center border-b pb-[1.875rem] border-border px-base">
                <div className=" rounded-full border-2 border-[#F2F2F2] p-[0.625rem]">
                    <Image alt="account" className=" contacts-profile rounded-full object-cover" width={54} height={54} src="/contacts/account.png"/>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className=" font-bold text-xl">John Doe</h3>
                    <span className=" text-sm text-muted">My Account</span>
                </div>
            </div>
        </div>
    );
}

export default Contacts;