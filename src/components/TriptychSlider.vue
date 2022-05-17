<script>
export default {
  name: "triptych-slider",
  props: {
    images: {
      type: Array[String],
      default: [
        {
          id: 0,
          url: require('@/dev/slider/foggy_islands.png'),
          alt: ''
        },
        {
          id: 1,
          url: require('@/dev/slider/night.png'),
          alt: ''
        },
        {
          id: 2,
          url: require('@/dev/slider/promo_village.png'),
          alt: ''
        },
        // {
        //   id: 3,
        //   url: require('@/dev/slider/sunset_lands.png'),
        //   alt: ''
        // },
        // {
        //   id: 4,
        //   url: require('@/dev/slider/twilight_lands.png'),
        //   alt: ''
        // },
        // {
        //   id: 5,
        //   url: require('@/dev/slider/underwater_sun.png'),
        //   alt: ''
        // },
      ]
    }
  },
  data: () => ({
    displayImages: null,
    frameElement: null,
    firstItem: null,
    lastItem: null,
    innerElement: null,
    slideDisabled: false,

    itemWidth: 400,
    listGap: 50,
  }),
  methods: {
    slideLeft() {
      this.slideDisabled = true
      

      this.innerElement.classList.toggle('slide-left')
      let image = this.displayImages[this.displayImages.length-1]
      this.displayImages.unshift(image)
      setTimeout(() => {
        this.innerElement.classList.toggle('slide-left')
        this.displayImages.pop()

        this.slideDisabled = false
      }, 500)
    },
    async slideRight() {
      this.slideDisabled = true
      
      this.firstItem = this.displayImages[this.displayImages.length -3]
      this.lastItem = this.displayImages[this.displayImages.length -1]

      this.innerElement.classList.toggle('slide-right')
      let image = this.displayImages[0]
      this.displayImages.push(image)
      setTimeout(() => {
        this.innerElement.classList.toggle('slide-right')
        image = this.displayImages.shift()
        
        this.slideDisabled = false
      }, 500)
    },
    setFirstItem() {
      this.firstItem = this.displayImages[this.displayImages.length-1]
    },
    setLastItem() {
      this.lastItem = this.displayImages[0]
    }
  },
  computed: {
    itemBoundsStyle() {
      return {
        '--image-width': `${this.itemWidth}px`,
        '--list-gap': `${this.listGap}px`
      }
    },
    rightImage() {
      // let index = 0
      if (this.selectedIndex)
      this.displayImages[this.selectedIndex]
      return null
    }
  },
  mounted() {
    this.displayImages = [...this.images]
    this.frameElement = this.$refs.frame
    this.innerElement = this.$refs.inner

    this.setFirstItem()
    this.setLastItem()
    
    // this.innerElement.style.left = `${this.frameElement.offsetLeft}px`

    // this.innerElement.style.left = `-${this.itemWidth + this.listGap}px`
  },
  watch: {
    images: {
      handler() {
        // this.innerElement.style.left = `-${this.itemWidth - this.listGap}px`
        console.log(this.images)
      }, deep: true
    },
    selectedIndex() {
      console.log(this.selectedIndex);
    }
  }
}
</script>

<template>
<div class="slider" :style="itemBoundsStyle">
  <div ref="frame" class="slider-frame">
    <arrow-button :variant="'left'" :disabled="slideDisabled" @click="slideLeft"/>
    <!-- <transition-group name="list-items"> -->
      <div ref="inner" class="slider-inner">
        <!-- <div v-if="displayImages && displayImages.length <= 3"></div> -->
        <img 
          class="item"
          v-if="firstItem"
          :src="firstItem.url">
        <img
          class="item"
          
          v-for="image, i in displayImages"
          
          :key="i"
          :src="image.url"
          :alt="image.alt">
        <img 
          class="item"
          v-if="lastItem"
          :src="lastItem.url">
        <!-- <div class="item" style="background: red; width: var(--image-width)"></div> -->
      </div>
    <!-- </transition-group> -->
    <arrow-button :variant="'right'" :disabled="slideDisabled" @click="slideRight"/>
  </div>
  
</div>
</template>

<style scoped>
.slider {
  position: relative;
  /* display: flex; */
  
  /* height: 300px; */
}

.arrow-button {

}

.arrow-button.left {
  position: absolute;
  left: -40px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}

.arrow-button.right {
  position: absolute;
  right: -40px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}

.slider-frame {
  content: "";
  /* z-index: 1; */
  position: relative;
  width: var(--image-width);
  height: 100%;

  /* left: 0;
  right: 0; */
  margin-left: auto;
  margin-right: auto;

  /* background-color: red; */
  border: 1px solid red;
}

.slider-inner.slide-left {
  transition: transform .5s ease;
  transform: translateX(450px);
  margin-left: calc(calc(var(--image-width) + var(--list-gap)) * -3);
}

.slider-inner.slide-right {
  transition: transform .5s ease;
  transform: translateX(-450px);
}

.slider-inner {
  /* position: relative; */
  display: inline-flex;
  gap: var(--list-gap);
  /* left: 50%;
  transform: translateX(-50%); */

  
  /* transform: translateX(-450px); */
  margin-left: calc(calc(var(--image-width) + var(--list-gap)) * -2);
}

img.item {
  /* position: relative; */
  /* transform: scale(1); */
  transition: all .5s ease;
  width: var(--image-width);
}

img.item.selected {
  transition: all .5s ease;
  /* transform: scale(1.2); */
}
</style>