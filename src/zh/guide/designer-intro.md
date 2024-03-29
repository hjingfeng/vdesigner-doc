---
title: VDesigner - 设计器介绍
---
# 设计器介绍

## 界面介绍

设计器界面，主要由组件库面板/组件属性面板、图纸面板、图纸结构面板、工具栏和图纸区等 5 个部分组成:

![设计器界面](/images/screenshot/guide/ui.png)

## 图纸列表
每个项目可能包含多个图纸，在图纸列表面板中，可以增加、删除项目中的图纸。点击不同发图纸，在图纸区域中会同步显示该图纸的内容。

## 图纸面板
每个图纸由多个组件构成，图纸结构面板可以直观的观察到图纸的所有组件列表，并可以直接在列表中对组件进行锁定/解锁、隐藏/显示操作。

::: tip
- 当点击组件时，在设计器右侧会同步显示该组件的多个属性面板。
- 当点击图纸的空白区域时，则会显示组件库面板。
::: 

## 组件库面板

组件库面板，提供了设计所需要的内置组件，你可以将这些组件从组件库面板中拖拽至图纸面板，从而快速构建UI界面。默认内置的组件有：

- 基础图形库。含文字、箭头灯基础图形；表单、日期和时间、流程图等常用的图形组件。
- ECahrts组件。含部分曲线图、柱状图、饼状图组件。
- 数据大屏装饰组件。含构建数据大屏常用的面板、大小标题、侧边、底部等装饰组件。
- 地图组件。含中国地图、部分省地图。

## 图纸区
图纸面板，是进行设计UI的区域。通过拖拽、移动、设定组件的属性等来完成整个UI的构建。


## 工具栏
工具面板提供了对设计工作常用的操作：复制、粘贴、撤销、重做、代码模式视图、编辑器模式视图、放大镜、缩略图、锁定图纸、预览等功能。

工具面板还提供了 ***钢笔*** 和 ***铅笔*** 等 ***自定义图形*** 的设计工具。

## 属性面板
属性面板分为图纸属性面板和组件属性面板2类
- 图纸属性面板。提供对图纸基本属性和图纸通信属性的设定。在通信属性设置面板中，可以对系统内置支持的3类协议进行连接信息的设定，以及定义自定义数据处理逻辑的js代码。
- 组件属性面板。提供了对组件常用的、各类属性的设置。
  - 基本图形设定面板。提供图形长、宽、对齐、组合等基础图形属性的设定。
  - 样式设定面板。提供颜色、圆角、背景图等样式设定。
  - 文字设定面板。提供组件显示的文字进行字体、字号、颜色等设定。
  - 交互事件设定面板。提供各类事件的定义及自定义响应处理动作。
  - 动画设定面板。提供对组件的动画进行设定和预览。
  - 数据设定面板。提供将远程数据绑定到组件的一个或多个属性中，实现前后端的实时数据同步显示。