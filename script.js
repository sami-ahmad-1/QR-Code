let imgBox = document.getElementById("imgBox")
let qrImg = document.getElementById("qrImg")
let QrText = document.getElementById("QrText")

let generateQR = ()=>{
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + QrText.value;
    imgBox.classList.add('show-img')

}