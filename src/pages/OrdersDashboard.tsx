import React, { useState } from 'react';
import NavigationBar from '../Dashboard/components/DashboardNavbar';
import Sidebar from '../Dashboard/components/Sidebar';
import DashboardContent from '../Dashboard/Pages/DashboardContent';
import OrdersList from '../Dashboard/components/OrdersList';
import { themeVariables, useTheme } from '../Context/Theme';
import { OrderStatus } from '../utils/types';

const OrdersDashboard: React.FC = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<OrderStatus | 'dashboard'>('dashboard');
  const {theme} = useTheme()
  const themeClass = themeVariables[theme]

  return (
    <div className={`flex h-screen  ${themeClass.background}`}>
      <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem}/>
      <div className="flex flex-col flex-1 overflow-hidden">
        <NavigationBar/>
        <main className={`flex-1 overflow-x-hidden overflow-y-auto ${themeClass.background}`}>
          {activeMenuItem === 'dashboard' ? (
            <DashboardContent />
          ) : (
            <OrdersList status={activeMenuItem} />
          )}
        </main>
      </div>
    </div>
  );
};

export default OrdersDashboard;

