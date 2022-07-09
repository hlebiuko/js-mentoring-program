/**
 * 1. You need to write a parser, which takes the "./test.json" file
 * and will create a new JSON file with the name "./parsed.json" with the structure:
 * [
 *  {
 *    "docId": "http://doc.epam.com/077b1523-56f0-492a-b954-1269e3acc191"
 *  },
 *  {
 *    "docId": "http://doc.epam.com/077d3a4c-a2fe-4ab9-9046-89c0ce5c5b38"
 *  }
 *  .....
 * ]
 * where 077b1523-56f0-492a-b954-1269e3acc191 - is the value of the name attribute from the "./test.json" file
 * Please NOTE, that you should omit the ".html" extension
 *
 * Use the promise version of FS module.
 * DOCS:
 * 		Callback example: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_promise_example
 * 		fs.readFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fspromises_readfile_path_options
 * 		fs.writeFile: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fspromises_writefile_file_data_options
 *
 * 2. Check yourself by running "npm run test:nodejs"
 *
 */
 const fs = require('fs/promises');

 const jsonParser = async () => {
   const data = await fs.readFile("./tasks/nodeJs/parser/test.json", "utf8");
   const json = JSON.parse(data);
 
   const parsedData = [];
   await json.list.entries.forEach((item, index) => {
       parsedData.push({ docId: `http://doc.epam.com/${item?.entry.id.split(".html")[0]}` });
   });
 
   await fs.writeFile('./tasks/nodeJs/parser/parsed.json', `${JSON.stringify(parsedData)}`);
 };
 
 jsonParser();
 
 module.exports = {
   jsonParser,
 };