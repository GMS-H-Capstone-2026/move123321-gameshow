// Vortex Games - Core Application Logic

// 1. Game Database
// [FIX] 로컬 file:/// 경로 → Unsplash 외부 URL로 전부 교체
const GAMES_DATA = [
    {
        id: 'neon-shadow',
        title: '네온 섀도우: 사이버펑크',
        category: 'rpg',
        genres: ['RPG', '액션'],
        rating: 4.8,
        platforms: ['windows', 'playstation', 'xbox'],
        originalPrice: 66000,
        discount: 30,
        price: 46200,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
        description: '디스토피아 미래 도시 네온 시티를 배경으로 펼쳐지는 오픈 월드 액션 RPG입니다. 신체 개조와 첨단 무기로 무장하여 도시 깊은 곳에 숨겨진 메가코퍼레이션의 음모를 폭로하고 자유를 쟁취하세요.',
        features: ['화려한 3D 사이버펑크 네온 그래픽', '자유도 높은 신체 부품 커스터마이징', '멀티 엔딩이 제공되는 방대한 서사', '실시간 메카닉 전투 및 해킹 시스템'],
        reqMin: {
            os: 'Windows 10 64-bit',
            cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600',
            ram: '12 GB RAM',
            gpu: 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 590',
            storage: '70 GB 사용 가능 공간'
        },
        reqRec: {
            os: 'Windows 10/11 64-bit',
            cpu: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
            ram: '16 GB RAM',
            gpu: 'NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700 XT',
            storage: '70 GB SSD 사용 가능 공간'
        }
    },
    {
        id: 'stellar-odyssey',
        title: '스텔라 오디세이',
        category: 'scifi',
        genres: ['SF/우주', '어드벤처'],
        rating: 4.7,
        platforms: ['windows', 'playstation'],
        originalPrice: 54000,
        discount: 20,
        price: 43200,
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop',
        description: '광활하고 고독한 우주를 탐험하는 오픈 샌드박스 SF 게임입니다. 행성의 기후와 고대 외계 유적을 탐사하며, 인류의 잃어버린 식민지 우주선을 찾아 떠나는 신비로운 여정을 담았습니다.',
        features: ['절차적 생성 기법으로 탄생한 100만 개 이상의 행성', '디테일한 생존 시스템 (산소, 중력, 방사능)', '자유로운 나만의 탐사 우주선 빌더', '아름답고 몽환적인 미니멀리즘 앰비언트 OST'],
        reqMin: {
            os: 'Windows 10 64-bit',
            cpu: 'Intel Core i5-6600K / AMD Ryzen 5 1400',
            ram: '8 GB RAM',
            gpu: 'NVIDIA GeForce GTX 970 / AMD Radeon RX 470',
            storage: '35 GB 사용 가능 공간'
        },
        reqRec: {
            os: 'Windows 10/11 64-bit',
            cpu: 'Intel Core i7-8700K / AMD Ryzen 5 3600',
            ram: '16 GB RAM',
            gpu: 'NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT',
            storage: '35 GB SSD 사용 가능 공간'
        }
    },
    {
        id: 'elden-shadow',
        title: '엘덴 섀도우',
        category: 'rpg',
        genres: ['RPG', '액션', '어드벤처'],
        rating: 4.9,
        platforms: ['windows', 'playstation', 'xbox'],
        originalPrice: 78000,
        discount: 0,
        price: 78000,
        image: 'https://images.unsplash.com/photo-1547026375-b8c87f973e85?q=80&w=600&auto=format&fit=crop',
        description: '다크 판타지 세계관을 무대로 하는 고난도 액션 어드벤처 RPG입니다. 무너진 왕국의 마지막 전사가 되어 붉은 달이 드리운 성의 저주를 풀고 봉인된 태고의 힘을 소환해 왕국의 군주들을 물리치세요.',
        features: ['하드코어 소울라이크 전투 메커니즘', '다양한 마법과 거대한 양손 검 빌드 최적화', '기괴하면서도 수려한 다크 판타지 오픈월드', '거대하고 무자비한 보스 레이드 전투'],
        reqMin: {
            os: 'Windows 10 64-bit',
            cpu: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
            ram: '12 GB RAM',
            gpu: 'NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580',
            storage: '60 GB 사용 가능 공간'
        },
        reqRec: {
            os: 'Windows 10/11 64-bit',
            cpu: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
            ram: '16 GB RAM',
            gpu: 'NVIDIA GeForce GTX 1070 8GB / AMD Radeon RX Vega 56',
            storage: '60 GB SSD 사용 가능 공간'
        }
    },
    {
        id: 'whispering-woods',
        title: '속삭이는 숲',
        category: 'indie',
        genres: ['인디', '어드벤처'],
        rating: 4.5,
        platforms: ['windows', 'playstation', 'xbox', 'switch'],
        originalPrice: 24000,
        discount: 50,
        price: 12000,
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
        description: '바쁜 일상에서 벗어나 따뜻하고 아기자기한 힐링을 선사하는 탐험 게임입니다. 배낭을 멘 꼬마 여우 전사가 되어 신비로운 버섯 숲의 수수께끼를 해결하고, 숲속 친구들과 우정을 쌓아보세요.',
        features: ['지브리 스타일의 고품질 카툰 렌더링 아트', '전투 스트레스가 없는 평화로운 퍼즐과 낚시 콘텐츠', '감성을 자극하는 어쿠스틱 악기 중심 사운드트랙', '나만의 오두막 데코레이션 및 정원 가꾸기'],
        reqMin: {
            os: 'Windows 7 SP1+ 64-bit',
            cpu: 'Dual Core 2.4 GHz',
            ram: '4 GB RAM',
            gpu: 'Intel HD Graphics 4600',
            storage: '4 GB 사용 가능 공간'
        },
        reqRec: {
            os: 'Windows 10 64-bit',
            cpu: 'Quad Core 3.0 GHz',
            ram: '8 GB RAM',
            gpu: 'NVIDIA GeForce GTX 960',
            storage: '4 GB 사용 가능 공간'
        }
    },
    {
        id: 'stellar-odyssey-expansion',
        title: '스텔라 오디세이: 미지의 세계 (DLC)',
        category: 'scifi',
        genres: ['SF/우주', '인디'],
        rating: 4.6,
        platforms: ['windows', 'playstation'],
        originalPrice: 15000,
        discount: 10,
        price: 13500,
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop',
        description: '스텔라 오디세이 본편을 확장하는 공식 대규모 확장 팩입니다. 심연의 해저 기지와 외계 문명과의 조우, 새로운 기지 방어 타워 디펜스 모드가 추가됩니다.',
        features: ['새로운 가상 해양 행성 아쿠아리스 개방', '잠수정 조종 및 심해 기지 건설 모드', '외계 거대 해수 몹 추가', '12종의 신규 기지 방어 무기 탑재'],
        reqMin: {
            os: 'Windows 10 64-bit',
            cpu: 'Intel Core i5-6600K',
            ram: '8 GB RAM',
            gpu: 'NVIDIA GeForce GTX 970',
            storage: '45 GB 사용 가능 공간 (본편 포함)'
        },
        reqRec: {
            os: 'Windows 10/11 64-bit',
            cpu: 'Intel Core i7-8700K',
            ram: '16 GB RAM',
            gpu: 'NVIDIA GeForce RTX 2060',
            storage: '45 GB SSD 사용 가능 공간 (본편 포함)'
        }
    },
    {
        id: 'neon-shadow-multi',
        title: '네온 섀도우: 아레나 쇼다운',
        category: 'action',
        genres: ['액션'],
        rating: 4.4,
        platforms: ['windows', 'playstation', 'xbox'],
        originalPrice: 35000,
        discount: 40,
        price: 21000,
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
        description: '네온 섀도우 유니버스를 배경으로 펼쳐지는 극도의 스피디한 5v5 하이테크 하이퍼 슈팅 게임입니다. 나노 아머 슈트를 착용하고 월런, 대시, 순간이동 스킬을 사용해 상대 팀을 물리치세요.',
        features: ['벽을 타는 파쿠르 이동과 하이퍼 대시 기술', '클래스별 특화된 강력한 궁극기 시스템', '커스텀 룰을 자랑하는 e스포츠 경쟁 랭크 모드', '매 시즌 제공되는 다채로운 스킨과 무기 코스메틱'],
        reqMin: {
            os: 'Windows 10 64-bit',
            cpu: 'Intel Core i3-6100 / AMD Ryzen 3 1200',
            ram: '8 GB RAM',
            gpu: 'NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560',
            storage: '30 GB 사용 가능 공간'
        },
        reqRec: {
            os: 'Windows 10/11 64-bit',
            cpu: 'Intel Core i5-9400F / AMD Ryzen 5 2600',
            ram: '16 GB RAM',
            gpu: 'NVIDIA GeForce GTX 1660 Super / AMD Radeon RX 5600',
            storage: '30 GB SSD 사용 가능 공간'
        }
    }
];

// Featured games in Hero Carousel
// [FIX] 로컬 이미지 경로 → 외부 URL
const FEATURED_GAMES = [
    {
        id: 'elden-shadow',
        tag: '인기 판타지 RPG',
        title: '엘덴 섀도우',
        desc: '태고의 붉은 달의 힘을 지배하고 저주받은 영주의 성을 탈환하세요. 소울라이크 사상 최고의 자유로운 보스 처단 액션을 선보입니다.',
        image: 'https://images.unsplash.com/photo-1547026375-b8c87f973e85?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'neon-shadow',
        tag: '신작 SF 액션 RPG',
        title: '네온 섀도우: 사이버펑크',
        desc: '해킹과 나노 강화 신체로 디스토피아 기업들의 기밀을 강탈하세요. 네온 빛으로 화려하게 물든 오픈 월드를 종횡무진할 기회입니다.',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'stellar-odyssey',
        tag: '추천 샌드박스 SF',
        title: '스텔라 오디세이',
        desc: '고유의 대기와 환경 요소를 가진 거대한 우주의 비밀 속으로. 외계 식민지선 잔해를 탐사하고 미지의 기술력을 흡수하세요.',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop'
    }
];

// 2. Global State Variables
let cart = [];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'popular';
let currentPromoDiscount = 0;
let activeCarouselIndex = 0;
let carouselTimer = null;
let activeTab = 'store';

// [FIX] launcher interval을 전역으로 관리 → 닫힐 때 확실히 정리
let launcherInterval = null;

// New Owned Games (Library Database)
let ownedGames = [
    { id: 'neon-shadow', playtime: 24.5, lastPlayed: '어제', achievement: 68 },
    { id: 'whispering-woods', playtime: 8.2, lastPlayed: '4일 전', achievement: 35 }
];

// Prepopulated Community Posts Feed
// [FIX] 커뮤니티 포스트 이미지도 외부 URL로 교체
let communityPosts = [
    {
        id: 1,
        author: '소울마스터_Kim',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop',
        time: '2시간 전',
        tag: '엘덴 섀도우',
        tagId: 'elden-shadow',
        title: '엘덴 섀도우 최종 보스 붉은 달의 폭군 공략!',
        desc: '드디어 32번째 도전 만에 클리어했습니다! 팁을 좀 드리자면 2페이즈 광폭화 때 거리를 너무 벌리면 돌진 패턴 유도가 자주 돼서 힘드니, 오히려 가까이 붙어서 구르기로 뒤를 잡는 편이 공격 기회를 훨씬 많이 벌어다 줍니다. 무기는 메카닉 레이저 양손검 9강 필수예요!',
        image: 'https://images.unsplash.com/photo-1547026375-b8c87f973e85?q=80&w=700&auto=format&fit=crop',
        likes: 42,
        likedByUser: false
    },
    {
        id: 2,
        author: '우주미아_Stellar',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
        time: '5시간 전',
        tag: '스텔라 오디세이',
        tagId: 'stellar-odyssey',
        title: '스텔라 오디세이 행성 착륙 성공 샷! 행성 뷰 끝내주네요',
        desc: '탐사선 개조하고 산소 보급 기지 대충 세우고 나니까 해질녘 하늘 색감이 완전히 예술입니다... 우주 SF 게임 좋아하는 분들이라면 무조건 추천합니다. 앰비언트 사운드 트랙 켜놓고 멍하게 풍경 보고만 있어도 대만족이에요.',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=700&auto=format&fit=crop',
        likes: 29,
        likedByUser: false
    },
    {
        id: 3,
        author: '힐링필링',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
        time: '1일 전',
        tag: '속삭이는 숲',
        tagId: 'whispering-woods',
        title: '속삭이는 숲 무지개 송어 낚시 포인트 추천!',
        desc: '중앙 맵 버섯 폭포 우측 큰 바위 쪽으로 바짝 찌를 던지면 무지개 송어가 잡힐 확률이 80% 이상입니다! 오두막 벽지 도감 완성하려면 무지개 송어 5마리가 필요한데 여기서 다 낚으세요. 낚시할 때 배경에 나타나는 꼬마 요정들도 너무 귀여워요.',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=700&auto=format&fit=crop',
        likes: 18,
        likedByUser: false
    }
];

// 3. Document Ready Setup
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    renderGameGrid();
    renderLibraryGrid();
    renderCommunityFeed();
    initEventListeners();
    updateCartUI();
});

// 4. SPA Tab Navigation Routing
function switchTab(tabName) {
    activeTab = tabName;
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-tab') === tabName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(sec => {
        if (sec.id === `${tabName}-view`) {
            sec.classList.add('active');
            sec.style.display = 'block';
        } else {
            sec.classList.remove('active');
            sec.style.display = 'none';
        }
    });
    
    const searchBar = document.querySelector('.search-bar');
    if (tabName === 'store') {
        searchBar.style.opacity = '1';
        searchBar.style.pointerEvents = 'auto';
    } else {
        searchBar.style.opacity = '0';
        searchBar.style.pointerEvents = 'none';
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Hero Carousel Logic
function initHeroCarousel() {
    const container = document.getElementById('hero-carousel');
    const indicatorsContainer = document.getElementById('hero-indicators');
    
    container.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    
    FEATURED_GAMES.forEach((game, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="carousel-bg" onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'">
            <div class="carousel-overlay"></div>
            <div class="carousel-content">
                <span class="carousel-tag">${game.tag}</span>
                <h1 class="carousel-title">${game.title}</h1>
                <p class="carousel-desc">${game.desc}</p>
                <div class="carousel-actions">
                    <button class="btn-primary" onclick="openGameDetails('${game.id}')">
                        <i class="fa-solid fa-circle-info"></i> 자세히 보기
                    </button>
                    <button class="btn-secondary" onclick="addToCartDirect('${game.id}')">
                        <i class="fa-solid fa-cart-plus"></i> 장바구니 담기
                    </button>
                </div>
            </div>
        `;
        container.appendChild(slide);
        
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => setCarouselSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    startCarouselAutoPlay();
}

function startCarouselAutoPlay() {
    stopCarouselAutoPlay();
    carouselTimer = setInterval(() => {
        let nextIndex = (activeCarouselIndex + 1) % FEATURED_GAMES.length;
        setCarouselSlide(nextIndex);
    }, 6000);
}

function stopCarouselAutoPlay() {
    if (carouselTimer) clearInterval(carouselTimer);
}

function setCarouselSlide(index) {
    activeCarouselIndex = index;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    slides.forEach((slide, i) => {
        if (i === index) slide.classList.add('active');
        else slide.classList.remove('active');
    });
    
    indicators.forEach((indicator, i) => {
        if (i === index) indicator.classList.add('active');
        else indicator.classList.remove('active');
    });
    
    startCarouselAutoPlay();
}

// 6. Game Grid Render (Store View)
function renderGameGrid() {
    const grid = document.getElementById('game-list-grid');
    grid.innerHTML = '';
    
    let filteredGames = GAMES_DATA.filter(game => {
        const matchesCategory = currentFilter === 'all' || game.category === currentFilter;
        const matchesSearch = game.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                            game.genres.some(g => g.toLowerCase().includes(currentSearch.toLowerCase())) ||
                            game.description.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    if (currentSort === 'popular') {
        filteredGames.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'rating') {
        filteredGames.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'price-asc') {
        filteredGames.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filteredGames.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'discount') {
        filteredGames.sort((a, b) => b.discount - a.discount);
    }
    
    if (filteredGames.length === 0) {
        grid.innerHTML = `
            <div class="cart-empty-state" style="grid-column: 1/-1; padding: 4rem 0;">
                <i class="fa-solid fa-hourglass-empty"></i>
                <p>일치하는 게임을 찾을 수 없습니다.</p>
            </div>
        `;
        return;
    }
    
    filteredGames.forEach(game => {
        const card = document.createElement('article');
        card.className = 'game-card';
        card.setAttribute('data-id', game.id);
        
        const platformIcons = game.platforms.map(plat => {
            if (plat === 'windows') return '<i class="fa-brands fa-windows" title="Windows PC"></i>';
            if (plat === 'playstation') return '<i class="fa-brands fa-playstation" title="PlayStation"></i>';
            if (plat === 'xbox') return '<i class="fa-brands fa-xbox" title="Xbox"></i>';
            if (plat === 'switch') return '<i class="fa-solid fa-gamepad" title="Nintendo Switch"></i>';
            return '';
        }).join(' ');
        
        const discountHTML = game.discount > 0 ? `<div class="discount-badge">-${game.discount}%</div>` : '';
        const priceHTML = game.discount > 0 
            ? `<span class="price-original">₩${game.originalPrice.toLocaleString()}</span><span class="price-current">₩${game.price.toLocaleString()}</span>` 
            : `<span class="price-current">₩${game.price.toLocaleString()}</span>`;
            
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${game.image}" alt="${game.title}" class="card-img" onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop'">
                ${discountHTML}
                <div class="card-overlay-btn">
                    <button class="overlay-view-details">상세 보기</button>
                </div>
            </div>
            <div class="card-info">
                <span class="card-genre">${game.genres.join(' • ')}</span>
                <h3 class="card-title">${game.title}</h3>
                <div class="card-rating-platform">
                    <div class="card-rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${game.rating.toFixed(1)}</span>
                    </div>
                    <div class="card-platforms">${platformIcons}</div>
                </div>
                <div class="card-footer-price">
                    <div class="card-price-container">${priceHTML}</div>
                    <button class="add-cart-icon-btn" aria-label="장바구니 담기" onclick="event.stopPropagation(); addToCartDirect('${game.id}')">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openGameDetails(game.id));
        grid.appendChild(card);
    });
}

// 7. Interactive Detail Modal
function openGameDetails(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;
    
    const content = document.getElementById('detail-modal-content');
    
    let starsHTML = '';
    const roundedRating = Math.round(game.rating);
    for (let i = 1; i <= 5; i++) {
        starsHTML += i <= roundedRating ? '<i class="fa-solid fa-star"></i> ' : '<i class="fa-regular fa-star"></i> ';
    }
    
    const featuresListHTML = game.features.map(feat => `<li><i class="fa-solid fa-check"></i> ${feat}</li>`).join('');
    
    const priceHTML = game.discount > 0 
        ? `<div class="detail-price-wrapper">
             <span class="detail-price-original">₩${game.originalPrice.toLocaleString()}</span>
             <span class="detail-price-current">₩${game.price.toLocaleString()}</span>
           </div>`
        : `<div class="detail-price-wrapper">
             <span class="detail-price-current">₩${game.price.toLocaleString()}</span>
           </div>`;

    content.innerHTML = `
        <div class="detail-modal-grid">
            <!-- 왼쪽: 메인 이미지만 -->
            <div class="detail-gallery">
                <div class="detail-main-img-wrapper">
                    <img src="${game.image}" alt="${game.title}" class="detail-main-img" id="modal-main-image" onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop'">
                </div>
            </div>
            
            <!-- 오른쪽: 정보 + 가격 + 썸네일 순서 -->
            <div class="detail-info">
                <div>
                    <span class="detail-category">${game.category.toUpperCase()} // ${game.genres.join(' & ')}</span>
                    <h2 class="detail-title">${game.title}</h2>
                    
                    <div class="detail-rating-row">
                        <div class="detail-stars">${starsHTML}</div>
                        <span>(${game.rating.toFixed(1)} / 5.0)</span>
                    </div>
                </div>
                
                <div class="detail-tabs-nav">
                    <button class="detail-tab-btn active" data-detail-tab="about">게임 소개</button>
                    <button class="detail-tab-btn" data-detail-tab="reqs">시스템 사양</button>
                </div>
                
                <div class="detail-tab-content" id="detail-tab-about">
                    <p class="detail-desc">${game.description}</p>
                    <ul class="detail-features">
                        ${featuresListHTML}
                    </ul>
                </div>
                
                <div class="detail-tab-content" id="detail-tab-reqs" style="display: none;">
                    <div class="requirements-grid">
                        <div class="req-col">
                            <h5>최소 사양</h5>
                            <ul>
                                <li><strong>OS:</strong> ${game.reqMin.os}</li>
                                <li><strong>CPU:</strong> ${game.reqMin.cpu}</li>
                                <li><strong>RAM:</strong> ${game.reqMin.ram}</li>
                                <li><strong>GPU:</strong> ${game.reqMin.gpu}</li>
                                <li><strong>저장:</strong> ${game.reqMin.storage}</li>
                            </ul>
                        </div>
                        <div class="req-col">
                            <h5>권장 사양</h5>
                            <ul>
                                <li><strong>OS:</strong> ${game.reqRec.os}</li>
                                <li><strong>CPU:</strong> ${game.reqRec.cpu}</li>
                                <li><strong>RAM:</strong> ${game.reqRec.ram}</li>
                                <li><strong>GPU:</strong> ${game.reqRec.gpu}</li>
                                <li><strong>저장:</strong> ${game.reqRec.storage}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- [FIX] 가격/버튼: margin-top:auto 제거 → 설명 바로 아래 고정 -->
                <div class="detail-price-box">
                    ${priceHTML}
                    <button class="detail-buy-btn" onclick="addToCartDirect('${game.id}'); closeModal('detail-modal');">
                        <i class="fa-solid fa-cart-shopping"></i> 장바구니 추가
                    </button>
                </div>

                <!-- [FIX] 썸네일: 갤러리에서 이동 → 가격 박스 아래 -->
                <div class="detail-thumbnails">
                    <img src="${game.image}" alt="썸네일 1" class="detail-thumb active" onclick="changeModalImage(this, '${game.image}')">
                    <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=300&auto=format&fit=crop" alt="썸네일 2" class="detail-thumb" onclick="changeModalImage(this, 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop')">
                    <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=300&auto=format&fit=crop" alt="썸네일 3" class="detail-thumb" onclick="changeModalImage(this, 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop')">
                    <img src="https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=300&auto=format&fit=crop" alt="썸네일 4" class="detail-thumb" onclick="changeModalImage(this, 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=800&auto=format&fit=crop')">
                </div>
            </div>
        </div>
    `;
    
    const tabBtns = content.querySelectorAll('.detail-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const tabName = e.target.getAttribute('data-detail-tab');
            const aboutTab = content.querySelector('#detail-tab-about');
            const reqsTab = content.querySelector('#detail-tab-reqs');
            
            if (tabName === 'about') {
                aboutTab.style.display = 'block';
                reqsTab.style.display = 'none';
            } else {
                aboutTab.style.display = 'none';
                reqsTab.style.display = 'block';
            }
        });
    });
    
    openModal('detail-modal');
}

function changeModalImage(thumbEl, imgSrc) {
    document.getElementById('modal-main-image').src = imgSrc;
    const thumbs = document.querySelectorAll('.detail-thumb');
    thumbs.forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

// 8. Cart Drawer Operations
function addToCartDirect(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;
    
    const ownsGame = ownedGames.some(item => item.id === gameId);
    if (ownsGame) {
        showToast(`이미 라이브러리에 보유 중인 게임입니다!`, 'info');
        return;
    }

    const exists = cart.some(item => item.id === gameId);
    if (exists) {
        showToast(`'${game.title}' 게임이 이미 장바구니에 있습니다!`, 'info');
        openCartDrawer();
        return;
    }
    
    cart.push(game);
    updateCartUI();
    showToast(`'${game.title}' 게임이 장바구니에 추가되었습니다.`, 'success');
    openCartDrawer();
}

function removeFromCart(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    cart = cart.filter(item => item.id !== gameId);
    updateCartUI();
    if (game) {
        showToast(`'${game.title}' 게임이 장바구니에서 삭제되었습니다.`, 'info');
    }
}

function updateCartUI() {
    const badges = document.getElementById('cart-badge-count');
    badges.textContent = cart.length;
    
    document.getElementById('cart-item-count').textContent = `${cart.length}개`;
    
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-cart-flatbed-suitcase"></i>
                <p>장바구니가 비어 있습니다.<br>인기 게임들을 담아보세요!</p>
            </div>
        `;
        document.getElementById('cart-total-price').textContent = '₩0';
        document.getElementById('discount-row').style.display = 'none';
        return;
    }
    
    let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let discountVal = Math.round(subtotal * currentPromoDiscount);
    let finalTotal = subtotal - discountVal;
    
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=150&auto=format&fit=crop'">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <span class="cart-item-genre">${item.genres.join(' / ')}</span>
                <div class="cart-item-price-row">
                    <span class="cart-item-price">₩${item.price.toLocaleString()}</span>
                </div>
            </div>
            <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" aria-label="삭제">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        container.appendChild(itemEl);
    });
    
    if (currentPromoDiscount > 0) {
        document.getElementById('discount-row').style.display = 'flex';
        document.getElementById('cart-discount-price').textContent = `-₩${discountVal.toLocaleString()}`;
    } else {
        document.getElementById('discount-row').style.display = 'none';
    }
    
    document.getElementById('cart-total-price').textContent = `₩${finalTotal.toLocaleString()}`;
}

function applyPromoCode() {
    const input = document.getElementById('promo-code-input');
    const code = input.value.trim().toUpperCase();
    
    if (code === 'VORTEX20') {
        if (currentPromoDiscount > 0) {
            showToast('이미 프로모션 코드가 적용되었습니다.', 'info');
            return;
        }
        currentPromoDiscount = 0.20;
        updateCartUI();
        showToast('20% 할인 프로모션 코드가 적용되었습니다!', 'success');
        input.value = '';
    } else if (code === '') {
        showToast('프로모션 코드를 입력해 주세요.', 'error');
    } else {
        showToast('유효하지 않은 프로모션 코드입니다.', 'error');
    }
}

// 9. Checkout & Library Integration
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('장바구니가 비어 있습니다.', 'error');
        return;
    }
    
    closeCartDrawer();
    
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const discountVal = Math.round(subtotal * currentPromoDiscount);
    const finalTotal = subtotal - discountVal;
    
    document.getElementById('checkout-subtotal').textContent = `₩${subtotal.toLocaleString()}`;
    
    if (currentPromoDiscount > 0) {
        document.getElementById('checkout-discount-row').style.display = 'flex';
        document.getElementById('checkout-discount').textContent = `-₩${discountVal.toLocaleString()}`;
    } else {
        document.getElementById('checkout-discount-row').style.display = 'none';
    }
    document.getElementById('checkout-final-total').textContent = `₩${finalTotal.toLocaleString()}`;
    
    const summaryList = document.getElementById('checkout-summary-list');
    summaryList.innerHTML = '';
    
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'checkout-summary-item';
        itemEl.innerHTML = `
            <span>${item.title}</span>
            <span>₩${item.price.toLocaleString()}</span>
        `;
        summaryList.appendChild(itemEl);
    });
    
    openModal('checkout-modal');
}

function processCheckout(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('card-email').value;
    const cardNumber = document.getElementById('card-number').value;
    
    if (cardNumber.replace(/\s/g, '').length < 16) {
        showToast('올바른 카드 번호 16자리를 입력해 주세요.', 'error');
        return;
    }
    
    const randomOrderId = '#VTX-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('success-order-id').textContent = randomOrderId;
    document.getElementById('success-email-text').textContent = `전송받을 메일: ${emailInput}`;
    
    cart.forEach(game => {
        const alreadyOwned = ownedGames.some(item => item.id === game.id);
        if (!alreadyOwned) {
            ownedGames.push({
                id: game.id,
                playtime: 0.0,
                lastPlayed: '방금 전',
                achievement: 0
            });
        }
    });
    
    closeModal('checkout-modal');
    openModal('success-modal');
    
    cart = [];
    currentPromoDiscount = 0;
    document.getElementById('checkout-form').reset();
    updateCartUI();
    
    renderLibraryGrid();
}

// 10. Library Render & Launcher Simulation
function renderLibraryGrid() {
    const grid = document.getElementById('library-games-grid');
    const totalCount = document.getElementById('lib-total-games');
    const totalHours = document.getElementById('lib-total-hours');
    
    grid.innerHTML = '';
    
    if (ownedGames.length === 0) {
        grid.innerHTML = `
            <div class="cart-empty-state" style="grid-column: 1/-1; padding: 4rem 0;">
                <i class="fa-solid fa-gamepad"></i>
                <p>라이브러리가 비어 있습니다. 상점에서 첫 게임을 구매해 보세요!</p>
            </div>
        `;
        totalCount.textContent = '0';
        totalHours.textContent = '0시간';
        return;
    }
    
    totalCount.textContent = ownedGames.length;
    let sumHours = ownedGames.reduce((sum, g) => sum + g.playtime, 0);
    totalHours.textContent = `${sumHours.toFixed(1)}시간`;
    
    ownedGames.forEach(libItem => {
        const game = GAMES_DATA.find(g => g.id === libItem.id);
        if (!game) return;
        
        const card = document.createElement('div');
        card.className = 'library-card';
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="library-card-img" onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop'">
            <div class="library-card-info">
                <div>
                    <h3 class="library-card-title" title="${game.title}">${game.title}</h3>
                    <div class="library-card-time">플레이 시간: ${libItem.playtime.toFixed(1)}시간 | 최근 플레이: ${libItem.lastPlayed}</div>
                </div>
                
                <div class="library-achievement-wrapper">
                    <div class="library-achievement-row">
                        <span>도전 과제 달성도</span>
                        <span>${libItem.achievement}%</span>
                    </div>
                    <div class="library-achievement-bar">
                        <div class="library-achievement-fill" style="width: ${libItem.achievement}%"></div>
                    </div>
                </div>
                
                <button class="play-btn" onclick="launchGameSim('${game.id}')">
                    <i class="fa-solid fa-play"></i> 플레이
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function launchGameSim(gameId) {
    const game = GAMES_DATA.find(g => g.id === gameId);
    if (!game) return;
    
    const titleEl = document.getElementById('launcher-game-title');
    const logEl = document.getElementById('launcher-log');
    const progressEl = document.getElementById('launcher-progress-bar');
    const statusTextEl = document.getElementById('launcher-status-text');
    const percentEl = document.getElementById('launcher-percentage-text');
    const stopBtn = document.getElementById('launcher-stop-btn');
    
    titleEl.innerHTML = `<i class="fa-solid fa-terminal launcher-icon"></i> ${game.title} - 실행기`;
    logEl.innerHTML = '';
    progressEl.style.width = '0%';
    statusTextEl.textContent = 'BOOTING SEQUENCES INITIALIZED...';
    percentEl.textContent = '0%';
    percentEl.style.color = '';
    stopBtn.style.display = 'none';
    
    openModal('launcher-modal');
    
    const logMessages = [
        'VORTEX LAUNCH ENGINE v2.04',
        '-------------------------------------------',
        'STATUS: CONNECTING TO SECURE AUTH SERVER...',
        'STATUS: LICENSE VERIFIED SUCCESSFULLY.',
        'STATUS: MOUNTING DATA DIRECTORY...',
        'STATUS: INDEXING SHADER CACHE FILES...',
        'STATUS: LOADING GRAPHICS RENDERING PIPELINE...',
        'STATUS: ALLOCATING VRAM RESOURCE BUFFER...',
        'STATUS: INITIALIZING SOUND SYSTEM IN 3D...',
        'STATUS: EXECUTING GAME ENGINE CORE...'
    ];
    
    let progress = 0;
    let logIndex = 0;

    // [FIX] 전역 launcherInterval 사용 → 외부에서도 정리 가능
    launcherInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 3;
        if (progress > 100) progress = 100;
        
        progressEl.style.width = `${progress}%`;
        percentEl.textContent = `${progress}%`;
        
        if (logIndex < logMessages.length && progress >= (logIndex * 9)) {
            const line = document.createElement('div');
            line.textContent = `> ${logMessages[logIndex]}`;
            logEl.appendChild(line);
            logEl.scrollTop = logEl.scrollHeight;
            logIndex++;
        }
        
        if (progress >= 30 && progress < 70) {
            statusTextEl.textContent = 'LOADING GAME ASSETS...';
        } else if (progress >= 70 && progress < 100) {
            statusTextEl.textContent = 'VERIFYING SYSTEM DRIVERS...';
        } else if (progress === 100) {
            clearInterval(launcherInterval);
            launcherInterval = null;
            statusTextEl.textContent = 'GAME RUNNING (ACTIVE)';
            percentEl.textContent = 'RUNNING';
            percentEl.style.color = '#00ff87';
            
            const successLine = document.createElement('div');
            successLine.style.color = '#00ff87';
            successLine.style.fontWeight = 'bold';
            successLine.textContent = '\n>>> SUCCESS: GAME EXECUTION COMPLETE!\n>>> ENJOY YOUR GAMEPLAY IN FULLSCREEN.';
            logEl.appendChild(successLine);
            logEl.scrollTop = logEl.scrollHeight;
            
            stopBtn.style.display = 'block';
            
            updatePlayTimeOnClose(gameId);
        }
    }, 150);
    
    stopBtn.onclick = () => {
        clearInterval(launcherInterval);
        launcherInterval = null;
        closeModal('launcher-modal');
        showToast(`'${game.title}' 게임 실행이 정상 종료되었습니다.`, 'info');
        renderLibraryGrid();
    };
}

function updatePlayTimeOnClose(gameId) {
    const libItem = ownedGames.find(g => g.id === gameId);
    if (libItem) {
        libItem.playtime += parseFloat((Math.random() * 2 + 0.1).toFixed(1));
        libItem.lastPlayed = '방금 전';
        if (libItem.achievement < 100) {
            libItem.achievement += Math.floor(Math.random() * 5) + 1;
            if (libItem.achievement > 100) libItem.achievement = 100;
        }
    }
}

// 11. Community Social Feed Operations
function renderCommunityFeed() {
    const feed = document.getElementById('community-posts-feed');
    feed.innerHTML = '';
    
    communityPosts.forEach(post => {
        const card = document.createElement('article');
        card.className = 'post-card';
        
        const likeClass = post.likedByUser ? 'liked' : '';
        const likeIcon = post.likedByUser ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        
        card.innerHTML = `
            <div class="post-author-row">
                <div class="author-info">
                    <img src="${post.avatar}" alt="${post.author}" class="user-avatar-small" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50'">
                    <div>
                        <div class="author-name">${post.author}</div>
                        <div class="post-time">${post.time}</div>
                    </div>
                </div>
                <span class="post-tag">${post.tag}</span>
            </div>
            <div class="post-body">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-desc">${post.desc}</p>
                ${post.image ? `<img src="${post.image}" alt="포스트 이미지" class="post-img" onerror="this.style.display='none'">` : ''}
            </div>
            <div class="post-footer-actions">
                <button class="post-action-btn ${likeClass}" onclick="likePost(${post.id})">
                    <i class="${likeIcon}"></i> 좋아요 <span class="like-count">${post.likes}</span>
                </button>
                <button class="post-action-btn" onclick="showToast('댓글 입력 시뮬레이션입니다.', 'info')">
                    <i class="fa-regular fa-comment"></i> 댓글 작성
                </button>
                <button class="post-action-btn" onclick="showToast('공유 링크 복사 완료!', 'success')">
                    <i class="fa-solid fa-share-nodes"></i> 공유
                </button>
            </div>
        `;
        feed.appendChild(card);
    });
}

function likePost(postId) {
    const post = communityPosts.find(p => p.id === postId);
    if (!post) return;
    
    if (post.likedByUser) {
        post.likes--;
        post.likedByUser = false;
    } else {
        post.likes++;
        post.likedByUser = true;
    }
    
    renderCommunityFeed();
}

function handleCreatePost(event) {
    event.preventDefault();
    
    const titleInput = document.getElementById('post-title-input');
    const contentInput = document.getElementById('post-content-input');
    const gameSelect = document.getElementById('post-game-select');
    
    const gameId = gameSelect.value;
    let gameTagText = '자유 주제';
    let gameImg = null;
    
    if (gameId !== 'general') {
        const game = GAMES_DATA.find(g => g.id === gameId);
        if (game) {
            gameTagText = game.title;
            gameImg = game.image;
        }
    }
    
    const newPost = {
        id: communityPosts.length + 1,
        author: '나 (Gamer_You)',
        avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=100&auto=format&fit=crop',
        time: '방금 전',
        tag: gameTagText,
        tagId: gameId,
        title: titleInput.value,
        desc: contentInput.value,
        image: gameImg,
        likes: 0,
        likedByUser: false
    };
    
    communityPosts.unshift(newPost);
    
    titleInput.value = '';
    contentInput.value = '';
    gameSelect.value = 'general';
    
    renderCommunityFeed();
    showToast('커뮤니티 허브에 게시글이 성공적으로 등록되었습니다!', 'success');
}

// 12. Support & Help Ticket Form
function toggleFAQAccordion(e) {
    const trigger = e.currentTarget;
    const item = trigger.parentNode;
    const panel = trigger.nextElementSibling;
    
    const isActive = item.classList.contains('active');
    
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-panel').style.maxHeight = null;
    });
    
    if (!isActive) {
        item.classList.add('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
}

function handleTicketForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('ticket-name').value;
    const email = document.getElementById('ticket-email').value;
    const categorySelect = document.getElementById('ticket-category');
    const category = categorySelect.options[categorySelect.selectedIndex].text;
    const message = document.getElementById('ticket-message').value;
    
    showToast('기술 지원 티켓이 정상적으로 서버에 등록되었습니다.', 'success');
    
    setTimeout(() => {
        showToast(`[Vortex 지원] '${category}' 관련 접수증이 ${email}로 발송되었습니다.`, 'info');
    }, 1500);
    
    document.getElementById('support-ticket-form').reset();
}

// 13. General Helpers & Modals
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

function openCartDrawer() {
    document.getElementById('cart-overlay').classList.add('active');
    document.getElementById('cart-drawer-panel').classList.add('active');
}

function closeCartDrawer() {
    document.getElementById('cart-overlay').classList.remove('active');
    document.getElementById('cart-drawer-panel').classList.remove('active');
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check';
    if (type === 'error') iconClass = 'fa-triangle-exclamation';
    
    toast.innerHTML = `
        <i class="fa-solid ${iconClass} toast-icon"></i>
        <div class="toast-message">${message}</div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('removing');
        toast.addEventListener('animationend', () => toast.remove());
    }, 4000);
}

// [FIX] 카드 번호 포맷터 정규식 수정: /\d{4,16}/g → /\d{1,16}/g
// 기존 코드는 4자리 미만 입력 시 공백 처리가 되지 않는 문제가 있었음
function formatCardNumber(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = value.match(/\d{1,16}/g);
    let match = (matches && matches[0]) || '';
    let parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    e.target.value = parts.length > 0 ? parts.join(' ') : value;
}

function formatExpiry(e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    e.target.value = value.length >= 2 ? value.substring(0, 2) + '/' + value.substring(2, 4) : value;
}

// 14. Event Listeners Init
function initEventListeners() {
    const tabs = document.querySelectorAll('.nav-links .nav-link');
    tabs.forEach(t => {
        t.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = e.target.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    document.getElementById('nav-logo').addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('store');
    });
    
    document.getElementById('cart-toggle-btn').addEventListener('click', openCartDrawer);
    document.getElementById('cart-close-btn').addEventListener('click', closeCartDrawer);
    document.getElementById('cart-overlay').addEventListener('click', closeCartDrawer);
    
    document.getElementById('promo-apply-btn').addEventListener('click', applyPromoCode);
    
    document.getElementById('game-search-input').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderGameGrid();
    });
    
    const catTags = document.querySelectorAll('.category-tag');
    catTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            catTags.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-category');
            renderGameGrid();
        });
    });
    
    document.getElementById('catalog-sort').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderGameGrid();
    });
    
    document.getElementById('cart-checkout-btn').addEventListener('click', openCheckoutModal);
    
    document.getElementById('checkout-form').addEventListener('submit', processCheckout);
    
    document.getElementById('community-post-form').addEventListener('submit', handleCreatePost);
    
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => trigger.addEventListener('click', toggleFAQAccordion));
    
    document.getElementById('support-ticket-form').addEventListener('submit', handleTicketForm);
    
    document.getElementById('card-number').addEventListener('input', formatCardNumber);
    document.getElementById('card-expiry').addEventListener('input', formatExpiry);
    document.getElementById('card-cvc').addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
    
    document.getElementById('detail-close-btn').addEventListener('click', () => closeModal('detail-modal'));
    document.getElementById('detail-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('detail-modal')) closeModal('detail-modal');
    });

    document.getElementById('checkout-close-btn').addEventListener('click', () => closeModal('checkout-modal'));
    document.getElementById('checkout-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('checkout-modal')) closeModal('checkout-modal');
    });

    document.getElementById('success-close-btn').addEventListener('click', () => {
        closeModal('success-modal');
        switchTab('library');
    });
    document.getElementById('success-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('success-modal')) {
            closeModal('success-modal');
            switchTab('library');
        }
    });

    // [FIX] launcher-close-btn: interval 정리 + renderLibraryGrid 호출 추가
    document.getElementById('launcher-close-btn').addEventListener('click', () => {
        clearInterval(launcherInterval);
        launcherInterval = null;
        closeModal('launcher-modal');
        renderLibraryGrid();
    });
    document.getElementById('launcher-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('launcher-modal')) {
            clearInterval(launcherInterval);
            launcherInterval = null;
            closeModal('launcher-modal');
            renderLibraryGrid();
        }
    });
    
    // [FIX] ESC 키에도 interval 정리 추가
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            clearInterval(launcherInterval);
            launcherInterval = null;
            closeModal('detail-modal');
            closeModal('checkout-modal');
            closeModal('success-modal');
            closeModal('launcher-modal');
            closeCartDrawer();
            renderLibraryGrid();
        }
    });
    
    document.getElementById('hero-prev-btn').addEventListener('click', () => {
        let prevIndex = (activeCarouselIndex - 1 + FEATURED_GAMES.length) % FEATURED_GAMES.length;
        setCarouselSlide(prevIndex);
    });
    
    document.getElementById('hero-next-btn').addEventListener('click', () => {
        let nextIndex = (activeCarouselIndex + 1) % FEATURED_GAMES.length;
        setCarouselSlide(nextIndex);
    });
}