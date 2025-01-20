import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen min-w-fit flex justify-center bg-[#E4DED3]">
      <div className="h-fit max-w-screen-2xl w-full">
        <nav className="navigation grid grid-cols-[70%_30%] lg:grid-cols-[25%_50%_25%] h-16 w-full z-10 bg-[#E4DED3]/80">
          <div className="flex pl-5 sm:pl-8 md:left-auto items-center gap-2 sm:gap-0 h-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 3C15.186 3 12.8235 3.15 10.875 3.582C8.91 4.0185 7.2765 4.764 6.021 6.021C4.764 7.2765 4.0185 8.91 3.582 10.875C3.1485 12.825 3 15.186 3 18C3 20.814 3.15 23.1765 3.582 25.125C4.0185 27.09 4.764 28.7235 6.021 29.979C7.2765 31.236 8.91 31.9815 10.875 32.418C12.825 32.8515 15.186 33 18 33C20.814 33 23.1765 32.85 25.125 32.418C27.09 31.9815 28.7235 31.236 29.979 29.979C31.236 28.7235 31.9815 27.09 32.418 25.125C32.8515 23.1765 33 20.814 33 18C33 15.186 32.85 12.8235 32.418 10.875C31.9815 8.91 31.236 7.2765 29.979 6.021C28.7235 4.764 27.09 4.0185 25.125 3.582C23.175 3.1485 20.814 3 18 3ZM22.2825 23.1585C20.853 27.1275 15.0855 26.6175 14.376 22.4595C14.3376 22.234 14.2301 22.0259 14.0683 21.8642C13.9065 21.7024 13.6985 21.5949 13.473 21.5565C9.315 20.847 8.805 15.0795 12.774 13.6515L18.633 11.541C22.215 10.251 25.6815 13.716 24.3915 17.2995L22.2825 23.1585ZM13.9785 18.5985C14.8162 18.7417 15.5887 19.1414 16.1895 19.7425C16.7903 20.3435 17.1897 21.1163 17.3325 21.954C17.523 23.073 19.0755 23.2095 19.4595 22.143L21.5685 16.2825C21.6651 16.0146 21.6835 15.7247 21.6215 15.4467C21.5594 15.1688 21.4195 14.9142 21.2182 14.7128C21.0168 14.5115 20.7622 14.3716 20.4843 14.3095C20.2063 14.2475 19.9164 14.2659 19.6485 14.3625L13.7895 16.473C12.723 16.857 12.8595 18.4065 13.9785 18.5985Z"
                fill="#101214"
              />
            </svg>
            <span className="text-4xl text-black font-sans font-semibold">
              EmailPro
            </span>
          </div>
          <div className="hidden lg:flex text-base text-black gap-12 lg:justify-center lg:items-center font-sans">
            <a href="/#why-email-pro">Why Email Pro?</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#faqs">FAQs</a>
          </div>
          <div className="flex items-center justify-end pr-4 lg:pr-8 h-full">
            <button className="text-white bg-black rounded-full text-lg px-4 py-1 hidden lg:block">
              Sign in
            </button>
            <button className="text-black text-4xl px-4 block lg:hidden">
              {"\u2630"}
            </button>
          </div>
        </nav>
        <div className="hero w-full flex flex-col justify-center items-center h-fit py-12 md:py[72px] lg:py-[96px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl px-4 sm:w-[615px] md:w-[800px] text-black text-center leading-[42px] lg:leading-[72px]">
            <b>Create</b>, <b>Send</b>, and <b>Track</b> professional looking{" "}
            <b>email campaigns</b> with ease
          </h1>
          <div className="hidden sm:flex h-12 w-[650px] lg:w-[500px] bg-black rounded-full p-2 pl-6 justify-end mt-[42px]">
            <input
              className="bg-transparent focus:outline-none text-[#EFECE6] placeholder-[#EFECE6]/85 right-auto w-full"
              placeholder="Enter your email"
              type="email"
            />
            <button className="text-black bg-[#EFECE6] rounded-full px-4 ml-2 min-w-fit hover:opacity-85 transition-all duration-300">
              Sign up
            </button>
          </div>
          <div className="block sm:hidden w-full px-[5%] pt-[42px]">
            <button className="py-2 h-fit w-full bg-black rounded-full text-2xl text-white">
              Sign up
            </button>
          </div>
          <p className="px-[5%] max-w-[500px] lg:max-w-[750px] text-center text-[#555555] text-[14px] pt-2">
            Email Pro" is the perfect solution for anyone looking to improve
            their email marketing efforts.
          </p>
        </div>
      </div>
    </div>
  );
}
