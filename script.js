function copyToClipboard(elementId) {
    // Belirtilen elementin metnini seç
    var copyText = document.getElementById(elementId);
    
    // Seçilen metni panoya kopyala
    navigator.clipboard.writeText(copyText.innerText).then(function() {
      console.log('Metin panoya kopyalandı: ' + copyText.innerText);
    }).catch(function(err) {
      console.error('Kopyalama hatası: ', err);
    });
  }