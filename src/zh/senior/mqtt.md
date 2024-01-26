
# Mqtt数据通信

VDesigner 对mqtt协议的支持，依赖于 [mqtt.js](https://github.com/mqttjs/MQTT.js)。在 [简介](../guide/index.md#内置标准通信协议) 一节中，已经介绍了如何配置连接信息。接下来你可以看到如何具体使用mqtt协议来进行实时数据通信。

::: tip 提示
每一张图纸，都可以配置单独的数据通信协议和相关的配置。在 [**工具栏**](../guide/designer-intro.md#界面介绍) 点击 [**图纸设定**](../guide/index.md#内置标准通信协议) 按钮进行设定。
:::

## 第三方工具

我们使用第三方工具和VDesigner进行通信：

- [EMQX](https://github.com/emqx/emqx) : 开源mqtt消息服务器，这里我们使用emq的公有云服务。
- [MQTTX](https://mqttx.app/zh) : 免费的 mqtt 客户端工具

## 实现步骤

### 1、图纸连接配置

![mqtt配置信息](/images/senior/mqtt-connect-info.png)

::: tip 注意
- `mqtt.js` 是基于 `Websocket` 实现，使用的协议头与 `Websocket` 相同。如果勾选 ssl选项，如上图所示连接信息实际上就是 `wss://broker.emqx.io:8084/mqtt` 。
- 配置的主题名（此处配置的为：ab123），必须和客户端发送的主题名称匹配。
:::

### 2、配置客户端软件

打开 mqttx 客户端软件，新建一个连接，并进行如下配置：

![mqttx配置](/images/senior/mqttx-connect-info.png)


### 3、在画布上创建一个组件

::: tip 提示
为简化演示，我们使用正方形组件，对该组件的 `text` 属性通过 `mqtt` 数据通信进行改变来展示实际效果。
:::

从右侧组件面板中，拖拽一个正方形到画布中。并查看到组件的id：

![新组件](/images/senior/demo1.png)

### 4、数据实时同步显示

在 [实时数据通信](../concept/data.md) 一节中，我们已经了解实时数据通信的流程和数据结构。接下来我们使用mqtt客户端软件，向mqtt服务器发送符合结构要求的数据(发送一个主题)。来观察这个正方形的 `text` 属性值是否会同步发生变化。

::: tip 注意
在mqttx客户端软件发布的主题名称必须和画布订阅的主题名称相符。
:::

![新组件](/images/senior/demo2.png)

我们采用 [实时数据通信](../concept/data.md) 一节中数据结构的第一种结构来发送数据: 指定 `id` ，指定 `属性值` 。当我们点击mqttx的发布按钮时，会发现图纸中的这个正方形的文字，由 `正方形` 改变为 `这是有客户端发送给vdesigner的新的text`

![新组件](/images/senior/demo3.gif)