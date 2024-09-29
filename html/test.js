// จัดการการส่งฟอร์ม
function goToNextPage() {
    window.location.href = "gamejam4.html"; 
}
function goToNextPage1() {
    window.location.href = "gamejamsp.html"; 
}
function goToNextPage2() {
    window.location.href = "3d-monster.html"; 
}
function goToNextPage3() {
    window.location.href = "pixel design.html"; 
}
function goToNextPage4() {
    window.location.href = "certificate.html"; 
}
function goToNextPage5() {
    window.location.href = "drummer..html"; 
}
function goToNextPage6() {
    window.location.href = "student.html"; 
}
function goToNextPage7() {
    window.location.href = "sports day.html"; 
}
function goToNextPage8() {
    window.location.href = "robot car.html"; 
}
function goToNextPage9() {
    window.location.href = "Editor design.html"; 
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
        window.location.href = 'next-page.html';  

    // ดึงค่าจากฟอร์ม
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // แสดงผลลัพธ์ที่ฟอร์มตอบกลับ
    var formResponse = document.getElementById('formResponse');
    formResponse.innerHTML = `Thank you, ${name}! We have received your message.`;
    
    // ล้างฟอร์มหลังจากส่งข้อมูล
    document.getElementById('contactForm').reset();
});
let slider = document.getElementById('slider');
let scrollAmount = 0;


function slideRight() {
    scrollAmount -= 320; // ระยะที่เลื่อนไปทางขวา
    slider.style.transform = `translateX(${scrollAmount}px)`;
}

function slideLeft() {
    scrollAmount += 320; // ระยะที่เลื่อนไปทางซ้าย
    slider.style.transform = `translateX(${scrollAmount}px)`;
}
function goToHome() {
    window.location.href = "test.html"; 
}
function goToProjects() {
    window.location.href = "gamejamsp.html"; 
}
function BackToProjects() {
    window.location.href = "test.html"; 
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
   