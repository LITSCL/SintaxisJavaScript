export class Zapatilla {
/*
  public nombre: string;
  public marca: string;
  public color: string;
  public precio: number;
  public stock: boolean;

  constructor(nombre: string, marca: string, color: string, precio: number, stock: boolean) {
      this.nombre = nombre;
      this.marca = marca;
      this.color = color;
      this.precio = precio;
      this.stock = stock;
  }
*/

  //Esta es otra forma de colocar los atributos y crear el constructor de una clase (Mucho menos código).
  constructor(
    public nombre: string,
    public marca: string,
    public color: string,
    public precio: number,
    public stock: boolean
  ) { }

}
