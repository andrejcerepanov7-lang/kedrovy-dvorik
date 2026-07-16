// ============================================================
// ==========  ВСЕ ДАННЫЕ САЙТА (МЕНЯЙТЕ ЗДЕСЬ) ==========
// ============================================================
function getDefaultData() {
    return {
        // --------------------------------------------------------
        // 1. КОНТАКТЫ (меняйте телефон, email, адрес)
        // --------------------------------------------------------
        contacts: {
            phone: '+7 (903) 072-94-95',
            email: 'kedroviy-dvorik@mail.ru',
            address: 'Республика Алтай, с. Артыбаш, ул. Садовая, 1а',
            mapLat: 51.7914,
            mapLng: 87.2553
        },

        // --------------------------------------------------------
        // 2. ГАЛЕРЕЯ УСАДЬБЫ (вставьте ссылки на фото)
        // --------------------------------------------------------
        gallery: [
            'https://ibb.co/7J6gjFCn',
            'https://ibb.co/Mw1r2hc',
            'https://ibb.co/LzMvR13T',
	    'https://ibb.co/7xqm8CtT',
            'https://ibb.co/JRV2rSWn',
	    'https://ibb.co/4gn88qhK',
	    'https://ibb.co/Ps1YzbM7',
            'https://ibb.co/7xttWVBH',
	    'https://ibb.co/XZMqd5RW',
	    'https://ibb.co/Rp0Dfd8P'	
        ],

        // --------------------------------------------------------
        // 3. НОМЕРА (меняйте цены, описания, ссылки на фото)
        // --------------------------------------------------------
        rooms: [
            {
                id: 1,
                name: 'Двухместный благоустроенный номер',
                price: '7 000 ₽',
                image: 'https://ibb.co/HfdDySWV', // ← СЮДА ССЫЛКУ
                gallery: [
	        	'https://ibb.co/6RLqFXz0',
			'https://ibb.co/Sz1xq9m',
			'https://ibb.co/VYhYsMbZ',
			'https://ibb.co/kZWr1C2',
			'https://ibb.co/LDY6nqJ6',
			'https://ibb.co/k63DRK00',
			'https://ibb.co/nqFKQxNF'
                ],
                description: 'Уютный номер для двоих. Всё необходимое для комфортного отдыха: двуспальная кровать,бесплатный Wi-Fi, санузел с душем.'
            },
            {
                id: 2,
                name: 'Номер-студия на 4 человек',
                price: '7 000 ₽',
                image: 'https://ibb.co/DgKDSWT9', // ← СЮДА ССЫЛКУ
                gallery: [
			'https://ibb.co/21MrhPmH',
			'https://ibb.co/Y71gbhQ8',
			'https://ibb.co/GrpYSj3',
			'https://ibb.co/5xMGNdkr',
			'https://ibb.co/4n2vjWWq',
			'https://ibb.co/gMLg5MLv',
			'https://ibb.co/x8C02zQV',
			'https://ibb.co/1fyNBfvC'
		],
                description: 'Просторная студия для компании до 4 человек. Двуспальная кровать + диван-кровать. Есть мини-кухня с холодильником и чайником.'
            },
            {
                id: 3,
                name: 'Благоустроенный дом с двумя комнатами на 5 человек + доп место',
                price: '8 000 ₽',
                image: 'https://ibb.co/v6M9V1rN', // ← СЮДА ССЫЛКУ
                gallery: [
			'https://ibb.co/QvL8QQn7',
			'https://ibb.co/nMMwfzyk',
			'https://ibb.co/9mh2qdgs',
			'https://ibb.co/PvS3KntW',
			'https://ibb.co/d4KSnHyN',
			'https://ibb.co/1fyNBfvC'
		],
                description: 'Дом для большой компании. Две отдельные комнаты, две двуспальные кровати + раскладное кресло + односпальная кровать. Полностью оборудованная кухня.'
            },
            {
                id: 4,
                name: 'Семейный неблагоустроенный номер летний (3 взрослых + 2 детей)',
                price: '3 800 ₽',
                image: 'https://ibb.co/KzWN06nR', // ← СЮДА ССЫЛКУ
                gallery: [
			'https://ibb.co/Df8W8HH5',
			'https://ibb.co/Ldgq25Rc',
			'https://ibb.co/vx86PFrt'
		],
                description: 'Просторный летний номер для семьи с детьми. 3 обычные кровати + двухъярусная кровать (до 160 см рост). Душ и туалет на территории, кухонная зона в беседке.'
            },
            {
                id: 5,
                name: 'Трехместный летний неблагоустроенный номер',
                price: '3 600 ₽',
                image: 'https://ibb.co/HTHG46SY', // ← СЮДА ССЫЛКУ
                gallery: [
			'https://ibb.co/TzJsbJK'
		],
                description: 'Уютный летний номер для троих. Двуспальная и односпальная кровать. В номере: стол, раковина. Душ и туалет на территории, кухонная зона в беседке.'
            },
            {
                id: 6,
                name: 'Двухместный летний номер на 2 этаже (двуспальная кровать)',
                price: '2 400 ₽',
                image: 'https://ibb.co/SDqNMqty', // ← СЮДА ССЫЛКУ
                gallery: [
			'https://ibb.co/XZMqd5RW'
		],
                description: 'Светлый номер на втором этаже с двуспальной кроватью. Отличный вид из окна. Душ и туалет на территории, кухонная зона в беседке.'
            },
            {
                id: 7,
                name: 'Двухместный летний номер на 2 этаже (две односпальные кровати)',
                price: '2 400 ₽',
                image: 'https://ibb.co/ymchdC6z', // ← СЮДА ССЫЛКУ
                gallery: [
			'https://ibb.co/XZMqd5RW'
		],
                description: 'Комфортный номер на втором этаже с двумя односпальными кроватями. Душ и туалет на территории, кухонная зона в беседке.'
            }
        ]
    };
}

// ============================================================
// ==========  ДВИЖОК САЙТА (НИЖЕ НИЧЕГО НЕ ТРОГАЙТЕ) ==========
// ============================================================

function loadData() {
    return getDefaultData();
}

function renderRooms() {
    const data = loadData();
    const list = document.getElementById('rooms-list');
    if (!list) return;
    if (data.rooms.length === 0) {
        list.innerHTML = '<p style="text-align:center;color:#999;">Номера пока не добавлены</p>';
        return;
    }
    list.innerHTML = data.rooms.map(room => `
        <div class="room-card">
            <img src="${room.image}" alt="${room.name}" loading="lazy">
            <div class="info">
                <h3>${room.name}</h3>
                <div class="price">${room.price} / ночь</div>
                <div class="description">${room.description}</div>
            </div>
        </div>
    `).join('');
}

function renderGallery() {
    const data = loadData();
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    if (!data.gallery || data.gallery.length === 0) {
        grid.innerHTML = '<p style="text-align:center;color:#999;">Фотографии пока не добавлены</p>';
        return;
    }
    grid.innerHTML = data.gallery.map((img, index) => `
        <a href="${img}" data-lightbox="hotel-gallery" data-title="Кедровый дворик ${index + 1}">
            <img src="${img}" alt="Усадьба Кедровый дворик" loading="lazy">
        </a>
    `).join('');
}

function renderContacts() {
    const data = loadData();
    const phone = document.getElementById('contact-phone');
    const email = document.getElementById('contact-email');
    const address = document.getElementById('contact-address');
    const mapAddress = document.getElementById('map-address');
    if (phone) phone.textContent = data.contacts.phone;
    if (email) email.textContent = data.contacts.email;
    if (address) address.textContent = data.contacts.address;
    if (mapAddress) mapAddress.textContent = '📍 ' + data.contacts.address;
}

let map = null;
let marker = null;

function initMap() {
    const data = loadData();
    const lat = data.contacts.mapLat || 51.7914;
    const lng = data.contacts.mapLng || 87.2553;
    if (document.getElementById('map')) {
        if (map) { map.remove(); map = null; }
        map = L.map('map').setView([lat, lng], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(data.contacts.address || 'Усадьба Кедровый дворик');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderRooms();
    renderGallery();
    renderContacts();
    setTimeout(initMap, 500);
});