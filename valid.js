document.getElementById('Registration').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const name =document.getElementById('name').value.trim();
    const Username=document.getElementById('username').value.trim();
    const fileInput = document.getElementById('avatar');
    const file = fileInput.files[0];

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Enter a valid email.');
        e.preventDefault();
        return;
    }

    if (!file) {
        alert('Please upload an image.');
        e.preventDefault();
        return;
    }

    const isValidType = ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type);
    const isValidSize = file.size <= 500 * 1024;

    if (!isValidType || !isValidSize) {
        alert('Image must be JPG/PNG and under 500KB.');
        e.preventDefault();
        return;
    }

    const reader= new FileReader();
    reader.onload=function(){
        const avatarData=reader.result;
        localStorage.setItem('avatarData', avatarData);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('username', Username);
        localStorage.setItem('ticketCode', generateCode());
        window.location.href = "ticket.html";
    };
    reader.readAsDataURL(file);
   //alert("Form submitted successfully!")
});
function generateCode(length=8){
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code="";
    for(let i=0;i<length;i++){
        code +=string.charAt(Math.floor(Math.random()*string.length));
    }
    return code;
}