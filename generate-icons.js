import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sizes = [192, 512];
const publicDir = './public';

// SVG balón de fútbol
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

async function generateIcons() {
  try {
    // Generar PNGs normales
    for (const size of sizes) {
      await sharp(Buffer.from(ballSvg))
        .png()
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toFile(path.join(publicDir, `icon-${size}x${size}.png`));
      
      // Generar versión maskable (con padding)
      const innerSize = Math.round(size * 0.8);
      const padding = Math.round(size * 0.1);
      
      await sharp(Buffer.from(ballSvg))
        .png()
        .resize(innerSize, innerSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .extend({
          top: padding,
          bottom: padding,
          left: padding,
          right: padding,
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, `icon-${size}x${size}-maskable.png`));
      
      console.log(`✓ Generado: icon-${size}x${size}.png y icon-${size}x${size}-maskable.png`);
    }
    
    console.log('✓ Todos los íconos han sido generados exitosamente');
  } catch (error) {
    console.error('Error al generar íconos:', error);
    process.exit(1);
  }
}

generateIcons();
