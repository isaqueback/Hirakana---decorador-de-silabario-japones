<template>
  <ins
    class="adsbygoogle"
    :style="adStyle"
    :data-ad-client="adClient"
    :data-ad-slot="adSlot"
    :data-ad-format="adFormat"
    :data-full-width-responsive="fullWidthResponsive"
  >
  </ins>
</template>

<script>
export default {
  mounted() {
    window.onload = function () {
      (adsbygoogle = window.adsbygoogle || []).push({});
    };
  },
  props: {
    adStyle: {
      type: String,
      require: true,
      default: "display:block",
    },
    adClient: {
      type: String,
      require: true,
    },
    adSlot: {
      type: String,
      require: true,
    },
    adFormat: {
      type: String,
      require: true,
      default: "auto",
    },
    fullWidthResponsive: {
      type: String,
      require: true,
      default: "true",
    },
  },
};
</script>