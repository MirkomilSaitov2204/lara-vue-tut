<template>
  <div>
      <div v-if="loading">Loading ...</div>
      <div v-else>
          <div>Row: {{ row }} </div>
          <BookableItem
              v-if="bookables"
              v-for="(b, index) in bookables"
              :key="index"
              :title="b.title"
              :price="b.price"
              :content="b.content"
          />
      </div>

  </div>
</template>

<script>
import BookableItem from "./components/BookableItem";
export default {
    name: "Bookable",
    components:{
        BookableItem
    },
    data(){
        return{
            bookables: null,
            loading: false,
            column: 3
        }
    },
    computed:{
        row(){
            return this.bookables ? Math.ceil(this.bookables.length / this.column) : 0
        }
    },
    created() {
        this.loading = true;

        setTimeout(()=>{
            this.loading = false;
            this.bookables  = [
                {
                    title: 'title 1',
                    price: 'price 1',
                    content: 'content 1'
                },
                {
                    title: 'title 2',
                    price: 'price 2',
                    content: 'content 2'
                },
                {
                    title: 'title 3',
                    price: 'price 3',
                    content: 'content 3'
                }
            ]
        },2000)
    }

}
</script>

<style scoped>

</style>
