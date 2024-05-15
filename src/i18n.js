import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Services",
            part2: "About Waluigi Shop",
            part3: "Welcome to Waluigi's Repair Shop, where every fix comes with a dash of mischief and a splash of purple passion. From engine revs to pixel-perfect precision, we turn your mechanical woes into a winning kart race.",
            part4: "Contact Us"
          }
        }
      },
      es: { 
        translation: {
          description: {
            part1: "Servicios",
            part2: "Sobre Waluigi Shop",
            part3: "Bienvenido al taller de reparaciones de Waluigi, donde cada reparación viene con un toque de picardía y un toque de pasión púrpura. Desde las revoluciones del motor hasta una precisión de píxeles perfecta, convertimos tus problemas mecánicos en una carrera de karts ganadora.",
            part4: "Contactenos"
          }
        }
      }
    }
  });

export default i18n;