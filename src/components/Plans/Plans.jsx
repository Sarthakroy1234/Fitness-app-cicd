import React, { useState } from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png';
import Join from "../Join/Join";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleJoinClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleRefresh = () => {
    // Logic to refresh the page
    window.location.reload();
  };

  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <button className="plan" key={i} onClick={() => handleJoinClick(plan)}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Join Section */}
      <div className="join-section">
        {selectedPlan && (
          <div className="join-overlay">
            <Join
              plan={selectedPlan}
              closeJoinSection={() => setSelectedPlan(null)}
            />
          </div>
        )}
      </div>

      {/* Refresh Button */}
      <div className="refresh-button">
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
};

export default Plans;
