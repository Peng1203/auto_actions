const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
var CronJob = require('cron').CronJob;

const txtFile = path.join('./index.txt');
// fs.readFile(txtFile, (err, data) => {
//   console.log('data ------', data);
//   console.log('121 ------', 121);
// });

var job = new CronJob(
  '* * */4 * * *',
  function () {
    fs.appendFile(txtFile, `${dayjs().format('YYYY-MM-DD HH:mm:ss')}\t\t`, (err, data) => {
      console.log('err ------', err);
      console.log('data ------', data);
    });
  },
  null,
  true,
  'Asia/Shanghai',
);

job.start();
