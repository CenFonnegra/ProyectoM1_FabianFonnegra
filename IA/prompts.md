# AI Usage Documentation

## Tool Used
ChatGPT

---

## Prompt 1: HTML Structure Generation

**Prompt:**
Generate the basic structure of a web page in HTML with a form.

**Result:**
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Configuración básica -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página</title>

    <!-- CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Contenido visible -->
    <header>
        <h1>Mi página web</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>

    <main>
        <section>
            <h2>Sección principal</h2>
            <p>Contenido aquí...</p>
        </section>
    </main>

    <aside>
        <p>Contenido adicional</p>
    </aside>

    <footer>
        <p>© 2026 Mi sitio web</p>
    </footer>

    <!-- JavaScript -->
    <script src="script.js"></script>
</body>
</html>

---
## Prompt 2: CSS style 

**prompt:** 
How do I generate a dynamic fadeInOut in css?

**Result:**

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.elemento {
  animation: fadeInOut 3s ease-in-out infinite;
}

---

## Prompt 3: JS

**prompt:**

How do I make a toast in JS?

**Result:**

 const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;

  container.appendChild(toast);

  // Activar animación
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Ocultar y eliminar
  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 400);
  }, duration);
}


## Conclusion

The use of artificial intelligence helped speed up development, solve issues, and improve the overall quality of the code.
