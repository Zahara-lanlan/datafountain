module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      unitToConvert: "px", // (String)需要转换的单位，默认为"px"
      viewportWidth: 750, // (Number) 设计稿的视口宽度
      viewportHeight: 812,
      unitPrecision: 5, // (Number) 单位转换后保留的精度
      propList: ["*"], // (Array) 能转化为vw的属性列表
      viewportUnit: "vw", // (String) 希望使用的视口单位
      fontViewportUnit: "vw", // (String) 字体使用的视口单位
      selectorBlackList: [], // (Array) 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      minPixelValue: 0, // (Number) 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      mediaQuery: false, // (Boolean) 媒体查询里的单位是否需要转换单位
      replace: true, // (Boolean) 是否直接更换属性值，而不添加备用属性
      exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      include: undefined,
      landscape: false,
      landscapeUnit: "vw", // (String) 横屏时使用的单位
      landscapeWidth: 568, // (Number) 横屏时使用的视口宽度
    },
  },
};
