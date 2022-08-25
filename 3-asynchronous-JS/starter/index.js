const fs = require('fs');
const superagent = require('superagent');
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    console.log(`hello world ${file}`);
    fs.readFile(file, (err, data) => {
      if (err) reject('could not find file');

      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('could not write file');
      resolve('success');
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then((string) => {
    console.log(`saved to file ${string}`);
  })
  .catch((err) => {
    console.log(`err.message: ${err}`);
  });
