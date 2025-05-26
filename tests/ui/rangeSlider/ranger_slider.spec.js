import { test, expect } from '@playwright/test';
test('Mover slider al 20% con el mouse', async ({ page }) => {
    await page.goto('https://qaplayground.dev/apps/range-slider/');

    await page.waitForSelector('img[src="emojis/emoji-1.png"]');
  const slider = await page.locator('input[type="range"]');
  const boundingBox = await slider.boundingBox();

  if (boundingBox) {
    const { x, y, width, height } = boundingBox;

    // Calculamos la posición del 20%
    const porcentaje = 0.20;
    const offsetX = width * porcentaje;

    // Movemos el mouse al centro vertical del slider y al 20% horizontal
    await page.mouse.move(x + 1, y + height / 2); // mover al borde izquierdo
    await page.mouse.down();                     // presionar click
    await page.mouse.move(x + offsetX, y + height / 2, { steps: 10 }); // arrastrar
    await page.mouse.up();                       // soltar click
  }
 
});