import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import FeaturedMenu from '../components/FeaturedMenu';
import Testimonials from '../components/Testimonials';
import LocationHours from '../components/LocationHours';
import CTABanner from '../components/CTABanner';
import BackToTopButton from '../components/BackToTopButton';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <FeaturedMenu />
      <Testimonials />
      <LocationHours />
      <CTABanner />
      <BackToTopButton />
    </Layout>
  );
}
