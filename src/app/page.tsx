import FAQs from "@/components/faqs";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import TrustedBy from "@/components/trustedBy";
import WhyEmailPro from "@/components/whyemailpro";

export default function Home() {
  return (
    <div className="min-h-screen min-w-fit flex flex-col items-center">
      <div className="h-fit max-w-screen-2xl w-full">
        <Hero />
        <TrustedBy />
        <WhyEmailPro />
        <Pricing />
      </div>
      <FAQs />
      <Footer/>
    </div>
  );
}
