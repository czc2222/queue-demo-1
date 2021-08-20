const divScreen = document.querySelector("#screen");
const btnGetNumber = document.querySelector("#getButton");
const btnPutNumber = document.querySelector("#putButton");
const spanLastNumber = document.querySelector("#lastNumber");
const spanQueue = document.querySelector("#queue");
let n = 0;
let queue = [];
btnGetNumber.onclick = () => {
  n += 1;
  spanLastNumber.innerText = n;
  queue.push.call(queue,n);
  spanQueue.innerText = JSON.stringify(queue); //数组变成字符串
};
btnPutNumber.onclick = () => {
  if (queue.length === 0) {
    alert("没客人了");//弹出弹框
    return;
  } //避免undefined
  const i = queue.shift.call(queue); //取出第一个叫号
  divScreen.innerText = `请${i}号就餐`;
  spanQueue.innerText = JSON.stringify(queue); //更新当前队列
};
