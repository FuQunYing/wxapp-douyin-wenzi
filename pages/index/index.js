//index.js

Page({
  data: {
    list:[
      {
        "txt": ["《如约而至》", "作词：许嵩", "作曲：许嵩", "演唱：许嵩"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["如果早知道那天","是我们最后一面", "我绝不会和你","谈论琐事浪费时间"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["人生里看似偶然","却又必经的告别", "无约而至", "无人可面"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["有一回置身某个","似曾相识的场景", "那一刻我忽然感应","你就在我身边"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["过去当下未来", "未必却有其界限", "或许爱能穿越时间", "抵达永远"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["等到秋叶终于金黄", "等到华发悄然苍苍", "我们相约老地方"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["等到人已不再奔忙", "等到心也不再轻狂", "我们相约老地方"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["等到记忆只剩精华", "等到笑容不掺伪装", "我们相约老地方"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
      {
        "txt": ["等到释怀所有悲伤", "等到体谅世事无常", "我们相约老地方"],
        "color": "",
        "class": "",
        "scale": "",
        "current": 0,
        "addClass": false,
        "isshow": false,
        "isCurrent": false,
        "curclass": ""
      },
    ],
    isshow: 1,
    chblock: false
  },
  onLoad: function () {
    this.initData();
    this.time();
    // this.play()
    console.log(this.data.list)
  },
  initData: function() {
    const self = this;
    const length = self.data.list.length;
    for (var i = 0; i < length; i++) {//class要在这一段的时间过去以后，再显示，后一个元素添加动画
    (() => {
      var randnum = Math.floor(Math.random() * (length+1));
      // console.log(randnum);
      if ((length + 1)/2 < randnum) {
        self.data.list[i].class = "rotate-left";
        if (self.data.list[i + 1]) {
          self.data.list[i + 1].curclass = "left";
        }
      } else {
        self.data.list[i].class = "rotate-right";
        if (self.data.list[i + 1]) {
          self.data.list[i + 1].curclass = "right";
        }
      }
      switch (randnum) {
        case 1:
          self.data.list[i].scale = "transform:scale(0.8)";
          break;
        case 2:
          self.data.list[i].scale = "transform:scale(1.2)";
          break;
        case 3:
          self.data.list[i].scale = "transform:scale(1.4)";
          break;
        case 4:
          self.data.list[i].scale = "transform:scale(1.6)";
          break;
        case 5:
          self.data.list[i].scale = "transform:scale(1.8)";
          break;
        case 6:
          self.data.list[i].scale = "transform:scale(2)";
          break;
        default:
          self.data.list[i].scale = "transform:scale(1)";
          break;
      }
    })();

      // current的随机
      for(var j = 0; j < self.data.list[i].txt.length; j++) {
        var randnum1 = Math.floor(Math.random() * self.data.list[i].txt.length);
        self.data.list[i].current = randnum1;
      }

      self.data.list[i].color = self.rc();
    }
    this.setData({
      list: self.data.list
    })
  },
  time: function() {
    const self = this;
    var timer;

    for (var i = 0; i < self.data.list.length; i++) {

      ((index) =>{
        setTimeout(() => {
          if (index < 2) {
            self.data.list[index].isshow = true;
            self.data.list[index].isCurrent = true;
          } else{
            // console.log(index)
            self.data.list[index - 2].isshow = false;
            self.data.list[index - 2].isCurrent = false;
            self.data.list[index].isshow = true;
            self.data.list[index].isCurrent = true;
          }
          if(index>=1) {
            self.data.list[index-1].addClass=true;
            self.setData({
              chblock: !self.data.chblock
            })
          }
          self.setData({
            list: self.data.list
          })
          // console.log(index)
        }, (index+1)*3000)
      })(i);
    }
  },
  // 颜色随机
  rc: function(){
    var r = Math.floor(Math.random() * (255 - 100 + 1) + 100);
    var g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
    var b = Math.floor(Math.random() * (255 - 100 + 1) + 100);
    return `rgb(${r},${g},${b})`;
  },
  play: function() {
    const bgaudio = wx.getBackgroundAudioManager();
    bgaudio.src = 'http://upuwmp3.changba.com/userdata/userwork/658/448325658.mp3';
    // bgaudio.play();
    bgaudio.onPlay(() => {
      console.log('play')
    })
  }
})
