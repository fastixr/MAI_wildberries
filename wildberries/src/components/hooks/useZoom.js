// src/hooks/useZoom.js
import { useEffect } from 'react';

export function useZoom() {
  useEffect(() => {
    function updateHeaderZoom() {
      const header = document.getElementById('header');
      const zoomLevel = Math.round(window.devicePixelRatio * 100);

      // Удаляем все классы zoom
      header.className = header.className.replace(/\bzoom-\d+\b/g, '');

      // Добавляем соответствующий класс
      if (zoomLevel <= 25) {
        header.classList.add('zoom-25');
      } else if (zoomLevel <= 33) {
        header.classList.add('zoom-33');
      } else if (zoomLevel <= 50) {
        header.classList.add('zoom-50');
      } else if (zoomLevel <= 67) {
        header.classList.add('zoom-67');
      } else if (zoomLevel <= 75) {
        header.classList.add('zoom-75');
      } else if (zoomLevel <= 80) {
        header.classList.add('zoom-80');
      } else if (zoomLevel <= 90) {
        header.classList.add('zoom-90');
      } else if (zoomLevel <= 100) {
        header.classList.add('zoom-100');
      } else if (zoomLevel <= 110) {
        header.classList.add('zoom-110');
      } else if (zoomLevel <= 125) {
        header.classList.add('zoom-125');
      } else if (zoomLevel <= 150) {
        header.classList.add('zoom-150');
      } else if (zoomLevel <= 175) {
        header.classList.add('zoom-175');
      } else if (zoomLevel <= 200) {
        header.classList.add('zoom-200');
      } else if (zoomLevel <= 250) {
        header.classList.add('zoom-250');
      } else if (zoomLevel <= 300) {
        header.classList.add('zoom-300');
      } else if (zoomLevel <= 400) {
        header.classList.add('zoom-400');
      } else if (zoomLevel <= 500) {
        header.classList.add('zoom-500');
      }
    }

    // Отслеживаем изменение масштабирования
    window.addEventListener('resize', updateHeaderZoom);
    window.addEventListener('load', updateHeaderZoom);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateHeaderZoom);
      window.removeEventListener('load', updateHeaderZoom);
    };
  }, []);
}