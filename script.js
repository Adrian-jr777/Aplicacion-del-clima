// Base de datos simulada con localStorage
const DB_KEY = 'shophub_products';

// Productos de ejemplo
const sampleProducts = [
    {
        id: 1,
        nombre: 'Laptop Gaming Pro',
        descripcion: 'Laptop de alto rendimiento con procesador Intel i7, 16GB RAM, RTX 3060, perfecta para gaming y trabajo profesional.',
        imagenes: [
            'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
            'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800',
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
            'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800'
        ]
    },
    {
        id: 2,
        nombre: 'Smartphone Ultra 5G',
        descripcion: 'Teléfono inteligente de última generación con pantalla AMOLED de 6.7", cámara de 108MP y batería de larga duración.',
        imagenes: [
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
            'https://images.unsplash.com/photo-1592286927505-2fd0d113e4e7?w=800',
            'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
            'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800',
            'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800'
        ]
    },
    {
        id: 3,
        nombre: 'Auriculares Bluetooth Premium',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido activa, sonido Hi-Fi y hasta 30 horas de batería.',
        imagenes: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800',
            'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800',
            'https://images.unsplash.com/photo-1577174881658-0f30157f72c4?w=800',
            'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800'
        ]
    },
    {
        id: 4,
        nombre: 'Smartwatch Deportivo',
        descripcion: 'Reloj inteligente con monitor de frecuencia cardíaca, GPS integrado y resistencia al agua hasta 50m.',
        imagenes: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
            'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800',
            'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800',
            'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800'
        ]
    },
    {
        id: 5,
        nombre: 'Cámara Mirrorless 4K',
        descripcion: 'Cámara profesional sin espejo con sensor full-frame, grabación 4K 60fps y estabilización de imagen.',
        imagenes: [
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800',
            'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800',
            'https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=800',
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800'
        ]
    },
    {
        id: 6,
        nombre: 'Tablet Pro 12.9"',
        descripcion: 'Tablet de alto rendimiento con pantalla Retina, procesador M1 y compatibilidad con Apple Pencil.',
        imagenes: [
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
            'https://images.unsplash.com/photo-1585790050230-5dd28404f1e9?w=800',
            'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800',
            'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800'
        ]
    },
    {
        id: 7,
        nombre: 'Teclado Mecánico RGB',
        descripcion: 'Teclado gaming mecánico con switches Cherry MX, iluminación RGB personalizable y reposamuñecas.',
        imagenes: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800',
            'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800',
            'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=800',
            'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800'
        ]
    },
    {
        id: 8,
        nombre: 'Mouse Gaming Inalámbrico',
        descripcion: 'Mouse ergonómico con sensor óptico de 25,000 DPI, 11 botones programables y batería de 70 horas.',
        imagenes: [
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800',
            'https://images.unsplash.com/photo-1563297007-0686b7003af7?w=800',
            'https://images.unsplash.com/photo-1586920740099-e5e5e7c5f2e0?w=800',
            'https://images.unsplash.com/photo-1613141411244-0e4ac4f93d6c?w=800'
        ]
    },
    {
        id: 9,
        nombre: 'Monitor Curvo 34" UltraWide',
        descripcion: 'Monitor gaming curvo con resolución QHD, tasa de refresco de 144Hz y tecnología FreeSync.',
        imagenes: [
            'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
            'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800',
            'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800',
            'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800',
            'https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=800'
        ]
    },
    {
        id: 10,
        nombre: 'Consola Gaming Next-Gen',
        descripcion: 'Consola de videojuegos de última generación con gráficos 4K, SSD ultrarrápido y ray tracing.',
        imagenes: [
            'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800',
            'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800',
            'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=800',
            'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800',
            'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800'
        ]
    },
    {
        id: 11,
        nombre: 'Silla Gaming Ergonómica',
        descripcion: 'Silla de oficina gaming con soporte lumbar ajustable, reposabrazos 4D y reclinación hasta 180°.',
        imagenes: [
            'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800',
            'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800',
            'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800',
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800',
            'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800'
        ]
    },
    {
        id: 12,
        nombre: 'Escritorio Gaming LED',
        descripcion: 'Escritorio para gaming con superficie de carbono, iluminación LED RGB y gestión de cables integrada.',
        imagenes: [
            'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800',
            'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
            'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800',
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
            'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800'
        ]
    },
    {
        id: 13,
        nombre: 'Micrófono USB Profesional',
        descripcion: 'Micrófono de condensador USB con patrón cardioide, filtro anti-pop y soporte ajustable.',
        imagenes: [
            'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800',
            'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800',
            'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800',
            'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800'
        ]
    },
    {
        id: 14,
        nombre: 'Webcam 4K HDR',
        descripcion: 'Cámara web profesional con resolución 4K, HDR, enfoque automático y micrófono estéreo integrado.',
        imagenes: [
            'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800',
            'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800',
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
            'https://images.unsplash.com/photo-1585790050230-5dd28404f1e9?w=800'
        ]
    },
    {
        id: 15,
        nombre: 'Disco Duro SSD 2TB',
        descripcion: 'Unidad de estado sólido NVMe con velocidades de lectura de hasta 7000 MB/s y escritura de 5000 MB/s.',
        imagenes: [
            'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800',
            'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800',
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800',
            'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800',
            'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=800'
        ]
    }
];

// Inicializar base de datos
function initDB() {
    if (!localStorage.getItem(DB_KEY)) {
        localStorage.setItem(DB_KEY, JSON.stringify(sampleProducts));
    }
}

// Obtener todos los productos
function getAllProducts() {
    const products = localStorage.getItem(DB_KEY);
    return products ? JSON.parse(products) : [];
}

// Obtener producto por ID
function getProductById(id) {
    const products = getAllProducts();
    return products.find(p => p.id === parseInt(id));
}

// Agregar producto
function addProduct(product) {
    const products = getAllProducts();
    const newProduct = {
        id: Date.now(),
        ...product
    };
    products.push(newProduct);
    localStorage.setItem(DB_KEY, JSON.stringify(products));
    return newProduct;
}

// Eliminar producto
function deleteProduct(id) {
    const products = getAllProducts();
    const filteredProducts = products.filter(p => p.id !== parseInt(id));
    localStorage.setItem(DB_KEY, JSON.stringify(filteredProducts));
}

// Verificar si existe un producto con el mismo nombre
function productNameExists(nombre, excludeId = null) {
    const products = getAllProducts();
    return products.some(p => 
        p.nombre.toLowerCase() === nombre.toLowerCase() && 
        p.id !== excludeId
    );
}

// Obtener productos aleatorios sin repetir
function getRandomProducts(count = 10) {
    const products = getAllProducts();
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, products.length));
}

// Paginación
function paginateProducts(products, page = 1, perPage = 10) {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return {
        products: products.slice(start, end),
        totalPages: Math.ceil(products.length / perPage),
        currentPage: page,
        totalProducts: products.length
    };
}

// Renderizar productos en el home
function renderProducts(page = 1) {
    const allProducts = getAllProducts();
    const randomProducts = page === 1 ? getRandomProducts(10) : allProducts;
    const paginated = paginateProducts(randomProducts, page, 10);
    
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (paginated.products.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">No hay productos disponibles</p>';
        return;
    }
    
    paginated.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => window.location.href = `producto.html?id=${product.id}`;
        
        productCard.innerHTML = `
            <img src="${product.imagenes[0]}" alt="${product.nombre}" class="product-image" onerror="this.src='https://via.placeholder.com/400x200?text=Imagen+no+disponible'">
            <div class="product-info">
                <h3 class="product-name">${product.nombre}</h3>
                <p class="product-description">${product.descripcion}</p>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
    
    renderPagination(paginated);
}

// Renderizar paginación
function renderPagination(paginated) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    pagination.innerHTML = '';
    
    if (paginated.totalPages <= 1) return;
    
    // Botón anterior
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-button';
    prevButton.textContent = '← Anterior';
    prevButton.disabled = paginated.currentPage === 1;
    prevButton.onclick = () => renderProducts(paginated.currentPage - 1);
    pagination.appendChild(prevButton);
    
    // Botones de página
    for (let i = 1; i <= paginated.totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-button ${i === paginated.currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.onclick = () => renderProducts(i);
        pagination.appendChild(pageButton);
    }
    
    // Botón siguiente
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-button';
    nextButton.textContent = 'Siguiente →';
    nextButton.disabled = paginated.currentPage === paginated.totalPages;
    nextButton.onclick = () => renderProducts(paginated.currentPage + 1);
    pagination.appendChild(nextButton);
    
    // Info de página
    const pageInfo = document.createElement('span');
    pageInfo.className = 'pagination-info';
    pageInfo.textContent = `Página ${paginated.currentPage} de ${paginated.totalPages}`;
    pagination.appendChild(pageInfo);
}

// Inicializar página principal
if (document.getElementById('productsGrid')) {
    initDB();
    renderProducts();
}

// Exportar funciones para uso en otras páginas
if (typeof window !== 'undefined') {
    window.ShopHub = {
        initDB,
        getAllProducts,
        getProductById,
        addProduct,
        deleteProduct,
        productNameExists,
        getRandomProducts,
        paginateProducts,
        renderProducts
    };
}
