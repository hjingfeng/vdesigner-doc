# 属性

属性面板，位于软件窗体的右侧。组件的常规属性，主要包含 基本信息、边框、颜色、背景图、进度和文字等几项。如图所示：

::: tip 提示
- 当选中组件时，位于右侧的属性面板会自动显示。
- 当点击图纸的空白处，则会自动显示组件面板，并取消组件的选中状态。
:::

![属性](/images/concept/property.png)

::: tip 提示
当选中多个组件时（鼠标范围选择，或者长按系统徽标键+点击选择），会自动显示排列功能按钮。
:::
![排列和对齐](/images/concept/align.png)

## 常用属性

### 常规属性

| <div style="min-width:120px">属性</div>|<div style="min-width:120px">属性key名</div>|备注|
| ------------- | :-----------: |------------ |
| 唯一标识           |id|
| 批量标识           |tag| 适合定义具有相同属性的场景 |
| 文字           |text| 显示在组件中央的文字内容 |
| 高度|height|
| 宽度|width| 
| 旋转角度|rotate
| 边框圆角|rotate| 不同缩放比例，圆角效果存在视觉差异 |
| 内边距(左)|paddingLeft| 
| 内边距(右)|paddingRight| 
| 内边距(上)|paddingTop| 
| 内边距(下)|paddingBottom| 
| 组件颜色|color| 
| 组件背景色|background| 
| 组件背景图|image| Http地址 |
| 进度|progress| 取值范围: 0~1 之间 |
| 进度颜色|progressColor|
| 是否可见|visible| 取值范围: true/false，false代表不在图纸上显示|
| 是否锁定|locked| 取值范围：0(未锁定)、1(禁止编辑)、2(禁止移动)、3(禁止缩放)、4(禁止移动和缩放)、10(禁止以上所有)|

### 连线特有属性
| <div style="min-width:120px">属性</div>|<div style="min-width:120px">属性名</div>|备注|
| ---- | :----: | ---- |
| 线宽 |  lineWidth  | 线的粗细 |
| 线边框宽度 |  borderWidth  | 类似于html中元素的边框宽度，边框包裹连线。|

## 改变属性的3种方式

- 通过属性面板更改
- 通过 [事件](./event.md) 更改
- 通过 [数据通信](./data.md) 更改
