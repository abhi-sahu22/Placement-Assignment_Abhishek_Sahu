import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from './utils/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchProductById(id);

        if (productData) {
          setProduct(productData);
        } else {
          console.log('Failed to fetch product');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
      <div>
        <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mr-4" />
        <div>
          <p className="text-gray-500">${product.price}</p>
          <p>{product.description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
