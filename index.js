function notify(title, text, time) {
  // Bildirim oluşturma
  var notification = document.createElement('div');
  notification.classList.add('notification');

  // Başlık bölümü
  var titleElement = document.createElement('div');
  titleElement.textContent = title;
  titleElement.classList.add('title');
  notification.appendChild(titleElement);

  // Bildirim metni bölümü
  var textElement = document.createElement('div');
  textElement.textContent = text;
  textElement.classList.add('text');
  notification.appendChild(textElement);

  // Süre çizgisi
  var timeElement = document.createElement('div');
  timeElement.classList.add('time');
  notification.appendChild(timeElement);

  // Belirtilen süre sonunda bildirimi kaldırma
  setTimeout(function() {
    notification.remove();
  }, time);

  // Bildirimi sayfaya ekleme
  document.body.appendChild(notification);
}


function copyCode(event) {
  const codeElement = event.target.parentNode.querySelector('code');
  const text = codeElement.innerText;

  const el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  const copyButton = event.target;
  copyButton.innerText = 'Copied';
  notify('notification', 'Copied to clipboard', 3000);
  setTimeout(function() {
    copyButton.innerText = 'Copy';
  }, 2000);
}



