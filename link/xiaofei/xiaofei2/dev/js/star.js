// 星星效果
(function() {

	if(!window.addEventListener) return;

	var canvas = document.querySelector("#mycanvas");
	var context = canvas.getContext("2d");
	canvas.height=$("body").height();
	canvas.width=$("body").width();
	console.log(canvas.height,canvas.width)
	var stars = {},
		particleIndex = 0,
		settings = {
			density: 300,
			maxLife: 100,
			groundLevel: canvas.height,
			leftWall: 0,
			rightWall: canvas.width,
			alpha: 0.0,
			maxAlpha: 1
		};

	function resizeCanvas() {
//		canvas.width = 1920;
//		canvas.height = 800;
		settings.rightWall = canvas.width;
		settings.groundLevel = canvas.height;
		//					settings.height = 260 + (canvas.height - 800) / 2;

		redraw();
	}

	resizeCanvas();

	window.addEventListener('resize', resizeCanvas);

	function redraw() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "rgba(0,0,0,0)";
		context.fillRect(0, 0, canvas.width, canvas.height);
	}

	function Star() {
		this.x = Math.floor(Math.random() * canvas.width);
		this.y = Math.floor(Math.random() * canvas.height);

		this.vx = Math.random() * 0.05 + 0.1; // 水平偏移，也是移动速度
		this.vy = Math.random() * 0.05 + 0.1;;
		// 星星的尺寸
		this.particleSize = 1 + (Math.random() + 1 / 4);
		particleIndex++;
		stars[particleIndex] = this;
		this.alpha = 0.0;
		this.maxAlpha = 0.2 + (this.y / canvas.height) * Math.random() * 0.8;
		this.alphaAction = 1;
	}

	Star.prototype.draw = function() {
		// 横坐标移动
		this.x += this.vx;
		// y坐标	
		this.y += this.vy;
		if(this.y > canvas.height) {
			this.y = 0;
		}
		// 透明度慢慢起来
		if(this.alphaAction == 1) {
			if(this.alpha < this.maxAlpha) {
				this.alpha += 0.005;
			} else {
				this.alphaAction = -1;
			}
		} else {
			if(this.alpha > 0.2) {
				this.alpha -= 0.002;
			} else {
				this.alphaAction = 1;
			}
		}

		if(this.x + (this.particleSize * 2) >= settings.rightWall) {
			// x到左侧
			this.x = this.x - settings.rightWall;
		}

		// 绘制星星
		context.beginPath();
		context.fillStyle = "rgba(255,255,255," + this.alpha.toString() + ")";
		context.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}

	function render() {

		redraw();

		// 星星的数目
		// IE下CUP性能有限，数目小
		var length = 100;
		if(!history.pushState) {
			// IE9
			length = 80;
		} else if(document.msHidden != undefined) {
			// IE10+
			length = 80;
		}

		if(Object.keys(stars).length > length) {
			settings.density = 0;
		}

		for(var i = 0; i < settings.density; i++) {
			if(Math.random() > 0.97) {
				new Star();
			}
		}

		// 星星实时移动
		for(var i in stars) {
			stars[i].draw();
		}

		requestAnimationFrame(render);
	}

	if(!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(fn) {
			setTimeout(fn, 17);
		};
	}

	render();

})();