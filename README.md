# KeyBoard

Aplicación interactiva de teclado desarrollada con ReactJS y SASS, que ofrece un
diseño responsive, alternancia entre modo oscuro y claro, y consume APIs
externas para funcionalidades avanzadas.

---

## 🔗 Demo en vivo

[Ver Live Demo](https://keyborad.vercel.app)

---

## 🚀 Características

- Teclado funcional con feedback visual al presionar teclas
- Diseño responsive para móviles y escritorio
- Alternancia entre modo oscuro y modo claro
- Integración con APIs externas para sonidos o sugerencias de texto
- Componentes estilizados con SASS y anidamiento de estilos

---

## 🛠 Tecnologías y Herramientas

- **ReactJS**: para la construcción de la interfaz de usuario
- **TypeScript**: tipado estático y escalabilidad del código
- **SASS**: estilos modulares con anidamiento y variables
- **Vite**: bundler y servidor de desarrollo rápido
- **HTML5 & JavaScript**: marcado y lógica principal
- **Fetch API**: consumo de servicios externos

---

## 📥 Instalación y Ejecución (Paso a paso)

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/rodriguez02fer09/Keyborad.git
   cd Keyborad
   ```

2. **Instalar las dependencias**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

   Abre tu navegador en `http://localhost:5173` (o la URL que indique Vite).

4. **Crear versión de producción**

   ```bash
   npm run build
   ```

5. **Vista previa de producción**

   ```bash
   npm run preview
   ```

---

## ✅ Migración a TypeScript

Este proyecto fue migrado completamente a **TypeScript** para mejorar la
escalabilidad, la calidad del código y la experiencia del desarrollador.  
Incluye:

- Tipado estricto (`strict: true`)
- Definiciones claras de props e interfaces
- Soporte para componentes reutilizables en React
- Mejor integración con ESLint y Prettier

---

## 🗂 Organización del Código y Tipos

### 📁 `src/types`

Contiene todas las definiciones de tipos TypeScript organizadas en módulos
reutilizables:

| Archivo      | Descripción                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| `context.ts` | Define los tipos globales del contexto (tema, fuente, funciones del contexto)     |
| `global.ts`  | Contiene tipos reutilizables como `Phonetic`, `Meaning`, `Definition`, etc.       |
| `props.ts`   | Define los props de los componentes (`PropsSearchPrompt`, `MainTitleProps`, etc.) |

### 💡 Buenas Prácticas Aplicadas

- ✅ Tipos importados con `import type` para mantener el bundle liviano
- ✅ Separación clara entre lógica, estilo y tipado
- ✅ Uso de `type` para uniones literales (`'light' | 'dark'`) y `interface`
  para estructuras
- ✅ Componentes fuertemente tipados en React

Ejemplo:

```tsx
import type {PropsSearchPrompt} from '@/types/props'
```

---

## 🤝 Contribuciones

1. Haz un fork de este repositorio
2. Crea una rama con tu mejora: `git checkout -b feature/nombre-de-la-rama`
3. Realiza tus cambios y haz commit: `git commit -m "Descripción de la mejora"`
4. Empuja a tu fork: `git push origin feature/nombre-de-la-rama`
5. Abre un Pull Request describiendo tus cambios.

---

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
