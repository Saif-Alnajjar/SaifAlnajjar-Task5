document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // كود السلايدر (الصفحة الرئيسية) - كما هو
    // ==========================================
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (slides.length > 0) { // check if slider exists on page
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
        window.currentSlide = function(n) {
            clearInterval(timer);
            slideIndex = n - 1;
            showSlides(slideIndex);
            timer = setInterval(autoSlide, slideInterval);
        }
    }

    // ==========================================
    // كود صفحة الخدمات (تبديل المحتوى)
    // ==========================================
    
    // قاعدة بيانات المحتوى بناءً على الصور التي أرسلتها
    const servicesData = {
        'marketing': {
            subtitle: '- التسويق الإلكتروني',
            title: 'التسويق الإلكتروني يضمن لمشروعك<br>حضوراً قوياً ونتائج قابلة للقياس!',
            // يمكنك وضع روابط صور حقيقية هنا لاحقاً
            images: ['images/IMG_0045.jpeg', 'images/IMG_0073.jpeg', 'images/IMG_0047.jpeg', 'images/IMG_0052.jpeg', 'images/IMG_0044.jpeg', 'images/IMG_0067.jpeg']
        },
        'social': {
            subtitle: '- إدارة صفحات سوشيال ميديا',
            title: 'تصاميم السوشيال ميديا المميزة<br>سبب في جذب المتابعين لمنتجاتك!',
            images: ['soc1.jpg', 'soc2.jpg', 'soc3.jpg', 'soc4.jpg', 'soc5.jpg', 'soc6.jpg']
        },
        'web': {
            subtitle: '- إنشاء المواقع الإلكترونية',
            title: 'خدمة إنشاء المواقع الإلكترونية هي<br>حجر الأساس لأي مشروع يسعى للنجاح!',
            images: ['web1.jpg', 'web2.jpg', 'web3.jpg', 'web4.jpg', 'web5.jpg', 'web6.jpg']
        },
        'ads': {
            subtitle: '- إدارة الحملات الترويجية',
            title: 'إدارة الحملات الترويجية تضمن<br>استثمار ميزانيتك الإعلانية بأفضل النتائج!',
            images: ['ads1.jpg', 'ads2.jpg', 'ads3.jpg', 'ads4.jpg', 'ads5.jpg', 'ads6.jpg']
        },
        'seo': {
            subtitle: '- تحسين محركات البحث SEO',
            title: 'خدمة SEO تضمن لموقعك الظهور<br>في المكان الصحيح أمام الجمهور الصحي!',
            images: ['seo1.jpg', 'seo2.jpg', 'seo3.jpg', 'seo4.jpg', 'seo5.jpg', 'seo6.jpg']
        }
    };

    window.switchService = function(serviceKey, btnElement) {
        const data = servicesData[serviceKey];
        if (!data) return;

        // 1. تحديث النصوص
        document.getElementById('service-subtitle').innerText = data.subtitle;
        document.getElementById('service-title').innerHTML = data.title;

        // 2. تحديث الصور (هنا نستخدم Placeholders ولكن يمكنك وضع صور حقيقية)
        const galleryContainer = document.getElementById('service-gallery');
        galleryContainer.innerHTML = ''; // مسح الصور القديمة
        
        // إعادة بناء 6 صور جديدة
        data.images.forEach((img, index) => {
            const div = document.createElement('div');
            div.className = 'img-placeholder gallery-img';
            div.innerText = `${data.subtitle} - صورة ${index + 1}`;
            // div.style.backgroundImage = `url(${img})`; // استخدم هذا السطر عند توفر صور حقيقية
            
            // تأثير حركة بسيط عند التغيير
            div.style.animation = `fadeEffect 0.5s ease ${index * 0.1}s forwards`;
            div.style.opacity = '0'; 
            
            galleryContainer.appendChild(div);
        });

        // 3. تحديث حالة الأزرار (Active State)
        const buttons = document.querySelectorAll('.service-tab-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        btnElement.classList.add('active');
    }
});
