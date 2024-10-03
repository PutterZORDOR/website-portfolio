function goToHome() {
    window.location.href = "test.html"; 
}
function goToProjects() {
    window.location.href = "Editor design.html "
}
function BackToProjects() {
    window.location.href = "3d-monster.html"; 
}
function confirmfacbook() {

    window.open("https://www.facebook.com/putter.zordor", "_blank");
}
function confirminstagram() {

    window.open("https://www.instagram.com/gyoza_pt/", "_blank");
}
function confirmtiktok() {

    window.open("https://www.tiktok.com/@putterzordor", "_blank");
}
const container = document.querySelector('.container');

// สร้าง observer เพื่อดูว่า element อยู่ใน viewport หรือไม่
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // ถ้า element ปรากฏใน viewport ให้เล่นแอนิเมชันใหม่
            container.classList.remove('show-animation');
            void container.offsetWidth; // รีเฟรชเพื่อทำให้แอนิเมชันเริ่มใหม่
            container.classList.add('show-animation');
        }
    });
}, { threshold: 1 }); // กำหนด threshold ที่ 0.1 หมายถึง ต้องมีอย่างน้อย 10% ของ element ปรากฏใน viewport

// เริ่ม observer กับ element ที่ต้องการ
observer.observe(container);