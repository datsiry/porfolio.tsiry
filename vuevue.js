const acceuil = {
    template: "#acceuil"
}
const competences = {
    template: '#competences'
}
const slideSlide = {
    template: `
        <Transition :name="direction">
            <div class="exp_p" v-if="visible">
            <slot></slot>     
            </div>
        </Transition>
        `,
    data(){
        return{
            slide_index:0,
        }
    },
    computed:{
        direction(){
            return 'projets_'+this.$parent.direction
        },
        visible(){
            return this.slide_index === this.$parent.index
        }
    }

}
const slide = {
    template: `<div class="projets">
    <span class="prev btn btn" @click="prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="aqua" viewBox="0 0 20 20"><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/></svg>
            précédent
        </span>
        <span class="next btn btn"" @click="next">
            suivant
            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="aqua" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
        </span>  
        <slot></slot> 
   </div>`,
    data() {
        return {
            index: 0,
            slides:[],
            direction:null
        }
    },
    computed:{
        slideCount(){
            return this.slides.length
        }
    },
    methods:{
        prev(){
            this.index--
            this.direction='prev'
            if(this.index <0){
                this.index = this.slideCount -1
            }
        },
        next(){
            this.index++
            this.direction='next'
            if(this.index > this.slideCount-1){
                this.index = 0
            }
        }
    },
    mounted(){
        this.slides = this.$children;
        this.slides.forEach(function(s,i){
            s.slide_index = i
        });
    }
}
const projets = {
    template: '#projets', components: { slide,slideSlide }
}
const router = new VueRouter({
    routes: [
        { path: '/', component: acceuil },
        { path: '/projets', component: projets },
        { path: '/competences', component: competences }
    ]
})
let vm = new Vue({
    el: "#app",
    router,
})