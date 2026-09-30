// ========================================
// RD GAME - JavaScript Premium
// ========================================

// ========================================
// DADOS DE PRODUTOS
// ========================================

const defaultProducts = [
    {
        id: 1,
        name: 'PlayStation 5',
        category: 'console',
        price: 4999.99,
        originalPrice: 5499.99,
        image: 'https://img.odcdn.com.br/wp-content/uploads/2021/02/shutterstock_1855958302.jpg',
        images: [
            'https://img.odcdn.com.br/wp-content/uploads/2021/02/shutterstock_1855958302.jpg',
            'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6523/6523167_bd.jpg',
            'https://sm.ign.com/t/ign_br/screenshot/default/ps5-5_vxtz.1080.jpg'
        ],
        description: 'Console de última geração com desempenho excepcional e gráficos incríveis.',
        rating: 4.8,
        reviews: 156,
        stock: 15,
        badge: 'sale'
    },
    {
        id: 2,
        name: 'Xbox Series X',
        category: 'console',
        price: 4899.99,
        originalPrice: 5299.99,
        image: 'https://th.bing.com/th/id/R.242c8fc3ac0ab62875b8835791809679?rik=SaKpEwhxQ%2fiG7g&pid=ImgRaw&r=0',
        images: [
            'https://th.bing.com/th/id/R.242c8fc3ac0ab62875b8835791809679?rik=SaKpEwhxQ%2fiG7g&pid=ImgRaw&r=0',
            'https://pcper.com/wp-content/uploads/2020/10/img-1126-1440x808-1.jpg',
            'https://olhardigital.com.br/wp-content/uploads/2020/11/20201105095130.jpg'
        ],
        description: 'Potência bruta com 12 TFLOPS de desempenho gráfico.',
        rating: 4.7,
        reviews: 142,
        stock: 12,
        badge: 'sale'
    },
    {
        id: 3,
        name: 'Nintendo Switch OLED',
        category: 'console',
        price: 2999.99,
        originalPrice: 3299.99,
        image: 'https://sm.ign.com/t/ign_pt/screenshot/h/high-resol/high-resolution-images-of-nintendo-switch_38vb.1080.jpg',
        images: [
            'https://sm.ign.com/t/ign_pt/screenshot/h/high-resol/high-resolution-images-of-nintendo-switch_38vb.1080.jpg',
            'https://www.slashgear.com/img/gallery/what-you-need-to-do-if-your-nintendo-switch-wont-turn-on/getting-your-switch-turned-on-again-1674854644.jpg',
            'https://5.imimg.com/data5/ANDROID/Default/2023/2/XZ/QF/QG/45999429/product-jpeg-500x500.jpg'
        ],
        description: 'Portabilidade e diversão em um único console.',
        rating: 4.6,
        reviews: 198,
        stock: 25,
        badge: null
    },
    {
        id: 4,
        name: 'Elden Ring',
        category: 'game',
        price: 249.99,
        originalPrice: 299.99,
        image: 'https://cdn.awsli.com.br/2500x2500/2372/2372925/produto/21764117515ec186dbd.jpg',
        images: [
            'https://cdn.awsli.com.br/2500x2500/2372/2372925/produto/21764117515ec186dbd.jpg',
            'https://i.ytimg.com/vi/DqrulYI-YIE/maxresdefault.jpg',
            'https://lojaarenagames.com.br/wp-content/uploads/2023/01/Elden-Ring-Xbox-One-Series-X-1775050779.jpg'
        ],
        description: 'A aventura épica que mudou os games para sempre.',
        rating: 4.9,
        reviews: 2543,
        stock: 50,
        badge: 'new'
    },
    {
        id: 5,
        name: 'Controle DualSense',
        category: 'accessory',
        price: 399.99,
        originalPrice: 449.99,
        image: 'https://th.bing.com/th/id/R.cb4efcca3aca37fdc3db391741c13d26?rik=FE7gA53YQNb%2fGA&pid=ImgRaw&r=0',
        images: [
            'https://th.bing.com/th/id/R.cb4efcca3aca37fdc3db391741c13d26?rik=FE7gA53YQNb%2fGA&pid=ImgRaw&r=0',
            'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2023/05/dualsense-ps5-capa.jpg',
            'https://cdna.artstation.com/p/assets/covers/images/055/827/040/large/s-visual-s-visual-16.jpg?1667843561'
        ],
        description: 'Controle com feedback háptico revolucionário.',
        rating: 4.5,
        reviews: 876,
        stock: 40,
        badge: null
    },
    {
        id: 6,
        name: 'Headset HyperX Cloud',
        category: 'accessory',
        price: 599.99,
        originalPrice: 699.99,
        image: 'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_alpha_blackred_4_detachable_2048x2048.jpg?v=1655969550',
        images: [
            'https://cdn.shopify.com/s/files/1/0564/3612/9997/products/hyperx_cloud_alpha_blackred_4_detachable_2048x2048.jpg?v=1655969550',
            'https://row.hyperx.com/cdn/shop/files/hyperx_cloud_iii_red_66x0049_angle_6_1024x1024.jpg?v=1717706938',
            'https://th.bing.com/th/id/R.c14a53e2f3f8b22e018a524c736f57be?rik=4Gn5gZ5rvg5CpQ&riu=http%3a%2f%2frow.hyperx.com%2fcdn%2fshop%2ffiles%2fhyperx_cloud_iii_red_66x0049_angle_2.jpg%3fv%3d1692736987&ehk=mWFRIjihyprk4%2fvG0%2fsCK5hABEw8Iw2Wwhn6d51eCk8%3d&risl=&pid=ImgRaw&r=0'
        ],
        description: 'Som envolvente para uma experiência imersiva.',
        rating: 4.7,
        reviews: 543,
        stock: 35,
        badge: 'sale'
    },
    {
        id: 7,
        name: 'Baldurs Gate 3',
        category: 'game',
        price: 299.99,
        originalPrice: 349.99,
        image: 'https://tse2.mm.bing.net/th/id/OIP.38-kIcSbQDQwGZ5PKtvceAHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3',
        images: [
            'https://tse2.mm.bing.net/th/id/OIP.38-kIcSbQDQwGZ5PKtvceAHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3',
            'https://http2.mlstatic.com/D_NQ_NP_647831-MLA75657708160_042024-O.webp',
            'https://cdn.awsli.com.br/600x700/2693/2693981/produto/247593406/baldurs-gate-3-ps5-midia-digital-124550d7-99yf443ox3.jpg'
        ],
        description: 'RPG épico com histórias profundas e decisões que importam.',
        rating: 4.8,
        reviews: 1876,
        stock: 45,
        badge: null
    },
    {
        id: 8,
        name: 'Cyberpunk 2077',
        category: 'game',
        price: 199.99,
        originalPrice: 279.99,
        image: 'https://cdn.awsli.com.br/2500x2500/2395/2395453/produto/337423190/4d10a140a71a3496f52dded4e2871de2-j8dldfuytz.jpg',
        images: [
            'https://cdn.awsli.com.br/2500x2500/2395/2395453/produto/337423190/4d10a140a71a3496f52dded4e2871de2-j8dldfuytz.jpg',
            'https://t.ctcdn.com.br/NkF-NxOo7xszH2ktSHpzxjnp730=/600x600/smart/i19324.jpeg',
            'https://cdn.sistemawbuy.com.br/arquivos/cf7e29a341643e1c477691d5e6b1746d/produtos/63e3159871788/cyber-ps4-63e3b3c3da3f8_mini.png'
        ],
        description: 'Jogo de ação em primeira pessoa em um futuro distópico.',
        rating: 4.4,
        reviews: 1234,
        stock: 60,
        badge: 'sale'
    },
    {
        id: 9,
        name: 'Starfield',
        category: 'game',
        price: 279.99,
        originalPrice: 329.99,
        image: 'https://th.bing.com/th/id/R.93f0864d27b4223484d77467a2f2fa65?rik=MuQXIxuYrON0Ag&riu=http%3a%2f%2fcstech.store%2fcdn%2fshop%2fproducts%2fxsx-starfield.jpg%3fv%3d1688169503&ehk=Da7blso3WcEYu%2fNWnNC62PrgYwdILU%2bBhSkOCVTU2KY%3d&risl=&pid=ImgRaw&r=0',
        images: [
            'https://th.bing.com/th/id/R.93f0864d27b4223484d77467a2f2fa65?rik=MuQXIxuYrON0Ag&riu=http%3a%2f%2fcstech.store%2fcdn%2fshop%2fproducts%2fxsx-starfield.jpg%3fv%3d1688169503&ehk=Da7blso3WcEYu%2fNWnNC62PrgYwdILU%2bBhSkOCVTU2KY%3d&risl=&pid=ImgRaw&r=0',
            'https://tse2.mm.bing.net/th/id/OIP.VJNI_5Q10t4b0eJCKBXftQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            'https://http2.mlstatic.com/D_NQ_NP_856737-MLB75873665261_042024-O.webp'
        ],
        description: 'Exploração espacial em larga escala com centenas de planetas.',
        rating: 4.6,
        reviews: 987,
        stock: 55,
        badge: 'new'
    },
    {
        id: 10,
        name: 'Final Fantasy XVI',
        category: 'game',
        price: 329.99,
        originalPrice: 379.99,
        image: 'https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=750&format=.jpg&quality=91&imagick=uploads.adrenaline.com.br/2023/05/FINAL-FANTASY-XVI.jpg',
        images: [
            'https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=750&format=.jpg&quality=91&imagick=uploads.adrenaline.com.br/2023/05/FINAL-FANTASY-XVI.jpg',
            'https://http2.mlstatic.com/D_NQ_NP_726646-MLB70775670950_072023-O.webp',
            'https://www.picclickimg.com/6iAAAOSwrzdlcz1n/Final-Fantasy-XVI-Sony-PlayStation-5-2023.webp'
        ],
        description: 'A próxima geração de Final Fantasy com ação épica.',
        rating: 4.7,
        reviews: 654,
        stock: 35,
        badge: null
    },
    {
        id: 11,
        name: 'Controle Xbox',
        category: 'accessory',
        price: 349.99,
        originalPrice: 399.99,
        image: 'https://a-static.mlcdn.com.br/1500x1500/controle-para-xbox-series-x-xbox-series-s-xbox-one-x-sem-fio-carbon-black-preto/magazineluiza/043188300/a2612a7e37042c10c2bec90c2414a836.jpg',
        images: [
            'https://a-static.mlcdn.com.br/1500x1500/controle-para-xbox-series-x-xbox-series-s-xbox-one-x-sem-fio-carbon-black-preto/magazineluiza/043188300/a2612a7e37042c10c2bec90c2414a836.jpg',
            'https://images.colombo.com.br/produtos/916930/916930_ControlePreto_0_z.jpg',
            'https://img.terabyteshop.com.br/produto/g/controle-xbox-series-x-sem-fio-carbon-black-qat-00007_109838.jpg'
        ],
        description: 'Controle compatível com Xbox Series X/S e PC.',
        rating: 4.6,
        reviews: 543,
        stock: 30,
        badge: null
    },
    {
        id: 12,
        name: 'Suporte para Controle',
        category: 'accessory',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://img.elo7.com.br/product/zoom/54A4C42/suporte-duplo-para-controle-de-videogame-personalizavel--utilidades.jpg',
        images: [
            'https://img.elo7.com.br/product/zoom/54A4C42/suporte-duplo-para-controle-de-videogame-personalizavel--utilidades.jpg',
            'https://media.printables.com/media/prints/727250/images/5765412_fce9bf40-1257-4342-84f5-f96ae3b8e5bd_8601364c-b78a-4858-b402-2bad4eebcc7d/img_4982.png',
            'https://i.etsystatic.com/30934134/c/2678/2678/161/288/il/7d3865/5266767011/il_800x800.5266767011_m8tx.jpg'
        ],
        description: 'Suporte universal para controles de videogame.',
        rating: 4.3,
        reviews: 234,
        stock: 100,
        badge: null
    },
    {
        id: 13,
        name: 'Manual Original PlayStation 1',
        category: 'manual',
        price: 149.99,
        originalPrice: 199.99,
        image: 'https://images.vexels.com/media/users/3/145908/isolated/preview/6d4aea5d7e4f6e5c5e5c5e5c5e5c5e5c-manual-de-instrucciones-de-videojuegos.png',
        images: [
            'https://images.vexels.com/media/users/3/145908/isolated/preview/6d4aea5d7e4f6e5c5e5c5e5c5e5c5e5c-manual-de-instrucciones-de-videojuegos.png',
            'https://i.pinimg.com/564x/8f/5e/5e/8f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg',
            'https://i.pinimg.com/564x/9f/5e/5e/9f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg'
        ],
        description: 'Manual original em perfeito estado do PlayStation 1.',
        rating: 4.8,
        reviews: 45,
        stock: 5,
        badge: 'sale'
    },
    {
        id: 14,
        name: 'Poster Retro Arcade',
        category: 'manual',
        price: 79.99,
        originalPrice: 99.99,
        image: 'https://images.vexels.com/media/users/3/145908/isolated/preview/retro-arcade-poster-design.png',
        images: [
            'https://images.vexels.com/media/users/3/145908/isolated/preview/retro-arcade-poster-design.png',
            'https://i.pinimg.com/564x/7f/5e/5e/7f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg',
            'https://i.pinimg.com/564x/8f/5e/5e/8f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg'
        ],
        description: 'Poster retro arcade em alta qualidade, pronto para emoldurar.',
        rating: 4.6,
        reviews: 78,
        stock: 20,
        badge: null
    },
    {
        id: 15,
        name: 'Nintendo Game Boy Original - Edicao Limitada',
        category: 'rarity',
        price: 1299.99,
        originalPrice: 1499.99,
        image: 'https://images.vexels.com/media/users/3/145908/isolated/preview/retro-gameboy-handheld-console.png',
        images: [
            'https://images.vexels.com/media/users/3/145908/isolated/preview/retro-gameboy-handheld-console.png',
            'https://i.pinimg.com/564x/6f/5e/5e/6f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg',
            'https://i.pinimg.com/564x/5f/5e/5e/5f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg'
        ],
        description: 'Nintendo Game Boy original em perfeito estado, item raro para colecionadores.',
        rating: 4.9,
        reviews: 23,
        stock: 2,
        badge: 'new'
    },
    {
        id: 16,
        name: 'Cartuchos Raros Sega Genesis',
        category: 'rarity',
        price: 899.99,
        originalPrice: 999.99,
        image: 'https://images.vexels.com/media/users/3/145908/isolated/preview/retro-game-cartridges.png',
        images: [
            'https://images.vexels.com/media/users/3/145908/isolated/preview/retro-game-cartridges.png',
            'https://i.pinimg.com/564x/4f/5e/5e/4f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg',
            'https://i.pinimg.com/564x/3f/5e/5e/3f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e.jpg'
        ],
        description: 'Colecao de cartuchos raros do Sega Genesis, item de grande valor para colecionadores.',
        rating: 4.7,
        reviews: 12,
        stock: 1,
        badge: 'sale'
    }
];

// Carregar produtos do localStorage ou usar padrão
let products = [];

function loadProducts() {
    const saved = localStorage.getItem('rdgame_products');
    if (saved) {
        try {
            products = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar produtos:', e);
            products = JSON.parse(JSON.stringify(defaultProducts));
            localStorage.setItem('rdgame_products', JSON.stringify(products));
        }
    } else {
        products = JSON.parse(JSON.stringify(defaultProducts));
        localStorage.setItem('rdgame_products', JSON.stringify(products));
    }
}

// Carregar produtos ao iniciar
loadProducts();

// ========================================
// ESTADO DA APLICAÇÃO
// ========================================

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = {
    categories: [],
    maxPrice: 5000,
    sort: 'newest'
};

let lastScrollTop = 0;
const header = document.getElementById('header');

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();
    renderAllProducts();
    updateCartCount();
    updateWishlistCount();
    setupEventListeners();
    setupHeaderScroll();
});

// ========================================
// HEADER DINÂMICO (Hide on Scroll)
// ========================================

function setupHeaderScroll() {
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrollando para baixo - esconde o header
            header.classList.add('hide');
        } else {
            // Scrollando para cima - mostra o header
            header.classList.remove('hide');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');
    
    if (menuToggle && navMobile) {  // ✅ Verifica antes de usar
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMobile.classList.toggle('active');
        });
    }
}


 // Close menu when clicking on a link
document.querySelectorAll('.nav-mobile .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle) menuToggle.classList.remove('active');  // ✅ Verifica antes
        if (navMobile) navMobile.classList.remove('active');    // ✅ Verifica antes
    });
});


    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            openModal('cartModal');
            renderCartItems();
        });
    }

    // Wishlist button
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            openModal('wishlistModal');
            renderWishlistItems();
        });
    }

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            if (searchTerm.trim() === '') {
                renderAllProducts();
                return;
            }
            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(searchTerm)
            );
            renderProductsGrid(filtered, 'allProducts');
            // Redirecionar para a seção de todos os produtos
            const todosSection = document.getElementById('todos-produtos');
            if (todosSection) {
                todosSection.scrollIntoView({behavior: 'smooth'});
            }
        }
        
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        searchBtn.addEventListener('click', performSearch);
    }

    // Filters
    document.querySelectorAll('.filter-input').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            const priceValue = document.getElementById('priceValue');
            if (priceValue) {
                priceValue.textContent = e.target.value;
            }
            currentFilter.maxPrice = parseInt(e.target.value);
            applyFilters();
        });
    }

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentFilter.sort = e.target.value;
            applyFilters();
        });
    }

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Inscrição realizada com sucesso!', 'success');
            e.target.reset();
        });
    }



    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });


// ========================================
// RENDERIZAÇÃO DE PRODUTOS
// ========================================

function renderFeaturedProducts() {
    const featured = products.slice(0, 4);
    renderProductsGrid(featured, 'featuredProducts');
}

function renderAllProducts() {
    renderProductsGrid(products, 'allProducts');
}

function renderCategoryProducts(category) {
    const filtered = products.filter(p => p.category === category);
    renderProductsGrid(filtered, 'allProducts');
}

function renderProductsGrid(productsToRender, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    container.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.productId = product.id;
    
    const isInWishlist = wishlist.some(item => item.id === product.id);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Promoção' : 'Novo'}</span>` : ''}
        </div>
        <div class="product-content">
            <p class="product-category">${getCategoryLabel(product.category)}</p>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">
                <p class="price">R$ ${formatPrice(product.price)}</p>
                ${product.originalPrice ? `<p class="original-price">R$ ${formatPrice(product.originalPrice)}</p>` : ''}
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
                <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (!e.target.closest('.product-actions')) {
            openProductModal(product);
        }
    });

    return card;
}

// ========================================
// FILTROS E ORDENAÇÃO
// ========================================

function applyFilters() {
    // Detectar se estamos em uma página de categoria
    const categoryProductsContainer = document.getElementById('categoryProducts');
    const allProductsContainer = document.getElementById('allProducts');
    
    console.log('applyFilters called');
    console.log('categoryProductsContainer:', categoryProductsContainer);
    console.log('allProductsContainer:', allProductsContainer);
    
    // Se existe categoryProducts, estamos em uma página de categoria
    if (categoryProductsContainer) {
        console.log('Calling applyCategoryFilters');
        applyCategoryFilters();
        return;
    }
    
    // Se não existe categoryProducts, estamos no index.html
    if (!allProductsContainer) {
        console.log('No containers found');
        return;
    }
    
    // Caso contrário, aplicar filtros normais (index.html)
    const selectedCategories = Array.from(document.querySelectorAll('.filter-input:checked'))
        .map(cb => cb.value);
    
    currentFilter.categories = selectedCategories;

    let filtered = products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const priceMatch = product.price <= currentFilter.maxPrice;
        return categoryMatch && priceMatch;
    });

    // Apply sorting
    filtered = sortProducts(filtered, currentFilter.sort);

    renderProductsGrid(filtered, 'allProducts');
}

function applyCategoryFilters() {
    // Detectar qual categoria estamos filtrando
    const categoryProductsContainer = document.getElementById('categoryProducts');
    if (!categoryProductsContainer) return;
    
    // Obter a categoria atual (detectar pelo URL)
    let currentCategory = null;
    const pathname = window.location.pathname;
    if (pathname.includes('jogos')) currentCategory = 'game';
    else if (pathname.includes('acessorios')) currentCategory = 'accessory';
    else if (pathname.includes('novidades')) currentCategory = 'new';
    else if (pathname.includes('consoles')) currentCategory = 'console';
    
    if (!currentCategory) return;
    
    // Filtrar por categoria
    let filtered = products.filter(p => p.category === currentCategory);
    
    // Aplicar filtro de preço
    filtered = filtered.filter(p => p.price <= currentFilter.maxPrice);
    
    // Aplicar ordenação
    filtered = sortProducts(filtered, currentFilter.sort);
    
    renderProductsGrid(filtered, 'categoryProducts');
}

function sortProducts(productsToSort, sortType) {
    const sorted = [...productsToSort];
    
    switch(sortType) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
        default:
            return sorted;
    }
}

function resetFilters() {
    document.querySelectorAll('.filter-input').forEach(cb => cb.checked = false);
    document.getElementById('priceRange').value = 5000;
    document.getElementById('priceValue').textContent = '5000';
    document.getElementById('sortSelect').value = 'newest';
    currentFilter = { categories: [], maxPrice: 5000, sort: 'newest' };
    renderAllProducts();
}

// ========================================
// CARRINHO
// ========================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showToast(`${product.name} adicionado ao carrinho!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
    showToast('Produto removido do carrinho', 'success');
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-shopping-bag"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Quantidade: ${item.quantity}</p>
            </div>
            <div>
                <p class="item-price">R$ ${formatPrice(item.price * item.quantity)}</p>
                <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remover">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    updateCartTotal();
}

function updateCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0;  // Sem frete
    const total = subtotal + shipping;
    
    console.log('updateCartTotal:', { subtotal, shipping, total });  // ← Log 1
    
    // Atualizar elementos do carrinho
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    const cartTotalEl = document.getElementById('cartTotal');
    
    console.log('Elements:', { subtotalEl, shippingEl, totalEl, cartTotalEl });  // ← Log 2
    
    if (subtotalEl) {
        subtotalEl.textContent = 'R$ ' + formatPrice(subtotal);
        console.log('Updated subtotal:', subtotalEl.textContent);  // ← Log 3
    }
    if (shippingEl) {
        shippingEl.textContent = 'R$ ' + formatPrice(shipping);
        console.log('Updated shipping:', shippingEl.textContent);  // ← Log 4
    }
    if (totalEl) {
        totalEl.textContent = 'R$ ' + formatPrice(total);
        console.log('Updated total:', totalEl.textContent);  // ← Log 5
    }
    if (cartTotalEl) {
        cartTotalEl.textContent = formatPrice(total);
        console.log('Updated cartTotal:', cartTotalEl.textContent);  // ← Log 6
    }
}


function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function checkout() {
    if (cart.length === 0) {
        showToast('Carrinho vazio', 'warning');
        return;
    }

    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

// ========================================
// WISHLIST
// ========================================

function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = wishlist.find(item => item.id === productId);

    if (existingItem) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showToast(`${product.name} removido dos favoritos`, 'success');
    } else {
        wishlist.push(product);
        showToast(`${product.name} adicionado aos favoritos!`, 'success');
    }

    saveWishlist();
    updateWishlistCount();
    
    // Atualizar TODOS os botões instantaneamente
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const card = btn.closest('.product-card');
        if (card) {
            const cardProductId = parseInt(card.dataset.productId);
            const isInWishlist = wishlist.some(item => item.id === cardProductId);
            
            if (isInWishlist) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    });
    
    // Forçar repaint para aplicar CSS
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.offsetHeight;
    });

    // Re-render if wishlist modal is open
    if (document.getElementById('wishlistModal').classList.contains('active')) {
        renderWishlistItems();
    }
}

function renderWishlistItems() {
    const wishlistItemsContainer = document.getElementById('wishlistItems');
    
    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-heart"></i>
                <p>Sua aba de favoritos está vazia</p>
            </div>
        `;
        return;
    }

    wishlistItemsContainer.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>R$ ${formatPrice(item.price)}</p>
            </div>
            <div>
                <button class="btn btn-primary" onclick="addToCart(${item.id})" style="padding: 8px 15px; font-size: 12px;">Comprar</button>
                <button class="remove-btn" onclick="toggleWishlist(${item.id})" title="Remover">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ========================================
// MODAL FUNCTIONS
// ========================================

// Store current product for carousel navigation
let currentProduct = null;
let currentImageIndex = 0;

function openProductModal(product) {
    const modal = document.getElementById('productModal');
    if (!modal) {
        console.error('Modal productModal não encontrado!');
        return;
    }
    
    const isInWishlist = wishlist.some(item => item.id === product.id);

    // Store current product and reset image index
    currentProduct = product;
    currentImageIndex = 0;

    // Set main image from carousel array
    const imgEl = document.getElementById('modalProductImage');
    if (imgEl) {
        if (product.images && product.images.length > 0) {
            imgEl.src = product.images[0];
        } else if (product.image) {
            imgEl.src = product.image;
        }
    }
    
    // Render carousel thumbnails
    renderCarouselThumbnails(product);
    
    // Set product info - handle both naming conventions
    const titleEl = document.getElementById('modalProductName') || document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = product.name;
    
    const categoryEl = document.getElementById('modalProductCategory');
    if (categoryEl) categoryEl.textContent = getCategoryLabel(product.category);
    
    const priceEl = document.getElementById('modalProductPrice') || document.getElementById('modalPrice');
    if (priceEl) priceEl.textContent = `R$ ${formatPrice(product.price)}`;
    
    const originalPriceEl = document.getElementById('modalProductOriginalPrice') || document.getElementById('modalOriginalPrice');
    if (originalPriceEl) originalPriceEl.textContent = product.originalPrice ? `R$ ${formatPrice(product.originalPrice)}` : '';
    
    const descEl = document.getElementById('modalProductDescription') || document.getElementById('modalDescription');
    if (descEl) descEl.textContent = product.description;
    
    const stockEl = document.getElementById('modalProductStock') || document.getElementById('modalStock');
    if (stockEl) stockEl.textContent = product.stock > 0 ? 'Em Estoque' : 'Fora de Estoque';
    
    const skuEl = document.getElementById('modalProductSKU');
    if (skuEl) skuEl.textContent = `RDG-${String(product.id).padStart(3, '0')}`;
    
    const categoryDetailEl = document.getElementById('modalProductCategoryDetail');
    if (categoryDetailEl) categoryDetailEl.textContent = getCategoryLabel(product.category);
    
    const addToCartBtn = document.getElementById('modalAddToCart');
    const addToWishlistBtn = document.getElementById('modalAddToWishlist');

    if (addToCartBtn) {
        addToCartBtn.onclick = () => {
            addToCart(product.id);
            closeModal('productModal');
        };
    }

    if (addToWishlistBtn) {
        addToWishlistBtn.onclick = () => {
            toggleWishlist(product.id);
            addToWishlistBtn.classList.toggle('active');
        };
        addToWishlistBtn.classList.toggle('active', isInWishlist);
    }

    openModal('productModal');
}

// Carousel functions
function renderCarouselThumbnails(product) {
    const container = document.getElementById('carouselThumbnails');
    if (!container) return;  // ← Verifica se existe
    
    container.innerHTML = '';
    
    if (product.images && product.images.length > 1) {
        product.images.forEach((img, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img;
            thumbnail.className = `carousel-thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.onclick = () => selectImage(index);
            container.appendChild(thumbnail);
        });
    }
}

function changeImage(direction) {
    if (!currentProduct || !currentProduct.images) return;
    
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex < 0) {
        currentImageIndex = currentProduct.images.length - 1;
    } else if (currentImageIndex >= currentProduct.images.length) {
        currentImageIndex = 0;
    }
    
    selectImage(currentImageIndex);
}

function selectImage(index) {
    if (!currentProduct || !currentProduct.images) return;
    
    currentImageIndex = index;
    const imgEl = document.getElementById('modalProductImage');
    if (imgEl) {  // ← Verifica se existe
        imgEl.src = currentProduct.images[index];
    }
    
    // Update thumbnail active state
    const thumbnails = document.querySelectorAll('.carousel-thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// ========================================
// MODAIS
// ========================================

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// UTILITÁRIOS
// ========================================

function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function getCategoryLabel(category) {
    const labels = {
        'console': 'Console',
        'game': 'Jogo',
        'accessory': 'Acessório'
    };
    return labels[category] || category;
}

function getStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// ========================================
// CONTATO WHATSAPP PARA VENDER
// ========================================

function contactWhatsApp() {
    const message = `Olá! Gostaria de vender meus jogos e consoles. Vocês compram produtos usados?`;
    const whatsappUrl = `https://wa.me/55?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ========================================
// SCROLL SMOOTH PARA NAVEGAÇÃO
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// RESET FILTERS
// ========================================

function resetFilters() {
    // Reset checkboxes
    document.querySelectorAll('.filter-input').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset price slider
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = 5000;
        document.getElementById('priceValue').textContent = '5000';
    }

    // Reset sort
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.value = 'newest';
    }

    // Reset filters
    currentFilter = {
        categories: [],
        maxPrice: 5000,
        sort: 'newest'
    };

    // Re-render products
    applyFilters();
    showToast('Filtros resetados', 'success');
}

// ========================================
// CONTACT VIA WHATSAPP
// ========================================

function sendContactViaWhatsApp(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    // Validate
    if (!name || !email || !subject || !message) {
        showToast('Por favor, preencha todos os campos obrigatórios', 'warning');
        return;
    }
    
    // Format the message for WhatsApp
    const whatsappMessage = `*NOVO CONTATO - RD GAME*

*Nome:* ${name}
*Email:* ${email}
*Telefone:* ${phone || 'Não informado'}
*Assunto:* ${subject}

*Mensagem:*
${message}`;
    
    // WhatsApp number (with country code)
    const whatsappNumber = '5521983558012';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showToast('Abrindo WhatsApp... Sua mensagem será enviada!', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
}
