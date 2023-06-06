import PropTypes from 'prop-types';


const ProductItem = ({ product }) => {
  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mr-4" />
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
