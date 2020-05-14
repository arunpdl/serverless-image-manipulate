import Jimp from "jimp";

export async function manipulateImage(parsedReqs: ParsedReqs) {
  const image = await Jimp.read(parsedReqs.image);
  await image.resize(150, 150);
  const finalImage = await image.getBufferAsync(Jimp.MIME_JPEG);

  return finalImage;
}
