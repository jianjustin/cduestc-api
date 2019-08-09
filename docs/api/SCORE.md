# 成绩模块API

* 查询学生所有成绩

  ```
  GET - http://localhost:3000/queryAllGrade
  ```

  **该接口无请求参数，但是需要登录后再进行调用**

  ```json
  {
      "status": 200,
      "data": {},
      "list": [
          {
              "courseNumber": "CS060118",
              "courseNo": "01",
              "courseName": "数据库原理及应用 **",
              "courseEnName": "",
              "courseCredit": "3",
              "courseAttr": "任选",
              "courseScore": "87.0",
              "courseNotPassReason": ""
          }
      ],
      "msg": "成绩查询成功"
  }
  ```

  **成绩参数说明**

  * 课程号 : courseNumber

  * 课序号 : courseNo
  * 课程名 : courseName

  * 英文课程名 :  courseEnName

  * 学分 :  courseCredit

  * 课程属性 :  courseAttr

  * 成绩 :  courseScore

  * 未通过原因 : courseNotPassReason