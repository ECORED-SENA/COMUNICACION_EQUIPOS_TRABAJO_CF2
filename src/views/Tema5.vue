<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Proceso comunicativo

    p.mb-5 La comunicación organizacional es la base del proceso comunicativo en las empresas, consiste en el procedimiento de emisión y recepción de mensajes que estas llevan a cabo, se basa en las relaciones, ya sea de carácter interno o externo. Antes de que la comunicación se establezca, se requiere que tenga un propósito, el cual será expresado en un mensaje por transmitirse. 
    
    .row.justify-content-center
      .col-lg-10.position-relative
        .coso-0
          img(src="@/assets/curso/coso-0.svg")
        .bloque-texto-a.color-acento-contenido.p-4.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h4.mb-0 Según Kreps (citado en Ramos et al., 2017), la comunicación organizacional
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .bloque-texto-b__texto
                  h2.me-2
                    i.fas.fa-quote-left
                  p.mb-0 es el proceso por medio del cual los miembros recolectan información pertinente acerca de su organización y los cambios que ocurren dentro de ella
                  h2.last.ms-2
                    i.fas.fa-quote-right

    p.mb-0 Que la comunicación sea apropiada es una responsabilidad que todos los integrantes de la organización deben compartir, para que esté en sintonía con los objetivos establecidos.

    Separador

    #t5-1.titulo-segundo.color-acento-contenido
      h2 5.1 Elementos del proceso comunicativo

    p.mb-5 Los elementos de la comunicación conforman la base principal para que sea eficaz y se lleve a cabo con éxito el mensaje que se pretende transmitir; por lo tanto, se hace necesario conocer el proceso comunicativo en las organizaciones con los siguientes elementos:

    ImagenInfografica.t-grandes.color-secundario
      template(v-slot:imagen)
        img(src='@/assets/curso/t5-01.svg', alt='Texto que describa la imagen')

      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="19.5%" y="8%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Emisor
            p.text-small.mb-0 Comienza un mensaje al codificar una idea, pensamiento, percepción o experiencia.
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-02.svg")

      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="78.5%" y="8%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Receptor
            p.text-small.mb-0 Es el destinatario, a quién va dirigido el mensaje.
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-03.svg")
       
      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="10%" y="36%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Mensaje
            p.text-small.mb-0 Es el producto físico real desde la codificación dada por el emisor. Ejemplo:  cuando alguien conversa, lo que habla es el mensaje; si una persona escribe, la escritura es el mensaje; y si se hace un gesto, la expresión facial es el mensaje.
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-04.svg")
       
      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="29%" y="36%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Codificación 
            p.text-small.mb-0 Transcripción que se hace de los pensamientos o ideas gestadas por el emisor. Se utiliza un código que es un conjunto de signos y reglas combinados usados para construir el mensaje.
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-08.svg")
       
      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="49%" y="36%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Canal 
            p.text-small.mb-0 Es el medio utilizado para transmitir el mensaje. 
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-05.svg")
       
      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="49%" y="64%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Ruido 
            p.text-small.mb-0 Son las barreras de comunicación que deforman la claridad del mensaje.
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-06.svg")
       
      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="49%" y="93%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Retroalimentación 
            p.text-small.mb-0 Es la forma para determinar si el mensaje transferido ha sido comprendido. 
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-07.svg")

      .tarjeta-n.color-secundario--claro.position-relative.p-4(x="88%" y="36%")
        .cosa-verde.cosa-izq
        .cosa-verde.cosa-der
        .row.align-items-center.mb-2
          .col-lg-6
            h5 Decodificación 
            p.text-small.mb-0 Traducción que se hace de los pensamientos o ideas gestadas por el emisor.
          .col-lg-6.d-none.d-lg-block
            img(src="@/assets/curso/t5-09.svg")

    Separador

    #t5-2.titulo-segundo.color-acento-contenido
      h2 5.2 Conflictos en la comunicación y sus soluciones

    p.mb-5 El trabajo en equipo, el manejo de conflictos y la comunicación eficaz conforman una trilogía determinante para el desarrollo y profesionalización del trabajo que realizan diversos grupos organizacionales en búsqueda de mejorar su participación, a partir de la labor que desempeñan en la empresa. Este concepto permite conocer los estilos de comunicación frente a los conflictos, los cuales se pueden observar en la siguiente presentación.

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Dentro de las estrategias para resolver conflictos en el trabajo, se inicia con una discusión en una reunión, por correo electrónico, con un cliente, durante una llamada, o por algún otro tipo de interacción. Estas estrategias se pueden observar a continuación.

    ImagenInfografica.t-blanca.color-secundario
      template(v-slot:imagen)
        img(src='@/assets/curso/t5-10.jpg', alt='Texto que describa la imagen')

      .tarjeta-infografia.p-3(x="41.6%" y="90.8%" numero="1")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 1
          .col
            h4.mb-0 Pausar, respirar y decidir qué hacer:
        p.text-small.text-center.mb-0 Si se inicia una discusión, lo primero que se debe hacer es respirar y pensar en cómo reaccionar ante la situación; esto evita las reacciones emocionales y mejora la actitud de todos los involucrados en el conflicto.

      .tarjeta-infografia.p-3(x="51.6%" y="80.5%" numero="2")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 2
          .col
            h4.mb-0 Solucionar el problema en privado:
        p.text-small.text-center.mb-0 Si el conflicto se inició en público, se puede decir que se tratará el tema en privado; esto permite que los involucrados se sientan más seguros y evita que terceros se inmiscuyan.

      .tarjeta-infografia.p-3(x="41.6%" y="71.8%" numero="3")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 3
          .col
            h4.mb-0 Determinar el medio más apropiado para tratar el problema:
        p.text-small.text-center.mb-0 Es importante asegurar que las personas en la discusión tengan un diálogo significativo, donde se encuentren soluciones.

      .tarjeta-infografia.p-3(x="51.6%" y="61.5%" numero="4")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 4
          .col
            h4.mb-0 Crear una apertura para la comunicación, de manera que todos puedan opinar:
        p.text-small.text-center.mb-0 Permitir que todos tengan la oportunidad de expresar sus opiniones ante la situación y luego enfocarse en el problema como tal.

      .tarjeta-infografia.p-3(x="41.6%" y="52.9%" numero="5")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 5
          .col
            h4.mb-0 Utilizar técnicas de escucha activa al abordar el conflicto: 
        p.text-small.text-center.mb-0 Ofrecer señales verbales de que se presta atención, parafrasear, hacer preguntas, entre otras. 

      .tarjeta-infografia.p-3(x="51.6%" y="42.5%" numero="6")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 6
          .col
            h4.mb-0 Repetir la comprensión de los problemas: 
        p.text-small.text-center.mb-0 Esto evita malentendidos y permite corregir en caso de que haya malinterpretación del mensaje. 

      .tarjeta-infografia.p-3(x="41.6%" y="34.3%" numero="7")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 7
          .col
            h4.mb-0 Utilizar la palabra “yo” para hablar sobre cualquier emoción o reacción al problema: 
        p.text-small.text-center.mb-0 Evita culpar a los demás y que se pongan a la defensiva.

      .tarjeta-infografia.p-3(x="51.6%" y="24%" numero="8")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 8
          .col
            h4.mb-0 Permitir el silencio en las conversaciones difíciles:
        p.text-small.text-center.mb-0 Da espacio a la reflexión y permite considerar las respuestas de los participantes en la discusión.

      .tarjeta-infografia.p-3(x="41.6%" y="17.5%" numero="9")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 9
          .col
            h4.mb-0 Entender cuándo no hay solución:
        p.text-small.text-center.mb-0 Tomar la decisión de escalar el caso cuando no hay modo de resolver la situación.

      .tarjeta-infografia.p-3(x="51.6%" y="11.2%" numero="10")
        .row.align-items-center.mb-2
          .col-auto
            .numero
              span 10
          .col
            h4.mb-0 Hacer seguimiento a la resolución del conflicto:
        p.text-small.text-center.mb-0 Es la forma de asegurar que el problema ha sido solucionado. Se hace con una conversación, una llamada o un correo electrónico. Se cierra el tema reiterando la solución acordada, agradeciendo y dejando puertas abiertas.

</template>

<script>
export default {
  name: 'Tema5',
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
