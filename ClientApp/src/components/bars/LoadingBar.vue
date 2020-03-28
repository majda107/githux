<template>
  <div>
    <transition name="fade">
      <div class="container" v-if="active">
        <!-- <md-progress-bar class="md-accent" md-mode="query"></md-progress-bar> -->
        <!-- Loading... -->
        <div class="loader loader--style2" title="1">
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 50 50"
            style="enable-background:new 0 0 50 50;"
            xml:space="preserve"
          >
            <path
              fill="#000"
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["active"]
};
</script>

<style lang="sass" scoped>
@import '../../../sass/abstracts/variables'

.fade-enter-active,
.fade-leave-active 
  transition: opacity 1s
  transition: height 1200ms
  height: 30px
  opacity: 1

.fade-enter, .fade-leave-to
  opacity: 0
  height: 0


svg path,
svg rect
   fill: $primary


.container 
  display: flex
  justify-content: center
  align-items: center

</style>