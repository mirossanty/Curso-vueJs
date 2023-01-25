new Vue({
    el: '#app',
    data(){
      return {
        courses: [],
        title: '',
        time: '',
        band: '',
      }
    },
    methods:{
      submitCourse(){
        if(this.title && this.time){
           this.courses.push({
            title: this.title,
            time: this.time,
          })
          this.band = true
        }else{
          this.band = false
        }
      }
    },
    computed:{
      totalTime(){
        let timeTotal = 0;
        this.courses.map(course =>{
          timeTotal += Number(course.time)
        });
        return timeTotal;
      }
    }
  })