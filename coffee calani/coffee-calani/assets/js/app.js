/**
 * COFFEE CALANI - JAVASCRIPT APP & STORE
 * Diseño Minimalista & Cottagecore | Paleta Pastel
 * San José, Cochabamba - Bolivia
 * WhatsApp Oficial: 67992051 (+591 67992051)
 */

// Global State
const WHATSAPP_PHONE = '59167992051';
const EXCHANGE_RATE = 6.96; // 1 USD = 6.96 BOB
let currentCurrency = 'BOB'; // 'BOB' or 'USD'
let cart = [];

// 5 Specialty Coffee Products (Minimalist Cottagecore Edition)
const PRODUCTS = [
  {
    id: 'geisha-imperial',
    name: 'Geisha Imperial',
    lot: 'Lote 01 • Micro-lote',
    variety: 'Geisha 100% Arábica de Altura',
    process: 'Maceración Carbónica Natural',
    altitude: '1,950 msnm',
    scaScore: '89.5 SCA',
    roast: 'Tueste Medio Claro',
    basePriceBOB: 95, // 250g
    notes: ['Jazmín en Flor', 'Miel Silvestre', 'Bergamota', 'Té Blanco'],
    description: 'Cosechado en la cima de San José donde la bruma abraza los cafetos. Perfil etéreo y sedoso con un bouquet floral de jazmín y acidez cítrica refinada.',
    badge: 'Micro-lote Seleccionado',
    sensory: {
      fragrance: 9.6,
      acidity: 9.0,
      body: 8.6,
      sweetness: 9.4,
      cleanCup: 9.6,
      balance: 9.3
    }
  },
  {
    id: 'typica-ancestral',
    name: 'Typica Ancestral',
    lot: 'Lote 02 • Tradición',
    variety: 'Typica Boliviana de Origen',
    process: 'Lavado con Agua de Vertiente',
    altitude: '1,750 msnm',
    scaScore: '86.5 SCA',
    roast: 'Tueste Medio Equilibrado',
    basePriceBOB: 65, // 250g
    notes: ['Cacao 70%', 'Nuez Tostada', 'Mandarina', 'Panela'],
    description: 'El clásico indiscutible de Cochabamba. Lavado con aguas puras de montaña, ofrece una taza límpida y reconfortante con cuerpo redondo y notas a cacao fino.',
    badge: 'Cosecha Tradicional',
    sensory: {
      fragrance: 8.6,
      acidity: 8.2,
      body: 8.9,
      sweetness: 8.8,
      cleanCup: 9.1,
      balance: 8.8
    }
  },
  {
    id: 'caturra-yellow-honey',
    name: 'Caturra Yellow Honey',
    lot: 'Lote 03 • Proceso Honey',
    variety: 'Caturra Amarillo & Rojo',
    process: 'Yellow Honey en Camas Elevadas',
    altitude: '1,820 msnm',
    scaScore: '87.5 SCA',
    roast: 'Tueste Medio',
    basePriceBOB: 75, // 250g
    notes: ['Miel de Abeja', 'Durazno Maduro', 'Toffee', 'Vainilla'],
    description: 'Secado lentamente al sol con su mucílago natural sobre camas africanas. Su dulzor meloso y cremoso evoca la luz cálida de las mañanas de campo.',
    badge: 'Proceso Artesanal',
    sensory: {
      fragrance: 8.9,
      acidity: 8.4,
      body: 9.1,
      sweetness: 9.5,
      cleanCup: 8.9,
      balance: 9.0
    }
  },
  {
    id: 'pacamara-anaerobico',
    name: 'Pacamara Gran Reserva',
    lot: 'Lote 04 • Reserva',
    variety: 'Pacamara Grano Gigante',
    process: 'Fermentación Anaeróbica 72h',
    altitude: '1,880 msnm',
    scaScore: '88.5 SCA',
    roast: 'Tueste Medio',
    basePriceBOB: 85, // 250g
    notes: ['Mora Silvestre', 'Frutos Rojos', 'Cacao Criollo', 'Canela'],
    description: 'Granos de calibre generoso fermentados en atmósfera controlada. Desarrolla un licor aterciopelado con notas sugerentes a frutas silvestres y especias.',
    badge: 'Fermentación de Autor',
    sensory: {
      fragrance: 9.1,
      acidity: 8.8,
      body: 9.3,
      sweetness: 9.0,
      cleanCup: 8.8,
      balance: 9.0
    }
  },
  {
    id: 'blend-exportacion',
    name: 'Blend Exportación',
    lot: 'Lote 05 • Armonía',
    variety: 'Micro-blend Typica & Caturra',
    process: 'Lavado + Honey de Finca',
    altitude: '1,700 - 1,850 msnm',
    scaScore: '86.0 SCA',
    roast: 'Tueste Medio Artesanal',
    basePriceBOB: 55, // 250g
    notes: ['Avellana Tostada', 'Chocolate con Leche', 'Ciruela', 'Caramelo'],
    description: 'Diseñado como el tributo diario a la riqueza de San José. Balance exquisito, cuerpo sedoso y dulzor prolongado ideal para cualquier método de filtrado o espresso.',
    badge: 'Selección de la Casa',
    sensory: {
      fragrance: 8.5,
      acidity: 8.0,
      body: 9.0,
      sweetness: 8.8,
      cleanCup: 8.8,
      balance: 9.1
    }
  }
];

// Events and Competitions Data
const EVENTS = [
  {
    id: 'taza-calidad',
    title: 'Torneo Nacional Taza de Calidad Café Presidencial Bolivia',
    type: 'concursos',
    badge: 'Finalistas Nacionales',
    status: 'Certamen Nacional',
    date: 'Edición Anual Bolivia',
    location: 'La Paz & Cochabamba',
    image: 'assets/images/event_taza_calidad.jpg',
    description: 'El certamen más riguroso del país. Con puntajes sobresalientes por encima de 88 puntos SCA, Coffee Calani posicionó a los micro-lotes de San José entre los más distinguidos de Bolivia.',
    highlights: ['Micro-lote de altura certificado', 'Evaluación con protocolo internacional SCA', 'Reconocimiento a la caficultura de Cochabamba']
  },
  {
    id: 'expocafe-bolivia',
    title: 'Encuentro Internacional ExpoCafé Bolivia',
    type: 'ferias',
    badge: 'Mesa de Catación Abierta',
    status: 'Participación Destacada',
    date: 'Encuentro Anual de Cafés Especiales',
    location: 'Santa Cruz / Cochabamba',
    image: 'assets/images/family_coffee_table.jpg',
    description: 'Rueda de negocios y mesas de cata abierta para baristas y tostadores. Compartimos tazas de nuestros procesos Natural y Honey, forjando alianzas de comercio directo.',
    highlights: ['Cientos de degustaciones sensoriales', 'Talleres de calibración de molienda y colado', 'Vínculo directo productor - consumidor']
  },
  {
    id: 'world-of-coffee-2027',
    title: 'World of Coffee & SCA Global Expo 2027',
    type: 'proximos',
    badge: 'Próximamente: Delegación a Europa',
    status: 'Participación Internacional Futura',
    date: 'Temporada Global 2027',
    location: 'Pabellón Internacional de Exportadores',
    image: 'assets/images/event_world_coffee.jpg',
    description: 'Representaremos a Bolivia en el escenario mundial de café de especialidad. Una oportunidad para conectar de forma directa con tostadores de Europa, Asia y Norteamérica.',
    highlights: ['Muestras de café verde en empaques GrainPro', 'Trazabilidad honesta desde el cafetal', 'Cata en el cupping room internacional']
  },
  {
    id: 'campeonato-barismo',
    title: 'Campeonato Nacional de Barismo & Brewers Cup',
    type: 'concursos',
    badge: 'Café Oficial de Competidores',
    status: 'Competencia Nacional',
    date: 'Competencia Anual',
    location: 'Cochabamba - Bolivia',
    image: 'assets/images/event_barista.jpg',
    description: 'Baristas de élite eligieron nuestros lotes Geisha y Pacamara para sus rutinas de filtrado de alta precisión, destacando la nitidez de taza y complejidad aromática.',
    highlights: ['Extracción de precisión en Origami y V60', 'Puntaje sensorial sobresaliente', 'Calibración con jueces certificados']
  },
  {
    id: 'subasta-microlotes',
    title: 'Subasta Internacional de Micro-lotes de Altura',
    type: 'proximos',
    badge: 'Próximamente: Subasta Global',
    status: 'Próxima Subasta Exclusiva',
    date: 'Próxima Temporada de Cosecha',
    location: 'Plataforma Virtual Global',
    image: 'assets/images/morning_sunrise_mist.jpg',
    description: 'Subasta dirigida a importadores de cafés ultra-premium en Japón, Alemania y Estados Unidos que buscan lotes numerados con rigurosa trazabilidad de origen.',
    highlights: ['Lotes con 88+ puntos SCA garantizados', 'Trazabilidad auditada desde la finca', 'Despacho aéreo directo del productor']
  },
  {
    id: 'cosecha-san-jose',
    title: 'Jornada de Cosecha & Cata en Finca San José',
    type: 'ferias',
    badge: 'Encuentro en Finca',
    status: 'Próximo Encuentro en Origen',
    date: 'Temporada de Cosecha',
    location: 'Finca San José, Cochabamba',
    image: 'assets/images/farmer_hands_hope.jpg',
    description: 'Experiencia inmersiva en los cafetales bajo sombra de San José: recolección manual de cerezas maduras, beneficio ecológico y cata al pie de la montaña.',
    highlights: ['Paseo botánico entre cafetos bajo sombra', 'Demostración de beneficio ecológico', 'Cata sensorial guiada por el productor']
  }
];

// Product Weight Multipliers
const WEIGHT_CONFIG = {
  '250g': { multiplier: 1.0, label: '250g' },
  '500g': { multiplier: 1.88, label: '500g (1/2 Kg)' },
  '1000g': { multiplier: 3.55, label: '1,000g (1 Kg)' }
};

// Selected options state in UI
const productSelectedOptions = {};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  initProducts();
  initEvents();
  setupEventListeners();
  updateCartUI();
});

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('coffee_calani_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    console.error('Error loading cart', e);
    cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('coffee_calani_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Error saving cart', e);
  }
}

function formatPrice(amountBOB) {
  if (currentCurrency === 'USD') {
    const usd = (amountBOB / EXCHANGE_RATE).toFixed(2);
    return `$${usd} USD`;
  }
  return `${Math.round(amountBOB)} Bs.`;
}

function getPriceDisplay(amountBOB) {
  const usd = (amountBOB / EXCHANGE_RATE).toFixed(2);
  const bob = Math.round(amountBOB);
  if (currentCurrency === 'USD') {
    return {
      main: `$${usd} USD`,
      sub: `(${bob} Bs. BOB)`
    };
  }
  return {
    main: `${bob} Bs.`,
    sub: `(~$${usd} USD)`
  };
}

// Render 5 Products in Minimalist Grid
function initProducts() {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  container.innerHTML = '';

  PRODUCTS.forEach((p) => {
    if (!productSelectedOptions[p.id]) {
      productSelectedOptions[p.id] = {
        weight: '250g',
        grind: 'En Grano Entero'
      };
    }

    const currentWeight = productSelectedOptions[p.id].weight;
    const currentPriceBOB = p.basePriceBOB * WEIGHT_CONFIG[currentWeight].multiplier;
    const priceFormatted = getPriceDisplay(currentPriceBOB);

    const card = document.createElement('div');
    card.className = 'product-minimal-card';
    card.setAttribute('data-product-id', p.id);

    card.innerHTML = `
      <div class="product-lot-badge">${p.lot}</div>

      <div class="product-img-box">
        <img src="assets/images/mockup_bag.jpg" alt="${p.name} - Coffee Calani" class="pouch-photo">
        <span class="product-altitude-chip"><i class="fas fa-mountain"></i> ${p.altitude}</span>
        <span class="product-sca-chip">${p.scaScore}</span>
      </div>

      <div class="product-info-area">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-variety-line">${p.variety} • ${p.process}</div>

        <p class="product-description-text">${p.description}</p>

        <div class="flavor-notes-minimal">
          ${p.notes.map(n => `<span class="flavor-tag">${n}</span>`).join('')}
        </div>

        <div class="options-wrap">
          <div>
            <div class="label-tracking" style="margin-bottom:6px; font-size:0.7rem;">Presentación:</div>
            <div class="weight-row">
              <button type="button" class="weight-pill-btn ${currentWeight === '250g' ? 'active' : ''}" onclick="selectProductWeight('${p.id}', '250g')">250g</button>
              <button type="button" class="weight-pill-btn ${currentWeight === '500g' ? 'active' : ''}" onclick="selectProductWeight('${p.id}', '500g')">500g</button>
              <button type="button" class="weight-pill-btn ${currentWeight === '1000g' ? 'active' : ''}" onclick="selectProductWeight('${p.id}', '1000g')">1 Kg</button>
            </div>
          </div>

          <div>
            <div class="label-tracking" style="margin-bottom:6px; font-size:0.7rem;">Molienda:</div>
            <select class="minimal-select" id="grind-select-${p.id}" onchange="selectProductGrind('${p.id}', this.value)">
              <option value="En Grano Entero" selected>☕ En Grano Entero (Frescura Total)</option>
              <option value="Molido Fino (Espresso / Moka)">🔬 Molido Fino (Espresso / Moka)</option>
              <option value="Molido Medio (V60 / Filtro / Goteo)">💧 Molido Medio (V60 / Chemex / Filtro)</option>
              <option value="Molido Grueso (Prensa Francesa / Cold Brew)">🏺 Molido Grueso (Prensa Francesa / Cold Brew)</option>
            </select>
          </div>
        </div>

        <div class="pricing-row-minimal">
          <div>
            <span class="price-display-main" id="price-main-${p.id}">${priceFormatted.main}</span>
            <span class="price-display-usd" id="price-sub-${p.id}">${priceFormatted.sub}</span>
          </div>
          <span style="font-size:0.74rem; color:var(--text-muted); font-weight:600;">Calidad Exportación</span>
        </div>

        <div class="product-action-grid">
          <button type="button" class="btn-add-cart-minimal" onclick="addToCart('${p.id}')">
            <i class="fas fa-shopping-bag"></i> Añadir a Canasta
          </button>
          <button type="button" class="btn-wa-minimal" onclick="orderSingleViaWhatsApp('${p.id}')">
            <i class="fab fa-whatsapp"></i> Pedir WhatsApp
          </button>
          <button type="button" class="btn-sensory-link" onclick="openSensoryModal('${p.id}')">
            <i class="fas fa-sliders"></i> Ver Perfil Sensorial SCA & Datos de Finca
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Select Product Weight
window.selectProductWeight = function(productId, weight) {
  if (!productSelectedOptions[productId]) {
    productSelectedOptions[productId] = { weight: '250g', grind: 'En Grano Entero' };
  }
  productSelectedOptions[productId].weight = weight;

  const card = document.querySelector(`.product-minimal-card[data-product-id="${productId}"]`);
  if (card) {
    const buttons = card.querySelectorAll('.weight-pill-btn');
    buttons.forEach(btn => {
      if (btn.innerText.includes(weight === '1000g' ? '1 Kg' : weight)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const p = PRODUCTS.find(item => item.id === productId);
    if (p) {
      const priceBOB = p.basePriceBOB * WEIGHT_CONFIG[weight].multiplier;
      const display = getPriceDisplay(priceBOB);
      const mainEl = document.getElementById(`price-main-${productId}`);
      const subEl = document.getElementById(`price-sub-${productId}`);
      if (mainEl) mainEl.innerText = display.main;
      if (subEl) subEl.innerText = display.sub;
    }
  }
};

window.selectProductGrind = function(productId, grind) {
  if (!productSelectedOptions[productId]) {
    productSelectedOptions[productId] = { weight: '250g', grind: 'En Grano Entero' };
  }
  productSelectedOptions[productId].grind = grind;
};

// Add to Cart
window.addToCart = function(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const options = productSelectedOptions[productId] || { weight: '250g', grind: 'En Grano Entero' };
  const unitPriceBOB = p.basePriceBOB * WEIGHT_CONFIG[options.weight].multiplier;

  const cartKey = `${productId}-${options.weight}-${options.grind}`;
  const existingIndex = cart.findIndex(item => item.cartKey === cartKey);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      cartKey,
      id: p.id,
      name: p.name,
      weight: options.weight,
      grind: options.grind,
      unitPriceBOB: unitPriceBOB,
      qty: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Añadido a la canasta: ${p.name} (${options.weight})`);
};

// Update Cart UI
function updateCartUI() {
  const countBadge = document.getElementById('cart-count-badge');
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  if (countBadge) countBadge.innerText = totalItems;

  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fas fa-mug-saucer"></i>
        <h4 style="font-size:1.15rem; color:var(--text-main); margin-bottom:6px;">Tu canasta está vacía</h4>
        <p style="font-size:0.88rem; color:var(--text-muted);">Selecciona cualquiera de nuestros cafés de especialidad cultivados en San José para coordinar tu entrega.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = formatPrice(0);
    if (totalEl) totalEl.innerText = formatPrice(0);
    return;
  }

  let totalBOB = 0;
  container.innerHTML = '';

  cart.forEach((item, index) => {
    const itemTotalBOB = item.unitPriceBOB * item.qty;
    totalBOB += itemTotalBOB;

    const el = document.createElement('div');
    el.className = 'cart-item-card';
    el.innerHTML = `
      <img src="assets/images/mockup_bag.jpg" alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-specs">${item.weight} • ${item.grind}</div>
        <div class="cart-item-price">${formatPrice(itemTotalBOB)}</div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-item-del-btn" onclick="removeFromCart(${index})">
          <i class="fas fa-trash-alt"></i> Quitar
        </button>
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
          <span style="font-size:0.82rem; font-weight:800; min-width:18px; text-align:center;">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });

  if (subtotalEl) subtotalEl.innerText = formatPrice(totalBOB);
  if (totalEl) totalEl.innerText = formatPrice(totalBOB);
}

window.updateQty = function(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
};

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
  showToast('Producto retirado de la canasta');
};

window.clearCart = function() {
  cart = [];
  saveCartToStorage();
  updateCartUI();
  showToast('Canasta vaciada');
};

// Checkout via WhatsApp
window.checkoutViaWhatsApp = function() {
  if (cart.length === 0) {
    alert('Tu canasta está vacía. Añade al menos un café de especialidad.');
    return;
  }

  let totalBOB = 0;
  let itemsText = '';

  cart.forEach((item, idx) => {
    const itemTotal = item.unitPriceBOB * item.qty;
    totalBOB += itemTotal;
    itemsText += `\n${idx + 1}. *${item.name}* \n   • Cantidad: ${item.qty}\n   • Presentación: ${item.weight}\n   • Molienda: ${item.grind}\n   • Subtotal: ${Math.round(itemTotal)} Bs.`;
  });

  const totalUSD = (totalBOB / EXCHANGE_RATE).toFixed(2);

  const message = `¡Hola *Coffee Calani*! ☕🌿🇧🇴\n\nQuiero realizar el siguiente pedido de café de especialidad desde su catálogo web:\n${itemsText}\n\n━━━━━━━━━━━━━━━━━━━━━━\n💰 *TOTAL A PAGAR: ${Math.round(totalBOB)} Bs.* (~$${totalUSD} USD)\n━━━━━━━━━━━━━━━━━━━━━━\n\n📍 *Datos de Entrega:* \n• Nombre del cliente: \n• Ciudad / Destino: \n• Dirección: \n\n¿Me confirman disponibilidad y número de cuenta / QR para realizar el pago? ¡Muchas gracias!`;

  const encodedUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
};

window.orderSingleViaWhatsApp = function(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const options = productSelectedOptions[productId] || { weight: '250g', grind: 'En Grano Entero' };
  const priceBOB = p.basePriceBOB * WEIGHT_CONFIG[options.weight].multiplier;
  const priceUSD = (priceBOB / EXCHANGE_RATE).toFixed(2);

  const message = `¡Hola *Coffee Calani*! ☕🌿\n\nDeseo consultar disponibilidad para adquirir:\n• *Café:* ${p.name}\n• *Variedad / Proceso:* ${p.variety} (${p.process})\n• *Presentación:* ${options.weight}\n• *Molienda:* ${options.grind}\n• *Precio:* ${Math.round(priceBOB)} Bs. (~$${priceUSD} USD)\n\n¿Tienen entrega disponible a mi ciudad?`;

  const encodedUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
};

window.inquireExportWhatsApp = function() {
  const message = `¡Hola *Coffee Calani*! 🇧🇴☕\n\nMe pongo en contacto para consultar sobre *EXPORTACIÓN Y COMPRA DE CAFÉ DE ESPECIALIDAD POR MAYOR* (en grano verde o tostado en origen desde Finca San José, Cochabamba).\n\nQuisiera solicitar ficha técnica de micro-lotes disponibles, cotización y certificaciones de exportación.\n\n¡Quedo a la espera de su comunicación!`;
  const encodedUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, '_blank');
};

// Render Events
function initEvents() {
  const container = document.getElementById('events-grid-container');
  if (!container) return;

  renderEvents('todos');
}

function renderEvents(filter) {
  const container = document.getElementById('events-grid-container');
  if (!container) return;

  container.innerHTML = '';

  const filtered = filter === 'todos' ? EVENTS : EVENTS.filter(e => e.type === filter);

  filtered.forEach(e => {
    const card = document.createElement('div');
    card.className = 'event-minimal-card';

    card.innerHTML = `
      <div class="event-img-wrap">
        <img src="${e.image}" alt="${e.title}" class="event-img">
        <span class="event-pill-badge">${e.badge}</span>
      </div>
      <div class="event-content-body">
        <div class="event-date-loc">
          <span><i class="far fa-calendar"></i> ${e.date}</span>
          <span><i class="fas fa-location-dot"></i> ${e.location}</span>
        </div>
        <h3 class="event-title">${e.title}</h3>
        <p class="event-desc">${e.description}</p>
        <div class="event-card-actions">
          <button type="button" class="btn-secondary" style="padding:8px 18px; font-size:0.84rem;" onclick="openEventModal('${e.id}')">
            Detalles del Evento
          </button>
          <a href="https://wa.me/${WHATSAPP_PHONE}?text=Hola%20Coffee%20Calani,%20quisiera%20consultar%20sobre%20${encodeURIComponent(e.title)}" target="_blank" class="btn-whatsapp-outline" style="padding:8px 18px; font-size:0.84rem;">
            <i class="fab fa-whatsapp"></i> Consultar
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

window.filterEvents = function(type, buttonEl) {
  const buttons = document.querySelectorAll('.event-filter-pill');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');
  renderEvents(type);
};

// Modals
window.openEventModal = function(eventId) {
  const e = EVENTS.find(item => item.id === eventId);
  if (!e) return;

  const modalOverlay = document.getElementById('generic-modal-overlay');
  const modalContent = document.getElementById('generic-modal-body');

  modalContent.innerHTML = `
    <div style="position:relative; margin-bottom:20px;">
      <img src="${e.image}" style="width:100%; height:240px; object-fit:cover; border-radius:var(--radius-md); border:1px solid var(--hairline-border);" alt="${e.title}">
      <span class="tag-pill tag-pill-sage" style="position:absolute; top:14px; left:14px;">${e.badge}</span>
    </div>
    <div style="display:flex; gap:16px; font-size:0.84rem; font-weight:600; color:var(--pastel-terracotta); margin-bottom:12px;">
      <span><i class="far fa-calendar"></i> ${e.date}</span>
      <span><i class="fas fa-location-dot"></i> ${e.location}</span>
    </div>
    <h2 style="font-size:1.8rem; color:var(--text-main); margin-bottom:12px;">${e.title}</h2>
    <p style="color:var(--text-body); line-height:1.75; margin-bottom:20px; font-size:0.96rem;">${e.description}</p>
    
    <div style="background:var(--pastel-ivory); border-radius:var(--radius-md); padding:18px; border:1px solid var(--hairline-border); margin-bottom:24px;">
      <h4 style="color:var(--pastel-green-deep); margin-bottom:8px; font-size:0.95rem;">Hitos & Aspectos Destacados:</h4>
      <ul style="padding-left:20px; color:var(--text-body); font-size:0.9rem; line-height:1.65;">
        ${e.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    <div style="display:flex; justify-content:flex-end; gap:12px;">
      <button class="btn-secondary" onclick="closeGenericModal()">Cerrar</button>
      <a href="https://wa.me/${WHATSAPP_PHONE}?text=Hola%20Coffee%20Calani,%20estoy%20viendo%20el%20evento%20${encodeURIComponent(e.title)}" target="_blank" class="btn-primary">
        <i class="fab fa-whatsapp"></i> Conversar por WhatsApp
      </a>
    </div>
  `;

  modalOverlay.classList.add('active');
};

window.openSensoryModal = function(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const modalOverlay = document.getElementById('generic-modal-overlay');
  const modalContent = document.getElementById('generic-modal-body');

  modalContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:18px;">
      <img src="assets/images/mockup_bag.jpg" style="width:70px; height:80px; object-fit:contain; background:var(--pastel-ivory); border-radius:var(--radius-sm); padding:4px; border:1px solid var(--hairline-border);" alt="${p.name}">
      <div>
        <span class="tag-pill tag-pill-sage" style="margin-bottom:6px;">${p.lot}</span>
        <h2 style="font-size:1.7rem; color:var(--text-main);">${p.name}</h2>
        <p style="font-size:0.86rem; color:var(--pastel-terracotta); font-weight:600;">${p.variety} • ${p.process}</p>
      </div>
    </div>

    <p style="color:var(--text-body); font-size:0.95rem; line-height:1.7; margin-bottom:20px;">${p.description}</p>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px;">
      <div style="background:var(--pastel-ivory); padding:10px 14px; border-radius:var(--radius-sm); border:1px solid var(--hairline-border);">
        <div class="label-tracking">Altitud</div>
        <div style="font-weight:700; color:var(--text-main); font-size:1rem;">${p.altitude}</div>
      </div>
      <div style="background:var(--pastel-ivory); padding:10px 14px; border-radius:var(--radius-sm); border:1px solid var(--hairline-border);">
        <div class="label-tracking">Puntaje SCA</div>
        <div style="font-weight:700; color:var(--pastel-green-deep); font-size:1rem;">${p.scaScore}</div>
      </div>
      <div style="background:var(--pastel-ivory); padding:10px 14px; border-radius:var(--radius-sm); border:1px solid var(--hairline-border);">
        <div class="label-tracking">Perfil de Tueste</div>
        <div style="font-weight:700; color:var(--text-main); font-size:1rem;">${p.roast}</div>
      </div>
      <div style="background:var(--pastel-ivory); padding:10px 14px; border-radius:var(--radius-sm); border:1px solid var(--hairline-border);">
        <div class="label-tracking">Origen de Finca</div>
        <div style="font-weight:700; color:var(--text-main); font-size:1rem;">San José, Cochabamba</div>
      </div>
    </div>

    <h4 style="color:var(--text-main); font-size:1.05rem; margin-bottom:12px;">Desglose Sensorial en Taza (SCA):</h4>
    <div style="display:flex; flex-direction:column; gap:9px; margin-bottom:24px;">
      ${renderSensoryBar('Aroma & Fragancia Floral', p.sensory.fragrance)}
      ${renderSensoryBar('Acidez Brillante de Montaña', p.sensory.acidity)}
      ${renderSensoryBar('Cuerpo Sedoso', p.sensory.body)}
      ${renderSensoryBar('Dulzor Natural', p.sensory.sweetness)}
      ${renderSensoryBar('Limpieza de Taza', p.sensory.cleanCup)}
      ${renderSensoryBar('Equilibrio General', p.sensory.balance)}
    </div>

    <div style="display:flex; justify-content:flex-end; gap:10px;">
      <button class="btn-secondary" onclick="closeGenericModal()">Cerrar</button>
      <button class="btn-primary" onclick="addToCart('${p.id}'); closeGenericModal();">
        <i class="fas fa-shopping-bag"></i> Añadir a Canasta
      </button>
      <button class="btn-whatsapp-outline" onclick="orderSingleViaWhatsApp('${p.id}')">
        <i class="fab fa-whatsapp"></i> Pedir por WhatsApp
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
};

function renderSensoryBar(label, score) {
  const percentage = (score / 10) * 100;
  return `
    <div>
      <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; color:var(--text-main); margin-bottom:3px;">
        <span>${label}</span>
        <span style="color:var(--pastel-green-deep); font-weight:700;">${score} / 10</span>
      </div>
      <div style="background:var(--pastel-linen); height:8px; border-radius:var(--radius-full); overflow:hidden;">
        <div style="background:var(--pastel-green-deep); height:100%; width:${percentage}%; border-radius:var(--radius-full); transition:width 0.6s ease;"></div>
      </div>
    </div>
  `;
}

window.closeGenericModal = function() {
  const modalOverlay = document.getElementById('generic-modal-overlay');
  if (modalOverlay) modalOverlay.classList.remove('active');
};

// Currency Toggle
window.toggleCurrency = function() {
  currentCurrency = currentCurrency === 'BOB' ? 'USD' : 'BOB';
  const pillBOB = document.getElementById('curr-pill-bob');
  const pillUSD = document.getElementById('curr-pill-usd');

  if (currentCurrency === 'BOB') {
    if (pillBOB) pillBOB.classList.add('active');
    if (pillUSD) pillUSD.classList.remove('active');
  } else {
    if (pillUSD) pillUSD.classList.add('active');
    if (pillBOB) pillBOB.classList.remove('active');
  }

  PRODUCTS.forEach(p => {
    const opts = productSelectedOptions[p.id] || { weight: '250g' };
    const priceBOB = p.basePriceBOB * WEIGHT_CONFIG[opts.weight].multiplier;
    const display = getPriceDisplay(priceBOB);
    const mainEl = document.getElementById(`price-main-${p.id}`);
    const subEl = document.getElementById(`price-sub-${p.id}`);
    if (mainEl) mainEl.innerText = display.main;
    if (subEl) subEl.innerText = display.sub;
  });

  updateCartUI();
  showToast(`Moneda: ${currentCurrency === 'BOB' ? 'Bolivianos (Bs.)' : 'Dólares ($ USD)'}`);
};

window.openCartDrawer = function() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('active');
};

window.closeCartDrawer = function() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
};

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'clay-toast';
  toast.innerHTML = `<i class="fas fa-check" style="font-size:0.8rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function setupEventListeners() {
  const hamburger = document.getElementById('mobile-hamburger');
  const navMenu = document.getElementById('nav-menu-list');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '65px';
        navMenu.style.left = '16px';
        navMenu.style.right = '16px';
        navMenu.style.background = '#ffffff';
        navMenu.style.padding = '20px';
        navMenu.style.borderRadius = 'var(--radius-lg)';
        navMenu.style.border = '1px solid var(--hairline-border)';
        navMenu.style.boxShadow = 'var(--shadow-hover)';
        navMenu.style.zIndex = '999';
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeGenericModal();
      closeCartDrawer();
    }
  });

  const genericOverlay = document.getElementById('generic-modal-overlay');
  if (genericOverlay) {
    genericOverlay.addEventListener('click', (e) => {
      if (e.target === genericOverlay) closeGenericModal();
    });
  }

  const cartOverlay = document.getElementById('cart-drawer-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCartDrawer();
    });
  }
}
