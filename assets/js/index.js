const propiedades_ventas = [
    {
        nombre:"Apartamento de Lujo en zona Exclusiva",
		src:"../img/propiedad_Ven_1.png",
		descripcion:"Este apartamento de lujo esta ubicado en una exclusiva zona residencial",
		ubicacion:"123 Luxury Lane, Prestige Suburb, CA 45678",
		habitaciones:4,
        banos: 4,
		costo:5000,
		smoke:false,
		pets:false
    },
    {
        nombre:"Apartamento acogedor en la Montañas",
		src:"../img/propiedad_Ven_2.png",
		descripcion:"Este apartamento acogedor está situado en lo alto de una montaña con impresionante vista",
		ubicacion:"789 Mountain Road, Summit Peaks, CA 23456",
		habitaciones:2,
        banos: 1,
		costo:1200,
		smoke:true,
		pets:true
    },
    {
        nombre:"Penthouse de lujo con terraza panorámica",
		src:"../img/propiedad_Ven_3.png",
		descripcion:"Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
		ubicacion:"567 Skyline Avenue, Skyview City, CA 56789",
		habitaciones:3,
        banos: 3,
		costo:4500,
		smoke:false,
		pets:true
    }
]

const propiedades_alquiler = [
    {
        nombre:"Apartamento en el centro de la ciudad",
		src:"../img/propiedad_Arr_1.png",
		descripcion:"Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
		ubicacion:"123 Main Street, Anytown, CA 91234",
		habitaciones:2,
        banos: 2,
		costo:2000,
		smoke:false,
		pets:true
    },
    {
        nombre:"Apartamento luminoso con vista al mar",
		src:"../img/propiedad_Arr_2.png",
		descripcion:"Este hermoso apartamento ofrece una vista impresionante al mar",
		ubicacion:"456 Ocean Avenue, Seaside Town, CA 56789",
		habitaciones:3,
        banos: 3,
		costo:2500,
		smoke:true,
		pets:true
    },
    {
        nombre:"Condominio moderno en zona Resindencial",
		src:"../img/propiedad_Arr_3.png",
		descripcion:"Este elegante condominio moderno esta ubicado en una tranquila zona residencial",
		ubicacion:"123 Main Street, Anytown, CA 91234",
		habitaciones:2,
        banos: 2,
		costo:2200,
		smoke:false,
		pets:false
    }
]


function mostrarPropiedad(tipoPropiedad){

    console.log('entre...')

    console.log('entre...' + tipoPropiedad)

    let textoListaVenta="";
    let textoListaAlquiler="";

    const ventas = document.querySelector('#venta');
    const alquiler = document.querySelector('#alquiler');

    if(tipoPropiedad === "ventas"){

        for(let propiedadVenta of propiedades_ventas){
        textoListaVenta += `
        <div class="card">
              <img
                src=${propiedadVenta.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedadVenta.nombre}
                </h5>
                <p class="card-text">
                  ${propiedadVenta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedadVenta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedadVenta.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}</p>`
                if(propiedadVenta.smoke){
                    //console.log('smoke ' + propiedadVenta.smoke);
                `<p class="text-success">
                  <i class="fas fa-smoking-ban"></i> ${propiedadVenta.smoke}
                </p>`
                }else{
                `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${propiedadVenta.smoke}
                </p> `
                }
                if(propiedadVenta.pets){
                    //console.log('pets '+propiedadVenta.pets)
                `<p class="text-success">
                  <i class="fa-solid fa-ban"></i> ${propiedadVenta.pets}
                </p>`
                }else{
                `<p class="text-danger">
                  <i class="fa-solid fa-ban"></i> ${propiedadVenta.pets}
                </p>` 
                }
              `</div>
            </div>`;
    }
    }else if(tipoPropiedad === "Alquiler"){

        for(let propiedadAlquiler of propiedades_alquiler){
        textoListaAlquiler += `
        <div class="card">
              <img
                src=${propiedadAlquiler.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedadAlquiler.nombre}
                </h5>
                <p class="card-text">
                  ${propiedadAlquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedadAlquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedadAlquiler.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadAlquiler.costo}</p>`
                if(propiedadAlquiler.smoke){
                    //console.log('smoke ' + propiedadAlquiler.smoke);
                `<p class="text-success">
                  <i class="fas fa-smoking-ban"></i> ${propiedadAlquiler.smoke}
                </p>`
                }else{
                `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> ${propiedadAlquiler.smoke}
                </p>`
                }
                if(propiedadAlquiler.pets){
                    //console.log('pets ' + propiedadAlquiler.pets);
                `<p class="text-success">
                  <i class="fas fa-paw"></i> ${propiedadAlquiler.pets}
                </p>`
                }else{
                `<p class="text-danger">
                  <i class="fas fa-paw"></i> ${propiedadAlquiler.pets}
                </p>`
                }
              `</div>
            </div>`;
    }
    }else{
        console.log("error");
    }

    
    ventas.innerHTML = textoListaVenta;
    alquiler.innerHTML = textoListaAlquiler;

}