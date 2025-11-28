import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExamCategories from "@/components/ExamCategories";
import OfflineCenters from "@/components/OfflineCenters";
import Testimonials from "@/components/Testimonials";
import CallbackForm from "@/components/CallbackForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <ExamCategories />
        <OfflineCenters />
        <Testimonials />
        <CallbackForm />
      </main>
      <Footer />
    </div>
  );
}
