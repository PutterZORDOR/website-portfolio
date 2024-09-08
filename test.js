// จัดการการส่งฟอร์ม
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
        // ใช้ window.location.href เพื่อไปยัง URL ใหม่
        window.location.href = 'next-page.html';  // URL ของหน้าที่ต้องการไป
     // ป้องกันการรีเฟรชหน้าเว็บเมื่อส่งฟอร์ม

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
