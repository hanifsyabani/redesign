import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <footer className=" bg-secondary py-10    ">
      <div>
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
    </footer>
  );
}
