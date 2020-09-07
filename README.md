# Product_pritice


## 展示内容

### 问题数据集展示

参考：https://www.kaggle.com/yoshida146/student-performance-predict

#### General

- Target_Column
  API = `/raw/column/target`

#### In Cat

- Object_Column(All Attributes) shown in Pie Chart
  API = `/raw/column/object/*`

- Numerial Column(Strip)
  API = `/raw/column/numerial/*`
  
- Boolean Column(Pie)
  API = `/raw/column/boolean/*`


### 训练历程

#### 弱模型

返回一个准确值(0~1)

- Bayes
  API = `/model/simple/bayes`

- SVM
  API = `/model/simple/svm`

#### 集成学习模型

- Boosting
  API = `/model/ensemble/boosting`
  
- Bagging
  API = `/model/ensemble/bagging`

#### 最终优化模型

- 准确度
  API = `/model/performance/accurancy`
  
- 权重
  API = `/model/performance/importance`


### 交互

- 预测(单个)
  API = `/predict/form`
  
- 预测(数据集文件)
  API = `/predict/dataset`
