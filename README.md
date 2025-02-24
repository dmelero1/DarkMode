# Welcome to React Router!

### Installation

Instalar las dependencias:

```bash
npm install
```

### Despliegue

Para desplegarlo en el servidor ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

Si necesitas implementar Tailwind con Vite ejecuta en el terminal:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Componentes
He usado 3 componentes:

1º ThemeToggle.tsx que nos permite habilitar el modo noche junto al hook useDarkMode.ts

2º Header.tsx donde tenemos un H1 con un subrayado y el botón del modo noche

3º Card1.tsx son todas las cards utilizadas en la aplicación. Son 5 cards en total una de ellas ocupa 2 filas.

### Responsivo
Para el responsivo utilizo el grid de Tailwind.
```
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0">
```
Esto indica la estructura en tamaño xl, md y lg.

### Diseño Figma
He seguido este modelo de Figma >
[Diseño Figma](https://www.figma.com/design/n19govQfgZ52sIWfmgvhXe/Dark-Mode-(Copy)?node-id=0-18&t=aqs2FfNChqUY1RR1-1)

