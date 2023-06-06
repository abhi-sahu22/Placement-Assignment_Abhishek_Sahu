
const CartItem = ({ item, onQuantityChange, onRemoveItem }) => {
  const { id, name, price, quantity, image } = item;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    onQuantityChange(id, newQuantity);
  };

  const handleRemoveItemClick = () => {
    onRemoveItem(id);
  };

  return (
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-contain rounded-lg mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">${price}</p>
      </div>
      <div className="flex items-center">
        <p className="mr-2">Quantity:</p>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-12 px-2 py-1 border border-gray-300 rounded"
        />
        <button
          onClick={handleRemoveItemClick}
          className="ml-2 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
