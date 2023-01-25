export default {
  name: 'TheLightboxComponent',

  props: ['item'],

  emits: ['closelightbox'],

  template: `
  <section class="lightbox">
    <img @click="closeLB" href="#" src="images/closeIcon.png" class="lightbox_close">

    <section class="team-member-section">
      <img src="/images/{{person.avatar}}" alt="{{person.name}}'s names">
      <h2>{{ person.name }}</h2>
      <h3>{{ person.role }}</h3>
      <h4>{{ person.descrip }}</h4>
    </section>
  </section>
  `,

  methods: {
      closeLB() {
          this.$emit('closelightbox');
      }
  }
}