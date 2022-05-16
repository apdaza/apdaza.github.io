function Punto(x){
	this.images = [$("#comida1")[0],$("#comida2")[0],$("#comida3")[0],$("#comida4")[0]];
	a = aleatorio(0,3);
	this.img = this.images[a];
	this.x = x;
	this.y = 305;

	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img,this.x,this.y);
	}

	this.actualizar = function(accion){
		if(accion=="izquierda"){
			this.x += 10;
		} else if(accion=="derecha"){
			this.x -= 10;
		}
		this.x = (3000 + this.x)%3000;
	}
}
