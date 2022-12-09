import * as dotenv from 'dotenv'

dotenv.config()

var google = document.createElement('script');
google.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.CLIENT}`;
google.async = true;
google.crossorigin = 'anonymous';
document.head.appendChild(google);

var client = document.createElement('script');
client.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE}`;
client.async = true;
document.head.appendChild(script);