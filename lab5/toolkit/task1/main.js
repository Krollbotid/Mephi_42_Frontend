const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

const rectangle = new PIXI.Graphics();
rectangle.beginFill(0xFF0000);
rectangle.drawRect(0, 0, 100, 100);
rectangle.endFill();
rectangle.x = 200;
rectangle.y = 150;

app.stage.addChild(rectangle);

app.ticker.add(() => {
    rectangle.rotation += 0.01;
});