<template>
  <div class="goods-item">
    <div class="preview">
      <img src="~/assets/img/lb2.jpg" alt="">
      <p>
        <nuxt-link to="/">查看商品</nuxt-link><nuxt-link to="/">领券购买</nuxt-link>
      </p>
    </div>
    <div class="des-box">
      <p class="goods-price">券后<span>￥309.0</span></p>
      <p class="name">无印良品四件套夏日河谷 床上用品全棉纯棉简约床笠被套1.5m1.8米</p>
      <div class="merchant">
        <div class="coupon-price"><span>券</span><span>10元</span></div>
        <span>无印良品店</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.goods-item {
  // width: 250px;
  width: 19%;
  border: 1px solid #eee;
  &:hover {
    border-color: #d0021b;
    cursor: pointer;
    &:hover .preview p {
      display: block;
    }
  }
  &:nth-child(n+6) {
    margin-top: 20px;
  }
  // &:not(:nth-child(5n)) {
  //   margin-right: 15px;
  // }
  .preview {
    width: 100%;
    height: 220px;
    position: relative;
    padding: 3px 3px 0;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      line-height: 40px;
      font-size: 16px;
      font-weight: 700;
      display: none;
      a {
        display: inline-block;
        width: 50%;
        text-align: center;
        color: #fff;
        &:nth-child(1) {
          background: #fc8560;
        }
        &:nth-child(2) {
          background: rgb(208, 2, 27);
        }
      }
    }
  }
  .des-box {
    padding: 0 10px 10px;
    .goods-price {
      color: #d0021b;
      font-size: 12px;
      font-weight: 500;
      margin-top: 16px;
      span {
        font-size: 16px;
        font-weight: 700;
      }
    }
    .name {
      font-size: 14px;
      color: #333;
      margin-top: 10px;
      text-align: justify;
      height: 40px;
      overflow: hidden;
    }
    .merchant {
      margin-top: 10px;
      .coupon-price {
        display: inline-block;
        border: 1px solid #d0021b;
        overflow: hidden;
        font-size: 0;
        vertical-align: middle;
        margin-right: 5px;
        span {
          display: inline-block;
          padding: 2px 3px;
          font-size: 12px;
          overflow: hidden;
          color: #d0021b;
          &:nth-child(1) {
            border-right: 1px dashed #d0021b
          }
        }
      }
      span {
        vertical-align: middle;
      }
    }
  }
}

</style>
