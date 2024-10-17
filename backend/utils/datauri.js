import DataUriParser from "datauri/parser.js";

import path from "path";

const getDataUri = (file) => {
  // the file is the path of the file which will be converted and returned
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataUri;
