import { DashboardOrderCard } from '../../components/Card';
import React, { useState } from 'react';
import OrderModal from './OrderModal';
import { OrderStatus } from '../../utils/types';
import { orders } from '../database/mockorder';

interface OrdersListProps {
  status: OrderStatus;
}
const OrdersList: React.FC<OrdersListProps> = ({ status }) => {
  // Mock data for orders
 
  const filteredOrders = orders.filter(order => order.status === status);

  const [isOpen, setIsOpen] = React.useState(false);
  let [modalOrder, setModalOrder] = useState<string>('')

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">{status.charAt(0).toUpperCase() + status.slice(1)} Orders</h1>
      <OrderModal ModalData={isOpen} id={modalOrder} />
      <div className="grid grid-cols-2 gap-2" onMouseDown={() => setIsOpen(false)}>  
        {filteredOrders.map(order => (
          <DashboardOrderCard
            key={order.customerId}
            logoUrl={order.soccer.image !== "" ? order.soccer.image : order.clothing.image} // Front logo URL
            text={order.soccer.name !== "" ? order.soccer.name : order.front.text.content} // Front text
            backText={order.back.text.content} // Back text
            size={order.clothing.size} // Front text position
            quantity={order.quantity} // Quantity
            clothingColor={order.clothing.color} // Clothing color
            status={order.status} // Status
            infoMOdal={() => setIsOpen(true)} 
            sendData={()=>setModalOrder(order.customerId)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
