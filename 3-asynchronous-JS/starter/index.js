const fs = require('fs');
const superagent = require('superagent');
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
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

const getDogPic = async () => {
  try{
  const data = await readFilePro(`${__dirname}/dog.txt`)
  console.log(`Breed: ${data}`);
  console.log('hello world')

  const res1Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  const res2Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  const res3Pro = superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  const all = await Promise.all([res1Pro, res2Pro, res3Pro])
  const imgs = all.map(el => el.body.message)
  console.log(imgs);

  const string = await writeFilePro('dog-img.txt', imgs.join('\n'));
  console.log(`saved to file ${string}`);
  } catch (err){

  console.log(err)
  throw(err)
  }
  return '2: Ready 😎'
}

(async() => {
  try{
    console.log('1: will get dog pics')
    const x = await getDogPic()
    console.log(x)
    console.log('3: done getting dog pics')
  }catch(err) {
    console.log('ERROR 💥')
  }
})();


// console.log('1: will get dog pics')
// getDogPic().then(x =>{
//   console.log(x)
//   console.log('3: done getting dog pics')
// } ).catch(err =>{
//   console.log('ERROR 💥')
  
// })
// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);

//     return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then((string) => {
//     console.log(`saved to file ${string}`);
//   })
//   .catch((err) => {
//     console.log(`err.message: ${err}`);
//   });
