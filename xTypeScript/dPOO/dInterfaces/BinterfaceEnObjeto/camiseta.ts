//Una interface es un contrato, cualquier elemento que la implemente debe respetarla (En este caso se deben crear propiedades).
interface Camiseta { //Definiendo Interface.
    color: string,
    modelo: string,
    marca: string,
    talla: string,
    precio: number,
    material: string
    informacionExtra: InformacionExtra
}

interface InformacionExtra { //Definiendo Interface.
    anchoCintura: number,
    anchoManga: number,
    anchoCuello: number
}

var camiseta: Camiseta = { //Implementando la interfaz en un objeto JSON.
    color: "Amarillo",
    modelo: "BH-340",
    marca: "Nike",
    talla: "XL",
    precio: 20,
    material: "Tela",
    informacionExtra: {
        anchoCintura: 70,
        anchoManga: 20,
        anchoCuello: 35
    }
}

console.log(camiseta);
