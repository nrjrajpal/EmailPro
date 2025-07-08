"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WhyEmailPro() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    // Animate heading
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
    // Animate subheading
    gsap.from(subheadingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
    // Animate cards (each card triggers individually as it enters viewport)
    if (cardsRef.current) {
      const cardElements = cardsRef.current.querySelectorAll(".why-card");
      cardElements.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.85,
          y: 40,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-fit py-16 md:py-[72px] md:px-16 lg:px-24 flex flex-col items-center gap-6 lg:gap-[72px]"
      id="why-email-pro"
    >
      <div className="flex items-center flex-col text-center">
        <h1
          ref={headingRef}
          className="text-[32px] md:text-5xl lg:text-[56px] font-jakarta text-black font-bold"
        >
          Why Email Pro?
        </h1>
        <h4
          ref={subheadingRef}
          className="text-base md:text-lg md:pt-2 text-[#555555] max-w-lg lg:max-w-xl text-center px-4"
        >
          Email Pro is designed to address these common pain points,
          empowering users to streamline their email marketing efforts and
          achieve better results
        </h4>
      </div>
      <div
        ref={cardsRef}
        className="h-fit w-fit grid grid-cols-1 min-[1224px]:grid-cols-2 gap-8 justify-items-center px-6"
      >
        <div className="why-card relative">
          <div className="w-full max-w-[500px] h-48 rounded-2xl absolute bg-black gap -z-10 inset-[10px]"></div>
          <div className="bg-[#EFECE6] border border-black w-full max-w-[500px] h-48 rounded-2xl flex items-center justify-between p-10 gap-8">
            <div className="flex flex-col gap-6 max-w-72">
              <h1 className="text-3xl text-black font-bold font-jakarta">
                Time-Consuming Email Creation
              </h1>
              <div className="flex gap-2 items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1223 10.2676L9.62231 15.7676M3.62231 12.7676C3.62231 5.35558 5.21031 3.76758 12.6223 3.76758C20.0343 3.76758 21.6223 5.35558 21.6223 12.7676C21.6223 20.1796 20.0343 21.7676 12.6223 21.7676C5.21031 21.7676 3.62231 20.1796 3.62231 12.7676Z"
                    stroke="#101214"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6223 9.76758H15.2943C15.4753 9.76758 15.6223 9.91458 15.6223 10.0956V14.7676"
                    stroke="#101214"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-base text-black font-bold">Sign up now</h4>
              </div>
            </div>
            <svg
              width="91"
              height="132"
              viewBox="0 0 71 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path
                d="M5.53394 51.1725H36.8105C36.9192 51.1725 37.0234 51.2156 37.1002 51.2923C37.1771 51.3689 37.2202 51.4729 37.2202 51.5814V53.9869C37.2202 54.0954 37.1771 54.1994 37.1002 54.2761C37.0234 54.3527 36.9192 54.3958 36.8105 54.3958H20.538V60.1908"
                stroke="#101214"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
              <path
                d="M9.22474 7.88586L7.66823 19.2642C7.27721 22.1119 7.71791 25.0117 8.93745 27.6156L11.2126 32.4546C12.7243 35.6699 15.3339 38.1817 18.5294 39.497L25.3988 42.3251L9.22474 7.88586Z"
                fill="#F7F7F7"
                stroke="#CCCCCC"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M14.2087 50.9455H4.87927C2.75938 50.9455 1.20527 48.869 1.72224 46.7246L6.04364 32.131C6.44377 30.4682 7.87944 29.303 9.52477 29.303"
                stroke="#CCCCCC"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M25.9918 42.9672C25.9031 42.9665 25.8165 42.9405 25.7422 42.8922C25.6679 42.8439 25.609 42.7754 25.5724 42.6948L9.1031 7.61191C8.95105 7.28846 9.17752 6.9115 9.52244 6.9115C9.6116 6.91177 9.69881 6.93757 9.77371 6.98585C9.84861 7.03412 9.90805 7.10284 9.94497 7.18384L26.4111 42.2667C26.5632 42.5902 26.3367 42.9672 25.9918 42.9672Z"
                fill="#878787"
                stroke="#CCCCCC"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M15.7117 50.9784C16.3769 50.9784 16.9161 50.4403 16.9161 49.7764C16.9161 49.1126 16.3769 48.5745 15.7117 48.5745C15.0465 48.5745 14.5073 49.1126 14.5073 49.7764C14.5073 50.4403 15.0465 50.9784 15.7117 50.9784Z"
                stroke="#101214"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M14.5113 49.9377C14.4897 49.2045 14.9739 48.5959 15.7117 48.5744L15.8285 48.5704C16.1417 48.5613 16.4547 48.5922 16.76 48.6622L26.5048 50.9128"
                stroke="#101214"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M70.4286 39.061L62.6925 67.5088C62.3004 68.9531 61.4427 70.2285 60.2519 71.1378C59.0611 72.0472 57.6034 72.5401 56.104 72.5403H29.9003"
                stroke="#101214"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
              <path
                d="M32.0186 72.5371L53.1406 104.516"
                stroke="#101214"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M55.1413 72.5371L32.0986 104.836"
                stroke="#101214"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M32.3659 93.6029C32.3659 93.6029 31.2672 95.2801 29.3594 95.0453L28.0693 93.2028C29.4001 92.9173 30.7023 92.5126 31.9602 91.9937C32.0914 92.6062 32.2283 93.1677 32.3659 93.6029Z"
                fill="#878787"
              />
              <path
                d="M59.5611 64.3501C58.7881 66.0776 56.2128 70.566 50.2893 70.752C42.9461 70.9828 29.4361 70.2912 29.4361 70.2912C29.4361 70.2912 32.5259 82.4754 32.5924 91.7085C32.5924 91.7085 30.1572 92.9416 26.5424 93.4831C26.5424 93.4831 13.5782 69.2841 16.1526 63.3678C18.0684 58.9664 32.63 57.2549 39.2121 56.7023C41.9474 58.2852 51.0488 63.2456 59.5611 64.3501Z"
                fill="#CCCCCC"
              />
              <path
                d="M32.3659 93.6029C32.3659 93.6029 33.7007 95.0676 35.174 96.2305C36.1071 96.9668 35.7406 98.3868 34.9459 99.58C33.7509 101.369 32.4247 103.068 30.9782 104.662C30.9782 104.662 28.9112 104.88 24.8883 104.715C24.8883 104.715 24.7378 103.29 26.1599 102.647C29.4009 101.18 30.1308 97.2958 29.3609 95.0493C29.3593 95.0453 30.9782 95.3336 32.3659 93.6029Z"
                fill="url(#paint0_linear_189_431)"
              />
              <path
                d="M35.8086 96.6465C36.1959 97.4667 35.6197 98.6998 35.0259 99.5799C35.0259 99.5799 32.8188 102.651 31.1383 104.738L24.8082 104.791"
                stroke="#101214"
                strokeWidth="7"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M28.9496 101.573C28.9496 101.573 27.4891 100.62 28.5495 100.037"
                stroke="#101214"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M29.7499 100.695C29.7499 100.695 27.9693 99.7413 29.0296 99.1583"
                stroke="#101214"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M51.3489 24.135C51.3489 24.135 58.0551 22.291 58.5296 16.8147C58.6104 15.8874 51.3489 24.135 51.3489 24.135Z"
                fill="#101214"
              />
              <path
                d="M51.4297 13.4316C51.4297 13.4316 54.3242 19.4718 56.9875 21.7264C56.9875 21.7264 52.7357 24.548 49.1665 24.5464C49.1665 24.5464 46.8298 20.4398 45.8615 18.8688L51.4297 13.4316Z"
                fill="#878787"
              />
              <path
                d="M48.0502 22.5969C47.3115 21.3135 46.3856 19.7218 45.8615 18.8688L50.098 14.7343L50.3885 15.3117C50.6974 18.0798 49.9236 21.1003 48.0502 22.5969Z"
                fill="#555555"
              />
              <path
                d="M50.5006 14.6392C50.5006 14.6392 50.4878 16.9552 49.6051 18.2371C48.4943 19.8511 45.667 21.5914 43.5151 21.2719C41.3632 20.9525 39.4866 10.0757 41.1007 9.43201C42.7149 8.7883 47.2243 8.1973 48.5688 10.1819C49.9132 12.1666 50.5006 14.6392 50.5006 14.6392Z"
                fill="#878787"
              />
              <path
                d="M52.7589 15.9817C52.7589 15.9817 51.8218 16.1319 50.4598 15.5081C50.5022 15.0002 50.5214 13.9572 49.9948 13.6569C49.4202 13.3294 49.0921 14.2535 48.9905 14.6033C48.8678 14.5085 48.7438 14.4065 48.6184 14.2974C46.3776 12.3543 46.961 10.4519 46.961 10.4519C46.961 10.4519 43.6272 12.4086 40.4509 12.2792C37.8149 12.1722 36.524 8.49043 38.7464 7.39309C38.7464 7.39309 38.5863 8.40178 40.5262 7.9186C42.466 7.43542 42.0891 5.46995 44.8075 5.12414C48.1574 4.70166 48.8497 6.9163 48.8497 6.9163C48.8497 6.9163 50.4542 6.07373 52.1059 7.60633C53.8657 9.23956 51.5921 13.7982 52.7589 15.9817Z"
                fill="#101214"
              />
              <path
                d="M47.3035 10.0973C47.3035 10.0973 44.1873 12.5779 40.8006 13.018C37.6148 13.4317 36.2191 9.32583 38.3838 7.83716"
                stroke="#101214"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
              <path
                d="M48.5615 7.08162C48.5615 7.08162 49.6507 5.53545 51.7129 6.44271"
                stroke="#101214"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
              <path
                d="M60.2654 64.4331C62.7622 61.9925 65.9424 46.6002 65.1118 36.7321C65.0598 35.6086 64.8949 34.4932 64.6196 33.4026C64.4781 32.7605 64.2884 32.1299 64.0522 31.5162C63.332 29.6793 61.6851 27.7625 59.3947 26.4536C57.0604 24.7852 54.0146 23.6311 49.9781 24.3052C43.9697 25.3083 42.5749 31.2941 42.2516 34.0191L42.2467 34.0143L40.6166 43.1604L28.7216 43.6085V47.4915C28.7216 47.4915 38.4823 53.4334 45.3966 51.7115L45.4574 51.6955C42.1763 54.8981 38.3895 56.2159 38.3895 56.2159C38.3895 56.2159 49.9108 63.3494 60.2654 64.4331Z"
                fill="#101214"
              />
              <path
                d="M51.2385 39.2015C51.2385 39.2015 48.961 50.6501 44.7268 52.1108"
                stroke="#878787"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M51.3489 24.1351C53.2047 23.8955 58.1223 20.7752 58.5256 16.6677C58.5256 16.6677 65.9192 24.1351 63.2111 30.1017C63.2111 30.1017 61.7034 27.3065 58.4432 25.6078C54.5411 23.5768 51.3489 24.1351 51.3489 24.1351Z"
                fill="#101214"
              />
              <path
                d="M63.865 30.4252C63.865 30.4252 61.6243 27.4527 58.4433 25.6078C53.9898 23.0242 48.5112 24.3779 48.5112 24.3779"
                stroke="#878787"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M28.7599 46.1114C28.7599 46.1114 27.5779 47.9763 26.3199 47.7087C25.0619 47.4412 23.8911 47.2575 23.2533 47.5849C22.4651 47.9898 21.6824 48.8835 21.1679 48.8668C20.5449 48.8505 19.9309 48.715 19.3593 48.4674C19.6831 47.8089 20.0399 47.167 20.4284 46.5443C19.9923 46.8198 19.4137 47.3853 19.0936 47.5993C18.5814 47.9427 18.2229 47.454 18.2229 47.454C18.2229 47.454 19.108 46.1993 19.4953 45.8726C19.8674 45.5588 21.2103 44.5852 21.7961 44.499C22.4995 44.3321 25.9702 43.8249 28.7679 43.634L28.7599 46.1114Z"
                fill="#878787"
              />
              <path
                d="M20.0123 48.4849C20.0123 48.4849 21.5816 46.1912 22.0178 46.0299C22.786 45.7464 23.788 45.3718 23.788 45.3718"
                stroke="#CCCCCC"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M20.7765 48.6926C20.7765 48.6926 22.1946 46.7759 22.6299 46.6162C23.3981 46.3326 24.4009 45.9573 24.4009 45.9573"
                stroke="#CCCCCC"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_189_431"
                  x1="33.4848"
                  y1="95.8687"
                  x2="27.6826"
                  y2="102.473"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="why-card relative">
          <div className="w-full max-w-[500px] h-48 rounded-2xl absolute bg-[#555555] gap -z-10 inset-[10px]"></div>
          <div className="bg-black border border-black w-full max-w-[500px] h-48 rounded-2xl flex items-center justify-between p-10 gap-8">
            <div className="flex flex-col gap-6 max-w-72">
              <h1 className="text-3xl text-[#EFECE6] font-bold font-jakarta">
                Lack of Analytical Insights
              </h1>
              <div className="flex gap-2 items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1223 10.2676L9.62231 15.7676M3.62231 12.7676C3.62231 5.35558 5.21031 3.76758 12.6223 3.76758C20.0343 3.76758 21.6223 5.35558 21.6223 12.7676C21.6223 20.1796 20.0343 21.7676 12.6223 21.7676C5.21031 21.7676 3.62231 20.1796 3.62231 12.7676Z"
                    stroke="#EFECE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6223 9.76758H15.2943C15.4753 9.76758 15.6223 9.91458 15.6223 10.0956V14.7676"
                    stroke="#EFECE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-base text-[#EFECE6] font-bold">
                  View pricing
                </h4>
              </div>
            </div>
            <svg
              width="120"
              height="143"
              viewBox="0 0 92 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path
                d="M5.35959 109.311C5.12527 109.312 4.89981 109.221 4.73158 109.058C4.56336 108.895 4.46578 108.672 4.45978 108.438L8.00785 69.1H11.5365L6.26028 108.438C6.25405 108.672 6.15628 108.895 5.98791 109.058C5.81954 109.221 5.59399 109.312 5.35959 109.311Z"
                fill="url(#paint0_linear_189_482)"
                stroke="#555555"
                strokeMiterlimit="10"
              />
              <path
                d="M26.8429 109.311C27.0773 109.312 27.3029 109.221 27.4712 109.058C27.6396 108.895 27.7374 108.672 27.7436 108.438L24.1955 69.1H20.6669L25.9405 108.438C25.9465 108.673 26.0444 108.896 26.2132 109.059C26.382 109.222 26.6081 109.312 26.8429 109.311Z"
                fill="url(#paint1_linear_189_482)"
                stroke="#EFECE6"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M28.849 64.1479H3.3544C2.01604 64.1479 0.931091 65.2332 0.931091 66.5719V66.676C0.931091 68.0147 2.01604 69.0999 3.3544 69.0999H28.849C30.1873 69.0999 31.2723 68.0147 31.2723 66.676V66.5719C31.2723 65.2332 30.1873 64.1479 28.849 64.1479Z"
                fill="url(#paint2_linear_189_482)"
                stroke="#555555"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M67.2778 107.925C67.2778 107.925 61.7414 107.925 59.1381 107.909C56.9486 107.895 52.6101 108.086 52.5695 107.032C52.5316 106.062 53.5134 103.537 53.6651 102.685C55.3972 102.737 57.1152 102.361 58.6679 101.591C59.2325 102.143 62.3792 105.116 64.9639 105.42C67.8151 105.756 67.2778 107.925 67.2778 107.925Z"
                fill="#EFECE6"
              />
              <path
                d="M33.3568 109.711C33.3568 109.711 25.5479 109.837 24.5978 109.711C23.6477 109.585 20.9615 107.345 20.9615 107.345C20.9615 105.42 22.2151 103.276 22.5239 102.553C23.5825 102.874 25.3344 103.221 27.6686 103.045C27.7278 103.708 28.0824 106.038 30.1387 106.31C33.5447 106.759 33.3568 109.711 33.3568 109.711Z"
                fill="#EFECE6"
              />
              <path
                d="M26.835 106.919C26.835 106.919 28.0948 106.06 30.2225 106.049"
                stroke="url(#paint3_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M11.9908 52.0345C11.9908 52.0345 8.27861 58.7327 9.76594 63.682C11.2533 68.6313 20.0546 67.8143 20.0546 67.8143C20.0546 67.8143 17.2441 78.8538 21.3532 102.102C21.3532 102.102 24.5969 103.867 30.1325 102.689C30.1325 102.689 30.9591 91.8629 34.7991 67.944L42.0329 68.3613C42.0329 68.3613 39.2452 81.516 52.3233 102.522C52.3233 102.522 55.9923 103.493 60.0414 100.804C60.0414 100.804 54.9248 77.0917 54.0533 62.5746C53.7974 58.2994 46.4949 54.3472 32.1323 51.9524C32.1323 51.9524 17.0729 52.9036 11.9908 52.0345Z"
                fill="#555555"
              />
              <path
                d="M35.0656 68.0322C35.3576 66.3557 36.8299 59.2083 27.3254 56.8594"
                stroke="url(#paint4_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M20.9624 65.0939C20.9624 65.0939 20.1252 66.1774 19.79 67.9961"
                stroke="url(#paint5_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M32.7455 48.9515C32.7455 48.9515 41.403 31.9725 42.4369 26.6217C43.7725 19.7232 40.924 17.2613 39.225 16.7072C37.5259 16.153 26.0807 13.0894 26.0807 13.0894C23.9741 13.3911 14.8869 15.1762 11.8849 17.0425C10.3597 18.0007 12.0225 49.1227 12.0225 49.1227C11.4747 50.8213 9.68304 55.0532 9.68304 55.0532C9.68304 55.0532 15.5688 57.2786 26.4989 55.5227L28.6593 52.121C28.6593 52.121 30.0319 54.5838 30.6177 54.7594C31.2035 54.935 34.6615 54.1029 36.1498 52.7043C36.1498 52.6999 32.7402 50.298 32.7455 48.9515Z"
                fill="#191919"
              />
              <path
                d="M28.7739 25.7754C29.1267 25.7754 29.4126 25.4894 29.4126 25.1365C29.4126 24.7837 29.1267 24.4977 28.7739 24.4977C28.4212 24.4977 28.1353 24.7837 28.1353 25.1365C28.1353 25.4894 28.4212 25.7754 28.7739 25.7754Z"
                stroke="url(#paint6_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M28.7739 31.6918C29.1267 31.6918 29.4126 31.4057 29.4126 31.0529C29.4126 30.7001 29.1267 30.4141 28.7739 30.4141C28.4212 30.4141 28.1353 30.7001 28.1353 31.0529C28.1353 31.4057 28.4212 31.6918 28.7739 31.6918Z"
                stroke="url(#paint7_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M28.6681 36.9209C29.0208 36.9209 29.3068 36.6349 29.3068 36.282C29.3068 35.9292 29.0208 35.6432 28.6681 35.6432C28.3154 35.6432 28.0294 35.9292 28.0294 36.282C28.0294 36.6349 28.3154 36.9209 28.6681 36.9209Z"
                stroke="url(#paint8_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M28.3152 41.421C28.6679 41.421 28.9539 41.135 28.9539 40.7822C28.9539 40.4293 28.6679 40.1433 28.3152 40.1433C27.9625 40.1433 27.6765 40.4293 27.6765 40.7822C27.6765 41.135 27.9625 41.421 28.3152 41.421Z"
                stroke="url(#paint9_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M27.9624 46.7154C28.3151 46.7154 28.601 46.4294 28.601 46.0766C28.601 45.7238 28.3151 45.4377 27.9624 45.4377C27.6096 45.4377 27.3237 45.7238 27.3237 46.0766C27.3237 46.4294 27.6096 46.7154 27.9624 46.7154Z"
                stroke="url(#paint10_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M26.9038 51.2156C27.2565 51.2156 27.5425 50.9295 27.5425 50.5767C27.5425 50.2239 27.2565 49.9379 26.9038 49.9379C26.551 49.9379 26.2651 50.2239 26.2651 50.5767C26.2651 50.9295 26.551 51.2156 26.9038 51.2156Z"
                stroke="url(#paint11_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M25.9466 12.2881C25.9466 12.2881 28.1353 15.5247 28.8128 17.2762C28.8128 17.2762 27.5019 17.3857 26.0851 19.0843C26.0851 19.0843 21.9778 15.5203 21.3453 14.0123C21.3453 14.0123 25.0336 12.5316 25.9466 12.2881Z"
                fill="url(#paint12_linear_189_482)"
              />
              <path
                d="M27.2046 14.7579C28.7246 17.2763 30.2516 20.8226 30.4977 23.4107C30.6583 25.0969 30.1598 43.7886 30.1598 43.7886C30.0866 45.6813 30.2278 51.0639 26.4106 55.3417"
                stroke="url(#paint13_linear_189_482)"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M30.4977 23.4107L33.9355 18.1084"
                stroke="url(#paint14_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M13.2832 16.4132C5.56245 18.733 0.569482 33.7292 1.74797 41.2322C2.45987 43.5361 8.17807 43.8494 13.7101 43.8432C21.1203 43.8353 30.1475 43.7885 30.1475 43.7885L30.3513 39.928C30.3513 39.928 20.0141 35.2002 13.3087 35.0837C13.3123 35.0837 24.1832 13.1387 13.2832 16.4132Z"
                fill="#EFECE6"
              />
              <path
                d="M30.391 43.3297C30.391 43.3297 31.9268 45.0062 33.2571 44.6409C34.5874 44.2756 35.8295 44.0153 36.5309 44.3294C37.398 44.7177 38.2872 45.6301 38.8368 45.5815C39.5021 45.5293 40.1511 45.3495 40.7485 45.0521C40.3647 44.364 39.9463 43.6957 39.4949 43.05C39.9784 43.3191 40.6303 43.8926 40.9849 44.1035C41.5548 44.4459 41.9077 43.897 41.9077 43.897C41.9077 43.897 40.887 42.6035 40.453 42.2761C40.0366 41.9611 38.5431 40.9949 37.9106 40.9375C37.1484 40.7999 32.4905 39.6183 30.406 39.8786L30.391 43.3297Z"
                fill="#CCCCCC"
              />
              <path
                d="M40.0551 45.1077C40.0551 45.1077 38.2378 42.7394 37.7614 42.5929C36.9225 42.3344 35.8286 41.9902 35.8286 41.9902"
                stroke="url(#paint15_linear_189_482)"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M39.2462 45.3751C39.2462 45.3751 37.6168 43.4056 37.1413 43.2573C36.3024 42.9979 35.2085 42.6547 35.2085 42.6547"
                stroke="#878787"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M28.0294 39.0845L26.2906 44.0559"
                stroke="#878787"
                strokeMiterlimit="10"
              />
              <path
                d="M69.598 53.0598C70.1643 53.659 72.5594 56.4226 73.5615 56.7121C74.5637 57.0015 77.7209 56.3503 77.9723 56.1976C78.2238 56.045 79.6643 54.8679 79.6643 54.8679C79.6643 54.8679 79.1871 53.9272 78.147 54.5326C76.912 55.2508 75.4008 54.4373 74.7683 53.8266C74.5037 53.5743 74.3043 52.7175 74.7374 52.3601C75.1706 52.0027 76.2142 52.9407 76.6412 52.9778C77.2931 53.0378 77.7642 52.4175 77.7642 52.4175C77.7642 52.4175 76.073 51.0259 75.7502 50.7577C75.4273 50.4894 73.0966 49.5118 71.2282 49.7288C69.3598 49.9459 68.2844 51.6718 69.598 53.0598Z"
                fill="#CCCCCC"
              />
              <path
                d="M38.9842 16.7133C38.9842 16.7133 43.9305 17.5736 47.3771 21.592C50.118 24.7863 56.1211 36.7479 56.3646 36.9915C56.6081 37.235 69.3545 47.1813 71.7883 49.2991C71.7883 49.2991 69.8785 50.1815 69.0475 53.6916C69.0475 53.6916 52.8024 48.6073 47.9117 43.4276C41.0158 36.1197 34.0996 25.3104 38.9842 16.7133Z"
                fill="#EFECE6"
              />
              <path
                d="M69.6711 47.3578C69.6711 47.3578 66.6718 48.9637 66.3127 52.8092"
                stroke="#878787"
                strokeMiterlimit="10"
              />
              <path
                d="M73.431 53.1552H85.4072C87.0569 53.1552 88.3925 54.567 88.3925 56.3018V67.5081C88.3925 69.2464 89.7298 70.6547 91.3777 70.6547H79.3997C77.7509 70.6547 76.4144 69.2429 76.4144 67.5081V56.42C76.4247 55.7336 76.1978 55.0647 75.772 54.5263C75.3463 53.9879 74.7477 53.6129 74.0776 53.4649L73.4292 53.3475L73.431 53.1552Z"
                fill="url(#paint16_linear_189_482)"
                stroke="#EFECE6"
                strokeMiterlimit="10"
              />
              <path
                d="M85.8642 57.0192H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 61.7717H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 64.1479H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 66.5242H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 59.3954H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M30.4395 10.0106C30.1272 10.4262 29.6288 12.2254 26.4344 13.099C26.4344 13.099 29.7611 17.4306 30.5806 22.8847L34.1093 17.4059L30.4395 10.0106Z"
                fill="#878787"
              />
              <path
                d="M43.8484 6.74663C43.5899 7.5849 42.3654 7.51519 42.361 7.66873C42.3566 7.82227 43.0121 8.10993 42.863 8.80172C42.721 9.4591 42.1837 9.56675 41.7029 9.51999C41.7022 9.47298 41.6981 9.4261 41.6906 9.37969C41.3589 7.41372 36.7346 5.72747 34.7303 7.07753C33.4686 7.94472 32.5406 9.21664 32.0997 10.683C32.0997 10.683 31.6701 9.34263 30.8453 9.64176C30.7083 9.68742 30.5832 9.76309 30.4792 9.86324C30.6679 8.99761 31.0349 6.56398 31.0199 5.98866C31.0023 5.33304 29.6623 3.67768 30.6979 2.63557C31.7336 1.59347 32.9298 2.40703 32.9298 2.40703C32.9298 2.40703 33.4953 0.679312 35.1573 0.767551C36.6349 0.85579 37.0098 1.82642 37.0098 1.82642C37.0098 1.82642 37.4191 0.99256 38.2096 1.15051C38.3824 1.19028 38.5452 1.26496 38.6881 1.36997C38.831 1.47497 38.951 1.60808 39.0406 1.76112C39.0406 1.76112 40.0286 1.12051 40.7431 1.64994C40.9436 1.78934 41.0935 1.98994 41.1705 2.22169C41.2475 2.45345 41.2473 2.70391 41.1701 2.93559C41.1701 2.93559 42.556 2.44056 43.2776 3.55326C43.754 4.28476 43.0174 5.3101 43.0174 5.3101C43.0174 5.3101 44.113 5.90748 43.8484 6.74663Z"
                fill="#878787"
              />
              <path
                d="M31.4266 12.5105C31.4266 12.5105 30.4448 14.7164 31.9956 16.3047C33.8579 18.2142 36.0721 18.7869 36.8475 18.7348C37.623 18.6828 41.9835 11.0854 41.6994 9.3815C41.3677 7.41553 36.7434 5.7284 34.7392 7.07846C33.4773 7.94587 32.5493 9.21813 32.1085 10.6848C32.1085 10.6848 31.678 9.34444 30.8532 9.64357C29.2927 10.2092 31.4266 12.5105 31.4266 12.5105Z"
                fill="#CCCCCC"
              />
              <path
                d="M33.4723 7.79309C33.2245 8.41076 31.2669 11.9642 32.6528 13.7475C34.0387 15.5308 35.0717 12.9392 37.6873 13.8648C39.247 14.4154 38.8641 15.972 38.8641 15.972C38.8641 15.972 38.416 16.955 37.7535 18.9862C37.6026 19.4459 31.8536 18.4568 30.9873 14.7207C30.6106 13.098 31.6736 10.5682 32.5249 9.07344C33.0366 8.17164 33.4723 7.79309 33.4723 7.79309Z"
                fill="#878787"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_189_482"
                  x1="10.0734"
                  y1="77.2538"
                  x2="1.73623"
                  y2="78.9747"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_189_482"
                  x1="26.2805"
                  y1="77.2538"
                  x2="17.9433"
                  y2="78.9747"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_189_482"
                  x1="24.9992"
                  y1="65.1521"
                  x2="24.2913"
                  y2="70.2395"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_189_482"
                  x1="29.5222"
                  y1="106.226"
                  x2="29.3318"
                  y2="107.095"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_189_482"
                  x1="33.6684"
                  y1="59.125"
                  x2="27.9065"
                  y2="63.9615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_189_482"
                  x1="20.72"
                  y1="65.6824"
                  x2="19.5439"
                  y2="66.2396"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_189_482"
                  x1="29.1485"
                  y1="24.7568"
                  x2="28.4879"
                  y2="25.5314"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_189_482"
                  x1="29.1485"
                  y1="30.6732"
                  x2="28.4879"
                  y2="31.4478"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_189_482"
                  x1="29.0427"
                  y1="35.9023"
                  x2="28.3821"
                  y2="36.6769"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_189_482"
                  x1="28.6898"
                  y1="40.4024"
                  x2="28.0291"
                  y2="41.1771"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_189_482"
                  x1="28.3369"
                  y1="45.6968"
                  x2="27.6763"
                  y2="46.4715"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_189_482"
                  x1="27.2784"
                  y1="50.197"
                  x2="26.6177"
                  y2="50.9716"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_189_482"
                  x1="27.2689"
                  y1="13.6662"
                  x2="23.8218"
                  y2="18.1087"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_189_482"
                  x1="29.678"
                  y1="22.9874"
                  x2="24.6894"
                  y2="23.5813"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_189_482"
                  x1="33.2248"
                  y1="19.1836"
                  x2="30.5493"
                  y2="21.2182"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_189_482"
                  x1="39.1812"
                  y1="42.6224"
                  x2="37.71"
                  y2="44.9619"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_189_482"
                  x1="87.6669"
                  y1="56.7037"
                  x2="78.658"
                  y2="67.5412"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="why-card relative">
          <div className="w-full max-w-[500px] h-48 rounded-2xl absolute bg-[#555555] gap -z-10 inset-[10px]"></div>
          <div className="bg-black border border-black w-full max-w-[500px] h-48 rounded-2xl flex items-center justify-between p-10 gap-8">
            <div className="flex flex-col gap-6 max-w-72">
              <h1 className="text-3xl text-[#EFECE6] font-bold font-jakarta">
                Lack of Analytical Insights
              </h1>
              <div className="flex gap-2 items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1223 10.2676L9.62231 15.7676M3.62231 12.7676C3.62231 5.35558 5.21031 3.76758 12.6223 3.76758C20.0343 3.76758 21.6223 5.35558 21.6223 12.7676C21.6223 20.1796 20.0343 21.7676 12.6223 21.7676C5.21031 21.7676 3.62231 20.1796 3.62231 12.7676Z"
                    stroke="#EFECE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6223 9.76758H15.2943C15.4753 9.76758 15.6223 9.91458 15.6223 10.0956V14.7676"
                    stroke="#EFECE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-base text-[#EFECE6] font-bold">
                  View pricing
                </h4>
              </div>
            </div>
            <svg
              width="120"
              height="143"
              viewBox="0 0 92 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path
                d="M5.35959 109.311C5.12527 109.312 4.89981 109.221 4.73158 109.058C4.56336 108.895 4.46578 108.672 4.45978 108.438L8.00785 69.1H11.5365L6.26028 108.438C6.25405 108.672 6.15628 108.895 5.98791 109.058C5.81954 109.221 5.59399 109.312 5.35959 109.311Z"
                fill="url(#paint0_linear_189_482)"
                stroke="#555555"
                strokeMiterlimit="10"
              />
              <path
                d="M26.8429 109.311C27.0773 109.312 27.3029 109.221 27.4712 109.058C27.6396 108.895 27.7374 108.672 27.7436 108.438L24.1955 69.1H20.6669L25.9405 108.438C25.9465 108.673 26.0444 108.896 26.2132 109.059C26.382 109.222 26.6081 109.312 26.8429 109.311Z"
                fill="url(#paint1_linear_189_482)"
                stroke="#EFECE6"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M28.849 64.1479H3.3544C2.01604 64.1479 0.931091 65.2332 0.931091 66.5719V66.676C0.931091 68.0147 2.01604 69.0999 3.3544 69.0999H28.849C30.1873 69.0999 31.2723 68.0147 31.2723 66.676V66.5719C31.2723 65.2332 30.1873 64.1479 28.849 64.1479Z"
                fill="url(#paint2_linear_189_482)"
                stroke="#555555"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M67.2778 107.925C67.2778 107.925 61.7414 107.925 59.1381 107.909C56.9486 107.895 52.6101 108.086 52.5695 107.032C52.5316 106.062 53.5134 103.537 53.6651 102.685C55.3972 102.737 57.1152 102.361 58.6679 101.591C59.2325 102.143 62.3792 105.116 64.9639 105.42C67.8151 105.756 67.2778 107.925 67.2778 107.925Z"
                fill="#EFECE6"
              />
              <path
                d="M33.3568 109.711C33.3568 109.711 25.5479 109.837 24.5978 109.711C23.6477 109.585 20.9615 107.345 20.9615 107.345C20.9615 105.42 22.2151 103.276 22.5239 102.553C23.5825 102.874 25.3344 103.221 27.6686 103.045C27.7278 103.708 28.0824 106.038 30.1387 106.31C33.5447 106.759 33.3568 109.711 33.3568 109.711Z"
                fill="#EFECE6"
              />
              <path
                d="M26.835 106.919C26.835 106.919 28.0948 106.06 30.2225 106.049"
                stroke="url(#paint3_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M11.9908 52.0345C11.9908 52.0345 8.27861 58.7327 9.76594 63.682C11.2533 68.6313 20.0546 67.8143 20.0546 67.8143C20.0546 67.8143 17.2441 78.8538 21.3532 102.102C21.3532 102.102 24.5969 103.867 30.1325 102.689C30.1325 102.689 30.9591 91.8629 34.7991 67.944L42.0329 68.3613C42.0329 68.3613 39.2452 81.516 52.3233 102.522C52.3233 102.522 55.9923 103.493 60.0414 100.804C60.0414 100.804 54.9248 77.0917 54.0533 62.5746C53.7974 58.2994 46.4949 54.3472 32.1323 51.9524C32.1323 51.9524 17.0729 52.9036 11.9908 52.0345Z"
                fill="#555555"
              />
              <path
                d="M35.0656 68.0322C35.3576 66.3557 36.8299 59.2083 27.3254 56.8594"
                stroke="url(#paint4_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M20.9624 65.0939C20.9624 65.0939 20.1252 66.1774 19.79 67.9961"
                stroke="url(#paint5_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M32.7455 48.9515C32.7455 48.9515 41.403 31.9725 42.4369 26.6217C43.7725 19.7232 40.924 17.2613 39.225 16.7072C37.5259 16.153 26.0807 13.0894 26.0807 13.0894C23.9741 13.3911 14.8869 15.1762 11.8849 17.0425C10.3597 18.0007 12.0225 49.1227 12.0225 49.1227C11.4747 50.8213 9.68304 55.0532 9.68304 55.0532C9.68304 55.0532 15.5688 57.2786 26.4989 55.5227L28.6593 52.121C28.6593 52.121 30.0319 54.5838 30.6177 54.7594C31.2035 54.935 34.6615 54.1029 36.1498 52.7043C36.1498 52.6999 32.7402 50.298 32.7455 48.9515Z"
                fill="#191919"
              />
              <path
                d="M28.7739 25.7754C29.1267 25.7754 29.4126 25.4894 29.4126 25.1365C29.4126 24.7837 29.1267 24.4977 28.7739 24.4977C28.4212 24.4977 28.1353 24.7837 28.1353 25.1365C28.1353 25.4894 28.4212 25.7754 28.7739 25.7754Z"
                stroke="url(#paint6_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M28.7739 31.6918C29.1267 31.6918 29.4126 31.4057 29.4126 31.0529C29.4126 30.7001 29.1267 30.4141 28.7739 30.4141C28.4212 30.4141 28.1353 30.7001 28.1353 31.0529C28.1353 31.4057 28.4212 31.6918 28.7739 31.6918Z"
                stroke="url(#paint7_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M28.6681 36.9209C29.0208 36.9209 29.3068 36.6349 29.3068 36.282C29.3068 35.9292 29.0208 35.6432 28.6681 35.6432C28.3154 35.6432 28.0294 35.9292 28.0294 36.282C28.0294 36.6349 28.3154 36.9209 28.6681 36.9209Z"
                stroke="url(#paint8_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M28.3152 41.421C28.6679 41.421 28.9539 41.135 28.9539 40.7822C28.9539 40.4293 28.6679 40.1433 28.3152 40.1433C27.9625 40.1433 27.6765 40.4293 27.6765 40.7822C27.6765 41.135 27.9625 41.421 28.3152 41.421Z"
                stroke="url(#paint9_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M27.9624 46.7154C28.3151 46.7154 28.601 46.4294 28.601 46.0766C28.601 45.7238 28.3151 45.4377 27.9624 45.4377C27.6096 45.4377 27.3237 45.7238 27.3237 46.0766C27.3237 46.4294 27.6096 46.7154 27.9624 46.7154Z"
                stroke="url(#paint10_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M26.9038 51.2156C27.2565 51.2156 27.5425 50.9295 27.5425 50.5767C27.5425 50.2239 27.2565 49.9379 26.9038 49.9379C26.551 49.9379 26.2651 50.2239 26.2651 50.5767C26.2651 50.9295 26.551 51.2156 26.9038 51.2156Z"
                stroke="url(#paint11_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M25.9466 12.2881C25.9466 12.2881 28.1353 15.5247 28.8128 17.2762C28.8128 17.2762 27.5019 17.3857 26.0851 19.0843C26.0851 19.0843 21.9778 15.5203 21.3453 14.0123C21.3453 14.0123 25.0336 12.5316 25.9466 12.2881Z"
                fill="url(#paint12_linear_189_482)"
              />
              <path
                d="M27.2046 14.7579C28.7246 17.2763 30.2516 20.8226 30.4977 23.4107C30.6583 25.0969 30.1598 43.7886 30.1598 43.7886C30.0866 45.6813 30.2278 51.0639 26.4106 55.3417"
                stroke="url(#paint13_linear_189_482)"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M30.4977 23.4107L33.9355 18.1084"
                stroke="url(#paint14_linear_189_482)"
                strokeMiterlimit="10"
              />
              <path
                d="M13.2832 16.4132C5.56245 18.733 0.569482 33.7292 1.74797 41.2322C2.45987 43.5361 8.17807 43.8494 13.7101 43.8432C21.1203 43.8353 30.1475 43.7885 30.1475 43.7885L30.3513 39.928C30.3513 39.928 20.0141 35.2002 13.3087 35.0837C13.3123 35.0837 24.1832 13.1387 13.2832 16.4132Z"
                fill="#EFECE6"
              />
              <path
                d="M30.391 43.3297C30.391 43.3297 31.9268 45.0062 33.2571 44.6409C34.5874 44.2756 35.8295 44.0153 36.5309 44.3294C37.398 44.7177 38.2872 45.6301 38.8368 45.5815C39.5021 45.5293 40.1511 45.3495 40.7485 45.0521C40.3647 44.364 39.9463 43.6957 39.4949 43.05C39.9784 43.3191 40.6303 43.8926 40.9849 44.1035C41.5548 44.4459 41.9077 43.897 41.9077 43.897C41.9077 43.897 40.887 42.6035 40.453 42.2761C40.0366 41.9611 38.5431 40.9949 37.9106 40.9375C37.1484 40.7999 32.4905 39.6183 30.406 39.8786L30.391 43.3297Z"
                fill="#CCCCCC"
              />
              <path
                d="M40.0551 45.1077C40.0551 45.1077 38.2378 42.7394 37.7614 42.5929C36.9225 42.3344 35.8286 41.9902 35.8286 41.9902"
                stroke="url(#paint15_linear_189_482)"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M39.2462 45.3751C39.2462 45.3751 37.6168 43.4056 37.1413 43.2573C36.3024 42.9979 35.2085 42.6547 35.2085 42.6547"
                stroke="#878787"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M28.0294 39.0845L26.2906 44.0559"
                stroke="#878787"
                strokeMiterlimit="10"
              />
              <path
                d="M69.598 53.0598C70.1643 53.659 72.5594 56.4226 73.5615 56.7121C74.5637 57.0015 77.7209 56.3503 77.9723 56.1976C78.2238 56.045 79.6643 54.8679 79.6643 54.8679C79.6643 54.8679 79.1871 53.9272 78.147 54.5326C76.912 55.2508 75.4008 54.4373 74.7683 53.8266C74.5037 53.5743 74.3043 52.7175 74.7374 52.3601C75.1706 52.0027 76.2142 52.9407 76.6412 52.9778C77.2931 53.0378 77.7642 52.4175 77.7642 52.4175C77.7642 52.4175 76.073 51.0259 75.7502 50.7577C75.4273 50.4894 73.0966 49.5118 71.2282 49.7288C69.3598 49.9459 68.2844 51.6718 69.598 53.0598Z"
                fill="#CCCCCC"
              />
              <path
                d="M38.9842 16.7133C38.9842 16.7133 43.9305 17.5736 47.3771 21.592C50.118 24.7863 56.1211 36.7479 56.3646 36.9915C56.6081 37.235 69.3545 47.1813 71.7883 49.2991C71.7883 49.2991 69.8785 50.1815 69.0475 53.6916C69.0475 53.6916 52.8024 48.6073 47.9117 43.4276C41.0158 36.1197 34.0996 25.3104 38.9842 16.7133Z"
                fill="#EFECE6"
              />
              <path
                d="M69.6711 47.3578C69.6711 47.3578 66.6718 48.9637 66.3127 52.8092"
                stroke="#878787"
                strokeMiterlimit="10"
              />
              <path
                d="M73.431 53.1552H85.4072C87.0569 53.1552 88.3925 54.567 88.3925 56.3018V67.5081C88.3925 69.2464 89.7298 70.6547 91.3777 70.6547H79.3997C77.7509 70.6547 76.4144 69.2429 76.4144 67.5081V56.42C76.4247 55.7336 76.1978 55.0647 75.772 54.5263C75.3463 53.9879 74.7477 53.6129 74.0776 53.4649L73.4292 53.3475L73.431 53.1552Z"
                fill="url(#paint16_linear_189_482)"
                stroke="#EFECE6"
                strokeMiterlimit="10"
              />
              <path
                d="M85.8642 57.0192H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 61.7717H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 64.1479H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 66.5242H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M85.8642 59.3954H79.0574"
                stroke="#F7F7F7"
                strokeLinejoin="round"
              />
              <path
                d="M30.4395 10.0106C30.1272 10.4262 29.6288 12.2254 26.4344 13.099C26.4344 13.099 29.7611 17.4306 30.5806 22.8847L34.1093 17.4059L30.4395 10.0106Z"
                fill="#878787"
              />
              <path
                d="M43.8484 6.74663C43.5899 7.5849 42.3654 7.51519 42.361 7.66873C42.3566 7.82227 43.0121 8.10993 42.863 8.80172C42.721 9.4591 42.1837 9.56675 41.7029 9.51999C41.7022 9.47298 41.6981 9.4261 41.6906 9.37969C41.3589 7.41372 36.7346 5.72747 34.7303 7.07753C33.4686 7.94472 32.5406 9.21664 32.0997 10.683C32.0997 10.683 31.6701 9.34263 30.8453 9.64176C30.7083 9.68742 30.5832 9.76309 30.4792 9.86324C30.6679 8.99761 31.0349 6.56398 31.0199 5.98866C31.0023 5.33304 29.6623 3.67768 30.6979 2.63557C31.7336 1.59347 32.9298 2.40703 32.9298 2.40703C32.9298 2.40703 33.4953 0.679312 35.1573 0.767551C36.6349 0.85579 37.0098 1.82642 37.0098 1.82642C37.0098 1.82642 37.4191 0.99256 38.2096 1.15051C38.3824 1.19028 38.5452 1.26496 38.6881 1.36997C38.831 1.47497 38.951 1.60808 39.0406 1.76112C39.0406 1.76112 40.0286 1.12051 40.7431 1.64994C40.9436 1.78934 41.0935 1.98994 41.1705 2.22169C41.2475 2.45345 41.2473 2.70391 41.1701 2.93559C41.1701 2.93559 42.556 2.44056 43.2776 3.55326C43.754 4.28476 43.0174 5.3101 43.0174 5.3101C43.0174 5.3101 44.113 5.90748 43.8484 6.74663Z"
                fill="#878787"
              />
              <path
                d="M31.4266 12.5105C31.4266 12.5105 30.4448 14.7164 31.9956 16.3047C33.8579 18.2142 36.0721 18.7869 36.8475 18.7348C37.623 18.6828 41.9835 11.0854 41.6994 9.3815C41.3677 7.41553 36.7434 5.7284 34.7392 7.07846C33.4773 7.94587 32.5493 9.21813 32.1085 10.6848C32.1085 10.6848 31.678 9.34444 30.8532 9.64357C29.2927 10.2092 31.4266 12.5105 31.4266 12.5105Z"
                fill="#CCCCCC"
              />
              <path
                d="M33.4723 7.79309C33.2245 8.41076 31.2669 11.9642 32.6528 13.7475C34.0387 15.5308 35.0717 12.9392 37.6873 13.8648C39.247 14.4154 38.8641 15.972 38.8641 15.972C38.8641 15.972 38.416 16.955 37.7535 18.9862C37.6026 19.4459 31.8536 18.4568 30.9873 14.7207C30.6106 13.098 31.6736 10.5682 32.5249 9.07344C33.0366 8.17164 33.4723 7.79309 33.4723 7.79309Z"
                fill="#878787"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_189_482"
                  x1="10.0734"
                  y1="77.2538"
                  x2="1.73623"
                  y2="78.9747"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_189_482"
                  x1="26.2805"
                  y1="77.2538"
                  x2="17.9433"
                  y2="78.9747"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_189_482"
                  x1="24.9992"
                  y1="65.1521"
                  x2="24.2913"
                  y2="70.2395"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_189_482"
                  x1="29.5222"
                  y1="106.226"
                  x2="29.3318"
                  y2="107.095"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_189_482"
                  x1="33.6684"
                  y1="59.125"
                  x2="27.9065"
                  y2="63.9615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_189_482"
                  x1="20.72"
                  y1="65.6824"
                  x2="19.5439"
                  y2="66.2396"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_189_482"
                  x1="29.1485"
                  y1="24.7568"
                  x2="28.4879"
                  y2="25.5314"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_189_482"
                  x1="29.1485"
                  y1="30.6732"
                  x2="28.4879"
                  y2="31.4478"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_189_482"
                  x1="29.0427"
                  y1="35.9023"
                  x2="28.3821"
                  y2="36.6769"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_189_482"
                  x1="28.6898"
                  y1="40.4024"
                  x2="28.0291"
                  y2="41.1771"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_189_482"
                  x1="28.3369"
                  y1="45.6968"
                  x2="27.6763"
                  y2="46.4715"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint11_linear_189_482"
                  x1="27.2784"
                  y1="50.197"
                  x2="26.6177"
                  y2="50.9716"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint12_linear_189_482"
                  x1="27.2689"
                  y1="13.6662"
                  x2="23.8218"
                  y2="18.1087"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint13_linear_189_482"
                  x1="29.678"
                  y1="22.9874"
                  x2="24.6894"
                  y2="23.5813"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint14_linear_189_482"
                  x1="33.2248"
                  y1="19.1836"
                  x2="30.5493"
                  y2="21.2182"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint15_linear_189_482"
                  x1="39.1812"
                  y1="42.6224"
                  x2="37.71"
                  y2="44.9619"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
                <linearGradient
                  id="paint16_linear_189_482"
                  x1="87.6669"
                  y1="56.7037"
                  x2="78.658"
                  y2="67.5412"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E4DED3" />
                  <stop offset="1" stopColor="#EFECE6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="why-card relative">
          <div className="w-full max-w-[500px] h-48 rounded-2xl absolute bg-black gap -z-10 inset-[10px]"></div>
          <div className="bg-[#EFECE6] border border-black w-full max-w-[500px] h-48 rounded-2xl flex items-center justify-between p-10 gap-8">
            <div className="flex flex-col gap-6 max-w-72">
              <h1 className="text-3xl text-black font-bold font-jakarta">
                Ineffective Email Optimization
              </h1>
              <div className="flex gap-2 items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1223 10.2676L9.62231 15.7676M3.62231 12.7676C3.62231 5.35558 5.21031 3.76758 12.6223 3.76758C20.0343 3.76758 21.6223 5.35558 21.6223 12.7676C21.6223 20.1796 20.0343 21.7676 12.6223 21.7676C5.21031 21.7676 3.62231 20.1796 3.62231 12.7676Z"
                    stroke="#101214"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6223 9.76758H15.2943C15.4753 9.76758 15.6223 9.91458 15.6223 10.0956V14.7676"
                    stroke="#101214"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4 className="text-base text-black font-bold">Sign up now</h4>
              </div>
            </div>
            <svg
              width="91"
              height="132"
              viewBox="0 0 76 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path
                d="M37.2623 70.5149H12.301C11.385 70.5149 10.5065 70.8794 9.85845 71.5283C9.21042 72.1772 8.8459 73.0574 8.84498 73.9756V73.9964H40.7183V73.9756C40.7173 73.0574 40.3528 72.1772 39.7048 71.5283C39.0568 70.8794 38.1783 70.5149 37.2623 70.5149Z"
                fill="#EFECE6"
                stroke="#555555"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M34.0316 74.1537L15.5317 109.507"
                stroke="#555555"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M15.5317 74.1537L34.0316 109.507"
                stroke="#555555"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M75.5312 109.041C75.5312 109.041 70.0937 109.041 67.537 109.025C65.3867 109.011 61.1518 109.454 61.086 108.422C60.9525 106.347 62.3336 105.194 62.162 103.884C63.8631 103.934 65.5504 103.564 67.0753 102.807C67.6297 103.35 70.7201 106.276 73.2586 106.575C76.0588 106.906 75.5312 109.041 75.5312 109.041Z"
                fill="#101214"
              />
              <path
                d="M75.6178 109.214C75.6178 109.214 63.5959 109.214 61.0392 109.199"
                stroke="#555555"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M68.8392 105.356C68.8392 105.356 70.3918 103.561 70.9471 105.233C71.3873 106.557 70.5555 106.855 70.3251 106.298C70.1934 105.979 71.538 105.108 72.0483 105.714C72.3342 106.054 72.2883 106.376 72.2883 106.376"
                stroke="#555555"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M60.3695 67.3955C58.4201 61.7039 32.1566 58.5811 32.1566 58.5811L23.8437 58.8051C23.4287 60.1807 22.681 69.4103 28.7674 72.7763C35.2262 76.3481 49.836 71.7116 49.836 71.7116C49.836 71.7116 48.98 89.5299 61.4689 104.17L69.6181 103.301C66.1292 89.5386 62.2547 72.8874 60.3695 67.3955Z"
                fill="#191919"
              />
              <path
                d="M55.4311 109.041C55.4311 109.041 49.9937 109.041 47.437 109.025C45.2867 109.011 41.0518 109.454 40.9859 108.422C40.8525 106.347 42.2335 105.194 42.062 103.884C43.763 103.934 45.4504 103.564 46.9752 102.807C47.5297 103.35 50.6201 106.276 53.1586 106.575C55.9587 106.906 55.4311 109.041 55.4311 109.041Z"
                fill="#101214"
              />
              <path
                d="M55.5178 109.214C55.5178 109.214 43.4959 109.214 40.9392 109.199"
                stroke="#555555"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M48.7392 105.356C48.7392 105.356 50.2918 103.561 50.8471 105.233C51.2872 106.557 50.4555 106.855 50.225 106.298C50.0934 105.979 51.438 105.108 51.9483 105.714C52.2342 106.054 52.1883 106.376 52.1883 106.376"
                stroke="#555555"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M49.3491 67.3425C48.1423 63.4416 28.7674 58.6913 28.7674 58.6913L12.2932 59.0638C11.8791 60.4394 10.291 68.5401 16.3773 71.9061C22.8362 75.4779 39.5591 73.8635 39.5591 73.8635C39.5591 73.8635 33.3939 84.8725 41.1723 104.171L49.0104 103.303C47.6476 93.0704 51.0646 72.8883 49.3491 67.3425Z"
                fill="#555555"
              />
              <path
                d="M31.104 55.9454C31.104 55.9454 33.6694 46.794 35.7782 36.9808C35.7782 36.9808 40.9998 35.2005 44.0088 31.8345C44.0088 31.8345 39.1796 23.2615 35.4628 21.9649C32.2633 20.849 27.6541 19.773 27.6541 19.773L17.2783 19.0001C17.2783 19.0001 9.68623 21.073 6.98399 23.2146C3.84336 25.7026 2.28128 33.8606 2.28128 33.8606C2.28128 33.8606 5.92527 34.1289 11.2509 37.303L12.502 55.9454C12.1424 58.3327 11.2804 61.5311 11.2804 61.5311C11.2804 61.5311 21.735 63.9948 35.351 58.7869C35.351 58.7869 30.6007 57.7891 31.104 55.9454Z"
                fill="#101214"
              />
              <path
                d="M43.9949 31.8971L47.4223 37.0954C47.4223 37.0954 56.826 24.7048 57.8232 23.2771L60.9171 24.3105C60.9171 24.3105 53.5892 46.9086 47.6398 46.9086C42.9093 46.9086 35.8856 36.9808 35.8856 36.9808C35.8856 36.9808 42.0941 34.0586 43.9949 31.8971Z"
                fill="#878787"
              />
              <path
                d="M57.8232 23.2875C57.8232 23.2875 57.8345 20.1143 58.5371 19.0575C59.2397 18.0006 61.2038 14.1943 61.9316 14.5894C62.2669 14.7718 61.0401 17.9415 61.0401 17.9415C61.0401 17.9415 61.7167 17.6176 62.2071 18.1465C62.6975 18.6754 62.7546 18.2333 63.4287 18.5286C64.1027 18.8239 63.8393 19.3675 64.6598 19.4265C65.2507 19.4682 65.2065 20.1873 64.8331 20.9029C64.3349 21.872 61.6153 24.585 60.7689 24.3105C59.9224 24.0361 57.8232 23.2875 57.8232 23.2875Z"
                fill="#878787"
              />
              <path
                d="M64.7144 20.7075C64.6217 20.9073 63.9771 22.3749 63.1376 22.0623C62.2981 21.7496 63.835 19.5516 63.835 19.5516C63.835 19.5516 62.5849 21.866 61.7653 21.5143C60.9457 21.1626 62.4878 18.9498 62.4878 18.9498"
                stroke="#070808"
                strokeMiterlimit="10"
              />
              <path
                d="M58.5995 19.3371C58.8785 18.8638 59.1912 18.6363 60.0117 18.8317C60.8322 19.0271 62.091 19.4647 62.091 19.4647C62.091 19.4647 61.9325 20.552 60.9197 20.3783C60.2361 20.2611 60.2361 20.2611 60.217 20.4174C60.198 20.5737 60.1079 21.5533 59.7752 22.1794"
                stroke="#070808"
                strokeMiterlimit="10"
              />
              <path
                d="M45.3291 40.2339H31.5822C29.6892 40.2339 27.9036 41.5365 27.5969 43.1335L25.5981 53.4573C25.2888 55.0587 23.5024 56.357 21.6128 56.357H35.3553C37.2484 56.357 39.0331 55.0544 39.3407 53.4573L41.3204 43.2421C41.5881 41.8526 42.9388 40.8105 44.5303 40.5196L45.2944 40.411L45.3291 40.2339Z"
                fill="#EFECE6"
                stroke="#555555"
                strokeMiterlimit="10"
              />
              <path
                d="M1.65483 49.8899C3.68216 52.7513 18.0901 55.2289 21.2489 55.7387C21.3951 55.7893 21.546 55.8248 21.6994 55.8446C22.3743 55.9315 25.8745 56.1425 26.5711 55.9185C27.3915 55.6536 28.9475 54.166 29.0316 53.9359C29.1156 53.7057 29.5323 51.7718 29.5323 51.7718C29.5323 51.7718 28.4442 51.6111 27.8464 52.7765C27.3083 53.8273 26.1405 53.7135 25.4205 53.651C25.1207 53.625 24.5463 53.1777 24.6408 52.7227C24.7352 52.2676 25.2914 52.4231 25.5851 52.2268L25.7965 51.1795L24.4606 51.1647C24.1339 51.1604 22.331 51.8708 21.2142 52.8859C18.1455 51.1213 11.1703 47.2021 7.63372 45.9681L11.2552 37.2995C11.2552 37.2995 7.94561 34.4493 2.33147 33.8258C2.32194 33.8258 -0.424488 46.9537 1.65483 49.8899Z"
                fill="#878787"
              />
              <path
                d="M20.3505 11.5048C20.3505 11.5048 21.1104 16.8733 17.1111 19.06C17.1111 19.06 22.0122 22.7804 25.8096 23.0183C29.6069 23.2563 27.9755 19.9866 27.9755 19.9866C27.9755 19.9866 27.0407 18.1378 27.3362 13.5977L20.3505 11.5048Z"
                fill="#878787"
              />
              <path
                d="M27.3388 13.5985L20.5065 11.5508C20.5975 11.8929 20.9934 16.6432 26.4906 18.0987C26.819 18.1855 27.1525 18.0874 27.4566 17.9571C27.3076 16.9376 27.214 15.5056 27.3388 13.5985Z"
                fill="#101214"
              />
              <path
                d="M20.3947 11.5361C20.3947 11.5361 22.0408 15.2981 26.4897 15.8417C30.4568 16.3272 32.407 5.23914 26.5494 4.17879C20.1122 3.01424 20.8781 9.92167 20.8781 9.92167C20.8781 9.92167 19.9338 9.22693 19.4919 9.77664C19.05 10.3264 20.3947 11.5361 20.3947 11.5361Z"
                fill="#878787"
              />
              <path
                d="M20.315 11.0358L20.8426 9.98844C22.0755 9.57768 21.9256 7.8886 21.4785 6.97328C21.7705 7.14696 22.3267 7.30502 23.2936 7.22252C23.8308 7.17649 22.7946 6.25944 23.2217 6.18736C23.6488 6.11528 24.5395 7.08009 25.8572 7.18691C27.175 7.29373 25.7576 6.28896 25.6762 5.76009C25.6051 5.29636 26.4793 5.90686 26.9359 6.1943C28.6323 7.27375 30.0653 7.01236 30.1857 8.62589C30.1857 8.62589 31.5459 6.50346 31.5459 5.49957C31.5459 2.96464 26.9601 0.579957 25.0619 0.771009C23.3976 0.94122 22.1621 2.37498 21.884 2.72583C21.7453 2.51916 21.553 2.35433 21.3278 2.24906C20.9024 2.03022 20.477 2.00851 20.3748 2.2013C20.2725 2.39409 20.5411 2.72843 20.9665 2.94727C20.9925 2.9603 21.0176 2.97333 21.0436 2.98462C20.4016 3.16785 19.4911 3.50567 18.824 4.09359C16.5965 6.04407 20.315 11.0358 20.315 11.0358Z"
                fill="#CCCCCC"
              />
              <path
                d="M20.8781 10.0276C20.8781 10.0276 20.1547 9.23383 19.4919 9.77486C18.8291 10.3159 20.6078 11.7497 20.6078 11.7497L20.8781 10.0276Z"
                fill="#878787"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
