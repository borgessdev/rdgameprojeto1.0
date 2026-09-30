// API Integration for RD GAME
// Integra com o backend tRPC para salvar produtos e pedidos no banco de dados

const API_BASE = '/api/trpc';

// ========================================
// PRODUTOS API
// ========================================

async function loadProductsFromAPI() {
  try {
    const response = await fetch(`${API_BASE}/products.list?batch=1`, {
      method: 'GET',
      credentials: 'include',
    });
    
    if (!response.ok) throw new Error('Failed to load products');
    
    const data = await response.json();
    
    // O tRPC retorna um array dentro de um objeto
    const products = Array.isArray(data) ? data : (data[0]?.result?.data || []);
    
    // Se houver produtos, salva no localStorage para cache
    if (products.length > 0) {
      localStorage.setItem('rdgame_products', JSON.stringify(products));
      return products;
    }
    
    return [];
  } catch (error) {
    console.warn('[API] Failed to load products from API, using localStorage:', error);
    const cached = localStorage.getItem('rdgame_products');
    return cached ? JSON.parse(cached) : [];
  }
}

async function saveProductToAPI(product) {
  try {
    const payload = {
      0: {
        jsonrpc: '2.0',
        method: 'mutation',
        params: {
          path: 'products.create',
          input: {
            name: product.name,
            price: Math.round(product.price * 100), // converter para centavos
            originalPrice: product.originalPrice ? Math.round(product.originalPrice * 100) : undefined,
            category: product.category,
            image: product.image,
            image2: product.images?.[1],
            image3: product.images?.[2],
            description: product.description,
            stock: product.stock || 0,
          },
        },
      },
    };

    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to save product');
    
    const result = await response.json();
    console.log('[API] Product saved:', result);
    
    return result;
  } catch (error) {
    console.error('[API] Failed to save product:', error);
    throw error;
  }
}

async function deleteProductFromAPI(productId) {
  try {
    const payload = {
      0: {
        jsonrpc: '2.0',
        method: 'mutation',
        params: {
          path: 'products.delete',
          input: { id: productId },
        },
      },
    };

    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to delete product');
    
    console.log('[API] Product deleted');
    return true;
  } catch (error) {
    console.error('[API] Failed to delete product:', error);
    throw error;
  }
}

// ========================================
// PEDIDOS API
// ========================================

async function saveOrderToAPI(order) {
  try {
    const payload = {
      0: {
        jsonrpc: '2.0',
        method: 'mutation',
        params: {
          path: 'orders.create',
          input: {
            orderNumber: order.orderNumber,
            customerName: order.customerName,
            customerEmail: order.customerEmail,
            customerPhone: order.customerPhone,
            customerAddress: order.customerAddress,
            products: JSON.stringify(order.products),
            total: Math.round(order.total * 100), // converter para centavos
            status: 'Pendente',
          },
        },
      },
    };

    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to save order');
    
    const result = await response.json();
    console.log('[API] Order saved:', result);
    
    return result;
  } catch (error) {
    console.error('[API] Failed to save order:', error);
    // Fallback para localStorage se a API falhar
    const orders = JSON.parse(localStorage.getItem('rdgame_orders') || '[]');
    orders.push(order);
    localStorage.setItem('rdgame_orders', JSON.stringify(orders));
    throw error;
  }
}

async function loadOrdersFromAPI() {
  try {
    const response = await fetch(`${API_BASE}/orders.list?batch=1`, {
      method: 'GET',
      credentials: 'include',
    });
    
    if (!response.ok) throw new Error('Failed to load orders');
    
    const data = await response.json();
    
    // O tRPC retorna um array dentro de um objeto
    const orders = Array.isArray(data) ? data : (data[0]?.result?.data || []);
    
    // Converte de centavos para reais
    return orders.map(order => ({
      ...order,
      total: order.total / 100,
      products: typeof order.products === 'string' ? JSON.parse(order.products) : order.products,
    }));
  } catch (error) {
    console.warn('[API] Failed to load orders from API, using localStorage:', error);
    const cached = localStorage.getItem('rdgame_orders');
    return cached ? JSON.parse(cached) : [];
  }
}

async function updateOrderStatusFromAPI(orderId, status) {
  try {
    const payload = {
      0: {
        jsonrpc: '2.0',
        method: 'mutation',
        params: {
          path: 'orders.update',
          input: { id: orderId, status },
        },
      },
    };

    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to update order');
    
    console.log('[API] Order status updated');
    return true;
  } catch (error) {
    console.error('[API] Failed to update order:', error);
    throw error;
  }
}
