// 练习一   求平均分
/* 
一位老师已经完成了学生的考试评级，需要你帮忙计算全班的平均分。
完成 getAverage 函数，该函数接收考试分数数组并返回平均分数。
平均分是通过累加所有得分并除以得分的数量来计算的。

提示：
你可以使用循环来累加 scores 数组以计算总分。
你可以使用 length 属性来获取得分的数量。
*/

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




// 练习二    分数评级
 /*
 现在，老师需要你帮助将学生们的分数转换成一个字母评级。完善 getGrade 函数， 
 这个函数以一个数字类型的 score 作为参数。 你的函数应该根据分数返回一个字符串，代表字母评级。
 这里是分数段和它们所对应的字母评级：
 分数段	字母评级
 100	"A++"
 90 - 99	"A"
 80 - 89	"B"
 70 - 79	"C"
 60 - 69	"D"
 0 - 59	"F"
 提示：
    记得你学习过一些条件语句（if、else if 和 else）。
    记得你学习过一些比较运算符（>、<、>=、<=、===）。 
*/

function getGrade(score) {
    if(score == 100){
      return "A++";
    }else if (90 <= score){
      return "A";
    }else if (80 <= score){
      return "B";
    }else if (70 <= score){
      return "C";
    }else if (60 <= score){
      return "D";
    }else {
      return "F"
    }
  }
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// 练习三 if else
/*
老师对你目前所做的方案感到非常开心。 但是现在他们希望有一种简单的方法来检查学生的成绩是否合格。 只要不是 "F" 评级，就是成绩合格。
完善 hasPassingGrade 函数，这个函数把学生的分数作为参数。 如果这个学生的成绩合格，那么你的函数应该返回 true，否则返回 false。

提示：
使用 getGrade 函数来获得学生的评级。 然后检查这个评级是否及格。
*/

function hasPassingGrade(score) {
    if (score >= 60) {
      return true;
    }else {
      return false;
    }
  }
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

  // 练习四 输出
  /*
  现在，教师们已经掌握了他们所需要的所有信息，他们希望能够将结果告诉学生。
  完善 studentMsg 函数，这个函数以 totalScores 和 studentScore 作为参数。 这个函数应该返回一个字符串，代表给学生的信息。
  如果学生通过了该课程，字符串应遵循这种格式：
  
  提示：
  使用 getAverage 函数来获得班级平均分。
  调用 getGrade 函数来获得学生的评级。
  用字符串连接符（+）来创建发给学生的信息。
  请留意信息中的标点符号和空格。 
  */

  function studentMsg(totalScores, studentScore) {
    function says(){
      if (getGrade(studentScore) == "F"){
      return "You failed the course."
    }else {
      return "You passed the course."
    }
    }
  return "Class average: "+getAverage(totalScores)+". "+"Your grade: "+getGrade(studentScore)+". "+says();
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));