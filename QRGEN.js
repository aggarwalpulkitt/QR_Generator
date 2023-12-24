function generateQRCode() {
    var inputText = document.getElementById('inputText').value;
    if (inputText) {
        var qrCodeDiv = document.getElementById('qrcode');
        qrCodeDiv.innerHTML = ''; // Clear previous QR code if any

        var qr = qrcode(10, 'M');
        qr.addData(inputText);
        qr.make();

        var qrImage = qr.createImgTag(5);
        qrCodeDiv.innerHTML = qrImage;
    } else {
        alert('Please enter text to generate QR code');
    }
}
