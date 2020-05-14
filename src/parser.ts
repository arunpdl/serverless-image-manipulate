import { IncomingMessage } from "http";
import { parse } from "url";

export function parseReqs(req: IncomingMessage) {
  const { query = {} } = parse(req.url || "", true);
  const { image, mode, height, width, value } = query;

  if (!image) {
    throw new Error("Provide 'image' query in url");
  }

  if (Array.isArray(image)) {
    throw new Error("Image must be string");
  }

  if (!mode) {
    throw new Error("Provide 'mode' query in url");
  }

  if (Array.isArray(mode)) {
    throw new Error("Mode must be string");
  }

  if (Array.isArray(height)) {
    throw new Error("Height must be number");
  }

  if (Array.isArray(width)) {
    throw new Error("Width must be number");
  }

  if (Array.isArray(value)) {
    throw new Error("Value must be number");
  }

  const parsedReqs: ParsedReqs = {
    image,
    mode,
    ...(height && { height: parseInt(height) }),
    ...(width && { height: parseInt(width) }),
    ...(value && { value: parseInt(value) }),
  };

  return parsedReqs;
}
