export default function Navigation() {
  return (
    <nav className="navigation fixed grid grid-cols-[70%_30%] lg:grid-cols-[35%_30%_35%] h-24 w-full  max-w-screen-2xl z-10 navbar-effect pb-6">
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
        <span className="text-4xl text-black font-jakarta font-semibold drop-shadow-[0px_0px_12px_rgba(181,176,167)]">
          EmailPro
        </span>
      </div>
      <div className="hidden lg:grid lg:grid-cols-3 text-base text-black lg:items-center font-jakarta">
        <a href="/#why-email-pro" className="ml-auto bg-[#E4DED3]/90 min-w-fit p-1 rounded-xl">
          Why Email Pro?
        </a>
        <a href="/#pricing" className="mx-auto bg-[#E4DED3]/90 min-w-fit p-1 rounded-xl ">
          Pricing
        </a>
        <a href="/#faqs" className="mr-auto bg-[#E4DED3]/90 min-w-fit p-1 rounded-xl ">
          FAQs
        </a>
      </div>
      <div className="flex items-center justify-end pr-4 lg:pr-8 h-full">
        <button className="text-white bg-black rounded-full text-lg px-4 py-1 hidden lg:block">
          Sign in
        </button>
        <button className="text-black text-4xl px-4 block lg:hidden drop-shadow-[0px_0px_15px_rgba(255,255,255)]">
          {"\u2630"}
        </button>
      </div>
    </nav>
  );
}
