# Serverless Image Manipulator

Manipulate Image serverlessly

Usage:
Provide the following queries in the url.

- image : Image URL
- mode : Manipulation modes available> resize, crop, quality, brightness, contrast, grayscale, invert, posterize
- quality : Output Image Quality (Optional, defaults to 100)
- height: Output Image Height (Optional, defaults to original height)
- width: Output Image Width (Optional, defaults to original width)
- value: Manipulation mode intensity (Optional, defaults to mode default value)

Example:

Resize image to 100x100

> https://serverless-image-manipulate.now.sh/manipulate-image.jpg?image=https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png&mode=resize&height=100&width=100

Reduce image quality to 50%

> https://serverless-image-manipulate.now.sh/manipulate-image.jpg?image=https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png&mode=quality&value=50

Invert colors

> https://serverless-image-manipulate.now.sh/manipulate-image.jpg?image=https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png&mode=invert

Hosted on Vercel
