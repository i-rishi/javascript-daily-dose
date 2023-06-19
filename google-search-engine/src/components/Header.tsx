import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const url =
    "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
  const gmailUrl: string = "https://mail.google.com";
  const imagesUrl: string = "https://images.google.com";
  return (
    <div className="flex justify-end pr-4 pt-4 space-x-4 items-center text-sm">
      <Link href={gmailUrl} className="hover:underline cursor-pointer">
        Gmail
      </Link>
      <Link href={imagesUrl} className="hover:underline cursor-pointer">
        Images
      </Link>
      <TbGridDots className="text-4xl p-2 hover:bg-slate-100 rounded-full cursor-pointer" />
      <Image
        src={url}
        alt="dp"
        width={30}
        height={30}
        className="rounded-full object-cover"
        style={{ height: 30, cursor: "pointer" }}
      />
    </div>
  );
};

export default Header;
