const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const { exec } = require('child_process');
var CronJob = require('cron').CronJob;

const txtFile = path.join('./index.txt');
// fs.readFile(txtFile, (err, data) => {
//   console.log('data ------', data);
//   console.log('121 ------', 121);
// });

function autoActionCommands(commitMessage) {
  return ['git add .', `git commit -m "updata: auto action ${commitMessage}"`, 'git push'];
}

var job = new CronJob(
  '*/10 * * * * *',
  function () {
    const nowDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    fs.appendFile(txtFile, `${nowDate}\t`, (err, data) => {
      if (err) return console.log('写入文件失败 ------', err);

      autoActionCommands(nowDate).forEach((command) => {
        exec(command, (err, stdout, stderr) => {
          if (err) console.log('自动提交执行失败 ------', err, stderr);
          else console.log('自动提交执行成功 ------', stdout);
        });
      });
    });
  },
  null,
  true,
  'Asia/Shanghai',
);

job.start();
