import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import PropertyCategories from "./components/PropertySections";
import PropertyDealsCarousel from "./components/PropertyDealsCarousel";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Listings from "./components/Listings";
import Members from "./components/Members";
import Blog from "./components/Blogs";
import Noida from "./pages/Noida";
import Dholera from "./pages/Dholera";
import Vrindavan from "./pages/Vrindavan";
import Mumbai from "./pages/Mumbai";
import DelhiNCR from "./pages/DelhiNCR";
import RealEstateServices from "./components/MaterialAdd";
import ResidentialRentals from "./pages/ResidentialRental";
import PropertyPurchase from "./pages/PropertyPurchase";
import BuilderPartnerships from "./pages/BuilderPartner";
import InteriorDesign from "./pages/InteriorDesign";
import InsightsTools from "./components/Insight";
import EMICalculator from "./pages/Emi";
import AreaConverter from "./pages/AreaConverter";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRouts";
// import Logout from "./pages/Logout";

function App() {


  return (
    <Router>
      <div className="font-sans bg-green-100 min-h-screen">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/listings"
            element={
              <ProtectedRoute>
                <Listings />
              </ProtectedRoute>
            }
          />
          <Route path="/members" element={<Members />} />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<Logout />} /> */}

          {/* Private Routes (Protected) */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SearchBar />
                <AboutUs />
                <PropertyCategories />
                <PropertyDealsCarousel />
                <RealEstateServices />
                <InsightsTools />
              </>
            }
          />

          {/* Location Pages (Protected) */}
          <Route
            path="/location/noida"
            element={
              <ProtectedRoute>
                <Noida />
              </ProtectedRoute>
            }
          />
          <Route
            path="/location/dholera"
            element={
              <ProtectedRoute>
                <Dholera />
              </ProtectedRoute>
            }
          />
          <Route
            path="/location/vrindavan"
            element={
              <ProtectedRoute>
                <Vrindavan />
              </ProtectedRoute>
            }
          />
          <Route
            path="/location/mumbai"
            element={
              <ProtectedRoute>
                <Mumbai />
              </ProtectedRoute>
            }
          />
          <Route
            path="/location/delhincr"
            element={
              <ProtectedRoute>
                <DelhiNCR />
              </ProtectedRoute>
            }
          />

          {/* Service Pages (Protected) */}
          <Route
            path="/residential-rentals"
            element={
              <ProtectedRoute>
                <ResidentialRentals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/property-purchase"
            element={
              <ProtectedRoute>
                <PropertyPurchase />
              </ProtectedRoute>
            }
          />
          <Route
            path="/builder-partnerships"
            element={
              <ProtectedRoute>
                <BuilderPartnerships />
              </ProtectedRoute>
            }
          />
          <Route
            path="/interior-design"
            element={
              <ProtectedRoute>
                <InteriorDesign />
              </ProtectedRoute>
            }
          />

          {/* Tools (Protected) */}
          <Route
            path="/emi"
            element={
              <ProtectedRoute>
                <EMICalculator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/area-converter"
            element={
              <ProtectedRoute>
                <AreaConverter />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
