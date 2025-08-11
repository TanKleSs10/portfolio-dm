# Portafolio Web – Diego Meza

¡Hola! 👋  
Este portafolio está hecho para mostrar mi trabajo, habilidades y proyectos en un formato claro y visual.

---

## 🚀 Tecnologías utilizadas

- **Framework:** [Next.js](https://nextjs.org/) – React para producción con renderizado híbrido (SSR/SSG).
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) – Animaciones fluidas y personalizadas.
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) – CSS utilitario para un diseño moderno y responsive.
- **Despliegue:** [Vercel](https://vercel.com/home)

---

## 📂 Estructura del proyecto

- `/pages` → Rutas y vistas principales del portafolio.
- `/components` → Componentes reutilizables como navbar, cards de proyectos, etc.
- `/public` → Archivos estáticos (imágenes, íconos, CV en PDF).
- `/styles` → Configuración y estilos globales.
- `/data` → Información de proyectos, skills y links.

---

## 📄 Características

- **Diseño responsive** adaptable a cualquier dispositivo.
- **Animaciones suaves** con Framer Motion.
- **Sección de proyectos** con enlaces a repositorios y demos.
- **Descarga de CV** en PDF directamente desde el portafolio.
- **Optimización SEO** básica para visibilidad en buscadores.

---

## 🔧 Instalación y uso

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/TanKleSs10/portfolio-dm.git
    cd portfolio-dm
    ```

2. Instalar dependencias:
    ```bash
    npm install
    ```

3. Ejecutar en desarrollo:
    ```bash
    npm run dev
    ```
    Abrir en `http://localhost:3000`

4. Generar build para producción:
    ```bash
    npm run build
    npm start
    ```

---

## 📂 Cómo actualizar tu CV

1. Reemplaza el archivo `cv-diego-meza.pdf` en la carpeta `/public`.
2. Asegúrate de que el enlace o botón en la sección de "Descargar CV" apunte a:
    ```
    /cv-diego-meza.pdf
    ```
3. Puedes usar:
    ```jsx
    <a href="/cv-diego-meza.pdf" target="_blank" rel="noopener noreferrer">Ver CV</a>
    ```
    o  
    ```jsx
    <a href="/cv-diego-meza.pdf" download>Descargar CV</a>
    ```

---

## 📬 Contacto

- **LinkedIn:** [linkedin.com/in/diegomeza](https://www.linkedin.com/in/diego-meza-365489212/)
- **GitHub:** [github.com/TanKleSs10](https://github.com/TanKleSs10)
- **Email:** diegomeza.developer@gmail.com

---

## 📜 Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo como referencia o inspiración.
