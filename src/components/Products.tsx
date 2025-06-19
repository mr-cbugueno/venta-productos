import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, AlertCircle, Loader2 } from 'lucide-react';
import { Product } from '../types/Product';
import { apiService } from '../services/api';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Electronics', 'Food', 'Home', 'Lifestyle', 'Beauty'];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    
    const response = await apiService.getProducts();
    
    if (response.success) {
      setProducts(response.data);
    } else {
      setError(response.message || 'Failed to load products');
    }
    
    setLoading(false);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    // Implement cart functionality
    console.log('Added to cart:', product.name);
    // You could show a toast notification here
    alert(`${product.name} added to cart!`);
  };

  if (loading) {
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mr-3" />
            <span className="text-lg text-gray-600">Loading products...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center py-20">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <span className="text-lg text-gray-600 mb-4">Failed to load products</span>
            <button 
              onClick={fetchProducts}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our carefully curated selection of premium products designed to enhance your daily life.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      product.inStock
                        ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no products found */}
        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found in this category.</p>
          </div>
        )}

        {/* Load more button - could be implemented for pagination */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;