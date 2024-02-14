import Chat from "@/components/Chat";
import ContactInfo from "@/components/ContactInfo";
import Contacts from "@/components/Contacts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full w-full overflow-x-hidden 3xl:justify-between">
      <Contacts />
      <Chat />
      <ContactInfo />
    </div>
  );
}
