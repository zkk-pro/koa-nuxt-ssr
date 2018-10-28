<template>
  <div class="top">
    <div class="top_top">
      <div class="bc">
        <div class="top_left">
          <a href="" class="login">亲，请登录</a>
          <a href="">免费注册</a>
        </div>
        <div class="top_right">
          <a href="">在线客服</a>
          <a href="">商家合作</a>
        </div>
      </div>
    </div>
    <div class="bc top_center">
      <div class="bc">
        <div class="logo">优惠券</div>
        <div class="search">
          <input type="text" placeholder="请输入您要查找的优惠券商品名称" class="search_box">
          <span class="search_btn">搜索</span>
        </div>
        <div class="scan">二维码</div>
      </div>
    </div>
    <div class="top_bottom">
      <div class="bc">
        <div><a href="" class="select_btn_first active">首页</a></div>
        <div><a href="" class="select_btn_first">首页</a></div>
        <div><a href="" class="select_btn_first">首页</a></div>
        <div><a href="" class="select_btn_first">首页</a></div>
        <div><a href="" class="select_btn_first">首页</a></div>
        <div><a href="" class="select_btn_first">首页</a></div>
        <div><a href="" class="select_btn_first">首页</a></div>
        <div><a href="" class="select_btn_first">首页</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.top {
    border-bottom: 1px solid #ccc;
    background: #f8f8f8;
}
.top-box {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    height: 40px;
    line-height: 40px;

    padding: 0 20px;
}
.top-right ul {
    display: flex;
}
.top-nav li a {
    display: inline-block;
    line-height: 40px;
}
.top-nav li:nth-child(1) a {
    color: #f00;
}
.top-nav li:nth-child(n + 4) {
    margin-left: 20px;
}
.top-nav li span {
    margin: 0 4px;
}

.index-head {
    display: flex;
    align-items: center;
    height: 100px;
}
.logo {
    width: 200px;
}
.logo img {
    width: 100%;
}
.search {
    /* flex-grow: 1; */
    margin-left: 50px;
}
.search form {
    position: relative;
}
.search input[type="text"] {
    width: 600px;
    height: 38px;
    /* border-radius: 38px; */
    outline: none;
    border: 1px solid #ccc;
    padding-left: 19px;
}
.search input[type="text"]:focus {
    border-color: #3385ff;
}
input::placeholder {
    color: #999;
    font-weight: 300px;
    font-size: 14px;
}
.search input[type="submit"] {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 38px;
    background: #3385ff;
    border: 1px solid #317ef3;
    border: none;
    color: #fff;
    /* border-radius: 38px; */
}
.search input[type="submit"]:hover {
    background: #317ef3;
}

.border-b {
    border-bottom: 1px solid #ced4da;
}
</style>


