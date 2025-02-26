import React, { useState, useEffect } from "react";

function Dashboard() {
  // Define dashboard links
  const dashboards = [
    { name: "AOP Targets", url: "https://aoptng.pythonanywhere.com" },
    { name: "Funnel Analysis", url: "https://tngbi.pythonanywhere.com" },
    { name: "Sales Analysis", url: "https://bisale.pythonanywhere.com" },
    { name: "Team Performance", url: "https://biatng.pythonanywhere.com" },
    { name: "Revenue Performance", url: "https://birev.pythonanywhere.com" },
    { name: "Incremental Revenue Growth", url: "https://perteam.pythonanywhere.com" },
    { name: "Revenue Per Client (ARPU)", url: "https://bicol.pythonanywhere.com" },
    { name: "Profit Margin (EBITDA)", url: "https://bipro.pythonanywhere.com" }
  ];

 const [selectedDashboard, setSelectedDashboard] = useState(dashboards[0].url);
  const [iframeHeight, setIframeHeight] = useState(window.innerHeight);

  // Adjust height dynamically when window resizes
  useEffect(() => {
    const updateHeight = () => setIframeHeight(window.innerHeight);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-3 shadow-md w-full flex flex-wrap justify-center space-x-2 overflow-auto">
        {dashboards.map((dashboard, index) => (
          <button
            key={index}
            className={`text-white font-semibold px-3 py-2 rounded-lg transition ${
              selectedDashboard === dashboard.url ? "bg-gray-700" : "hover:bg-gray-500"
            }`}
            onClick={() => setSelectedDashboard(dashboard.url)}
          >
            {dashboard.name}
          </button>
        ))}
      </nav>

      {/* Full-Screen Dashboard Display */}
      <div className="flex-grow w-full">
        <iframe
          src={selectedDashboard}
          title="External Dashboard"
          className="w-full h-full border-none"
          style={{ width: "100vw", height: "100vh" }} // Ensuring full-screen coverage
        />
      </div>
    </div>
  );
}

export default Dashboard;