Vue.component('modal', {
    props:['modalTitle'],
    data(){
      return{
      }
    },
    methods:{
      closeModal(){
        this.$emit("close");
      }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{modalTitle}}</h3>
            <div>
              <slot name="body"></slot>
            </div>
            <footer>
              <button class="btn-close" v-on:click="closeModal">Cierrame</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data(){
      return {
        title:'Reimaginemos nuestro mundo ',
        img:'https://www.bt21.com/im/character/bt21/rj.gif',
        showModal:false
      }
    },
    methods:{
      toggleModal(){
        this.showModal = !this.showModal;
      }
    }
  })