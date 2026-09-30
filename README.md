# CORRODE – Apuestas (React + Tailwind)

Proyecto frontend sin backend: todos los datos están quemados en archivos `data/`.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Estructura

```
src/
  main.jsx                    # punto de entrada
  App.jsx
  index.css                   # directivas de Tailwind
  routes/AppRouter.jsx        # rutas
  layouts/MainLayout.jsx      # header + navbar + footer
  components/                 # componentes compartidos (Header, Navbar, Footer)
  modules/
    inicio/pages/
    futbol/{pages,data}/
    caballos/
      data/caballos.js        # caballos quemados
      hooks/useCarrera.js     # lógica de la carrera en tiempo real
      components/             # Pista, ListaCaballos, PanelApuesta, Resultado, HistorialApuestas
      pages/CaballosPage.jsx
```
