import { IncomingMessage } from "http";
import { parse } from "url";

export function parseReqs(req: IncomingMessage) {
  const { query = {} } = parse(req.url || "", true);
  const { image } = query;

  if (!image) {
    throw new Error("Provide 'image' query in url");
  }

  if (Array.isArray(image) || !image) {
    throw new Error("Image must be string");
  }

  const parsedReqs: ParsedReqs = {
    image,
  };

  return parsedReqs;
}
