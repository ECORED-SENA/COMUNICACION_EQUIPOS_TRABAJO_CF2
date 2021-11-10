<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.container-fondo
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    img.mb-5(src="@/assets/curso/intro-01.png")

    p.mb-5 Para un adecuado manejo de la comunicación en un equipo de trabajo, se requiere desarrollar el pensamiento crítico, que se convertirá en una herramienta principal para comprender el mensaje que se desea transmitir y, de esta manera, poder examinar y evaluar lo dicho con una perspectiva más amplia. Por lo anterior, se invita a observar el siguiente video.

    .row.justify-content-center
      .col-xl-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
