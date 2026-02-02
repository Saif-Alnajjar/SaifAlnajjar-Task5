document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // كود السلايدر (الصفحة الرئيسية)
    // ==========================================
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
    
    const servicesData = {
        'marketing': {
            subtitle: '- التسويق الإلكتروني',
            title: 'التسويق الإلكتروني يضمن لمشروعك<br>حضوراً قوياً ونتائج قابلة للقياس!',
            // تأكد أن أسماء الصور هنا تطابق الملفات في مجلد images بالضبط
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
            title: 'تصاميم السوشيال ميديا المميزة<br>سبب في جذب المتابعين لمنتجاتك!',
            // ⚠️ ملاحظة: تأكد من إضافة "images/" قبل اسم الصورة إذا كانت داخل المجلد
            images: ['images/soc1.jpg', 'images/soc2.jpg', 'images/soc3.jpg', 'images/soc4.jpg', 'images/soc5.jpg', 'images/soc6.jpg']
        },
        'web': {
            subtitle: '- إنشاء المواقع الإلكترونية',
            title: 'خدمة إنشاء المواقع الإلكترونية هي<br>حجر الأساس لأي مشروع يسعى للنجاح!',
            images: ['images/web1.jpg', 'images/web2.jpg', 'images/web3.jpg', 'images/web4.jpg', 'images/web5.jpg', 'images/web6.jpg']
        },
        'ads': {
            subtitle: '- إدارة الحملات الترويجية',
            title: 'إدارة الحملات الترويجية تضمن<br>استثمار ميزانيتك الإعلانية بأفضل النتائج!',
            images: ['images/ads1.jpg', 'images/ads2.jpg', 'images/ads3.jpg', 'images/ads4.jpg', 'images/ads5.jpg', 'images/ads6.jpg']
        },
        'seo': {
            subtitle: '- تحسين محركات البحث SEO',
            title: 'خدمة SEO تضمن لموقعك الظهور<br>في المكان الصحيح أمام الجمهور الصحي!',
            images: ['images/seo1.jpg', 'images/seo2.jpg', 'images/seo3.jpg', 'images/seo4.jpg', 'images/seo5.jpg', 'images/seo6.jpg']
        }
    };

    window.switchService = function(serviceKey, btnElement) {
        const data = servicesData[serviceKey];
        if (!data) return;

        // 1. تحديث النصوص
        document.getElementById('service-subtitle').innerText = data.subtitle;
        document.getElementById('service-title').innerHTML = data.title;

        // 2. تحديث الصور
        const galleryContainer = document.getElementById('service-gallery');
        galleryContainer.innerHTML = ''; // مسح الصور القديمة
        
        // إنشاء الصور الجديدة
        data.images.forEach((imgSrc, index) => {
            const div = document.createElement('div');
            div.className = 'img-placeholder gallery-img';
            
            // 👇 التعديل المهم هنا: وضعنا كود الصورة بدلاً من النص
            div.innerHTML = `<img src="${imgSrc}" alt="${data.subtitle}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
            
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
