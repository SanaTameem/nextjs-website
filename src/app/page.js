import Banner from "@/components/banner/Banner";
import HomeServices from "@/components/homeServices/homeServices";
import QuickContact from "@/components/quickContact/QuickContact";
import error from "./error";

export default function Home() {
  return (
    <>
      <main className="d-flex flex-column justify-content-center align-items-center">
      <Banner />
      <HomeServices />
      <QuickContact />
      </main>
    </>
  );
}
