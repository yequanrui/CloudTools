export const colorTable = {
  hue: {
    title: '按色相的搭配分类',
    intro:
      '本节将网页设计中常见的色彩搭配按照色相的顺序归类。每类都以该色相为主，配以其他色相或者同色相的，应用对比和调和的方法，并按照从轻快到浓烈的顺序排序。',
    table: [
      {
        id: 'red',
        name: '红色',
        desc: '',
        colors: [
          ['#FFFFCC', '#CCFFFF', '#FFCCCC'],
          ['#99CCCC', '#FFCC99', '#FFCCCC'],
          ['#FF9999', '#996699', '#FFCCCC'],
          ['#CC9999', '#FFFFCC', '#CCCC99'],
          ['#FFCCCC', '#FFFF99', '#CCCCFF'],
          ['#0099CC', '#CCCCCC', '#FF6666'],
          ['#FF9966', '#FF6666', '#FFCCCC'],
          ['#CC9966', '#666666', '#CC9999'],
          ['#FF6666', '#FFFF66', '#99CC66'],
          ['#CC3333', '#CCCCCC', '#003366'],
          ['#993333', '#CCCC00', '#663366'],
          ['#CCCC99', '#666666', '#CC9999'],
          ['#FF6666', '#FFFF00', '#0066CC'],
          ['#CC0033', '#333333', '#CCCC00'],
          ['#336633', '#990033', '#FFCC99'],
          ['#993333', '#CC9966', '#003300'],
          ['#FF0033', '#333399', '#CCCC00'],
          ['#CC0033', '#000000', '#003399'],
          ['#000000', '#99CC00', '#CC0033'],
          ['#999933', '#993333', '#333300'],
        ],
      },
      {
        id: 'orange',
        name: '橙色',
        desc: '',
        colors: [
          ['#FFCC99', '#FFFF99', '#99CC99'],
          ['#FFCC99', '#CCFF99', '#CCCCCC'],
          ['#FFCC99', '#FFFFCC', '#99CCFF'],
          ['#FF9966', '#FFFFCC', '#99CC99'],
          ['#FF9900', '#FFFFCC', '#336699'],
          ['#CCCC33', '#FFFF99', '#CC9933'],
          ['#996600', '#FFCC33', '#FFFFCC'],
          ['#FFFFCC', '#CC9933', '#336666'],
          ['#FF9900', '#FFFF00', '#0099CC'],
          ['#99CC33', '#FF9900', '#FFCC00'],
          ['#FF9933', '#99CC33', '#CC6699'],
          ['#FF9933', '#FFFF00', '#3366CC'],
          ['#FF9933', '#FFFFCC', '#009966'],
          ['#FF6600', '#FFFF66', '#009966'],
          ['#990033', '#CCFF66', '#FF9900'],
          ['#FF9966', '#996600', '#CCCC00'],
          ['#CC6600', '#999999', '#CCCC33'],
          ['#CC6600', '#CCCC33', '#336699'],
          ['#000000', '#FF9933', '#999966'],
          ['#663300', '#FF9933', '#FFFF66'],
        ],
      },
      {
        id: 'yellow',
        name: '黄色',
        desc: '',
        colors: [
          ['#FFFFCC', '#CCFFFF', '#FFCCCC'],
          ['#FFFF00', '#FFFFFF', '#CCCC00'],
          ['#99CCFF', '#FFCC33', '#FFFFCC'],
          ['#FFFF33', '#99CCFF', '#CCCCCC'],
          ['#FFFF00', '#FFFFFF', '#9933FF'],
          ['#99CCFF', '#FFCC33', '#FFFF33'],
          ['#FFCC00', '#66CC00', '#FFFF99'],
          ['#FF9900', '#FFFF00', '#0099CC'],
          ['#FFCC00', '#0000CC', '#FFFF99'],
          ['#CC9999', '#FFFFCC', '#6666CC'],
          ['#999933', '#FFFFCC', '#CC99CC'],
          ['#CCCC00', '#666600', '#FFFF66'],
          ['#FF9966', '#FFFFCC', '#99CC99'],
          ['#FFCC33', '#FFFFCC', '#999966'],
          ['#FFCC99', '#FF6666', '#FFFF66'],
          ['#FFCC99', '#999966', '#FFFF00'],
          ['#FFFF99', '#99CC99', '#666600'],
          ['#999966', '#FFFF99', '#333333'],
          ['#006633', '#333300', '#CCCC99'],
          ['#006633', '#663300', '#CCCC66'],
        ],
      },
      {
        id: 'yellowgreen',
        name: '黄绿色',
        desc: '',
        colors: [
          ['#33CC33', '#6666CC', '#FFFFFF'],
          ['#CCCC33', '#FFFFFF', '#CCFFCC'],
          ['#FFCC99', '#CCFF99', '#CCCCCC'],
          ['#CCCC00', '#999966', '#FFFFCC'],
          ['#CCCC33', '#FFFFFF', '#336699'],
          ['#CCCC33', '#999999', '#CCFFFF'],
          ['#00CC00', '#0066CC', '#99CCCC'],
          ['#99CC33', '#FF9900', '#FFCC00'],
          ['#99CC33', '#CCCCFF', '#663300'],
          ['#CCCC33', '#993399', '#000000'],
          ['#CC6600', '#999999', '#CCCC33'],
          ['#CC9933', '#FFFF99', '#99CC99'],
          ['#669933', '#CCCC33', '#663300'],
          ['#99CC33', '#CCCCCC', '#000000'],
          ['#CC6600', '#CCCC33', '#336699'],
          ['#666600', '#CCCC66', '#CCFFCC'],
          ['#333366', '#99CC33', '#336699'],
          ['#666666', '#99CC33', '#003366'],
          ['#003333', '#99CC33', '#999999'],
          ['#996633', '#FFFF99', '#99CC66'],
        ],
      },
      {
        id: 'green',
        name: '绿色',
        desc: '',
        colors: [
          ['#009966', '#FFFFFF', '#FFFF00'],
          ['#339933', '#FFFFFF', '#9933CC'],
          ['#339933', '#FFFFFF', '#000000'],
          ['#339933', '#99CC00', '#FFFFCC'],
          ['#FFFFCC', '#CCCC66', '#336666'],
          ['#99CC33', '#FFFF66', '#336600'],
          ['#339933', '#CC9900', '#666666'],
          ['#339966', '#CCCCCC', '#003366'],
          ['#669933', '#CCCCCC', '#000000'],
          ['#339933', '#CCCCCC', '#6699CC'],
          ['#006633', '#CCCC33', '#CC9933'],
          ['#339933', '#666633', '#CCCC66'],
          ['#339933', '#FFCC33', '#336699'],
          ['#006633', '#669933', '#99CC99'],
          ['#336666', '#996633', '#CCCC33'],
          ['#003300', '#669933', '#CCCC99'],
          ['#006633', '#990033', '#FF9900'],
          ['#006633', '#333300', '#CCCC99'],
          ['#006633', '#663300', '#CCCC66'],
          ['#993333', '#CC9966', '#003300'],
        ],
      },
      {
        id: 'cyan',
        name: '青绿色',
        desc: '',
        colors: [
          ['#CCFF99', '#FFFFFF', '#66CCCC'],
          ['#339999', '#FFFFFF', '#99CCFF'],
          ['#66CC99', '#FFFFFF', '#666699'],
          ['#009999', '#66CCCC', '#CCFFFF'],
          ['#66CCCC', '#CCFF66', '#FF99CC'],
          ['#339999', '#FFFF00', '#336699'],
          ['#CC9933', '#339999', '#FFCC33'],
          ['#FFCC00', '#009999', '#CC3333'],
          ['#669999', '#CCCCCC', '#CC99CC'],
          ['#339999', '#CCCCCC', '#000000'],
          ['#339999', '#666699', '#CCCCCC'],
          ['#003333', '#99CC99', '#FFFFCC'],
          ['#669999', '#CCFFCC', '#996699'],
          ['#996699', '#CCCC99', '#669999'],
          ['#999966', '#CCCC99', '#339999'],
          ['#336666', '#669999', '#CCCC99'],
          ['#999999', '#003366', '#669999'],
          ['#663333', '#339999', '#CCCC66'],
          ['#333333', '#339999', '#CCFFCC'],
          ['#336666', '#3399CC', '#666666'],
        ],
      },
      {
        id: 'blue',
        name: '蓝色',
        desc: '',
        colors: [
          ['#FFFFCC', '#CCFFFF', '#FFCCCC'],
          ['#99CCCC', '#FFFFFF', '#3399CC'],
          ['#CCFFCC', '#99CCCC', '#FFFFCC'],
          ['#CCCCFF', '#FFFFFF', '#99CCFF'],
          ['#FFCC99', '#FFFFCC', '#99CCFF'],
          ['#336699', '#FFFFFF', '#99CCCC'],
          ['#99CCCC', '#FFFFFF', '#CCFF99'],
          ['#CCCCFF', '#FFFFCC', '#CCFFFF'],
          ['#99CCCC', '#FFFFFF', '#336699'],
          ['#99CCFF', '#CCFFFF', '#6699CC'],
          ['#99CC33', '#FFFFFF', '#3399CC'],
          ['#0099CC', '#FFFFCC', '#666699'],
          ['#CCCCCC', '#003366', '#99CCFF'],
          ['#0099CC', '#FFFFFF', '#666666'],
          ['#CCCCCC', '#6699CC', '#666666'],
          ['#336699', '#CCCC99', '#003366'],
          ['#3399CC', '#003366', '#CCCCCC'],
          ['#6699CC', '#006699', '#000000'],
          ['#003366', '#CCCCCC', '#006699'],
          ['#999933', '#336699', '#333333'],
        ],
      },
      {
        id: 'bluepurple',
        name: '蓝紫色',
        desc: '',
        colors: [
          ['#CCFFFF', '#FFFFFF', '#CCCCFF'],
          ['#CCCCCC', '#FFFFFF', '#666699'],
          ['#99CCFF', '#FFFFFF', '#333399'],
          ['#6666CC', '#FFFFFF', '#FF9999'],
          ['#9999FF', '#FFCC33', '#FFFFCC'],
          ['#0099CC', '#FFFFCC', '#666699'],
          ['#0000FF', '#6699FF', '#CCFFFF'],
          ['#6666FF', '#66CCFF', '#CCFF66'],
          ['#669999', '#FFFFCC', '#6666CC'],
          ['#9999CC', '#FF9999', '#666699'],
          ['#003399', '#FFCCCC', '#6699CC'],
          ['#CC6666', '#333399', '#CCCC00'],
          ['#000066', '#6666FF', '#CCCCCC'],
          ['#003399', '#CCFF99', '#333333'],
          ['#333366', '#CC0033', '#CCCCCC'],
          ['#336699', '#CCCC66', '#333300'],
          ['#003399', '#FFFF99', '#000000'],
          ['#990066', '#CCCC33', '#003399'],
          ['#CC3333', '#000000', '#003399'],
          ['#333366', '#999966', '#333333'],
        ],
      },
      {
        id: 'purple',
        name: '紫色',
        desc: '',
        colors: [
          ['#FFFFCC', '#FFFF99', '#CCCCFF'],
          ['#9999CC', '#99CC99', '#FFFFFF'],
          ['#FFCCCC', '#CCCCFF', '#CCCC99'],
          ['#9999CC', '#FFFFCC', '#FFCCCC'],
          ['#FFCCCC', '#FF99CC', '#CCCCFF'],
          ['#660066', '#FFFFFF', '#663333'],
          ['#CCCC99', '#333333', '#9966CC'],
          ['#CCCC00', '#FF9966', '#663399'],
          ['#996699', '#FFCCCC', '#CC99CC'],
          ['#996666', '#CC99CC', '#FFCCCC'],
          ['#FFCC99', '#FF9933', '#663366'],
          ['#333399', '#CCCCFF', '#CC99CC'],
          ['#663366', '#CCCCCC', '#CC99CC'],
          ['#996699', '#9999CC', '#CCCCFF'],
          ['#CC9966', '#999999', '#663366'],
          ['#330033', '#666666', '#669999'],
          ['#CCCCCC', '#999999', '#663366'],
          ['#FF33CC', '#CCCC99', '#663366'],
          ['#663366', '#999999', '#CCCCFF'],
          ['#999966', '#993333', '#330033'],
        ],
      },
      {
        id: 'purplepink',
        name: '紫红色',
        desc: '',
        colors: [
          ['#FFCCCC', '#FFFFFF', '#99CC00'],
          ['#FF99CC', '#FFFFFF', '#993366'],
          ['#66CC99', '#FFFFFF', '#CC6699'],
          ['#CC9999', '#FFCCCC', '#CC99CC'],
          ['#FFCCCC', '#FFFF99', '#CCCCFF'],
          ['#FFFF99', '#993399', '#FF99CC'],
          ['#66CCCC', '#CCFF66', '#FF99CC'],
          ['#FF99CC', '#003399', '#CCCC00'],
          ['#FFCCCC', '#FF99CC', '#CCCCFF'],
          ['#FF9999', '#FFCCCC', '#FF99CC'],
          ['#669966', '#CC6699', '#FFCCFF'],
          ['#CCCCCC', '#CC99CC', '#CC3399'],
          ['#CC3399', '#FFCC99', '#FF6666'],
          ['#FF3399', '#CCCC99', '#663366'],
          ['#663366', '#FFFFCC', '#FFCCCC'],
          ['#663366', '#CCCCCC', '#CC99CC'],
          ['#990066', '#FFCC00', '#CC0033'],
          ['#990066', '#CCCCCC', '#006699'],
          ['#999900', '#990033', '#000000'],
          ['#990066', '#000000', '#009966'],
        ],
      },
    ],
  },
  character: {
    title: '按印象的搭配分类',
    intro:
      '色彩搭配看似复杂，但并不神秘。既然每种色彩在印象空间中都有自己的位置，那么色彩搭配得到的印象可以用加减法来近似估算。如果每种色彩都是高亮度的，那么它们的叠加，自然会是柔和、明亮的；如果每种色彩都是浓烈的，那么它们叠加，就会是浓烈的。当然在实际设计过程中，设计师还要考虑到乘除法，比如同样亮度和对比度的色彩，在色环上的角度不同，搭配起来就会得到千变万化的感觉。因此本书除了要列举出按色相的搭配，也要将印象作为重点的搭配分类列举出来，以供读者参考。',
    table: [
      {
        id: 'softbrightgentle',
        name: '柔和、明亮、温柔 ',
        desc: '亮度高的色彩搭配在一起就会得到柔和、明亮、温和的感觉。为了避免刺眼，设计师一般会用低亮度的前景色调和，同时色彩在色环之间的距离也有助于避免沉闷。',
        colors: [
          ['#FFFFCC', '#CCFFFF', '#FFCCCC'],
          ['#FFCCCC', '#FFFF99', '#CCCCFF'],
          ['#FF9966', '#FF6666', '#FFCCCC'],
          ['#FFCC99', '#CCFF99', '#CCCCCC'],
          ['#FFCCCC', '#CCCCFF', '#CCFFCC'],
          ['#CCFFFF', '#CCCCCC', '#CCFF99'],
          ['#FFCCCC', '#FFFFFF', '#99CC99'],
          ['#99CCCC', '#FFCC99', '#FFCCCC'],
          ['#CCCCFF', '#FFCCCC', '#CCFFFF'],
          ['#FFCC99', '#FFFFCC', '#99CCCC'],
        ],
      },
      {
        id: 'softcleanbright',
        name: '柔和、洁净、爽朗 ',
        desc: '对于柔和、清洁、爽朗的印象，色环中蓝到绿相邻的颜色应该是最适合的。并且亮度偏高。可以看到，几乎每个组合都有白色参与。当然在实际设计时，可以用蓝绿相反色相的高亮度有彩色代替白色。',
        colors: [
          ['#CCFF99', '#FFFFFF', '#99CCFF'],
          ['#99CCCC', '#FFFFFF', '#CCFF99'],
          ['#CCFFCC', '#FFFFFF', '#66CCCC'],
          ['#CCCCFF', '#FFFFFF', '#99CCCC'],
          ['#CCFFCC', '#99CCCC', '#FFFFCC'],
          ['#CCFFFF', '#FFFFFF', '#CCCCFF'],
          ['#CCFFFF', '#FFFFFF', '#99CCFF'],
          ['#66CCFF', '#FFFFFF', '#CCFFFF'],
          ['#6699CC', '#FFFFFF', '#99CCFF'],
          ['#CCCCFF', '#FFFFFF', '#99CCFF'],
        ],
      },
      {
        id: 'softbright',
        name: '可爱、快乐、有趣 ',
        desc: '可爱、快乐、有趣印象中的色彩搭配特点是，色相分布均匀，冷暖搭配，饱和度高，色彩分辨度高。',
        colors: [
          ['#66CCCC', '#CCFF66', '#FF99CC'],
          ['#FF9999', '#FFFFFF', '#FFCC99'],
          ['#FF6666', '#FFFF66', '#99CC66'],
          ['#666699', '#FFFFFF', '#FF9999'],
          ['#99CC33', '#FF9900', '#FFCC00'],
          ['#FF0033', '#FFFFFF', '#FF9966'],
          ['#FF9900', '#CCFF00', '#CC3399'],
          ['#99CC33', '#FFFFFF', '#FF6600'],
          ['#993366', '#CCCC33', '#666633'],
          ['#66CCCC', '#FFFFFF', '#666699'],
        ],
      },
      {
        id: 'livelyhappyfun',
        name: '活泼、快乐、有趣 ',
        desc: '活泼、快乐、有趣相对前一种印象，色彩选择更加广泛，?最重要的变化是将纯白色用低饱和有彩色或者灰色取代。',
        colors: [
          ['#CC9999', '#FFFF99', '#666699'],
          ['#FF9900', '#FFFF00', '#0099CC'],
          ['#CCCC99', '#CC3399', '#99CC00'],
          ['#FF6666', '#FFFF00', '#3399CC'],
          ['#CC6600', '#999999', '#CCCC33'],
          ['#FF9933', '#FFFFCC', '#009933'],
          ['#0099CC', '#CCCCCC', '#FF6666'],
          ['#FF6600', '#FFFF66', '#009966'],
          ['#CC6633', '#FFCC99', '#CC6600'],
          ['#CC0066', '#009999', '#FFCC33'],
        ],
      },
      {
        id: 'sportlight',
        name: '运动型、轻快 ',
        desc: '运动的色彩要强化激烈、刺激的感受，同时还要体现健康、快乐、阳光。因此饱和度较高、亮度偏低的色彩在这类印象中经常登场。',
        colors: [
          ['#FF6666', '#FFFF00', '#006699'],
          ['#FF9966', '#FFFFFF', '#0066CC'],
          ['#339933', '#FFCC33', '#336699'],
          ['#FF9900', '#FFFFCC', '#336699'],
          ['#CC6600', '#CCCC44', '#336699'],
          ['#99CC33', '#FFFFFF', '#0099CC'],
          ['#99CC33', '#FF6666', '#336699'],
          ['#336699', '#FFFFFF', '#99CCCC'],
          ['#FF0033', '#333399', '#CCCC00'],
          ['#33CC99', '#FFFF00', '#336699'],
        ],
      },
      {
        id: 'lightluxuriousdynamic',
        name: '轻快、华丽、动感 ',
        desc: '华丽的印象要求页面充斥有彩色，并且饱和度偏高，而亮度适当减弱则能强化这种印象。',
        colors: [
          ['#990066', '#FFCC00', '#CC0033'],
          ['#FFCC33', '#333399', '#FF0033'],
          ['#666699', '#FFFF00', '#FF0033'],
          ['#FF0033', '#006699', '#FFFF33'],
          ['#FFCC00', '#009999', '#CC3366'],
          ['#FF0033', '#CCCC00', '#006699'],
          ['#CCCC00', '#FF9933', '#663399'],
          ['#FF9933', '#FFFF00', '#336699'],
          ['#CC3333', '#FFCCCC', '#99CC00'],
          ['#003399', '#FFFF00', '#FF6600'],
        ],
      },
      {
        id: 'wildabundantdynamic',
        name: '狂野、充沛、动感 ',
        desc: '狂野的印象空间中少不了低亮度的色彩，甚至可以用适当的黑色搭配。其他有彩色的饱和度高，对比强烈。',
        colors: [
          ['#990066', '#FFFF00', '#003399'],
          ['#CC0033', '#000000', '#003399'],
          ['#003399', '#FFFF00', '#F00000'],
          ['#CC3333', '#CCCCCC', '#003366'],
          ['#CC0033', '#333333', '#CCCC00'],
          ['#000000', '#99CC00', '#CC0033'],
          ['#FF0033', '#333333', '#FF9900'],
          ['#990066', '#000000', '#009966'],
          ['#666666', '#FF6600', '#333333'],
          ['#993333', '#CCCC00', '#663366'],
        ],
      },
      {
        id: 'luxuriousflashy',
        name: '华丽、花哨、女性化 ',
        desc: '女性化的页面中紫色和品红是主角、粉红、绿色也是常用色相。一般它们之间要进行高饱和的搭配。',
        colors: [
          ['#FFFF99', '#993399', '#FF99CC'],
          ['#FF6666', '#FFFFFF', '#339999'],
          ['#FF99CC', '#003399', '#CCFF00'],
          ['#66CC99', '#FFFFFF', '#CC6699'],
          ['#CC3399', '#FFCC99', '#FF6666'],
          ['#FFCCCC', '#FFFFFF', '#993366'],
          ['#CC6699', '#FFFF00', '#666699'],
          ['#CC6699', '#99CC66', '#663366'],
          ['#FF33CC', '#CCCC99', '#663366'],
          ['#CC3399', '#FFCC99', '#FF6666'],
        ],
      },
      {
        id: 'elegantfeminine',
        name: '回味、女性化、优雅 ',
        desc: '优雅的感觉很奇特，色彩的饱和度一般要降下来。一般以蓝、红之间的相邻，调节亮度和饱和度进行搭配。',
        colors: [
          ['#CCCCCC', '#CC99CC', '#CC3399'],
          ['#FFCCCC', '#FF99CC', '#CCCCFF'],
          ['#CC3399', '#9933CC', '#CC99CC'],
          ['#9999CC', '#FFFFCC', '#FFCCCC'],
          ['#663366', '#CCCCCC', '#CC99CC'],
          ['#FF9999', '#FFCCCC', '#FF99CC'],
          ['#996666', '#CC99CC', '#FFCCCC'],
          ['#CC9999', '#CCCCCC', '#FFCCCC'],
          ['#FF9999', '#996699', '#FFCCCC'],
          ['#996699', '#FFCCCC', '#CC99CC'],
        ],
      },
      {
        id: 'noble',
        name: '高尚、自然、安稳 ',
        desc: '高尚一般要用低亮度的黄绿色，色彩亮度降下去，注意色彩的平衡，页面就会显得安稳。',
        colors: [
          ['#CCCC33', '#FFFF99', '#CC9933'],
          ['#CC9966', '#CCCC66', '#669999'],
          ['#FF9966', '#996600', '#CCCC00'],
          ['#CCCC66', '#660033', '#CC6600'],
          ['#CCCC00', '#666600', '#CCCCFF'],
          ['#CC9933', '#009999', '#FFCC33'],
          ['#999966', '#CCCC99', '#339999'],
          ['#99CC99', '#669933', '#336633'],
          ['#666633', '#999933', '#CC9966'],
          ['#660000', '#CC9900', '#CCCC99'],
        ],
      },
      {
        id: 'calmnatural',
        name: '冷静、自然 ',
        desc: '绿色是冷静、自然印象的主角，但是绿色作为页面的主要色彩，容易陷入过于消极的感觉传达，因此应该特别重视图案的设计。',
        colors: [
          ['#FFFF99', '#99CC99', '#666600'],
          ['#996633', '#FFFF99', '#99CC66'],
          ['#006600', '#66CC66', '#CCFF99'],
          ['#666600', '#CCCC66', '#CCFFCC'],
          ['#669933', '#CCCC33', '#663300'],
          ['#666633', '#999933', '#CC9966'],
          ['#003300', '#669933', '#CCCC99'],
          ['#006633', '#663300', '#CCCC66'],
          ['#666600', '#FFFFCC', '#999999'],
          ['#006633', '#333300', '#CCCC99'],
        ],
      },
      {
        id: 'traditional',
        name: '传统、高雅、优雅 ',
        desc: '传统的内容一般要降低色彩的饱和度，特别是棕色很适合。前面介绍紫色也是高雅和优雅印象的常用色相。',
        colors: [
          ['#999933', '#FFFFCC', '#CC99CC'],
          ['#CC9966', '#666666', '#CC9999'],
          ['#CCCC99', '#333333', '#9966CC'],
          ['#CCCC99', '#666666', '#CC9999'],
          ['#996699', '#CCCC99', '#669999'],
          ['#CC9966', '#999999', '#666666'],
          ['#339966', '#CCCCCC', '#996699'],
          ['#663366', '#999999', '#CCCCFF'],
          ['#996699', '#9999CC', '#CCCCFF'],
          ['#CCCC99', '#999999', '#663300'],
        ],
      },
      {
        id: 'traditionalstableclassical',
        name: '传统、稳重、古典 ',
        desc: '传统、稳重、古典都是保守的印象，色彩的选择上应该尽量用低亮度的暖色，这种搭配符合成熟的审美。',
        colors: [
          ['#6699CC', '#663366', '#CCCC99'],
          ['#990033', '#CCFF66', '#FF9900'],
          ['#666699', '#660033', '#99CC99'],
          ['#663300', '#FF9933', '#FFFF66'],
          ['#990033', '#006633', '#CCCC00'],
          ['#660033', '#999933', '#660099'],
          ['#993366', '#CCCC33', '#666633'],
          ['#996600', '#CCCC66', '#666600'],
          ['#009933', '#CC9900', '#666666'],
          ['#666633', '#CCCC33', '#CC3366'],
        ],
      },
      {
        id: 'stableelegant',
        name: '忠厚、稳重、有品位 ',
        desc: '亮度、饱和度偏低的色彩会给人忠厚、稳重的感觉。这样的搭配为了避免色彩过于保守，使页面僵化、消极，应当注重冷暖结合和明暗对比。',
        colors: [
          ['#FFFFCC', '#CC9933', '#336666'],
          ['#336666', '#996633', '#CCCC33'],
          ['#336633', '#990033', '#FFCC99'],
          ['#333366', '#669999', '#996600'],
          ['#993333', '#CC9966', '#003300'],
          ['#336633', '#CCCC99', '#333366'],
          ['#663300', '#999933', '#333333'],
          ['#663366', '#666666', '#333366'],
          ['#999900', '#990033', '#CC99CC'],
          ['#333366', '#990033', '#CCCCCC'],
        ],
      },
      {
        id: 'simplecleanprogress',
        name: '简单、洁净、进步 ',
        desc: '简单、洁净的色彩在色相上可以用蓝、绿表现，并大面积留白。而进步的印象可以多用蓝色，搭配低饱和甚至灰色。',
        colors: [
          ['#CCCCCC', '#FFFFFF', '#666699'],
          ['#CCFF66', '#FFFFFF', '#003366'],
          ['#99CCFF', '#FFFFFF', '#336699'],
          ['#CCCC33', '#FFFFFF', '#336699'],
          ['#0099FF', '#FFFFCC', '#666699'],
          ['#99CC33', '#CCCCCC', '#000000'],
          ['#CCCCCC', '#003366', '#99CCFF'],
          ['#0099CC', '#CCFF66', '#666666'],
          ['#3399CC', '#003366', '#CCCCCC'],
          ['#ABCDEF', '#ABCDEF', '#ABCDEF'],
        ],
      },
      {
        id: 'simplefashionableelegant',
        name: '简单、时尚、高雅 ',
        desc: '灰色是最为平衡的色彩，并且是塑料金属质感的主要色彩之一，因而要表达高雅、时尚，可以适当使用，甚至大面积使用。但是要注重图案和质感的构造。',
        colors: [
          ['#99CCFF', '#FFFF66', '#666666'],
          ['#336666', '#FFFFFF', '#999999'],
          ['#0099CC', '#FFFFFF', '#666666'],
          ['#999999', '#CCCCCC', '#336666'],
          ['#CCCCCC', '#999999', '#663366'],
          ['#666666', '#CCCCCC', '#6699CC'],
          ['#999999', '#FFFFFF', '#333366'],
          ['#669999', '#CCCCCC', '#666666'],
          ['#999999', '#CCCCCC', '#333333'],
          ['#ABCDEF', '#ABCDEF', '#ABCDEF'],
        ],
      },
      {
        id: 'simplefashionableprogress',
        name: '简单、进步、时尚 ',
        desc: '表现进步的色彩主要以蓝色为主，搭配灰色。而色彩的明度统一、色相相邻，在色彩上会显得简洁。',
        colors: [
          ['#333366', '#99CC33', '#336699'],
          ['#999999', '#003366', '#669999'],
          ['#003399', '#CCFF99', '#333333'],
          ['#999933', '#336699', '#333333'],
          ['#666666', '#99CC33', '#003366'],
          ['#999999', '#336699', '#333333'],
          ['#3366CC', '#CCCC66', '#333300'],
          ['#6699CC', '#006699', '#000000'],
          ['#003366', '#CCCCCC', '#006699'],
          ['#000000', '#999999', '#003366'],
        ],
      },
    ],
  },
};
