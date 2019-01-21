import Vue from 'vue'
import App from './App.vue'

console.log('iiiii');
// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   beforeCreate: function () {
//     console.log('调用了beforeCreat钩子函数')
//     console.log(App);

//   },
//   template: '<App />'
// })


const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root)


if (module.hot) {
  // 实现热更新
  module.hot.accept();
  console.log('index hot');
}
