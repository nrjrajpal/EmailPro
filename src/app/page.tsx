import Hero from "@/components/hero"
import TrustedBy from "@/components/trustedBy"

export default function Home() {
  return (
    <div className="min-h-screen min-w-fit flex justify-center">
      <div className="h-fit max-w-screen-2xl w-full">
        <Hero/>
        <TrustedBy/>
        <div className="h-96"></div>
        <div className="h-96"></div>
      </div>
    </div>
  );
}
