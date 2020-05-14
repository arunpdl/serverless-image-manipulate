import { IncomingMessage, ServerResponse } from "http";
// import { writeTempFile } from "./file";
import { parseReqs } from "./parser";
import { manipulateImage } from "./manipulator";
// const isDev = process.env.NOW_REGION === "dev1";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const parsedReqs = parseReqs(req);

    const manipulatedImage = await manipulateImage(parsedReqs);

    res.statusCode === 200;
    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader(
      "Cache-Control",
      "public,immutable,no-transform,max-age=21600,s-max-age=21600"
    );
    res.end(manipulatedImage);
  } catch (err) {
    res.statusCode === 500;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Internal Server Error</h1><p>${err}</p>`);
    console.error(err);
  }
}
