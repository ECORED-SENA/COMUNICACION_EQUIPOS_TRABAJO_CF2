<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolos de atención

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Garantizar el servicio al cliente es una prioridad para las organizaciones que se enfrentan a una creciente oferta del mercado e implica encontrar la forma de fidelizarlo. Desde este punto de vista, se establecen protocolos de atención que sirven de guía para que los empleados cumplan con los procedimientos apropiados para relacionarse con los clientes.
        p.mb-0 Un protocolo de atención, aparte de ser una guía para los colaboradores de la organización sobre la manera de tratar con el cliente, también contiene la visión y los criterios de lo que significa un buen servicio al cliente y busca garantizar que la interacción con el cliente sea eficaz. Se invita a escuchar el siguiente podcast.

      .col-lg-5
        img(src="@/assets/curso/t4-01.png")

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.px-5.py-4
          .row.justify-content-around.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              img(src="@/assets/curso/t4-02.svg")
            .col-lg-8
              .titulo-segundo.color-acento-contenido.mb-4
                h2.text-white Blog protocolos de atención
              
              p.text-white Para afianzar sus conocimientos en los protocolos de servicio al cliente y cómo diseñarlo, se invita a visitar el siguiente blog.

              a.boton
                span.me-1 Video
                i.fas.fa-angle-right

    p.mb-5 A continuación, se mencionan algunas ventajas de un protocolo de servicio al cliente:

    .row.justify-content-center
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Maneras de adquirir y mejorar la comunicación asertiva
        figure
          img(src="@/assets/curso/t4-03.svg")
          figcaption Nota. Elaboración a partir de Hammond (2021).

      .col-lg-10.mb-5
        .tarjeta-n.color-secundario--claro.p-5
          .row.justify-content-around.align-items-center
            .col-lg-8
              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-dot-circle.text-small
                  | Incrementa la rapidez en las respuestas: ayuda a identificar peticiones, quejas y reclamos, para darles solución en el menor tiempo posible.
                li 
                  i.fas.fa-dot-circle.text-small
                  | Favorece el diálogo fluido: ofrece la guía y las herramientas para conservar la interacción entre la empresa y los clientes.
                li 
                  i.fas.fa-dot-circle.text-small
                  | Fortalece a los representantes de servicio al cliente: contiene la información útil sobre los procedimientos de cómo resolver conflictos planteados por el cliente.
                li 
                  i.fas.fa-dot-circle.text-small
                  | Garantiza la interacción positiva con los clientes: contiene una guía con múltiples escenarios que se pueden presentar al interactuar con el cliente.
                li.mb-0
                  i.fas.fa-dot-circle.text-small
                  | Estandariza la calidad del servicio al cliente: los procedimientos de la organización se estandarizan de forma precisa y sostienen un flujo de trabajo constante.
            .col-6.col-lg-4
              img(src="@/assets/curso/t4-04.svg")

      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Pasos para realizar un protocolo del servicio al cliente
        figure
          img(src="@/assets/curso/t4-05.svg")
          figcaption Nota. Elaboración a partir de Hammond (2021).

      .col-lg-10
        .tarjeta-n.color-acento-contenido--claro.p-5
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-dot-circle.text-small
              | Incrementa la rapidez en las respuestas: ayuda a identificar peticiones, quejas y reclamos, para darles solución en el menor tiempo posible.
            li 
              i.fas.fa-dot-circle.text-small
              | Favorece el diálogo fluido: ofrece la guía y las herramientas para conservar la interacción entre la empresa y los clientes.
            li 
              i.fas.fa-dot-circle.text-small
              | Fortalece a los representantes de servicio al cliente: contiene la información útil sobre los procedimientos de cómo resolver conflictos planteados por el cliente.
            li 
              i.fas.fa-dot-circle.text-small
              | Garantiza la interacción positiva con los clientes: contiene una guía con múltiples escenarios que se pueden presentar al interactuar con el cliente.
            li.mb-0
              i.fas.fa-dot-circle.text-small
              | Estandariza la calidad del servicio al cliente: los procedimientos de la organización se estandarizan de forma precisa y sostienen un flujo de trabajo constante.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
