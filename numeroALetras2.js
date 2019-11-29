cent = ["","Ciento", "Doscientos","Trescientos", "Cuatrocientos", "Quinientos", "Seiscientos", "Setecientos", "Ochocientos", "Novecientos"];     
dec =  ["", "Diez", "Veinte","Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];     
unidades = ["", "Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve"]; 
diezx =["Diez","Once","Doce","Trece","Catorce","Quince"];
dosx =["Veinte","Veintiuno","Veintidos","Veintitres","Veinticuatro","Veinticinco","Veintiseis","Veintisiete","Veintiocho","Veintinueve"]; 

window.onload = function ingresar(){
	
	var numero = parseInt(prompt("Ingrese un número:","")); 

	document.write("<br>"); 
	document.write('El numero ingresado es '+ NumeroALetras(numero)); 
	document.write("<br>"); 
}

function Unidades(num){

    if(num < 10){
		return unidades[num];
	}else{
		return "";
	} 
}

function Decenas(num){

    var decena = Math.floor(num/10);
    var unidad = num - (decena*10);

	if(decena > 2){
		return DecenasY(dec[decena], unidad);
	}else if(decena == 0){
		return Unidades(unidad)
	}else if(decena == 1){
		if(unidad < 6){
				return diezx[unidad];
			}else{
				return "Dieci" + Unidades(unidad);
			}
	}else if(decena == 2){
		if(unidad == 0){
				return "Veinte";
			}else{
				return "Veinti" + Unidades(unidad);
			}
	}
}

function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
    return strSin + " Y " + Unidades(numUnidades);

    return strSin;
}

function Centenas(num) {
    var centenas = Math.floor(num / 100);
    var decenas = num - (centenas * 100);


	if(centenas == 1 && decenas <= 0){
		return "Cien";
	}else if(centenas < 10 && centenas != 0){
		return cent[centenas] + Decenas(decenas);
	}else{
		return Decenas(decenas);
	}    
}

function singularOPlural(num, divisor, strSingular, strPlural) {
    var cientos = Math.floor(num / divisor);
    var resto = num - (cientos * divisor);

    var letras = "";

    if (cientos > 0)
        if (cientos > 1)
            letras = Centenas(cientos) + " " + strPlural;
        else
            letras = strSingular;

    if (resto > 0)
        letras += "";

    return letras;
}

function Miles(num) {
    var divisor = 1000;
    var cientos = Math.floor(num / divisor);
    var resto = num - (cientos * divisor);

    var strMiles = singularOPlural(num, divisor, "Mil", "Mil");
    var strCentenas = Centenas(resto);

    if(strMiles == "")
        return strCentenas;

    return strMiles + " " + strCentenas;
}

function Millones(num) {
    var divisor = 1000000;
    var cientos = Math.floor(num / divisor);
    var resto = num - (cientos * divisor);

    var millones = singularOPlural(num, divisor, "Un Millon", "Millones");
    var strMiles = Miles(resto);

    if(millones == "")
        return strMiles;

    return millones + " " + strMiles;
}

function NumeroALetras(num) {
	
    var numero = num;
    var enteros = Math.floor(num);

    if(enteros == 0)
        return "Cero";
    if (enteros == 1)
        return Millones(enteros)
    else
        return Millones(enteros);
}