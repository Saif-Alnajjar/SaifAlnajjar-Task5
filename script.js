document.addEventListener('DOMContentLoaded', function() {
    
    // إعدادات السلايدر
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    const slideInterval = 5000; // الانتقال كل 5 ثواني

    function showSlides(n) {
        // إذا وصلنا لآخر شريحة نرجع للأولى
        if (n >= slides.length) { slideIndex = 0 }
        // إذا كنا في الأولى ورجعنا للخلف
        if (n < 0) { slideIndex = slides.length - 1 }

        // إخفاء جميع الشرائح
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active");
        }

        // إزالة التفعيل عن النقاط
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // إظهار الشريحة الحالية
        slides[slideIndex].style.display = "block";
        setTimeout(() => {
            slides[slideIndex].classList.add("active");
        }, 10); // تأخير بسيط لتفعيل الأنيميشن
        
        dots[slideIndex].className += " active";
    }

    // تشغيل السلايدر لأول مرة
    showSlides(slideIndex);

    // دالة الانتقال التلقائي
    function autoSlide() {
        slideIndex++;
        showSlides(slideIndex);
    }

    // تشغيل المؤقت (كل 5 ثواني تتغير الشريحة)
    let timer = setInterval(autoSlide, slideInterval);

    // دالة للنقر على النقاط (Dots)
    window.currentSlide = function(n) {
        clearInterval(timer); // إيقاف التلقائي عند النقر اليدوي
        slideIndex = n - 1; // تعديل الاندكس لأن المصفوفة تبدأ من 0
        showSlides(slideIndex);
        timer = setInterval(autoSlide, slideInterval); // إعادة تشغيل التلقائي
    }
});
