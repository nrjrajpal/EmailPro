import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero w-full flex flex-col justify-center items-center h-fit pt-12 mt-16 md:pt-[72px] lg:pt-[96px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl px-4 sm:w-[615px] md:w-[800px] text-black text-center leading-[42px] lg:leading-[72px] !font-jakarta">
            <b>Create</b>, <b>Send</b>, and <b>Track</b> professional looking{" "}
            <b>email campaigns</b> with ease
          </h1>
          <div className="hidden sm:flex h-12 w-[450px] lg:w-[500px] bg-black rounded-full p-2 pl-6 justify-end mt-[42px] mx-8">
            <input
              className="bg-transparent focus:outline-none text-[#EFECE6] placeholder-[#EFECE6]/85 right-auto w-full"
              placeholder="Enter your email"
              type="email"
            />
            <button className="text-black bg-[#EFECE6] rounded-full px-4 ml-2 min-w-fit hover:opacity-85 transition-all duration-300">
              Sign up
            </button>
          </div>
          <div className="flex sm:hidden w-full px-[5%] pt-[42px] justify-center">
            <button className="py-2 h-fit w-full max-w-[400px] bg-black rounded-full text-2xl text-white">
              Sign up
            </button>
          </div>
          <p className="px-[5%] max-w-[500px] lg:max-w-[750px] text-center text-[#555555] text-[14px] pt-2 lg:pt-4">
            Email Pro{"\u2122"} is the perfect solution for anyone looking to
            improve their email marketing efforts.
          </p>
          <div className="h-auto w-[90%] relative pt-[42px]">
            <Image
              src="https://pxc1hd7esl.ufs.sh/f/t96e14fjGwQPJGSxZSauGrz53PU10cth4CYlpnOwNVXBf2DL"
              alt="email pro app mockup"
              width={0} // width and height set to auto
              height={0}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
    )
}