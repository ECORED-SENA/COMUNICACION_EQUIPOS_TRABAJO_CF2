<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Canales de comunicación

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p Un canal de comunicación se define como el medio físico utilizado para transmitir datos, mensajes o información, que envía un emisor a uno o varios receptores.

        h5 Algunas características de los canales de comunicación son:

        ul.lista-ul--color
          li 
            i.fas.fa-dot-circle.text-small
            p.mb-0 Ofrecen un servicio definido y secuencial, o sea, dependen de la participación conjunta del emisor y del receptor.
          li 
            i.fas.fa-dot-circle.text-small
            p.mb-0 Se usa un código compartido entre los interlocutores.
          li 
            i.fas.fa-dot-circle.text-small
            p.mb-0 Se pueden utilizar señales acústicas, ópticas y táctiles.
          li 
            i.fas.fa-dot-circle.text-small
            p.mb-0 Están disponibles ante cualquier problema o necesidad.

        p.mb-0 <em>Grosso modo</em>, los canales se dividen en:

      .col-lg-5
        img(src="@/assets/curso/t3-01.png")

    .tarjeta--container.tarjetas--conectadas-b.row
      .col-lg.tarjeta.color-acento-contenido--claro.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t3-02.svg')
          
        h2.text-center Personales
        p.ep.text-center.mb-0 Son aquellos en que la comunicación es directa entre uno varios receptores, es decir, el proceso 
          b comunicativo 
          | se establece cara a cara o voz a voz.

      .col-lg.tarjeta.color-primario--claro.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t3-03.svg')
          
        h2.text-center Masivos
        p.text-center.mb-0 Son los que permiten que un emisor llegue al mismo tiempo a una multitud de receptores de modo directo o en diferido, entre los cuales se pueden mencionar como la radio, prensa, televisión y redes sociales.  

    Separador

    #t3-1.titulo-segundo.color-acento-contenido
      h2 3.1 Tipos de canales en la comunicación

    p.mb-5 Los tipos de canales en la comunicación son el sustento mediante el cual se transmite el mensaje desde el emisor hasta el receptor, clasificándose en: personales, impersonales, unidireccionales y bidireccionales, los cuales se describen a continuación en la siguiente presentación.

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Canales personales" :icono="require('@/assets/curso/t3-13.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Permiten una comunicación directa entre emisor y receptor, por lo tanto, hay mayor interacción en el proceso comunicativo.
              br
              | Ejemplos: teléfono, reunión de amigos.
          .col-lg-5
            img(src="@/assets/curso/t3-04.svg")

      .py-4.py-md-5(titulo="Canales impersonales" :icono="require('@/assets/curso/t3-14.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Están dirigidos a un gran número de receptores. Por lo general, los mensajes no están personalizados.
              br
              | Ejemplos: radio o televisión.
          .col-lg-5
            img(src="@/assets/curso/t3-05.svg")

      .py-4.py-md-5(titulo="Canales unidireccionales" :icono="require('@/assets/curso/t3-15.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Son canales utilizados para dar mensajes no personalizados a una gran audiencia, el emisor no recibe una respuesta directa por parte del público. No hay retroinformación.
              br
              | Ejemplos: televisión, videos en Internet.
          .col-lg-5
            img(src="@/assets/curso/t3-06.svg")

      .py-4.py-md-5(titulo="Canales bidireccionales" :icono="require('@/assets/curso/t3-16.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p Permiten una interacción directa y constante entre el emisor y el receptor.
              br
              | Ejemplos: videollamadas, <em>chats</em>.
          .col-lg-5
            img(src="@/assets/curso/t3-07.svg")

    p.mb-5 Los canales de comunicación que son más conocidos en las organizaciones se pueden identificar como la comunicación interna y la externa, cuya forma de interacción es dada entre la empresa con sus empleados o clientes internos y el público externo. Se puede dar un concepto de cada canal teniendo en cuenta su clasificación.

    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-dot-circle.text-small
        div
          h5.d-inline La comunicación interna: 
          | incluye todo aquello que se expresa o se concibe en una organización, y se clasifica de la siguiente manera, según ilustración.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3. 
          span La comunicación interna

        .tabla-a.color-acento-contenido
          table
            caption Nota. Elaboración a partir de Editorial Etecé (2021).
            thead
              tr
                th.p-4
                th.p-4(colspan="2")
            tbody
              tr
                td 
                  h5.mb-0.text-center Comunicación descendente
                td.text-center(colspan="2") Es aquella comunicación que va dirigida de los altos mandos a los subordinados o de jefes a colaboradores. Suele ser de carácter unipersonal, con el propósito de notificar, informar decisiones o dar órdenes.

              tr
                td 
                  h5.mb-0.text-center Comunicación horizontal
                td.text-center(colspan="2") Es aquella comunicación que se da entre pares, por ejemplo, entre colegas de un mismo equipo o entre coordinaciones del mismo nivel, para compartir información, dar respuesta a solicitudes o inquietudes.

              tr
                td 
                  h5.mb-0.text-center Comunicación ascendente
                td.text-center(colspan="2") Es la comunicación que se realiza de subalternos a jefes, directivos, gerentes, etc., con el objeto de generar retroalimentación, dar sugerencias o hacer peticiones formales. 

    p.mb-5 Entre las herramientas utilizadas en la comunicación interna se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-10
        img(src="@/assets/curso/t3-08.svg")

    ul.lista-ul--color
      li 
        i.fas.fa-dot-circle.text-small
        div
          h5.d-inline La comunicación externa: 
          | es la interacción que se da entre una organización y los agentes externos relacionados con ella, como son sus clientes, proveedores, competidores y público en general.

    p.mb-5 Algunas herramientas usadas en comunicación externa son:

    .row.justify-content-center
      .col-lg-10
        img(src="@/assets/curso/t3-09.svg")

    Separador

    #t3-2.titulo-segundo.color-acento-contenido
      h2 3.2 Importancia de los canales de comunicación

    p.mb-5 Según los objetivos que se persigan en una negociación, será necesario utilizar uno u otro canal de comunicación para tener éxito en la organización. A continuación, se hace mención sobre la importancia de utilizar de manera eficaz estos canales.

    .row.justify-content-center
      .col-md-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-nn.tarjeta-nn--a.color-primario.pt-5.pb-4.px-4.h-100
          .row.justify-content-center.mb-4
            .col-10
              img(src="@/assets/curso/t3-10.svg")
          p.mb-0 Los canales de comunicación tienen alta relevancia en el mundo empresarial para mantener la interacción con sus diferentes públicos y cumplir con las expectativas de los clientes internos y externos. La selección de los canales debe realizarse con cuidado y estar fundamentada en una estrategia que contempla al público objetivo y el análisis de las particularidades del negocio.
      
      .col-md-6.col-lg-4.mb-3.mb-lg-0
        .tarjeta-nn.tarjeta-nn--b.color-secundario.pt-5.pb-4.px-4.h-100
          .row.justify-content-center.mb-4
            .col-10
              img(src="@/assets/curso/t3-11.svg")
          p.mb-0 Los canales de comunicación son un pilar al momento de construir identidad corporativa, al establecer recordación de marca, en la captación y fidelización de clientes. Las herramientas escogidas para este fin permiten crear un vínculo real y así continuar con una comunicación fluida entre las partes.


      .col-md-6.col-lg-4
        .tarjeta-nn.tarjeta-nn--a.color-primario.pt-5.pb-4.px-4.h-100
          .row.justify-content-center.mb-4
            .col-10
              img(src="@/assets/curso/t3-12.svg")
          p.mb-0 La tecnología y la volatilidad con que los consumidores buscan productos y servicios hace que las organizaciones encuentren soluciones innovadoras al momento de usar los diferentes tipos de canales para comunicarse con sus clientes, crear nexos de confianza y recibir realimentación relacionada con el servicio prestado, dar más alcance a la marca y, a su vez, para aumentar ventas e incrementar ingresos.

</template>

<script>
export default {
  name: 'Tema3',
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
