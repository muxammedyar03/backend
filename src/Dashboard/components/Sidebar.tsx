import { themeVariables, useTheme } from '../../Context/Theme';
import { OrderStatus, SidebarProps } from '../../utils/types';
import { ChartBar, Check, CheckCircle, ClipboardList, Clock, InboxIcon } from 'lucide-react';
import React from 'react';


const Sidebar: React.FC<SidebarProps> = ({ activeMenuItem, setActiveMenuItem}) => {
  const menuItems = [
    { name: 'Dashboard', icon: ChartBar, value: 'dashboard' },
    { name: 'New Orders', icon: ClipboardList, value: 'new' },
    { name: 'Orders in Progress', icon: Clock, value: 'in-progress' },
    { name: 'Received Orders', icon: InboxIcon, value: 'received' },
    { name: 'Finished Orders', icon: Check, value: 'finished' },
  ];
  const {theme} = useTheme()
  const themeClass = themeVariables[theme]

  return (
    <div className={` ${themeClass.card} ${themeClass.text} w-64 space-y-2 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"`}>
      {menuItems.map((item) => (
        <button
          key={item.value}
          className={`flex items-center w-full space-x-2 py-2 px-4 rounded transition duration-200 h-14 ${
            activeMenuItem === item.value ? themeClass.button : `${themeClass.card} ${themeClass.card === 'bg-white' ? 'hover:bg-gray-200' : 'hover:bg-gray-800'}`
          }`}
          onClick={() => setActiveMenuItem(item.value as OrderStatus | 'dashboard')}
        >
          <item.icon className={`h-5 w-5`} />
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

