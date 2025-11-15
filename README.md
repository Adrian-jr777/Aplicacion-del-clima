# ShopHub - Catálogo de Productos

## 📋 Definición del Proyecto

**ShopHub** es una aplicación web de catálogo de productos que permite a los usuarios explorar productos y a los administradores gestionar el inventario de manera eficiente. La solución incluye:

- **Frontend público**: Navegación de productos con búsqueda, categorías y paginación
- **Panel de administración**: Gestión completa de productos (CRUD)
- **Persistencia de datos**: Almacenamiento local mediante localStorage

## 🎨 Identidad de Marca

### Logo
El logo de ShopHub consiste en un ícono de verificación (checkmark) dentro de un cuadrado redondeado azul, simbolizando confianza y calidad en los productos ofrecidos.

### Paleta de Colores

| Color | Código Hex | Uso |
|-------|-----------|-----|
| Azul Primario | `#2563eb` | Botones principales, logo, enlaces |
| Púrpura Secundario | `#7c3aed` | Acentos y elementos destacados |
| Fondo Claro | `#f8fafc` | Fondo general de la aplicación |
| Texto Oscuro | `#1e293b` | Texto principal |
| Texto Claro | `#64748b` | Texto secundario y descripciones |
| Blanco | `#ffffff` | Tarjetas y contenedores |
| Borde | `#e2e8f0` | Bordes y separadores |

### Tipografía
- **Fuente**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 🚀 Características Implementadas

### Historias de Usuario Completadas

#### 1. ✅ Colocar encabezado
- Header fijo al 100% del ancho
- Logo y lema alineados a la izquierda
- Botones "Crear cuenta" e "Iniciar sesión" alineados a la derecha
- Click en logo redirige a la página principal
- Responsive para todos los dispositivos

#### 2. ✅ Definir el cuerpo del sitio
- Main con color de fondo acorde a la identidad de marca
- Ocupa el 100% del alto de la pantalla
- Tres secciones: buscador, categorías y productos
- Optimizado para diferentes dispositivos

#### 3. ✅ Registrar producto
- Panel de administración con botón "Agregar producto"
- Formulario con campos: nombre, descripción e imágenes
- Validación de nombres duplicados
- Soporte para múltiples imágenes (hasta 5)
- Almacenamiento en localStorage

#### 4. ✅ Visualizar productos en el home
- Máximo 10 productos aleatorios
- Sin repetición de productos
- Distribución en 2 columnas (desktop) y 1 columna (mobile)
- Productos verdaderamente aleatorios

#### 5. ✅ Visualizar detalle de producto
- Header con título del producto (izquierda) y botón volver (derecha)
- Body con descripción e imágenes del producto
- Diseño responsive

#### 6. ✅ Visualizar galería de imágenes
- Bloque al 100% del ancho del contenedor
- Imagen principal en la mitad izquierda
- Grilla 2x2 con 4 imágenes en la mitad derecha (desktop)
- Botón "Ver más" para acceder a todas las imágenes
- Responsive para mobile y tablet

#### 7. ✅ Colocar pie de página
- Footer al 100% del ancho
- Isologotipo, año y copyright alineados a la izquierda
- Optimizado para diferentes dispositivos
- Diseño acorde a la identidad visual

#### 8. ✅ Paginar productos
- Máximo 10 productos por página
- Contador de páginas funcional
- Botones de navegación (anterior, siguiente, números de página)
- Indicador de página actual

#### 9. ✅ Panel de administración
- URL: `/admin.html`
- Menú con todas las funciones de administración
- No responsive (solo desktop)
- Mensaje de advertencia en dispositivos móviles

#### 10. ✅ Listar productos
- Botón "Lista de productos" en el panel
- Tabla con columnas: ID, Nombre, Acciones
- Lista todos los productos disponibles

#### 11. ✅ Eliminar producto
- Acción "Eliminar" por cada producto
- Modal de confirmación antes de eliminar
- Eliminación de la base de datos
- Actualización automática del listado

## 📁 Estructura de Archivos

```
/vercel/sandbox/
├── index.html              # Página principal
├── producto.html           # Detalle de producto
├── admin.html              # Panel de administración
├── admin-productos.html    # Lista de productos (admin)
├── admin-agregar.html      # Agregar producto (admin)
├── style.css               # Estilos globales
├── script.js               # Lógica de la aplicación
└── README.md               # Documentación
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de la aplicación
- **localStorage**: Persistencia de datos
- **Google Fonts**: Tipografía Inter

## 📱 Responsive Design

La aplicación está optimizada para:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

**Nota**: El panel de administración solo está disponible en desktop (> 1024px)

## 🧪 Casos de Prueba

### Historia 1: Colocar encabezado
- [ ] El header ocupa el 100% del ancho en todas las páginas
- [ ] El header permanece fijo al hacer scroll
- [ ] El logo y lema están alineados a la izquierda
- [ ] Los botones están alineados a la derecha
- [ ] Click en logo redirige a index.html
- [ ] El header es responsive en mobile y tablet

### Historia 2: Definir el cuerpo del sitio
- [ ] El main tiene color de fondo #f8fafc
- [ ] El main ocupa el 100% del alto de la pantalla
- [ ] Se visualizan las tres secciones: buscador, categorías y productos
- [ ] El diseño es responsive

### Historia 3: Registrar producto
- [ ] Existe el botón "Agregar producto" en el panel
- [ ] El formulario incluye campos: nombre, descripción e imágenes
- [ ] Se pueden subir múltiples imágenes (hasta 5)
- [ ] El producto se guarda correctamente
- [ ] Se muestra error si el nombre ya existe

### Historia 4: Visualizar productos en el home
- [ ] Se muestran máximo 10 productos
- [ ] Los productos no se repiten
- [ ] Se distribuyen en 2 columnas (desktop) y 1 columna (mobile)
- [ ] Los productos son verdaderamente aleatorios

### Historia 5: Visualizar detalle de producto
- [ ] El header del detalle ocupa el 100% del ancho
- [ ] El título está alineado a la izquierda
- [ ] La flecha "Volver" está alineada a la derecha
- [ ] El body muestra descripción e imágenes

### Historia 6: Visualizar galería de imágenes
- [ ] El bloque de imágenes ocupa el 100% del ancho
- [ ] La imagen principal está en la mitad izquierda
- [ ] La grilla 2x2 está en la mitad derecha (desktop)
- [ ] Existe el botón "Ver más"
- [ ] La galería es responsive

### Historia 7: Colocar pie de página
- [ ] El footer ocupa el 100% del ancho
- [ ] El isologotipo, año y copyright están a la izquierda
- [ ] El footer es responsive
- [ ] El diseño es acorde a la identidad visual

### Historia 8: Paginar productos
- [ ] Se muestran máximo 10 productos por página
- [ ] El contador de páginas funciona correctamente
- [ ] Los botones de navegación funcionan
- [ ] Se muestra la página actual

### Historia 9: Panel de administración
- [ ] La URL /admin.html funciona
- [ ] Se visualiza el menú de administración
- [ ] No es responsive (solo desktop)
- [ ] Se muestra mensaje en móviles

### Historia 10: Listar productos
- [ ] Existe el botón "Lista de productos"
- [ ] Se muestran las columnas: ID, Nombre, Acciones
- [ ] Se listan todos los productos

### Historia 11: Eliminar producto
- [ ] Existe la acción "Eliminar" por cada producto
- [ ] Aparece modal de confirmación
- [ ] El producto se elimina de la base de datos
- [ ] El producto no se muestra en el listado
- [ ] Si se cancela, no se realizan cambios

## 🚀 Cómo Usar

### Visualizar la Aplicación

1. Abrir `index.html` en un navegador web
2. Explorar productos, categorías y usar el buscador
3. Click en cualquier producto para ver el detalle

### Acceder al Panel de Administración

1. Navegar a `admin.html` (solo en desktop)
2. Seleccionar "Lista de Productos" o "Agregar Producto"
3. Gestionar el catálogo de productos

### Agregar un Producto

1. Ir a `admin-agregar.html`
2. Completar el formulario:
   - Nombre del producto (requerido)
   - Descripción (requerido)
   - URLs de imágenes (opcional, hasta 5)
3. Click en "Guardar Producto"

### Eliminar un Producto

1. Ir a `admin-productos.html`
2. Click en "Eliminar" junto al producto deseado
3. Confirmar la eliminación en el modal

## 📊 Base de Datos

La aplicación utiliza **localStorage** para almacenar los productos. Los datos se guardan en formato JSON con la siguiente estructura:

```javascript
{
  id: Number,           // ID único (timestamp)
  nombre: String,       // Nombre del producto
  descripcion: String,  // Descripción detallada
  imagenes: Array       // Array de URLs de imágenes
}
```

### Productos de Ejemplo

La aplicación incluye 15 productos de ejemplo que se cargan automáticamente la primera vez que se accede.

## 🎯 Características Adicionales

- **Validación de formularios**: Previene datos inválidos
- **Mensajes de error/éxito**: Feedback visual para el usuario
- **Imágenes por defecto**: Si no se proporcionan imágenes
- **Modal de confirmación**: Para acciones destructivas
- **Diseño moderno**: Siguiendo las mejores prácticas de UI/UX

## 🔮 Futuras Mejoras

- Implementar búsqueda funcional
- Agregar filtros por categoría
- Sistema de autenticación
- Backend con base de datos real
- Carrito de compras
- Sistema de favoritos
- Comentarios y valoraciones

## 📄 Licencia

© 2025 ShopHub. Todos los derechos reservados.

---

**Desarrollado como proyecto de sprint para demostración de habilidades en desarrollo web frontend.**
