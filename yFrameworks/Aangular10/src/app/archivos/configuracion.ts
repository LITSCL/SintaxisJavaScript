interface Configuracion {
  title: string,
  color: string,
  background: string
}

export var configuracion: Configuracion = { //Esta variable se esta exportando (Puede ser utilizada en otros archivos).
  title: "Titulo del archivo configuracion.ts",
  color: "green",
  background: "gray"
};
