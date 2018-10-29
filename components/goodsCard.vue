<template>
  <div class="card">
    <div class="preview">
      <img src="~/assets/img/signup-bg.jpg" alt="图片加载失败@_@">
    </div>
    <div class="goods-info">
      <p class="name"><span>包邮</span>韩版时尚女包13223仙女夏天帆布包森系</p>
      <div class="info">
        <p class="old-price">原价：<span>￥20.0</span></p>
        <p>已领 578 张优惠券</p>
      </div>
      <div class="coupon-price">
        <div>
          <span class="coupon-num">200.0</span><span class="coupon-ico">券后价</span>
        </div>
        <nuxt-link to="/" class="coupon-link">
          <span>去淘宝</span><span>火速抢券</span>
        </nuxt-link>
      </div>
      <!-- <div class="coupon-btn">
        <span>领取￥88.00优惠券</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card {
  width: 260px;
  background: #fff;
  // padding-bottom: 10px;
  margin: 20px 20px 0 0;
  &:hover {
    box-shadow: 2px 2px 4px #ddd;
  }
  .preview {
    width: 260px;
    height: 260px;
    overflow: hidden;
    cursor: pointer;
    &:hover img {
      transition: all 0.8s;
      transform: scale(1.2)
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .goods-info {
    padding: 0 10px;
  }
  .name {
    line-height: 16px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      display: inline-block;
      text-align: center;
      line-height: 16px;
      width: 30px;
      background: #FFA248;
      color: #fff;
      font-weight: 500;
      margin-right: 5px;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .old-price {
      span {
        color: #f00;
        text-decoration: line-through;
      }
    }
  }
  .coupon-price {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    .coupon-num {
      color: #f00;
      font-size: 18px;
      font-weight: 600;
      vertical-align: middle;
      &::before{
        content: '￥';
        font-size: 14px;
      }
    }
    .coupon-ico {
      position: relative;
      display: inline-block;
      background: #f00;
      color: #fff;
      padding: 2px;
      margin-left: 8px;
      font-weight: 500;
      vertical-align: middle;
      &::before{
        content: '';
        display: inline-block;
        border-style: solid;
        border-width: 5px 8px;
        padding: 1px;
        border-color: transparent #f00 transparent transparent;
        position: absolute;
        left: -16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .coupon-link {
    border: 1px solid #ff464e;
    border-radius: 4px;
    font-size: 0;
    vertical-align: middle;
    padding: 0;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    color: #fff;
    span {
      display: inline-block;
      font-size: 12px;
      padding: 0 4px;
      color: #ff464e;
    }
    span:nth-child(2) {
      background: #ff464e;
      color: #fff;
    }
  }
  // .coupon-btn {
  //   position: relative;
  //   height: 42px;
  //   margin-top: 10px;
  //   span {
  //     background: #FFA248;
  //     color: #fff;
  //     font-size: 14px;
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     padding: 6px;
  //     font-weight: 500;
  //     border-radius: 4px;
  //     cursor: pointer;
  //     &:hover {
  //       background: #fd8104;
  //       transform: scale(1.1);
  //       transition: all .5s;
  //     }
  //   }
  // }
}
</style>
