/* =========================================================
   LA PATRONA · JAVASCRIPT
   ========================================================= */

// =========================================================
// UBER EATS — CTA / REDIRECCIÓN
// Si el comercio NO desea Uber Eats, elimina los enlaces
// marcados en index.html. No hay dependencia técnica.
// =========================================================

const UBER_EATS_URL = "https://www.ubereats.com/es/store/la-patrona/jO6tybw8VfOr_xKT1TRIRQ";

// =========================================================
// CARTA Y PRECIOS
// Edita aquí nombres, descripciones, categorías y precios.
// Este es el único bloque que necesitas tocar para actualizar
// fácilmente la carta de la web.
// Precios de referencia consultados online el 08/10/2026.
// =========================================================

const carta = [
  // ===================== DELICIAS COLOMBIANAS =====================
  {cat:"colombianas", section:"Delicias colombianas", name:"Picada Colombiana", price:36, desc:"Carne asada, costilla, chicharrón, chorizo, morcilla, alitas, patacón, maduro, yuca, papa criolla, arepa y tomate.", featured:true},
  {cat:"colombianas", section:"Delicias colombianas", name:"Canasta de Patacón con Carne", price:14, desc:"Patacón en forma de canasta, base de plátano verde, relleno de carne.", featured:true},
  {cat:"colombianas", section:"Delicias colombianas", name:"Canasta de Patacón con Pollo", price:14, desc:"Patacón en forma de canasta, base de plátano verde, relleno de pollo."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arepa con Chorizo", price:8, desc:"Arepa de maíz con chorizo.", featured:true},
  {cat:"colombianas", section:"Delicias colombianas", name:"Empanada de Carne", price:5, desc:"Empanada colombiana rellena de carne.", featured:true},
  {cat:"colombianas", section:"Delicias colombianas", name:"Empanada de Pollo", price:5, desc:"Empanada colombiana rellena de pollo."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Empanada de Queso", price:5, desc:"Masa de maíz rellena de queso."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Maduro con Queso", price:8, desc:"Plátano maduro con queso."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arepa con Carne Desmechada", price:13, desc:"Arepa de maíz rellena de carne desmechada."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arepa con Pollo Desmechado", price:13, desc:"Arepa de maíz rellena de pollo desmechado."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arepa Mixta con Carne Desmechada", price:13, desc:"Arepa de maíz rellena con carne desmechada."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arepa con Huevo Perico", price:8, desc:"Arepa de maíz con huevo perico, al estilo colombiano."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arepa con Queso", price:8, desc:"Arepa de maíz con queso."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arepa con Chicharrón", price:12, desc:"Arepa de maíz con chicharrón crujiente."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Arroz con Huevo Perico", price:9, desc:"Arroz acompañado de huevo perico."},
  {cat:"colombianas", section:"Delicias colombianas", name:"Guacamole con Patata", price:11, desc:"Guacamole acompañado de patata."},

  // ===================== PLATOS COMBINADOS =====================
  {cat:"combinados", section:"Platos combinados", name:"Chuleta Valluna", price:16, desc:"Arroz, patacón y ensalada.", featured:true},
  {cat:"combinados", section:"Platos combinados", name:"Bandeja Paisa", price:26, desc:"Clásico plato colombiano. Consulta disponibilidad y composición actual.", featured:true},
  {cat:"combinados", section:"Platos combinados", name:"Cinta de Lomo", price:14, desc:"Huevos y patatas."},
  {cat:"combinados", section:"Platos combinados", name:"Filete de Pollo", price:14, desc:"Huevos y patatas."},
  {cat:"combinados", section:"Platos combinados", name:"Filete de Ternera", price:14, desc:"Huevos y patatas."},
  {cat:"combinados", section:"Platos combinados", name:"Chicharrón", price:16, desc:"Arroz, patacón y ensalada."},
  {cat:"combinados", section:"Platos combinados", name:"Dorada", price:18, desc:"Arroz, patacón y ensalada."},

  // ===================== HAMBURGUESAS =====================
  {cat:"combinados", section:"Hamburguesas", name:"Hamburguesa Sencilla", price:12, desc:"Carne, lechuga, tomate y queso."},
  {cat:"combinados", section:"Hamburguesas", name:"Hamburguesa de la Casa de Carne", price:18, desc:"Carne, lechuga, tomate, queso, bacon, jamón y huevo."},
  {cat:"combinados", section:"Hamburguesas", name:"Hamburguesa de la Casa de Pollo", price:18, desc:"Pollo, lechuga, tomate, queso, bacon, jamón y huevo."},

  // ===================== BOCADILLOS =====================
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo de Jamón Serrano", price:8, desc:"Pan y jamón serrano."},
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo de Panceta", price:9, desc:"Pan y panceta."},
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo de Bacon", price:9, desc:"Pan y bacon."},
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo de Cinta de Lomo", price:9, desc:"Pan y cinta de lomo."},
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo de Pechuga de Pollo", price:9, desc:"Pan y pechuga de pollo."},
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo Pepito de Ternera", price:9, desc:"Pan y filete de ternera."},
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo de Atún", price:9, desc:"Pan y atún."},
  {cat:"combinados", section:"Bocadillos", name:"Bocadillo de Tortilla Francesa", price:8, desc:"Pan y tortilla francesa de huevo."},

  // ===================== SÁNDWICHES =====================
  {cat:"combinados", section:"Sándwiches", name:"Sándwich Mixto", price:5, desc:"Jamón cocido y queso."},
  {cat:"combinados", section:"Sándwiches", name:"Sándwich con Huevo", price:7, desc:"Sándwich con huevo."},
  {cat:"combinados", section:"Sándwiches", name:"Sándwich Vegetal", price:7, desc:"Pan y verduras."},

  // ===================== RACIONES =====================
  {cat:"raciones", section:"Raciones", name:"Torreznos", price:19, desc:"Trozos de panceta de cerdo con corteza crujiente.", featured:true},
  {cat:"raciones", section:"Raciones", name:"Calamares", price:17, desc:"Ración de calamares."},
  {cat:"raciones", section:"Raciones", name:"Sepia a la Plancha", price:19, desc:"Sepia a la plancha."},
  {cat:"raciones", section:"Raciones", name:"Alitas de Pollo", price:19, desc:"Ración de alitas de pollo con hueso."},
  {cat:"raciones", section:"Raciones", name:"Croquetas de Jamón", price:14, desc:"Bechamel y jamón, rebozadas y crujientes por fuera, cremosas por dentro."},
  {cat:"raciones", section:"Raciones", name:"Fingers de Pollo", price:16, desc:"Tiras de pollo rebozadas."},
  {cat:"raciones", section:"Raciones", name:"Patatas Bravas", price:9, desc:"Patatas fritas con salsa brava."},
  {cat:"raciones", section:"Raciones", name:"Boquerones Fritos", price:14, desc:"Boquerones fritos, dorados y crujientes."},
  {cat:"raciones", section:"Raciones", name:"Chopitos", price:17, desc:"Calamares pequeños fritos."},
  {cat:"raciones", section:"Raciones", name:"Tequeños", price:14, desc:"Palitos de masa rellenos de queso."},
  {cat:"raciones", section:"Raciones", name:"Lacón a la Gallega", price:17, desc:"Ración de lacón en lonchas al estilo gallego."},
  {cat:"raciones", section:"Raciones", name:"Gambones a la Plancha", price:19, desc:"Gambones a la plancha, dorados por fuera."},
  {cat:"raciones", section:"Raciones", name:"Oreja a la Plancha", price:17, desc:"Oreja de cerdo a la plancha, cortada en trozos."},
  {cat:"raciones", section:"Raciones", name:"Huevos Rotos", price:14, desc:"Huevos rotos."},

  // ===================== ENSALADAS =====================
  {cat:"raciones", section:"Ensaladas", name:"Ensalada Mixta", price:14, desc:"Ensalada mixta."},
  {cat:"raciones", section:"Ensaladas", name:"Ensalada César", price:16, desc:"Lechuga y salsa César."},
  {cat:"raciones", section:"Ensaladas", name:"Ensalada La Patrona", price:16, desc:"Lechuga, huevo, pollo, aguacate, maíz dulce, jamón, tomate, nueces y pimiento."},

  // ===================== DESAYUNOS =====================
  {cat:"desayunos", section:"Desayunos", name:"Calentado Colombiano", price:12, desc:"Desayuno colombiano tradicional, mezcla recalentada.", featured:true},
  {cat:"desayunos", section:"Desayunos", name:"Churro y Café", price:5, desc:"Churro frito y taza de café."},
  {cat:"desayunos", section:"Desayunos", name:"Porra y Café", price:5, desc:"Porra madrileña con café."},
  {cat:"desayunos", section:"Desayunos", name:"Desayuno Americano", price:10, desc:"Huevos fritos con jamón."},
  {cat:"desayunos", section:"Desayunos", name:"Pincho de Tortilla", price:4, desc:"Huevos y patatas."},
  {cat:"desayunos", section:"Desayunos", name:"Zumo de Naranja", price:4, desc:"Zumo de naranja, cítrico y refrescante."},
  {cat:"desayunos", section:"Desayunos", name:"Tostadas con Aceite y Tomate", price:5, desc:"Pan tostado, aceite y tomate."},
  {cat:"desayunos", section:"Desayunos", name:"Tostadas de Atún", price:6, desc:"Tostadas con atún."},
  {cat:"desayunos", section:"Desayunos", name:"Tostadas de Jamón", price:6, desc:"Tostadas crujientes con lonchas de jamón."},

  // ===================== BEBIDAS COLOMBIANAS =====================
  {cat:"bebidas", section:"Bebidas colombianas", name:"Colombiana", price:5, desc:"Refresco colombiano."},
  {cat:"bebidas", section:"Bebidas colombianas", name:"Uva", price:5, desc:"Bebida colombiana sabor uva."},
  {cat:"bebidas", section:"Bebidas colombianas", name:"Manzana", price:5, desc:"Bebida colombiana sabor manzana."},
  {cat:"bebidas", section:"Bebidas colombianas", name:"Pony Malta", price:5, desc:"Bebida de malta."},
  {cat:"bebidas", section:"Bebidas colombianas", name:"Agua Panela", price:5, desc:"Panela disuelta en agua."},

  // ===================== BATIDOS =====================
  {cat:"bebidas", section:"Batidos naturales", name:"Batido Natural de Mora", price:7, desc:"Batido natural de mora."},
  {cat:"bebidas", section:"Batidos naturales", name:"Batido Natural de Fresa", price:7, desc:"Batido natural de fresa."},
  {cat:"bebidas", section:"Batidos naturales", name:"Batido Natural de Maracuyá", price:7, desc:"Batido natural de maracuyá, fruta tropical."},
  {cat:"bebidas", section:"Batidos naturales", name:"Batido Natural de Mango", price:7, desc:"Batido natural de mango."},
  {cat:"bebidas", section:"Batidos naturales", name:"Batido Natural de Guanábana", price:7, desc:"Pulpa de guanábana batida."},
  {cat:"bebidas", section:"Batidos naturales", name:"Batido Natural de Lulo", price:7, desc:"Batido natural de lulo, fruta tropical."},
  {cat:"bebidas", section:"Batidos naturales", name:"Batido Natural de Milo Frío", price:7, desc:"Batido de Milo frío, sabor a chocolate."},

  // ===================== ALCOHÓLICAS =====================
  {cat:"bebidas", section:"Bebidas alcohólicas", name:"Tercio", price:5, desc:"Cerveza en tercio."},
  {cat:"bebidas", section:"Bebidas alcohólicas", name:"Cerveza Aguila", price:5, desc:"Cerveza Aguila."},
  {cat:"bebidas", section:"Bebidas alcohólicas", name:"Cerveza · Cubo", price:15, desc:"Cubo de cerveza."},
  {cat:"bebidas", section:"Bebidas alcohólicas", name:"Aguardiente · Botella", price:50, desc:"Botella de aguardiente."}
];

const menuGrid = document.getElementById("menuGrid");
const tabs = [...document.querySelectorAll(".menu-tab")];

function euro(value){
  return `${Number(value).toLocaleString("es-ES",{minimumFractionDigits:0,maximumFractionDigits:2})} €`;
}

function renderMenu(filter="colombianas"){
  const items = filter === "todo" ? carta : carta.filter(item => item.cat === filter);
  const grouped = items.reduce((acc,item)=>{
    (acc[item.section] ||= []).push(item);
    return acc;
  },{});

  menuGrid.innerHTML = Object.entries(grouped).map(([section,items]) => `
    <div class="menu-category"><h3>${section}</h3></div>
    ${items.map(item=>`
      <article class="menu-item">
        <div>
          <h4>${item.name}${item.featured ? ' <span aria-label="Popular">✦</span>' : ''}</h4>
          <p>${item.desc || ""}</p>
        </div>
        <div class="menu-price">${euro(item.price)}</div>
      </article>
    `).join("")}
  `).join("");
}

tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("is-active"));
    tab.classList.add("is-active");
    renderMenu(tab.dataset.filter);
  });
});

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav__links");
toggle?.addEventListener("click",()=>{
  const open = navLinks.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav__links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("is-open")));

document.getElementById("year").textContent = new Date().getFullYear();
renderMenu("colombianas");
