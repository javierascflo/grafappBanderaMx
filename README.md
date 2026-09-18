## Información del Proyecto

- **Aplicación:** `graf-appBanderaMx`
- **Materia:** Graficación (1er Seguimiento)
- **Integrantes:**
  - Ascencio Flores Javier Alessandro (24200765)
  - Fernández Perez Ruben (242001348)
  - Osorio Escamilla Juan David (24200827)

---

## Secuencia de Prompts e Instrucciones

### Prompt 1: Creación de la Estructura Base (HTML / CSS)
> **Usuario:**  
> "Hola, necesito crear una interfaz web para simular la Bandera de México. La página debe incluir:
> - Un título principal que diga 'Bandera de México'.
> - Una sección superior de controles con tres bloques: 
>   1. 'Esperanza' (Verde) con un slider de tipo rango (`input type="range"`) para modificar el valor del color y un texto que muestre el código Hexadecimal.
>   2. 'Unidad' (Blanco) mostrando la etiqueta `#FFFFFF`.
>   3. 'Sangre de nuestros héroes nacionales' (Rojo) con su respectivo slider de rango y etiqueta Hexadecimal.
> - Una sección inferior con la bandera dividida en 3 franjas verticales de igual tamaño (Verde, Blanco, Rojo).
> - En la franja blanca, coloca una imagen del Escudo Nacional cargada desde Wikimedia Commons."

---

### Prompt 2: Centrado y Corrección del Escudo Nacional
> **Usuario:**  
> "Modifica el código para que la imagen del escudo de la bandera de México quede centrado en la parte blanca."

---

### Prompt 3: Conservación de los Marcadores de Información
> **Usuario:**  
> "Deja la parte de los `@` que tenía debajo de la imagen del escudo."

---

### Prompt 4: Reemplazo de Marcadores por Datos del Equipo
> **Usuario:**  
> "Ahora reemplaza los tres contenedores de `<div>@@@@@</div>` ubicados debajo del escudo por los datos completos del equipo de la materia de Graficación:
> - Ascencio Flores Javier Alessandro 24200765
> - Fernández Perez Ruben 242001348
> - Osorio Escamilla Juan David 24200827"

---

### Prompt 5: Implementación de Lógica Dinámica en JavaScript (RGB / HEX)
> **Usuario:**  
> "Ayúdame con el código JavaScript (`script.js`) para controlar los colores dinámicamente:
> - El slider de **Esperanza** debe modificar el canal **G** (Verde) en formato RGB `rgb(0, G, 0)` y actualizar el texto del código Hexadecimal (ej. `#008D00`).
> - El slider de **Sangre de nuestros héroes nacionales** debe modificar el canal **R** (Rojo) en formato RGB `rgb(R, 0, 0)` y actualizar su correspondiente código Hexadecimal (ej. `#9D0000`).
> - La franja central (Blanco) permanece fija en `#FFFFFF`."

---

### Prompt 6: Estilizado Final, Enmarcado y Layout de la Pantalla
> **Usuario:**  
> "Ajusta el CSS para que toda la interfaz (título, controles y la bandera) quede contenida dentro de un panel rectangular con borde negro, bien centrado horizontal y verticalmente en la pantalla, logrando una vista idéntica a la maqueta final de la aplicación."

---
