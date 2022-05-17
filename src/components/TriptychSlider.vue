<script>
export default {
  name: "triptych-slider",
  props: {
    items: {
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
        {
          id: 3,
          url: require('@/dev/slider/sunset_lands.png'),
          alt: ''
        },
        {
          id: 4,
          url: require('@/dev/slider/twilight_lands.png'),
          alt: ''
        },
        {
          id: 5,
          url: require('@/dev/slider/underwater_sun.png'),
          alt: ''
        },
      ]
    },
    itemWidth: {
      type: Number,
      required: true,
      default: 500
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    displayItems: null,
    frameElement: null,
    innerElement: null,

    firstItem: null,
    lastItem: null,
    
    slideDisabled: false,
    collapsedItemWidth: 0,
    listGap: 50,
  }),
  methods: {
    slideLeft() {
      this.slideDisabled = true
      
      this.innerElement.classList.toggle('slide-left')
      let image = this.displayItems[this.displayItems.length-1]
      this.displayItems.unshift(image)

      setTimeout(() => {
        this.innerElement.classList.toggle('slide-left')
        this.displayItems.pop()
        this.slideDisabled = false
      }, 500)
    },
    slideRight() {
      this.slideDisabled = true

      this.innerElement.classList.toggle('slide-right')
      let image = this.displayItems[0]
      this.displayItems.push(image)
      
      setTimeout(() => {
        this.innerElement.classList.toggle('slide-right')
        image = this.displayItems.shift()
        this.slideDisabled = false
      }, 500)
    },
    resizeItem() {
      if (this.collapsedItemWidth - this.frameElement.offsetWidth) {
        this.collapsedItemWidth = this.frameElement.offsetWidth
      }
    },
    setFirstItem() {
      this.firstItem = this.displayItems[this.displayItems.length-1]
    },
    setLastItem() {
      this.lastItem = this.displayItems[0]
    }
  },
  computed: {
    itemBoundsStyle() {
      let itemWidth = this.collapsed? this.collapsedItemWidth : this.itemWidth
      let evenAddition = this.items.length % 2? 0 : itemWidth + this.listGap
      console.log('itemBound changed!')
      let itemGappedWidth = itemWidth + this.listGap
      let outerWidth = itemWidth * this.items.length + this.listGap * (this.items.length - 1) - evenAddition
      let outerMarginLeft = -itemGappedWidth * parseInt(this.items.length / 2) + evenAddition
      let listGap = this.listGap

      return {
        '--item-width': `${itemWidth}px`,
        '--item-gapped-width': `${itemGappedWidth}px`,
        '--outer-width': `${outerWidth}px`,
        '--outer-margin-left': `${outerMarginLeft}px`,
        '--list-gap': `${listGap}px`
      }
    }
  },
  updated() {
    if (this.collapsed) {
      window.addEventListener('resize', this.resizeItem, {once:true})
      this.resizeItem()
    }
  },
  mounted() {
    this.displayItems = [...this.items]
    this.frameElement = this.$refs.frame
    this.innerElement = this.$refs.inner

    this.setFirstItem()
    this.setLastItem()
  }
}
</script>

<template>
<div class="slider" :class="{'collapsed': collapsed}" :style="itemBoundsStyle">
  <div ref="frame" class="slider-frame">
    <arrow-button :variant="'left'" :disabled="slideDisabled" @click="slideLeft"/>
      <div class="slider-outer">
        <div ref="inner" class="slider-inner">
          <img 
            class="item"
            v-if="firstItem"
            :src="firstItem.url"
          >
          <img
            class="item"
            v-for="image, i in displayItems"
            :key="i"
            :src="image.url"
            :alt="image.alt"
          >
          <img 
            class="item"
            v-if="lastItem"
            :src="lastItem.url"
          >
        </div>
      </div>
    <arrow-button :variant="'right'" :disabled="slideDisabled" @click="slideRight"/>
  </div>
</div>
</template>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
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

.slider.collapsed .arrow-button.left {
  left: 10px;
  /* background-color: var(--color-green-grass-transparent); */
}

.slider.collapsed .arrow-button.right {
  right: 10px;
  /* background-color: var(--color-green-grass-transparent); */
}

.slider-frame {
  content: "";
  z-index: 1;
  position: relative;
  width: var(--item-width);

  margin-left: auto;
  margin-right: auto;
}

.slider.collapsed .slider-frame {
  width: 100%;
}

.slider-inner.slide-left {
  transition: transform .5s ease;
  transform: translateX(var(--item-gapped-width));
  margin-left: calc(-2 * var(--item-gapped-width));
}

.slider-inner.slide-right {
  transition: transform .5s ease;
  transform: translateX(calc(-1 * var(--item-gapped-width)));
}

.slider-outer {
  overflow: hidden;
  left: 50%;
  margin-left: var(--outer-margin-left);
  width: var(--outer-width);
}

.slider-inner {
  display: flex;
  gap: var(--list-gap);
  margin-left: calc(-1 * var(--item-gapped-width));
}

img.item {
  transition: all .5s ease;
  width: var(--item-width);
}

.slider.collapsed img.item {
  width: var(--item-width)
}

img.item.selected {
  transition: all .5s ease;
  /* transform: scale(1.2); */
}
</style>