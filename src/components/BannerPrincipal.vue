<template lang="pug">
.banner-principal
  .container.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .position-relative
          img.banner-cosa.banner-cosa__1(src="@/assets/curso/cosa.svg")
          img.banner-cosa.banner-cosa__2(src="@/assets/curso/cosa.svg")
          img.banner-img-1(src="@/assets/curso/ini-01.png")
          img.banner-img-2(src="@/assets/curso/ini-02.png")
          img.banner-img-3(src="@/assets/curso/ini-03.png")
</template>

<script>
import mixins from '../../node_modules/ecored-base-pkg/src/mixins/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.banner-img-1, .banner-img-2, .banner-cosa
  position: absolute

.banner-img-1, .banner-img-2
  top: 0
  left: 0

.banner-cosa
  width: 150px
  &__1
    top: 8%
    left: 5%
    animation: floating 3s ease-in-out infinite
  &__2
    right: 10%
    bottom: 8%
    animation: floating 4s ease-in-out infinite

.banner-img-1
  animation: banner-img-1 20s ease-in-out infinite
.banner-img-2
  animation: banner-img-2 20s ease-in-out infinite

.banner-cosa


@keyframes banner-img-1
  0%
    opacity: 0
  6%
    opacity: 1
  47%
    opacity: 1
  53%
    opacity: 0
  100%
    opacity: 0
@keyframes banner-img-2
  0%
    opacity: 1
  6%
    opacity: 0
  47%
    opacity: 0
  53%
    opacity: 1
  100%
    opacity: 1


@keyframes floating
  0%
    transform: translate(0,  0px)
  50%
    transform: translate(0, 15px)
  100%
    transform: translate(0, -0px)
</style>
