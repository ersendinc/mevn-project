<template>
 <div class="row" >
            <div class="col-sm-6 col-md-4 col-xl-3 mb-5" v-for="book in books" :key="book.id">
                <RouterLink :to = "'/books/' + book.id">
                    <BookItemm :book="book"/>
                </RouterLink>
                
            </div>
        </div>
</template>

<script>
import BookItemm from '@/components/BookItemm.vue';
import {RouterLink} from 'vue-router';
    export default {
        name:"BookList",
        components: { 
            BookItemm,
            RouterLink
        },
        props: {
          books:{
            type: Array,
            default: () => ([])
            }   
        }  
    }
</script>

<style lang="scss" scoped>

</style>