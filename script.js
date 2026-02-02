document.addEventListener('DOMContentLoaded', function() {
    
    // 1. كود السلايدر (الصفحة الرئيسية)
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (slides.length > 0) { 
        const slideInterval = 5000;
        function showSlides(n) {
            if (n >= slides.length) { slideIndex = 0 }
            if (n < 0) { slideIndex = slides.length - 1 }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                slides[i].classList.remove("active");
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex].style.display = "block";
            setTimeout(() => { slides[slideIndex].classList.add("active"); }, 10);
            dots[slideIndex].className += " active";
        }
        showSlides(slideIndex);
        function autoSlide() { slideIndex++; showSlides(slideIndex); }
        let timer = setInterval(autoSlide, slideInterval);
    }

    // 2. كود صفحة الخدمات
    const servicesData = {
        'marketing': {
            subtitle: '- التسويق الإلكتروني',
            title: 'التسويق الإلكتروني يضمن لمشروعك<br>حضوراً قوياً',
            // تأكد من صحة المسارات هنا
            images: [
                'images/IMG_0045.jpeg', 
                'images/IMG_0073.jpeg', 
                'images/IMG_0047.jpeg', 
                'images/IMG_0052.jpeg', 
                'images/IMG_0044.jpeg', 
                'images/IMG_0067.jpeg'
            ]
        },
        'social': {
            subtitle: '- إدارة صفحات سوشيال ميديا',
            title: 'تصاميم السوشيال ميديا المميزة...',
            images: ['images/IMG_0066.jpeg', 
                'images/IMG_0074.jpeg', 
                'images/IMG_0059.jpeg', 
                'images/IMG_0072.jpeg', 
                'images/IMG_0055.jpeg', 
                'images/IMG_0061.jpeg'
                     ]
        },
        'web': {
            subtitle: '- إنشاء المواقع الإلكترونية',
            title: 'بناء مواقع عصرية وسريعة...',
            images: ['images/IMG_0045.jpeg', 
                'images/IMG_0051.jpeg', 
                'images/IMG_0068.jpeg', 
                'images/IMG_0064.jpeg', 
                'images/IMG_0058.jpeg', 
                'images/IMG_0060.jpeg'
                     ]
        },
        'ads': {
            subtitle: '- إدارة الحملات الترويجية',
            title: 'نتائج إعلانية مضمونة...',
            images: ['images/IMG_0043.jpeg', 
                'images/IMG_0049.jpeg', 
                'images/IMG_0062.jpeg', 
                'images/IMG_0053.jpeg', 
                'images/IMG_0046.jpeg', 
                'images/IMG_0071.jpeg'
                     ]
        },
        'seo': {
            subtitle: '- تحسين محركات البحث',
            title: 'تصدر نتائج البحث الأولى...',
            images: ['images/IMG_0065.jpeg', 
                'images/IMG_0048.jpeg', 
                'images/IMG_0056.jpeg', 
                'images/IMG_0054.jpeg', 
                'images/IMG_0063.jpeg', 
                'images/IMG_0050.jpeg'
                     ]
        }
    };

    window.switchService = function(serviceKey, btnElement) {
        const data = servicesData[serviceKey];
        if (!data) return;

        // تحديث النصوص
        document.getElementById('service-subtitle').innerText = data.subtitle;
        document.getElementById('service-title').innerHTML = data.title;

        // تحديث الصور
        const galleryContainer = document.getElementById('service-gallery');
        galleryContainer.innerHTML = ''; // مسح القديم
        
        data.images.forEach((imgSrc, index) => {
            const div = document.createElement('div');
            div.className = 'img-placeholder gallery-img';
            // وضع الصورة
            div.innerHTML = `<img src="${imgSrc}" alt="${data.subtitle}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
            
            div.style.animation = `fadeEffect 0.5s ease ${index * 0.1}s forwards`;
            div.style.opacity = '0'; 
            galleryContainer.appendChild(div);
        });

        // تحديث الأزرار
        const buttons = document.querySelectorAll('.service-tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        if(btnElement) btnElement.classList.add('active');
    }

    // ==========================================
    // ⭐ هذا هو الجزء الجديد والمهم جداً ⭐
    // تشغيل قسم التسويق تلقائياً عند فتح الصفحة
    // ==========================================
    const defaultBtn = document.querySelector('.service-tab-btn');
    if(defaultBtn) {
        // نستدعي دالة التغيير لقسم marketing
        window.switchService('marketing', defaultBtn);
    }

});
