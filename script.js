const productosData = {
    1: { 
        nombre: "Air Jordan 1 Retro High", 
        categoria: "Nuevos Lanzamientos",
        descripcion: "Air Jordan 1 Retro High OG 'Chicago' 2022. Zapatilla icónica en colores rojo, blanco y negro. Material premium de cuero.", 
        precio: "$3,500 MXN", 
        vendedor: "Carlos Méndez", 
        carrera: "Coleccionista Verificado",
        talla: "27.5",
        condicion: "Nuevo",
        estado: "Con caja original",
        caja: "Sí"
    },
    2: { 
        nombre: "Nike Dunk Low Retro", 
        categoria: "Nuevos Lanzamientos",
        descripcion: "Nike Dunk Low 'University Blue'. Edición limitada, perfecto estado. Solo se usó una vez para fotos.", 
        precio: "$2,800 MXN", 
        vendedor: "Ana Rodríguez", 
        carrera: "Vendedora Platinum",
        talla: "26",
        condicion: "9.5/10",
        estado: "Casi nuevo",
        caja: "Sí"
    },
    3: { 
        nombre: "Adidas Yeezy Boost 350", 
        categoria: "Nuevos Lanzamientos",
        descripcion: "Yeezy Boost 350 V2 'Zebra'. Modelo 2023, auténtico con certificado. Tecnología Boost para máxima comodidad.", 
        precio: "$4,200 MXN", 
        vendedor: "Diego Sánchez", 
        carrera: "Autenticador Certificado",
        talla: "28",
        condicion: "Nuevo",
        estado: "Con etiquetas",
        caja: "Sí"
    },
    4: { 
        nombre: "New Balance 550", 
        categoria: "Nuevos Lanzamientos",
        descripcion: "New Balance 550 'White Green'. Collaboración exclusiva, estilo vintage basketball. Suela de goma duradera.", 
        precio: "$2,100 MXN", 
        vendedor: "María González", 
        carrera: "Sneakerhead Level 3",
        talla: "25.5",
        condicion: "Nuevo",
        estado: "En stock",
        caja: "Sí"
    },
    5: { 
        nombre: "Converse x Rick Owens", 
        categoria: "Usados Premium",
        descripcion: "Converse Chuck 70 colaboración con Rick Owens. Diseño único, construcción premium. Perfecto para coleccionistas.", 
        precio: "$1,800 MXN", 
        vendedor: "Javier López", 
        carrera: "Diseñador de calzado",
        talla: "27",
        condicion: "9/10",
        estado: "Bien cuidado",
        caja: "No"
    },
    6: { 
        nombre: "Vans Old Skool Pro", 
        categoria: "Usados Premium",
        descripcion: "Vans Old Skool con personalización artística. Pintura a mano única. Suela UltraCush HD para mayor comodidad.", 
        precio: "$950 MXN", 
        vendedor: "Fernanda Cruz", 
        carrera: "Artista Custom",
        talla: "24.5",
        condicion: "8/10",
        estado: "Custom único",
        caja: "No"
    },
    7: { 
        nombre: "Puma Suede Classic", 
        categoria: "Usados Premium",
        descripcion: "Puma Suede Classic vintage de los 90s. Color azul navy. Pieza retro en excelente estado para su edad.", 
        precio: "$750 MXN", 
        vendedor: "Ricardo Torres", 
        carrera: "Coleccionista Retro",
        talla: "26",
        condicion: "7/10",
        estado: "Vintage",
        caja: "No"
    },
    8: { 
        nombre: "Reebok Club C 85", 
        categoria: "Usados Premium",
        descripcion: "Reebok Club C 85 revisión moderna. Cuero premium, plantilla Ortholite. Ideal para uso diario.", 
        precio: "$1,200 MXN", 
        vendedor: "Sofía Mendoza", 
        carrera: "Vendedora Top",
        talla: "25",
        condicion: "8.5/10",
        estado: "Limpio y listo",
        caja: "No"
    },
    9: { 
        nombre: "Kit Limpieza Premium", 
        categoria: "Accesorios",
        descripcion: "Kit completo para mantenimiento de sneakers. Incluye 3 cepillos de diferentes durezas, solución limpiadora y toallas de microfibra.", 
        precio: "$250 MXN", 
        vendedor: "LimpiaSneakers MX", 
        carrera: "Especialista en cuidado",
        talla: "Universal",
        condicion: "Nuevo",
        estado: "En empaque",
        caja: "Sí"
    },
    10: { 
        nombre: "Cajas Display Transparente", 
        categoria: "Accesorios",
        descripcion: "Cajas de exhibición para tenis de colección. Material acrílico transparente, protege del polvo y rayos UV. Varias medidas.", 
        precio: "$180 MXN c/u", 
        vendedor: "DisplayCollector", 
        carrera: "Fabricante oficial",
        talla: "Múltiples",
        condicion: "Nuevo",
        estado: "En stock",
        caja: "Sí"
    },
    13: { 
        nombre: "Restauración Profesional", 
        categoria: "Servicios",
        descripcion: "Servicio completo de restauración de sneakers. Incluye limpieza profunda, reparación, repintado y protección.", 
        precio: "Desde $400 MXN", 
        vendedor: "SneakerHospital", 
        carrera: "Restauradores certificados",
        talla: "Todas",
        condicion: "Servicio",
        estado: "Disponible",
        caja: "N/A"
    },
    14: { 
        nombre: "Customización Artística", 
        categoria: "Servicios",
        descripcion: "Customización de tenis con diseños únicos a mano. Trabajamos con acrílicos y materiales premium. 100% personalizado.", 
        precio: "$600 - $1,500 MXN", 
        vendedor: "CustomKicks MX", 
        carrera: "Artistas profesionales",
        talla: "Todas",
        condicion: "Servicio",
        estado: "Consultar",
        caja: "N/A"
    }
};

document.querySelectorAll(".producto").forEach(prod => {
    prod.addEventListener("click", (e) => {
        if (!e.target.closest('.abrir-producto')) return;
        
        const datos = {
            id: prod.dataset.id,
            img: prod.querySelector("img").src,
            precio: prod.querySelector(".precio")?.innerText || "",
            vendedor: prod.querySelector(".vendedor")?.innerText || "",
            modelo: prod.querySelector(".modelo")?.innerText || ""
        };

        localStorage.setItem("productoSeleccionado", JSON.stringify(datos));
    });
});

function cargarProducto(datos) {
    const p = productosData[datos.id];
    if (!p) return;

    const imgElement = document.getElementById("producto-imagen");
    if (imgElement) {
        imgElement.src = datos.img;
        imgElement.alt = p.nombre;
    }

    document.getElementById("producto-nombre").textContent = p.nombre;
    document.getElementById("producto-categoria").textContent = p.categoria;
    document.getElementById("producto-precio").textContent = p.precio;
    document.getElementById("producto-descripcion").textContent = p.descripcion;

    document.getElementById("spec-talla").textContent = p.talla;
    document.getElementById("spec-condicion").textContent = p.condicion;
    document.getElementById("spec-estado").textContent = p.estado;
    document.getElementById("spec-caja").textContent = p.caja;

    document.getElementById("alumno-nombre").textContent = p.vendedor;
    document.getElementById("alumno-carrera").textContent = p.carrera;

    const whatsappBtn = document.getElementById("whatsapp-btn");
    if (whatsappBtn) {
        const mensaje = `Hola, estoy interesado en: ${p.nombre} (${p.precio})`;
        whatsappBtn.href = `https://wa.me/521${datos.contacto || '5512345678'}?text=${encodeURIComponent(mensaje)}`;
    }
}

if (window.location.pathname.includes("productos.html")) {
    const datosGuardados = JSON.parse(localStorage.getItem("productoSeleccionado"));
    if (datosGuardados) {
        cargarProducto(datosGuardados);
    }

    const similares = document.getElementById("similares");
    if (similares) {
        const imagenesSimilares = [
            { src: "img/tl3.jpg", id: 1 },
            { src: "img/tl4.jpg", id: 2 },
            { src: "img/tl5.jpg", id: 3 },
            { src: "img/tl6.jpg", id: 4 },
            { src: "img/tl7.jpg", id: 5 },
            { src: "img/tl8.jpg", id: 6 },
            { src: "img/t9.jpg", id: 7 },
            { src: "img/t3.jpg", id: 8 }
        ];

        imagenesSimilares.forEach(item => {
            const img = document.createElement("img");
            img.src = item.src;
            img.dataset.id = item.id;
            img.alt = `Tenis similar ${item.id}`;
            img.classList.add("sim-img");
            similares.appendChild(img);

            img.addEventListener("click", () => {
                const p = productosData[item.id];
                if (!p) return;

                const nuevo = {
                    id: item.id,
                    img: item.src,
                    precio: p.precio,
                    vendedor: p.vendedor,
                    modelo: p.nombre
                };

                cargarProducto(nuevo);
                localStorage.setItem("productoSeleccionado", JSON.stringify(nuevo));
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll('.producto img[data-hover]');
    
    productos.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.dataset.hover;
        
        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc;
        });
        
        img.addEventListener('mouseleave', () => {
            img.src = originalSrc;
        });
    });

    const favButtons = document.querySelectorAll('.btn-favorito');
    favButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('activo');
            if (this.classList.contains('activo')) {
                this.innerHTML = '❤️ En favoritos';
                this.style.background = '#ff4757';
                this.style.color = 'white';
            } else {
                this.innerHTML = '❤️ Agregar a favoritos';
                this.style.background = 'rgba(255, 71, 87, 0.1)';
                this.style.color = '#ff4757';
            }
        });
    });
});

function buscarTenis() {
    const input = document.querySelector('.buscador');
    if (!input) return;
    
    input.addEventListener('input', function() {
        const termino = this.value.toLowerCase();
        const productos = document.querySelectorAll('.producto');
        
        productos.forEach(prod => {
            const texto = prod.textContent.toLowerCase();
            if (texto.includes(termino)) {
                prod.style.display = 'block';
            } else {
                prod.style.display = 'none';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', buscarTenis);