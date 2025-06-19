import { Product, ApiResponse } from '../types/Product';

class ApiService {
  private async request<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error('API request failed:', error);
      return {
        success: false,
        data: null as any,
        message: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }

  async getProducts(): Promise<ApiResponse<Product[]>> {
    const response = await this.request<{ products: Product[] }>('/data/products.json');
    if (response.success) {
      return {
        success: true,
        data: response.data.products,
      };
    }
    return response as ApiResponse<Product[]>;
  }

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    const productsResponse = await this.getProducts();
    if (productsResponse.success) {
      const product = productsResponse.data.find(p => p.id === id);
      if (product) {
        return {
          success: true,
          data: product,
        };
      }
      return {
        success: false,
        data: null as any,
        message: 'Product not found',
      };
    }
    return productsResponse as ApiResponse<Product>;
  }

  async getProductsByCategory(category: string): Promise<ApiResponse<Product[]>> {
    const productsResponse = await this.getProducts();
    if (productsResponse.success) {
      const filteredProducts = productsResponse.data.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
      return {
        success: true,
        data: filteredProducts,
      };
    }
    return productsResponse as ApiResponse<Product[]>;
  }
}

export const apiService = new ApiService();