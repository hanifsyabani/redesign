import Search from "@/components/Search/Search";
import Image from "next/image";
import gambar from "@/assets/gambar.png";
import { Region } from "@/components/Region/Region";
import Header from "@/components/Header/Header";
import { IconWrapper, icons } from "@/components/Sosmed/Sosmed";

export default function Home() {
  return (
    <div className=" py-20">
      <div className="px-[5%]">
        <Search />
      </div>

      <section className="mt-10 bg-gradient-to-r from-primary to-[#841E1E]  lg:mx-8 lg:flex justify-between rounded-sm gap-2 ">
        <div className="lg:w-1/2 py-16  ">
          <h1 className="text-white text-center font-extrabold lg:text-6xl text-3xl">
            Google Developer Students Clubs
          </h1>
          <p className="text-white max-w-lg lg:mt-16 mt-10 lg:pl-20 px-4 lg:px-0">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies. Students
            from all undergraduate or graduate programs with an interest in
            growing as a developer are welcome. By joining a GDSC, students grow
            their knowledge in a peer-to-peer learning environment and build
            solutions for local businesses and their community.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image src={gambar} alt="gambarhome" className="w-full" />
        </div>
      </section>

      <section className="my-32 relative bg-gray-200 lg:mx-8 border border-black overflow-hidden">
        <div className="bg-primary w-80 h-80 -top-20 -left-20 rounded-full absolute blur-2xl opacity-40"></div>
        <div className="bg-[#4286F5] w-80 h-80 rounded-full absolute blur-2xl opacity-30 -bottom-20 -left-20"></div>
        <div className="bg-[#FABD03] w-72 h-72 rounded-full absolute blur-2xl opacity-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
        <div className="bg-[#109D58] w-80 h-80 rounded-full absolute blur-2xl opacity-30 -bottom-20 -right-20"></div>

        <div className="py-20">
          <Header title="EXPLORE BY REGION" />
          <div className="flex justify-center items-center gap-10 flex-wrap mt-10">
            {Region.map((region) => (
              <div className="bg-white w-72 rounded-full py-6 px-2 text-center z-20 cursor-pointer">
                <button className=" text-2xl">{region.name}</button>
              </div>
            ))}
          </div>
          <div className="bg-white w-72 rounded-full py-6 px-2 text-center mx-auto mt-7">
            <button className=" text-2xl z-20">Oceania</button>
          </div>
        </div>
      </section>

      <section className="my-32 mx-8">
        <Header title="CONNECT WITH US" />
        <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
          {icons.map(({ component: Icon, key }) => (
            <IconWrapper Icon={Icon} key={key} />
          ))}
        </div>
        <p className="text-center mt-10 font-semibold max-w-lg mx-auto">
          Get to know more about Google Developer Student Clubs through our
          social media
        </p>
      </section>


    </div>
  );
}
