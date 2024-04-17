// Define la clase base para todos los animales
class Animal {
  // Constructor para inicializar las propiedades comunes de los animales
  constructor(nombre, edad, img, comentarios, sonido) {
      this._nombre = nombre; // Nombre del animal
      this._edad = edad; // Edad del animal
      this._img = img; // URL de la imagen del animal
      this._comentarios = comentarios; // Comentarios sobre el animal
      this._sonido = sonido; // Sonido del animal
  }

  // Getter para obtener el nombre del animal
  get nombre() {
      return this._nombre;
  }

  // Getter para obtener la edad del animal
  get edad() {
      return this._edad;
  }

  // Getter para obtener la URL de la imagen del animal
  get img() {
      return this._img;
  }

  // Getter para obtener los comentarios sobre el animal
  get comentarios() {
      return this._comentarios;
  }

  // Setter para establecer los comentarios sobre el animal
  set comentarios(comentarios) {
      this._comentarios = comentarios;
  }
};

// Define la clase para el León, que hereda de la clase Animal
class Leon extends Animal {
  // Constructor para inicializar las propiedades del León
  constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal
  }

  // Método para que el León pueda rugir
  Rugir() {
      return this._sonido; // Devuelve el sonido del León
  }
}

// Define la clase para el Lobo, que hereda de la clase Animal
class Lobo extends Animal {
  // Constructor para inicializar las propiedades del Lobo
  constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal
  }

  // Método para que el Lobo pueda aullar
  Aullar() {
      return this._sonido; // Devuelve el sonido del Lobo
  }
}

// Define la clase para el Oso, que hereda de la clase Animal
class Oso extends Animal {
  // Constructor para inicializar las propiedades del Oso
  constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal
  }

  // Método para que el Oso pueda gruñir
  Gruñir() {
      return this._sonido; // Devuelve el sonido del Oso
  }
}

// Define la clase para la Serpiente, que hereda de la clase Animal
class Serpiente extends Animal {
  // Constructor para inicializar las propiedades de la Serpiente
  constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal
  }

  // Método para que la Serpiente pueda sisear
  Sisear() {
      return this._sonido; // Devuelve el sonido de la Serpiente
  }
}

// Define la clase para el Águila, que hereda de la clase Animal
class Aguila extends Animal {
  // Constructor para inicializar las propiedades del Águila
  constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal
  }

  // Método para que el Águila pueda chillar
  Chillar() {
      return this._sonido; // Devuelve el sonido del Águila
  }
};

// Exporta todas las clases para que puedan ser utilizadas en otros archivos
export { Aguila, Serpiente, Oso, Lobo, Leon };
