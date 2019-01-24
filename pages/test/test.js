// pages/test/test.js
const spritejs = require("../../utils/sprite-wxapp.js")
const {Scene, Layer, Sprite, Label, Path} = spritejs;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      "《如约而至》", "作词：许嵩", "作曲：许嵩", "演唱：许嵩", "如果早知道那天", "是我们最后一面", "我绝不会和你","谈论琐事浪费时间", "人生里看似偶然", "却又必经的告别", "无约而至", "无人可面", "有一回置身某个", "似曾相识的场景", "那一刻我忽然感应","你就在我身边", "过去当下未来", "未必却有其界限", "或许爱能穿越时间", "抵达永远", "等到秋叶终于金黄", "等到华发悄然苍苍", "我们相约老地方", "等到人已不再奔忙", "等到心也不再轻狂", "我们相约老地方", "等到记忆只剩精华", "等到笑容不掺伪装", "我们相约老地方", "等到释怀所有悲伤", "等到体谅世事无常", "我们相约老地方"
    ],
    layers: ['fglayer']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onReady: function () {
    const scene = new spritejs.Scene(1);
    this.scene = scene;
    const layer = scene.layer('fglayer');

    // 添加文字
    var texts;
    for (var i = 0; i < this.data.list.length; i++) {
      const scale = Math.random() * (1.5 - 0.6) + 0.6;
      texts = new spritejs.Label(this.data.list[i]);
      texts.attr({
        anchor: [0, 0],
        pos: [0, 10 + (i * 70)],
        font: '40px Sans-serif',
        color: this.rc(),
        transform: {
          scale: scale
          
        }
      })
      layer.append(texts)
    }
    // layer.append(texts)
    // text.animate([{
    //   rotate:0
    // },{
    //   rotate:-90
    // }],{
    //   duration: 1000
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  rc: function () {
    var r = Math.floor(Math.random() * (255 - 100) + 100);
    var g = Math.floor(Math.random() * (255 - 100) + 100);
    var b = Math.floor(Math.random() * (255 - 100) + 100);
    return `rgb(${r},${g},${b})`;
  }

})