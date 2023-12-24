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

function downloadQRCode() {
    var qrCodeDiv = document.getElementById('qrcode');
    var qrCodeImg = qrCodeDiv.querySelector('img');
    var downloadLink = document.createElement('a');
    downloadLink.href = qrCodeImg.src;
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
}

function shareQRCode() {
    var qrCodeDiv = document.getElementById('qrcode');
    var qrCodeImg = qrCodeDiv.querySelector('img');
    var shareText = 'Check out this QR code I generated!';
    if (navigator.share) {
        navigator.share({
            title: 'QR Code',
            text: shareText,
            url: qrCodeImg.src
        }).then(() => {
            console.log('Successfully shared QR code');
        }).catch((error) => {
            console.error('Error sharing QR code:', error);
        });
    } else {
        alert('Sharing is not supported in your browser');
    }
}
