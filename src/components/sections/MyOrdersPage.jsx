import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationDialog from '../ui/DeleteConfirmationDialog';

const MyOrdersPage = ({ orders, deleteOrder }) => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orderToDeleteId, setOrderToDeleteId] = useState(null);

  const handleDeleteClick = (orderId) => {
    setOrderToDeleteId(orderId);
    setIsDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteOrder(orderToDeleteId);
    setIsDialogOpen(false);
    setOrderToDeleteId(null);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setOrderToDeleteId(null);
  };

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <button onClick={() => navigate(-1)} className="flex items-center pt-5 text-gray-600 hover:text-black transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <span className="text-md">Back to Shopping</span>
      </button>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12">
        My Orders
      </h2>
      
      {orders.length === 0 ? (
        <p className="text-center text-gray-500 italic">You have no past orders.</p>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.orderId} className="bg-gray-50 p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Order #{order.orderId}</h3>
                <span className="text-sm text-gray-600">Date: {order.date}</span>
              </div>
              <div className="space-y-4">
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                    <div className="flex-grow">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Order Total:</span>
                  <span>₹{order.total.toFixed(2)}</span>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Customer:</strong> {order.customer.name}</p>
                  <p><strong>Email:</strong> {order.customer.email}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleDeleteClick(order.orderId)}
                    className="px-6 py-3 border border-red-500 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-500 hover:text-white transition-colors"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <DeleteConfirmationDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
      />
    </section>
  );
};

export default MyOrdersPage;