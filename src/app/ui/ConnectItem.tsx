import Link from "next/link";
import Image from "next/image";

interface ConnectItemInterface {
  social: string;
  url: string;
  handle: string;
  icon: string;
  profile_pic: string;
}

export default function ConnectItem({
  connect,
}: {
  connect: ConnectItemInterface;
}) {
  return (
    <Link
      href={connect.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between w-full hover:animate-borderBlink border border-neutral-800 hover:border-neutral-600 rounded-lg p-1 bg-gradient-to-b from-neutral-900 to-neutral-950 hover:from-neutral-800 hover:to-neutral-900 active:scale-95 active:from-neutral-900 active:to-neutral-800 transition-all duration-100 ease-in-out"
    >
      <div className="w-full flex justify-between items-center text-center">
        <Image src={connect.icon} height={50} width={50} alt={connect.handle} />
        <div className="flex flex-col">
          <p className="font-semibold text-neutral-100">{connect.social}</p>
          <p className="text-neutral-500">{connect.handle}</p>
        </div>
        <Image
          src={connect.profile_pic}
          height={100}
          width={100}
          alt={"Hemant's Profile Pic"}
          className="rounded-lg aspect-auto w-16 h-16"
        />
      </div>
    </Link>
  );
}
