import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <UserButton></UserButton>
    </div>
  );
}
