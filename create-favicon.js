import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ballSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="95" fill="white" stroke="#333" stroke-width="2"/>
  <circle cx="100" cy="100" r="90" fill="white" stroke="#000" stroke-width="1.5"/>
  <polygon points="100,30 120,55 105,75 95,75 80,55" fill="black"/>
  <polygon points="140,60 160,75 155,100 135,105 125,85" fill="black"/>
  <polygon points="60,60 40,75 45,100 65,105 75,85" fill="black"/>
  <polygon points="135,130 155,120 165,145 150,165 130,150" fill="black"/>
  <polygon points="65,130 45,120 35,145 50,165 70,150" fill="black"/>
  <polygon points="100,170 120,145 105,125 95,125 80,145" fill="black"/>
</svg>`;

async function generateFavicon() {
  try {
    // Generar favicon en raíz (32x32 PNG como ICO)
    await sharp(Buffer.from(ballSvg))
      .png()
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(__dirname, 'public', 'favicon.ico'));
    
    console.log('✓ favicon.ico generado en public/');
  } catch (error) {
    console.error('Error:', error);
  }
}

generateFavicon();
