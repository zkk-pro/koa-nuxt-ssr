import Vue from 'vue'
import { 
  Button,
  Pagination,
  Carousel,
  CarouselItem
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(Button)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
