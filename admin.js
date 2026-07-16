function loadData() {
    if (typeof getDefaultData === 'function') {
        return getDefaultData();
    }
    return { rooms: [], contacts: {}, gallery: [] };
}

function renderAdminRooms() {
    const data = loadData();
    const list = document.getElementById('rooms-admin-list');
    if (!list) return;
    if (!data.rooms || data.rooms.length === 0) {
        list.innerHTML = '<p>Нет номеров</p>';
        return;
    }
    list.innerHTML = data.rooms.map(room => `
        <div class="room-item">
            <div>
                <strong>${room.name}</strong>
                <span style="color:#2d5016;font-weight:bold;margin-left:15px;">${room.price}</span>
                <div style="font-size:14px;color:#666;margin-top:5px;">${room.description.slice(0, 80)}${room.description.length > 80 ? '...' : ''}</div>
                ${room.image && room.image.includes('http') ? `<div style="font-size:12px;color:#999;">✅ Фото есть</div>` : ''}
            </div>
        </div>
    `).join('');
}

function renderContactsDisplay() {
    const data = loadData();
    const container = document.getElementById('contacts-display');
    if (!container) return;
    container.innerHTML = `
        <p><strong>📞 Телефон:</strong> ${data.contacts.phone || ''}</p>
        <p><strong>📧 Email:</strong> ${data.contacts.email || ''}</p>
        <p><strong>📍 Адрес:</strong> ${data.contacts.address || ''}</p>
    `;
}

function renderAdminGallery() {
    const data = loadData();
    const list = document.getElementById('gallery-admin-list');
    if (!list) return;
    if (!data.gallery || data.gallery.length === 0) {
        list.innerHTML = '<p>Фотографий в галерее нет</p>';
        return;
    }
    list.innerHTML = data.gallery.map(img => `
        <div class="gallery-item">
            <img src="${img}" alt="Фото усадьбы">
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    renderAdminRooms();
    renderContactsDisplay();
    renderAdminGallery();
});