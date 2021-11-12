<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.mb-5.container-fondo.p-0
    .px-4.px-md-5.pt-4.pt-md-5
  
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

    .px-4.pb-4.px-md-5.pb-md-5.pt-0.fondo-tonto
      img.mb-5(src="@/assets/curso/intro-01.png")

      p.mb-5 Para un adecuado manejo de la comunicación en un equipo de trabajo, se requiere desarrollar el pensamiento crítico, que se convertirá en una herramienta principal para comprender el mensaje que se desea transmitir y, de esta manera, poder examinar y evaluar lo dicho con una perspectiva más amplia. Por lo anterior, se invita a observar el siguiente video.

      .row.justify-content-center
        .col-xl-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/RcVL0EJkZeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
