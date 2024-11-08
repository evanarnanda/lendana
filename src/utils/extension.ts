import { fileTypeFromBuffer } from "file-type";

const isMetaDataImg = async (values: ArrayBuffer) => {
  // Read file content as array buffer
  const buffer = new Uint8Array(values);

  // Check if the file is an image based on its binary content
  const type = await fileTypeFromBuffer(buffer);
  if (!type || !type.mime.startsWith("image/")) {
    return false;
  }
  return true;
};

export { isMetaDataImg };