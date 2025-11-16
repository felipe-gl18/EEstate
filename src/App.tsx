import "./App.css";
import Hero from "./components/hero/Hero";
import Benefit from "./components/benefit/Benefit";
import PropertiesListings from "./components/properties_listings/PropertiesListings";
import TenantsAndLandlords from "./components/tenants_and_landlords/TenantsAndLandlords";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Benefit />
      <PropertiesListings />
      <TenantsAndLandlords />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
