document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector('a[href="Bluewy_01.html"]');
    
    if (link) {
        link.addEventListener("click", function (event) {
            const confirmed = confirm("ยืนยันที่จะเข้าสู่แบบทดสอบ");
            if (!confirmed) {
                event.preventDefault();
            }
        });
    }
});
