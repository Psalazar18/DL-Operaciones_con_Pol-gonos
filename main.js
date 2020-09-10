var base;
var altura;

// Funcion Constructora del Rectangulo
function Rectangulo (base, altura) {
	this._base = function () {
        return base;
    };
	this._altura = function () {
        return altura;
    };
};
//Metodo Get
Rectangulo.prototype.getBase = function () {
    return this._base();
}
Rectangulo.prototype.getAltura = function () {
    return this._altura();
}
//Metodo Set
Rectangulo.prototype.setBase = function (nuevo_lado1){
    this._base = function () {
        return nuevo_lado1;
    };
}
Rectangulo.prototype.setAltura = function (nuevo_lado2){
    this._altura = function () {
        return nuevo_lado2;
    };
}
//Metodos de Perimetro y Area para la clase Rectangulo
Rectangulo.prototype.calcularPerimetro = function () {
	return 2 * parseInt(this._base()) + parseInt(this._altura());
};
Rectangulo.prototype.calcularArea = function () {
	return this._base() * this._altura();
};

//-------------------------------------------------------------------------------------------
function Triangulo (base, altura) {
	this._base = function () {
        return base;
    };
	this._altura = function () {
        return altura;
    };
};
//Metodo Get
Triangulo.prototype.getBase = function () {
    return this._base();
}
Triangulo.prototype.getAltura = function () {
    return this._altura();
}
//Metodo Set
Triangulo.prototype.setBase = function (nuevo_lado1){
    this._base = function () {
        return nuevo_lado1;
    };
}
Triangulo.prototype.setAltura = function (nuevo_lado2){
    this._altura = function () {
        return nuevo_lado2;
    };
}
//Metodos de Perimetro y Area para la clase Triangulo
Triangulo.prototype.calcularPerimetro = function () {
	return parseInt(this._base()) + 2 * parseInt(this._altura());
};
Triangulo.prototype.calcularArea = function () {
	return (parseInt(this._base()) * parseInt(this._altura())) / 2;
};


document.getElementById("crear").addEventListener("click", ()=>{
	base = document.getElementById("base").value;
	altura = document.getElementById("altura").value;

//Instancias
	var r1 = new Rectangulo(base, altura);
	var t1 = new Triangulo(base, altura);
console.log(base);
	console.log(r1.getBase());
	console.log(r1.getAltura());
	document.getElementById("textR").innerHTML = `El área del Rectángulo es ${r1.calcularArea()} y su Perimetro es ${r1.calcularPerimetro()}`
	document.getElementById("textT").innerHTML = `El área del Triangulo es ${t1.calcularArea()} y su Perimetro es ${t1.calcularPerimetro()}`
	
	console.log(r1.calcularArea());
	console.log(r1.calcularPerimetro());

	event.preventDefault();
});

