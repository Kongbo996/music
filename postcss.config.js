module.exports = {
  plugins: [require('autoprefixer'), require('postcss-pxtorem')({
    remUint: 37.5,
    // rootValue: 375, //表示根元素html的fontSize值,也可以是100,获取任意其他值
    selectorBlackList: [], //过滤
    propList: ['*'], //设置px转换成rem的属性值，*表示所有属性的px转换为rem
  })],
};
