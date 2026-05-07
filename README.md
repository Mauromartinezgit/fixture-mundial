# 🌍 Copa Mundial FIFA 2026 - Fixture Interactivo

Aplicación web interactiva para visualizar y registrar resultados de la fase de grupos de la Copa Mundial FIFA 2026. Desarrollada con React + Vite.

## ✨ Características

- 📊 **Fixture completo** - 12 grupos con 6 partidos cada uno (72 partidos totales)
- ⚽ **Edición de resultados** - Ingresa marcadores en tiempo real
- 🏆 **Tabla de posiciones automática** - Se actualiza al ingresar resultados
- 💾 **Persistencia local** - Los datos se guardan en localStorage
- 🚀 **Interfaz moderna** - Diseño minimalista con paleta de colores verde-amarillo
- 🌐 **Banderas de países** - Usa CDN de flagcdn.com para mostrar banderas

## 🗂️ Estructura del Proyecto

```
fixture-mundial/
├── src/
│   ├── App.jsx              # Componente principal de la aplicación
│   ├── main.jsx             # Punto de entrada React
│   ├── App.css              # Estilos de App (vacío - usa inline styles)
│   ├── index.css            # Estilos globales (vacío - usa inline styles)
│   └── assets/              # Recursos estáticos
├── public/                  # Archivos públicos estáticos
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
├── eslint.config.js         # Configuración de ESLint
└── README.md                # Este archivo
```

## 📝 Componentes

### `App.jsx`
Componente monolítico que contiene toda la lógica:

- **`Flag({ team, size })`** - Componente de bandera de país
  - Mapea nombres de equipos a códigos ISO
  - Carga imágenes desde flagcdn.com
  
- **`ScoreInput({ value, onChange })`** - Input para marcadores
  - Solo acepta números del 0-99
  - Estilos condicionales según si tiene valor
  
- **`GroupCard({ gKey, scores, onScore })`** - Tarjeta de grupo
  - Muestra 6 partidos organizados en 3 jornadas
  - Tabla de posiciones actualizada
  - Destaca los 2 clasificados
  
- **`calcStandings(gKey, scores)`** - Lógica de tabla de posiciones
  - Calcula puntos, goles a favor/contra, diferencia de goles
  - Ordena por puntos, diferencia de goles y goles anotados

## 🎨 Estilado

**Enfoque:** Estilos inline (CSS-in-JS) centralizados en objetos
- Sin CSS externo ni Tailwind
- Todos los estilos dentro de `App.jsx`
- Paleta: Verde (#14532d, #22c55e), Amarillo (#fde68a), Azul oscuro (#050d1a)

**Ventajas:**
- Código autónomo y fácil de desplegar
- Estilos reactivos según estado de datos

**Mejora futura:** Migrar a constantes de estilos o CSS Modules si crece el proyecto

## 🚀 Instalación

```bash
# Clonar o descargar el proyecto
cd fixture-mundial

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 📦 Dependencias

- **React 19.2.4** - Framework UI
- **React DOM 19.2.4** - Renderizado web
- **Vite 8.0.4** - Bundler y dev server
- **ESLint 9.39.4** - Linter de código

## 📊 Datos

### `FLAG_CODE`
Mapeo de nombres de equipos a códigos ISO de país para las banderas:
```javascript
"México": "mx", "Argentina": "ar", "Francia": "fr", ...
```

### `GROUPS_DATA`
Estructura de grupos A-L con:
- Equipos del grupo
- 6 partidos con fecha y hora

### `STORAGE_KEY`
Clave para localStorage: `"mundial2026-scores"`

## 💾 Funcionalidad de Almacenamiento

- Los marcadores se guardan en `localStorage` automáticamente
- Se persisten entre sesiones
- Botón "Resetear todo" limpia todos los datos

## 🎯 Uso

1. **Ver fixture** - Abre la app y visualiza todos los grupos
2. **Ingresar resultados** - Haz clic en los inputs de marcador y digita goles
3. **Ver posiciones** - La tabla se actualiza automáticamente
4. **Identificar clasificados** - Los top 2 están resaltados en verde
5. **Resetear datos** - Usa el botón para empezar de nuevo

## 📍 Zonas Horarias

Los horarios mostrados están en **Hora Argentina (ART)**:
- **ET:** +3h
- **Colombia/Perú:** +2h
- **Chile:** +1h
- **México:** +1h

## 🌐 API Externa

- **flagcdn.com** - CDN para banderas de países (W40 format)
  - URLs: `https://flagcdn.com/w40/{code}.png`

## 📄 Licencia

Proyecto de práctica sin licencia específica.

## 👤 Autor

Desarrollado como proyecto de práctica en React + Vite.


