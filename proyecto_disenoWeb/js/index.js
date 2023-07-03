// --- Comienza el Menú de Navegación Sticky ---
let nav = document.querySelector('.navBar');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}
// --- Termina el Menú de Navegación Sticky ---

// --- Comienza el SideBar del Menú de Navegación ---
function clickEventos() {
        let cerrar = document.getElementById('icon-close');
        let abrir = document.getElementById('openMenu');
        cerrar.addEventListener('click', cerrarModal);
        abrir.addEventListener('click', abrirModal);
    }

    function cerrarModal() {
        let sidebar = document.getElementById('sideBar');
        sidebar.style.width = '0';
    }

    function abrirModal() {
        let sidebar = document.getElementById('sideBar');
        sidebar.style.width = '100%';
    }

window.onload = clickEventos;
// --- Termina el SideBar del Menú de Navegación ---

// Empieza la Animación del Fondo de Pantalla (Slider) //
let slideImg = document.getElementById('slideImg');

let images = new Array(
    "/img/fondo2.png",
    "/img/fondo5.jpg",
    "/img/fondo6.jpg"
);

let len = images.length;
let i = 0;

function slider() {
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}

window.onload = slider();
// Termina la Animación del Fondo de Pantalla (Slider) //


// Comienza Las Cards de Nuestros Productos //
let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"card1",
    name: "Ate o Dulce de Membrillo",
    price: 25,
    desc: "El ate es muy tradicional en Michoacán. La creación de este riquísimo dulce surgió gracias a las monjas en 1595 cuando estaban preparando una jalea a base de pulpa de fruta.",
    img: "/img/img1.jpg"
},
{
    id:"card2",
    name: "Las Alegrías",
    price: 20,
    desc: "Fueron de los primeros dulces que existieron en México, ya que servían como ofrenda para venerar a los dioses. Son una mezcla de amaranto, pasas, pepitas y piloncillo.",
    img: "/img/img2.jpg"
},
{
    id:"card3",
    name: "Palanquetas",
    price: 15,
    desc: "La palanqueta es una deliciosa barra de cacahuate pelado y sin cáscara mezclado con jarabe de piloncillo, su textura es muy crujiente y de un sabor increíble.",
    img: "/img/img3.jpg"
},
{
    id:"card4",
    name: "Cocadas",
    price: 22,
    desc: "Hecho de ralladura de coco maduro, agua, leche fresca, canela y azúcar y para finalizar se hornean dándoles ese toque crujiente. Las puedes encontrar de color naranjas y blancas.",
    img: "/img/img4.jpg"
},
{
    id:"card5",
    name: "Tortitas de Santa Clara",
    price: 18,
    desc: "Son galletas de vainilla cubiertas con una mezcla de piloncillo de pepita. Elaboradas desde hace más de 400 años por las monjas que habitaban en los conventos.",
    img: "/img/img5.jpg"
},
{
    id:"card6",
    name: "Borrachitos",
    price: 21,
    desc: "Este tipo de dulce se elabora con fécula de maíz, azúcar, saborizante natural y algún licor (tequila, rompope o coñac), de ahí proviene su nombre. Su origen fue una forma de agradecimiento a los benefactores de la iglesia.",
    img: "/img/img6.jpg"
},
{
    id:"card7",
    name: "Mazapán",
    price: 15,
    desc: "Hecho con almendras, azúcar y huevo. Originario de España que después se mexicanizó y se hizo popular en 1950, se cree que fue inventado en el convento de San Clemente de Toledo en 1212.",
    img: "/img/img8.jpg"
}, 
{
    id:"card8",
    name: "Muéganos",
    price: 18,
    desc: "Declarados patrimonio cultural y gastronómico de Tlaxcala, convirtiéndolos en un dulce incomparable. Son panecillos rectangulares de harina, anís, canela, horneados y bañados de piloncillo.",
    img: "/img/img9.jpg"
},
{
    id:"card9",
    name: "Pepitorias",
    price: 20,
    desc: "Elaboradas con harina de trigo, agua, miel de piloncillo y pepitas de calabaza. Estas deliciosas obleas suelen ser de colores muy llamativos como rosa, azul, verde, blanco y amarillo.",
    img: "/img/img10.jpg"
},
{
    id:"card10",
    name: "Macarrones de leche",
    price: 25,
    desc: "Los macarrones son unos dulces de leche originarios de Puebla, que se disfrutan comiendo poco a poco pues su sabor tan dulce llega a empalagar a muchos. Este dulce se derrite en la boca.",
    img: "/img/img11.jpg"
},
{
    id:"card11",
    name: "Tarugos",
    price: 15,
    desc: "Pulpa de tamarindo mezclada con azúcar y jugo de limón. Deliciosos dulces picositos envueltos en chile p. Pero si no te gusta lo picoso, existe su versión dulce, que se espolvorea de azúcar.",
    img: "/img/img12.jpg"
},
{
    id:"card12",
    name: "Nueces garapiñadas",
    price: 19,
    desc: "Los cacahuates garapiñados son una delicia originaria de Morelos, se elaboran a base de cacahuates pelados cubiertos de caramelo y en algunos casos, se les puede agregar ajonjolí.",
    img: "/img/img13.jpg"
},
{
    id:"card13",
    name: "Glorias",
    price: 24,
    desc: "Elaboradas con solo leche quemada y nuez, envueltas en papel celofán rojo. Listas para ser disfrutadas en el momento, estos ricos dulces son originarios de la región de Linares Nuevo León.",
    img: "/img/img14.jpg"
},
{
    id:"card14",
    name: "Frutas Cristalizadas",
    price: 18,
    desc: "Método tradicional de Xochimilco,suele consumirse en épocas navideñas o Día de muertos. La fruta se sumerge en agua con cal por un día y después en piloncillo.",
    img: "/img/img16.jpg"
},
{
    id:"card15",
    name: "Merengues",
    price: 25,
    desc: "La elaboración de este dulce típico de México es a base de claras de huevo, azúcar, un poco colorante y algunos les ponen un toque de pulque.",
    img: "/img/img17.jpg"
},
{
    id:"card16",
    name: "Camotes",
    price: 18,
    desc: "A causa de una travesura en un convento fue que se dio origen a la mezcla que hoy conocemos como camote poblano y que puedes encontrar de varios sabores como fresa, piña o naranja.",
    img: "/img/img18.jpg"
}];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, desc, img} = x;
        return `
        <div id=product-id-${id} class="item">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h3>$ ${price}</h3>
                </div>
                <a class="btn-buyProduct" href="#"><button type="button" class="btn-buy">Comprar</button></a>
            </div>
        </div>
    `
    }).join(""));
}

generateShop();
// Termina Las Cards de Nuestros Productos //