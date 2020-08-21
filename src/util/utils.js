import axios from './axios';

export function format(date, format){
  var v = "";
  if (typeof date == "string" || typeof date != "object") {
    return;
  }
  var year  = date.getFullYear();
  var month  = date.getMonth()+1;
  var day   = date.getDate();
  var hour  = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var weekDay = date.getDay();
  var ms   = date.getMilliseconds();
  var weekDayString = "";

  if (weekDay == 1) {
    weekDayString = "星期一";
  } else if (weekDay == 2) {
    weekDayString = "星期二";
  } else if (weekDay == 3) {
    weekDayString = "星期三";
  } else if (weekDay == 4) {
    weekDayString = "星期四";
  } else if (weekDay == 5) {
    weekDayString = "星期五";
  } else if (weekDay == 6) {
    weekDayString = "星期六";
  } else if (weekDay == 7) {
    weekDayString = "星期日";
  }

  v = format;
  //Year
  v = v.replace(/yyyy/g, year);
  v = v.replace(/YYYY/g, year);
  v = v.replace(/yy/g, (year+"").substring(2,4));
  v = v.replace(/YY/g, (year+"").substring(2,4));

  //Month
  var monthStr = ("0"+month);
  v = v.replace(/MM/g, monthStr.substring(monthStr.length-2));

  //Day
  var dayStr = ("0"+day);
  v = v.replace(/dd/g, dayStr.substring(dayStr.length-2));

  //hour
  var hourStr = ("0"+hour);
  v = v.replace(/HH/g, hourStr.substring(hourStr.length-2));
  v = v.replace(/hh/g, hourStr.substring(hourStr.length-2));

  //minute
  var minuteStr = ("0"+minute);
  v = v.replace(/mm/g, minuteStr.substring(minuteStr.length-2));

  //Millisecond
  v = v.replace(/sss/g, ms);
  v = v.replace(/SSS/g, ms);

  //second
  var secondStr = ("0"+second);
  v = v.replace(/ss/g, secondStr.substring(secondStr.length-2));
  v = v.replace(/SS/g, secondStr.substring(secondStr.length-2));

  //weekDay
  v = v.replace(/E/g, weekDayString);
  return v;
};
export function textOmitted(str,len=13){
  // 中间显示省略号，截取显示括号内容
  let resultStr='';
  if(str.length > len){
    let index = str.length / 6;
    let first = str.substring(0,index);
    let last = str.substring(str.length-index,str.length);
    resultStr = `${first}...${last}`;
  } else {
    resultStr = str;
  }
  return resultStr;
};

export function getUUid() {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  return s.join('');
};


export async function getImgToBase64(url){//将图片转换为Base64
  let res = await new Promise(function (resolve) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      img = new Image;
      img.crossOrigin = '*';
      img.onload = function(){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        let dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
        canvas = null;
      };
      img.src = url;
  });
  return res;
}

//用来判断bound.top<=clientHeight的函数，返回一个bool值
function isIn(el) {
  let bound = el.getBoundingClientRect();
  let clientHeight = window.innerHeight;
  return bound.top <= clientHeight;
}
function loadImg(el) {
  if(!el.src){
    let source = el.dataset.src;
    el.src = source;
  }
}
//检查图片是否在可视区内，如果不在，则加载
export async function lazyLoad(imgArr) {
  Array.from(imgArr).forEach(function(el){
    if(isIn(el)){
      loadImg(el);
    }
  })
}

export async function titleCase(str) {
  let strArr = str.split(' ');
  for(let i=0;i<strArr.length;i++){
    strArr[i] = strArr[i].substring(0,1).toUpperCase()+strArr[i].toLowerCase().substring(1)
  }
  return strArr.join(' ');
}

export async function r(arr) {
  let str="abcde0fghiQ1jkABlmGn^2oCpq3Srst4u%`vEw#5xyze6789";
  let codeStr='';
  arr.forEach(item=>{
    if(codeStr ===''){
      codeStr= `${str[item]}`;
    } else {
      codeStr= `${codeStr}${str[item]}`;
    }
  });
 return codeStr;
}

export async function giveLike(id,optionType){
  await axios({
    method:"POST",
    url:`/u/giveLike`,
    data:{
      id,optionType
    }
  });
}
export async function giveUnLike(id,optionType){
  await axios({
    method:"POST",
    url:`/u/giveUnLike`,
    data:{
      id,optionType
    }
  });
}
