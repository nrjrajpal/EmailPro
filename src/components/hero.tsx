import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  return (
    <div className="hero opacity-0 w-full flex flex-col justify-center items-center h-fit mt-36 md:mt-16 md:pt-[72px] lg:pt-[96px]">
      <h1 className="heading text-[42px] sm:text-5xl md:text-6xl px-4 sm:w-[615px] md:w-[800px] text-black text-center leading-[50px] lg:leading-[72px] !font-jakarta ">
        <span className="heading-word inline-block">
          <b>Create</b>,&nbsp;
        </span>
        <span className="heading-word inline-block">
          <b>Send</b>,&nbsp;
        </span>
        <span className="heading-word inline-block">and&nbsp;</span>
        <span className="heading-word inline-block">
          <b>Track</b>&nbsp;
        </span>
        <span className="heading-word inline-block">professional&nbsp;</span>
        <span className="heading-word inline-block">looking&nbsp;</span>
        <span className="heading-word inline-block">
          <b>email</b>&nbsp;
        </span>
        <span className="heading-word inline-block">
          <b>campaigns&nbsp;</b>
        </span>
        <span className="heading-word inline-block">with&nbsp;</span>
        <span className="heading-word inline-block">ease</span>
      </h1>

      <div className="email-field hidden opacity-0 sm:flex h-12 w-[450px] lg:w-[500px] bg-black rounded-full p-2 pl-6 justify-end mt-[42px] mx-8">
        <input
          className="bg-transparent focus:outline-none text-[#EFECE6] placeholder-[#EFECE6]/85 right-auto w-full"
          placeholder="Enter your email"
          type="email"
        />
        <button className="text-black bg-[#EFECE6] rounded-full px-4 ml-2 min-w-fit hover:opacity-85 transition-all duration-300">
          Sign up
        </button>
      </div>
      <div className="flex sm:hidden email-field opacity-0 w-full px-[5%] pt-8 justify-center">
        <button className="py-2 h-fit w-full max-w-[400px] bg-black rounded-full text-2xl text-white">
          Sign up
        </button>
      </div>
      <p className="email-field-subtext opacity-0 px-[5%] max-w-[500px] lg:max-w-[750px] text-center text-[#555555] text-[14px] pt-2 lg:pt-4">
        Email Pro{"\u2122"} is the perfect solution for anyone looking to
        improve their email marketing efforts.
      </p>
      <div className="hero-image opacity-0 w-[90%] relative pt-[32px] aspect-[1920/880]">
        <Image
          src="https://pxc1hd7esl.ufs.sh/f/t96e14fjGwQPTN5ioFVD4UnPh3eA2J8sWLyFlorCcQMgmaIN"
          alt="email pro app mockup"
          width={1920}
          height={880}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          priority
          onLoadingComplete={() => { ScrollTrigger.refresh(); }}
        />
      </div>
    </div>
  );
}
