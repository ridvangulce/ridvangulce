import React, { useState } from "react";

const TabExpertise = ({ services }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="expertise-section">
            {/* Tab Buttons */}
            <div className="expertise-tabs">
                {services.map((service, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`expertise-tab-button ${activeTab === index ? "active" : ""
                            }`}
                    >
                        {service.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="expertise-tab-content">
                <h2 className="text-3xl mob:text-4xl laptop:text-5xl font-bold mb-4 mob:mb-6">
                    {services[activeTab].title}
                </h2>
                <p className="text-base mob:text-lg laptop:text-xl text-text-secondary leading-relaxed">
                    {services[activeTab].description}
                </p>
            </div>
        </div>
    );
};

export default TabExpertise;
