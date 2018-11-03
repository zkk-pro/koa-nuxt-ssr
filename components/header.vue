<template>
  <header>
    <div class="box">
      <div class="logo">
        <h1>大有折扣网</h1>
      </div>
      <div class="search">
        <input type="text" id="search" placeholder="请输入您想要搜索的商品名称">
        <button type="button">搜索</button>
      </div>
      <div class="right"></div>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
header {

  background: #fff;
  .box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100px;
  }
  .logo, .right {
    width: 250px;
    height: 50px;
    // background: #000;
  }
  .search {
    width: 500px;
    margin: 0 auto;
    position: relative;
    #search {
      width: 500px;
      border: 2px solid #ee7711;
      border-radius: 38px;
      padding: 0 20px;
      font-weight: 500;
      font-size: 14px;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      height: 38px;
      line-height: 38px;
      width: 80px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      background: #ee7711;
      border-radius: 38px;
    }
  }
}
</style>

