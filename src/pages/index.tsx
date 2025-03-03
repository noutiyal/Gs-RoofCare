import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider"; // Import the slider component
import Homepage from "./home/home";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSlider />

      <Homepage />
    </Layout>
  );
}
