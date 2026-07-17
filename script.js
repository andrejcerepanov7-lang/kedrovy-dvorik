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
    'https://i.ibb.co/7J6gjFCn/dg8-IHi-TNf96-TBq-H4-JY1-LQp-MWf-V1-G3-WTf-Gnqj-KT13fup2-S2-GKd-E2b8-Oz-VW17-Rp-VOtv-Sw-Cm-DU83n-PQ.jpg',
    'https://i.ibb.co/Mw1r2hc/Om-Mg-GVb-Aj18j-Pi-OCSA5-JCJn8e-Y6i9-Vo0m-Acd-SLFAy6-SXg-Ph-ETy-J9a8-Eufs-H3-W7bq-DW2-Ahrm-Sg-Ug.jpg',
    'https://i.ibb.co/LzMvR13T/fm-RRr-TUSVh-ZAN1d-DI4-Acw-Nl7qig-MFUJb-AGJt-Vt-EW7-WY1-Jr7-Eu5-Ox-Sn-YDh-Rk-ZZlt1-HIXOVLh-A7-Q.jpg',
    'https://i.ibb.co/7xqm8CtT/z-Pq-EZ6l-D5-IQq-AZPYAq-Yj-LGv3-HGCes-OVF4l-Tn-Vnpy3r-SXOWPUn-Q7c5g-Ij-Rk-UE57-WFNg-HRkz-H8d-A.jpg',
    'https://i.ibb.co/JRV2rSWn/mj-JP4-KFAXOVUDl0-Rs-Xb-Pw5bcl-QTlk-Eh-XHWB9-El-HKYGkwbh1-FOYh-Jy-BSu-Jh-O7-UBUYVn-Tn6-Ls3-Osw.jpg',
    'https://i.ibb.co/4gn88qhK/F4-JQn-TL6-Wd-Srz-KE5sz-QGf-DXj-REGJt-JFua-U6f-Bwhv-A0ew-K5l-HYr-Y0j9d-Qj-Tx5-HDM2-IAd-Vd8m-Wg.jpg',
    'https://i.ibb.co/Ps1YzbM7/Mmp-Ax-V0-VFp-GWu-KM2x-Iz0-OBk-Ago-WB2s-Fe-Ch-Wt-BPz-Wl-YO2qh-CBQe-WRb-Vb1-Db-X0-VRkh-FTr-Ye-Vb-Ww.jpg',
    'https://i.ibb.co/7xttWVBH/ir-Fa-NRw-Gsq-V7-EFr4o2-Hr-BDkn-FHIMk-JC1-UFz2-Ag-Wq-Lr-J9-JN0j5-KMv-Dy7n-R5s-Hr8g-LZ1w9-JP3-VQ.jpg',
    'https://i.ibb.co/XZMqd5RW/iu8b-YO0-ABF5-Eh-VXo2ka0-ORQyy-Pm1-Hn-Gm-YOuz-Az-Cm4k-Jl-Bx-Jn-FYAhqi-Qh-GM2g-QNOho-Qw-9d31l-C0ka-Cw.jpg',
    'https://i.ibb.co/Rp0Dfd8P/ul5h4-Mu-DIAs-Bd-CUXigc-G1e6p-TQZaw-Kq-Pp-Ws-HEWr-EUc7-Ch-Cr-ULztn-S6rm2-VWEI7h7s5-Ac-ZN9p-Gn-XA.jpg'
],

        // --------------------------------------------------------
        // 3. НОМЕРА (меняйте цены, описания, ссылки на фото)
        // --------------------------------------------------------
        rooms: [
            {
                id: 1,
                name: 'Двухместный благоустроенный номер',
                price: '7 000 ₽',
                image: 'https://i.ibb.co/HfdDySWV/x-TM7-IQN8v-d-A33u-CX-LMo-Ydt4-Mp-LHx-Thz-Xy1-6a-OKf-YIw-Hw-Rhcr3-Ie-SXAWUt-BHVSn-RDYXf9t3-N5-Qa25-Rvb-Ibz.jpg', // ← СЮДА ССЫЛКУ
                gallery: [
    'https://i.ibb.co/6RLqFXz0/Oi9Lw-NZu8-D-WHUrqn-V-se2rosp-ZOPRznr6r-RGCisna-Qpf8-XSJBT5-IEz-CBMGHPQKV6r9-I6-KFrov-Us-GLa-UVn-Ljip-Q.jpg',
    'https://i.ibb.co/nqFKQxNF/z-BWwrei-IDVw-B0w9-ZZ78d-YFz-QUid-TUx-Ikfjk-A-Ut4-Lyl-Tv-JJEMZl-Fzc-OX5-Xq-Qjmr-KWx-Un-Fsl8g-V1l-SIhjy.jpg',
    'https://i.ibb.co/Df8W8HH5/uj-Kp-MUmg2lwm-Xz-S-Gu-N6-YTgc-Gx0l-BBMq-Cvy93-BDyc-OZ9c4uzfd-ANV-ynyf-Dj-GSUFwr20u2-CFu-Qo-BM9-Msrs-Ry.jpg',
    'https://i.ibb.co/Ldgq25Rc/3-C-g3fnn7nj-LKVUf-Vn-Baz-Avi-TYLNL4ll2z-G9jdk4b-Puwed-J3-ETL0-I6-Je-A5-Kx-JQy6mbr-OGy-Iw3qxrs-Xnn9c-NXPR.jpg'
],
                description: 'Уютный номер для двоих. Всё необходимое для комфортного отдыха: двуспальная кровать, бесплатный Wi-Fi, санузел с душем.'
            },
            {
                id: 2,
                name: 'Номер-студия на 4 человек',
                price: '7 000 ₽',
                image: 'https://i.ibb.co/DgKDSWT9/mndm-Uh-OUOvl0-R1vkt-XPJ3g-C8-Bh-Ega-Gi-S8-Jn-TKJt-D87-YU1-Mj-Xf-FMZa-Udy2g-W0-Re3b-ORLpr-ALNcg.jpg', // ← СЮДА ССЫЛКУ
                gallery: [
    'https://i.ibb.co/21MrhPmH/ZRco-KJQygz-Hm-RZEAjd-THBOivjszq9bd-AVgg-Ng-E53-ZD1-LKb-JS6-Mnl-M3-Fe-Kh-WMv-Xpu8jq-K13-F2z-RYQ.jpg',
    'https://i.ibb.co/Y71gbhQ8/Hm-GI5bccew-MUKc7-Up-BKqj1-S3-Fhljs7c-VVVMn-Fub-DVk-XI8-WZ3wz-Vi7j6h-Ly-MEGCy-Ng-YAr-H6p-WP91-Cg.jpg',
    'https://i.ibb.co/GrpYSj3/u-OWG9-O0-YAk3-D4w-Yc-CRNFMk4-Fo6wq-X1-Jn-NNMR8y-UShx-F4-NSb-L9f3-E6n-Fpx7-XB78-RKJ-W6pz-DCh-EGa-A.jpg',
    'https://i.ibb.co/5xMGNdkr/A9-KNEOk-Rg3-Ks6-JARj-Vp-R8-W2-JVPM1h-CV6-EOzx-Y4dt-Fn-Ha-X3rc1-SDq-FZTVSj-T1-Ri-Jt-POHp-XCPy-gg.jpg',
    'https://i.ibb.co/4n2vjWWq/2-IWe-XKvl-HEGBj-UDR8-GGcbd-41hwfn-Ap-J8-Deam-CLXn-Is-NAOZVx-Lun-TDDRDcx-K7-NVJm-GYp-FJYx-VTg-A.jpg',
    'https://i.ibb.co/gMLg5MLv/AQj2po-AS0sbkyb-Fh-My-Y7j-Fp-FI69n-Jf-PPj-Ee7-MZb-Fu1-D3m-Zh-O6-Tj-OOz2-Qso-K1-TJ8-Ej-Smp-JDTR8d-A.jpg',
    'https://i.ibb.co/x8C02zQV/4-MBw-UVps-YEfv-P1-IPBse-TXq-Dl-Z5gr-FKh-YHWHj-Qy-YNg-H0-IWEa-U2-PI0n-IFBQNi-Pb-Yi-ZORBj-Kp-Wn-A.jpg'
],
                description: 'Просторная студия для компании до 4 человек. Двуспальная кровать + диван-кровать. Есть мини-кухня с холодильником и чайником.'
            },
            {
                id: 3,
                name: 'Благоустроенный дом с двумя комнатами на 5 человек + доп место',
                price: '8 000 ₽',
                image: 'https://i.ibb.co/v6M9V1rN/v-Vi-Kg-Fmz-LKw-EJhs-HLlb-Cd7b-V1ph-B4to-Ip-KDhz2vsnzk-Y0-Bdh-MN42-YUx-Yx7x1n-IEZWYt-Qk2-M3a-Q.jpg', // ← СЮДА ССЫЛКУ
                gallery: [
    'https://i.ibb.co/QvL8QQn7/5h-FS3-Bj-OL1yzwq-IGWxi-Yh6-At-Eu64-Kg-SE4m8-JOAl-OVSPs-VF4-Lg-KZRj-NKSu-Os-CA9-D5-S1-K9x4m-LCQ.jpg',
    'https://i.ibb.co/nMMwfzyk/SMLBd-Qt-UO5-IK1pr-Tu-T3ri-Au-FFXLt-E1aa-DWZy-Vze7ewe-Snkw-S0f7k-SKb-Umth-NSl-Cvy4s-HF4-KREk5l9n-Zw.jpg',
    'https://i.ibb.co/9mh2qdgs/BYl-MVJqs0n-Y15-QJw-Fu9-UGTKt-Eq-Cw3lz-Ts-K4-Hv-Ypoa14ov-SU5f-Iua-JS-YSb4b-OAJTj-v1os-FAr-CQr-Cy-DA.jpg',
    'https://i.ibb.co/PvS3KntW/FEGQn-X4-F0so9f4k-UY9-G4-El-Ck6u-A49r-WLx-Gt7-CRm-Bf-FLR-V4yeq-FZwj-VH0-FLBCz-OWdt1-Xb22a-LEw.jpg',
    'https://i.ibb.co/d4KSnHyN/z-Eao5-Kx-CGhz-Ric-TGy-KJm-OGMPOvz-KIg8-QXJCNhzw1q-Vi-Qh-I06-M4-Nj-NWck-PUVb-HVTK3-KYgba-Zc-Pw.jpg',
    'https://i.ibb.co/1fyNBfvC/6s-FR8-Mg-ISLdlz-F6vvt9-YOHj-Kh-Eg-S4-LVj-EOQJvs-EVQz-Sd-DNIn-Hs8-U6l-Su-Cuc-CYg-AQpo6s-Cf-W0-IJ5j-A.jpg'
],
                description: 'Дом для большой компании. Две отдельные комнаты, две двуспальные кровати + раскладное кресло + односпальная кровать. Полностью оборудованная кухня.'
            },
            {
                {
    id: 4,
    name: 'Семейный неблагоустроенный номер летний (3 взрослых + 2 детей)',
    price: '4 200 ₽',
    image: 'https://i.ibb.co/KzWN06nR/E8m-Bgd-ZWp-F4-OEW8x-FNd36x6h-AHSNw-UFE3-HNy2d2v-QQyb3-Ay-Yy6-E8uj-BCbr-KSLOp-VNQ2ea-Sg-Gg.jpg',
    gallery: [
        'https://i.ibb.co/Df8W8HH5/uj-Kp-MUmg2lwm-Xz-S-Gu-N6-YTgc-Gx0l-BBMq-Cvy93-BDyc-OZ9c4uzfd-ANV-ynyf-Dj-GSUFwr20u2-CFu-Qo-BM9-Msrs-Ry.jpg',
        'https://i.ibb.co/Ldgq25Rc/3-C-g3fnn7nj-LKVUf-Vn-Baz-Avi-TYLNL4ll2z-G9jdk4b-Puwed-J3-ETL0-I6-Je-A5-Kx-JQy6mbr-OGy-Iw3qxrs-Xnn9c-NXPR.jpg',
        'https://i.ibb.co/vx86PFrt/q-Guy-Oo3-ONr0xw-Jy-IB3eetj-SBrc-Bg-L6-Fs-Fo-Gl-Vh9w-Fvj-Ov-Ac-Jf-MA4o-Jf0-Fnl3-Uqdx1-Rr5h-HWWd-A.jpg'
    ],
    description: 'Просторный летний номер для семьи с детьми. 3 обычные кровати + двухъярусная кровать (до 160 см рост). Душ и туалет на территории, кухонная зона в беседке. Отличный вариант для семейного отдыха на природе.'
},
            {
                id: 5,
                name: 'Трехместный летний неблагоустроенный номер',
                price: '3 600 ₽',
                image: 'https://i.ibb.co/HTHG46SY/OHViy-FYd-Vet-L1-EHt-WCPVw-Wn-YGZbax-WZx-DBc7w-Gq-Oi1cz-Rte-IQj-Tx-Fsl-BDiiu-Di-HEm7-Yn5-Ml8-Wl-Dw.jpg', // ← СЮДА ССЫЛКУ
                gallery: [
    'https://i.ibb.co/TzJsbJK/4k-Gw-TGXy-RWXW1r-Uq-WJLA86c-Bg5u-Js-Wc-R8p-Se1-HG1q-GM5-Elih4-P3to-XMt-Ljwt-ZZf-Px-SWuonq-Tw5-A.jpg'
],
                description: 'Уютный летний номер для троих. Двуспальная и односпальная кровать. В номере: стол, раковина. Душ и туалет на территории, кухонная зона в беседке.'
            },
            {
                id: 6,
                name: 'Двухместный летний номер на 2 этаже (двуспальная кровать)',
                price: '2 400 ₽',
                image: 'https://i.ibb.co/SDqNMqty/FZ2-Bj-Vl-Cl-Bd-Qt-FFpp-Kr-Z1fa-Rx-XSd-Soy-Dp-Cq-IAWw-I5-Dw-VVIE5n-Hj-K9-G7-L9p-M7-HUSs-Qc5-Yk-WMl-Ug.jpg', // ← СЮДА ССЫЛКУ
                gallery: [
    'https://i.ibb.co/XZMqd5RW/iu8b-YO0-ABF5-Eh-VXo2ka0-ORQyy-Pm1-Hn-Gm-YOuz-Az-Cm4k-Jl-Bx-Jn-FYAhqi-Qh-GM2g-QNOho-Qw-9d31l-C0ka-Cw.jpg',
    'https://i.ibb.co/KzWN06nR/E8m-Bgd-ZWp-F4-OEW8x-FNd36x6h-AHSNw-UFE3-HNy2d2v-QQyb3-Ay-Yy6-E8uj-BCbr-KSLOp-VNQ2ea-Sg-Gg.jpg'
],
                description: 'Светлый номер на втором этаже с двуспальной кроватью. Отличный вид из окна. Душ и туалет на территории, кухонная зона в беседке.'
            },
            {
                id: 7,
                name: 'Двухместный летний номер на 2 этаже (две односпальные кровати)',
                price: '2 400 ₽',
                image: 'https://i.ibb.co/ymchdC6z/Qr-DVq-Cd-CXeo-Ti-E1-W0-MH2-Rs-QLMCy-W6k-KV7-Fh-D6fc-I2u-Dk-FOvgf-Rw-BQp-Fa-XVL5-Fi-G1-O5-Ot8-MC2s-A.jpg', // ← СЮДА ССЫЛКУ
                gallery: [
    'https://i.ibb.co/XZMqd5RW/iu8b-YO0-ABF5-Eh-VXo2ka0-ORQyy-Pm1-Hn-Gm-YOuz-Az-Cm4k-Jl-Bx-Jn-FYAhqi-Qh-GM2g-QNOho-Qw-9d31l-C0ka-Cw.jpg'
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