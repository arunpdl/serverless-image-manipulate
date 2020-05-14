import Jimp from "jimp";

export async function manipulateImage(parsedReqs: ParsedReqs) {
  const image = await Jimp.read(parsedReqs.image);

  switch (parsedReqs.mode) {
    case "resize":
      await image.resize(
        parsedReqs.width || image.bitmap.width,
        parsedReqs.height || image.bitmap.height
      );
      break;

    case "crop":
      await image.autocrop();
      break;

    case "quality":
      await image.quality(parsedReqs.value || 100);
      break;

    case "brightness":
      await image.brightness(parsedReqs.value || 0);
      break;

    case "contrast":
      await image.contrast(parsedReqs.value || 0);
      break;

    case "grayscale":
      await image.grayscale();
      break;

    case "greyscale":
      await image.greyscale();
      break;

    case "invert":
      await image.invert();
      break;

    case "posterize":
      await image.posterize(parsedReqs.value || 1);
      break;
  }
  const finalImage = await image.getBufferAsync(Jimp.MIME_JPEG);

  return finalImage;
}
