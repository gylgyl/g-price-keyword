<template>
  <div class="keyword">
    <input type="text" placeholder="请输入">
    <br/>
    <div>
      <p>↓</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keyword',
    created() {
      console.log('keyword in');
    }

  }
</script>

<style>
.keyword{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.keyword p{
  text-align: center;
}
ul{
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-wrap: wrap;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
li{
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 33.33%;
}
</style>