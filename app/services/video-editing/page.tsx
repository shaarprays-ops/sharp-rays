import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import VideoEditingFAQs from "@/components/video-editing/VideoEditingFAQs";
import VideoEditingFinalCTA from "@/components/video-editing/VideoEditingFinalCTA";
import VideoEditingFormats from "@/components/video-editing/VideoEditingFormats";
import VideoEditingHero from "@/components/video-editing/VideoEditingHero";
import VideoEditingProblem from "@/components/video-editing/VideoEditingProblem";
import VideoEditingProcess from "@/components/video-editing/VideoEditingProcess";
import VideoEditingQuality from "@/components/video-editing/VideoEditingQuality";
import VideoEditingServices from "@/components/video-editing/VideoEditingServices";

export default function VideoEditingPage() {
  return (
    <main id="main-content">

      <Navbar/>
      <VideoEditingHero />
      <VideoEditingProblem/>
      <VideoEditingServices/>
      <VideoEditingProcess/>
      <VideoEditingQuality/>
      <VideoEditingFormats/>
      <VideoEditingFAQs/>
      <VideoEditingFinalCTA/>
      <Footer/>
    </main>
  );
}