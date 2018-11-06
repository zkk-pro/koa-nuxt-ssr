<template>
  <div class="input-container" :class="{'input-container-border': inputActive}">
    <div class="input-text" v-html="inputText"></div>
    <div class="input-box">
      <input 
        :type="type" 
        v-model="data"
        :placeholder="placeholder" 
        :data-placeholder="placeholder" 
        @focus="inputFocus" 
        @blur="inputBlur"
        @input="inputing" />
        <i v-if="!hideClear" class="iconfont icon-pc-qingchu" @click="clear"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    value: {
      type: String,
      defalut: ''
    },
    hideClear: {
      type: Boolean,
      defalut: true
    }
  },
  data() {
    return {
      inputText: '&nbsp',
      inputActive: false,
      data: ''
    }
  },
  methods: {
    inputFocus(ev) {
      this.inputText = ev.target.dataset.placeholder
      ev.target.placeholder = ''
      this.inputActive = true
    },
    inputBlur(ev) {
      ev.target.placeholder = ev.target.dataset.placeholder
      this.inputText = '&nbsp'
      this.inputActive = false
    },
    inputing() {
      this.$emit('update:value', this.data)
    },
    clear() {
      this.data = ''
    }
  }
}
</script>

<style lang="less" scoped>
.input-container {
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: inline-block;
  width: 100%;
  &.input-container-border {
    border-bottom-color: #416EAF;
  }
  .input-text {
    padding-top: 10px;
    color: #416EAF;
    line-height: 12px;
  }
  .input-box {
    position: relative;
    margin-top: 8px;
    input {
      border: none;
      outline: none;
      width: 100%;
      height: auto;
      font-size: 14px;
      padding-right: 20px;
      &::placeholder {
        // color: #aaa;
      }
    }
    i {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      opacity: .1;
      transition: all .5s;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
}
</style>

