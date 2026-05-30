import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import HeritageView from "./components/HeritageView";
import BrewView from "./components/BrewView";
import BrandsView from "./components/BrandsView";
import StockistsModal from "./components/StockistsModal";
import Footer from "./components/Footer";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [stockistsOpen, setStockistsOpen] = useState<boolean>(false);
  const [selectedStockistCity, setSelectedStockistCity] = useState<string>("All");

  const handleOpenStockists = (city: string = "All") => {
    setSelectedStockistCity(city);
    setStockistsOpen(true);
  };

  const handleCloseStockists = () => {
    setStockistsOpen(false);
  };

  // Render active tab view with clean layout wrapping
  const renderActiveView = () => {
    switch (currentTab) {
      case "home":
        return (
          <HomeView
            setTab={setCurrentTab}
            onOpenStockists={() => handleOpenStockists("All")}
          />
        );
      case "heritage":
        return <HeritageView />;
      case "brew":
        return (
          <BrewView
            setTab={setCurrentTab}
            onOpenStockists={() => handleOpenStockists("All")}
          />
        );
      case "brands":
        return <BrandsView onOpenStockists={() => handleOpenStockists("All")} />;
      default:
        return (
          <HomeView
            setTab={setCurrentTab}
            onOpenStockists={() => handleOpenStockists("All")}
          />
        );
    }
  };

  return (
    <div id="application-container" className="min-h-screen bg-brand-white text-brand-text flex flex-col justify-between selection:bg-brand-gold/20 selection:text-brand-dark">
      
      {/* Universal Scroll Indicator / Decorative Accent Bar */}
      <div id="accent-top-bar" className="w-full h-1.5 bg-gradient-to-r from-brand-green via-brand-gold to-brand-dark" />
      
      {/* Sticky Premium Navbar */}
      <Navbar
        currentTab={currentTab}
        setTab={setCurrentTab}
        onOpenStockists={() => handleOpenStockists("All")}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Global Stockist Locator Drawer Modal */}
      <StockistsModal
        isOpen={stockistsOpen}
        onClose={handleCloseStockists}
        selectedCity={selectedStockistCity}
      />

      {/* Editorial Information Footer */}
      <Footer
        setTab={setCurrentTab}
        onOpenStockists={() => handleOpenStockists("All")}
      />

    </div>
  );
}
