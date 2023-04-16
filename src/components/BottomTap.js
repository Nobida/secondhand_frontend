import React, { useState } from 'react';

// 选项卡按钮组件
const TabButton = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      className={`tab-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <i className={`fa fa-${icon}`} />
      <span>{label}</span>
    </button>
  );
};

// 选项卡内容组件
const TabContent = ({ label }) => {
  return (
    <div className="tab-content">
      <h2>{label}</h2>
      <p>这是 {label} 选项卡的内容。</p>
    </div>
  );
};

// 底部选项卡组件
const BottomTab = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className="bottom-tab-container">
      <div className="bottom-tab">
        <div className="tab-buttons">
          <TabButton
            label="Tab 1"
            icon="home"
            isActive={activeTab === 'Tab 1'}
            onClick={() => handleTabClick('Tab 1')}
          />
          <TabButton
            label="Tab 2"
            icon="search"
            isActive={activeTab === 'Tab 2'}
            onClick={() => handleTabClick('Tab 2')}
          />
          <TabButton
            label="Tab 3"
            icon="bell"
            isActive={activeTab === 'Tab 3'}
            onClick={() => handleTabClick('Tab 3')}
          />
          <TabButton
            label="Tab 4"
            icon="user"
            isActive={activeTab === 'Tab 4'}
            onClick={() => handleTabClick('Tab 4')}
          />
        </div>
        <TabContent label={activeTab} />
      </div>
    </div>
  );
};

export default BottomTab;
