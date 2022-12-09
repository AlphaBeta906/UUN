var google = document.createElement('script');
google.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${import.meta.env.GOOGLE}`;
google.async = true;
google.crossorigin = 'anonymous';
document.head.appendChild(google);

var client = document.createElement('script');
client.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${import.meta.env.CLIENT}`;
client.async = true;
document.head.appendChild(script);