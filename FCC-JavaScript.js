/* 练习 求平均分
一位老师已经完成了学生的考试评级，需要你帮忙计算全班的平均分。
完成 getAverage 函数，该函数接收考试分数数组并返回平均分数。
平均分是通过累加所有得分并除以得分的数量来计算的。

提示：
你可以使用循环来累加 scores 数组以计算总分。
你可以使用 length 属性来获取得分的数量。*/
function getAverage(scores) {
    let sum = 0;
    for (let i = 0 ; i < scores.length ; i++){
      sum = sum + scores[i];
    }
      let totalNum = scores.push();
      const result = sum / totalNum;
      return result;
  }
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));