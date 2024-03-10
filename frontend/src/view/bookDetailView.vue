<template>
<section>
    <div class="container">
        <SectionHeader :title="book.name" :text= "book.author"  />
        <button>Back</button>
        <div class= "row">
            <div class = "col-lg-6 ">
                <img class = "card-img-top" src = "../../images/b_detail.jpg" />
            </div>
            <div class=" col-lg-6 detail-wrapper">
                <p class="lead description mb-4">{{ book.description }}</p>
                <div class=" mb-4">
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Page</strong></div>
                        <div class="col-lg-6">{{book.page}}</div>
                    </div>
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Category</strong></div>
                        <div class="col-lg-6">Fiction</div>
                    </div>
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Rating</strong></div>
                        <div class="col-lg-6">{{ book.rating }}</div>
                    </div>
                    <div class="row border-bottom pb-2">
                        <div class="col-lg-6"><strong>Date</strong></div>
                        <div class="col-lg-6">{{ book.uploadDate }}</div>
                    </div>
                </div>
                <div class="comment-section">
                    <h3 class = "display-6 mb-2">Comments</h3>
                    <div class = "card mb-4">
                        <div class="card-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusamus, quidem deleniti, similique soluta laudantium minima nihil aperiam dolorem ratione corrupti repudiandae, sunt doloribus dolor vel fuga reiciendis pariatur! Amet.
                            </p>
                            <div class = "d-flex justify-content-between">
                                <p class = "fw-bold fst-italic">John Doe</p>
                                <div class = "d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class = "ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                    </div>
                </div>
                    <div class = "card mb-4">
                        <div class="card-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusamus, quidem deleniti, similique soluta laudantium minima nihil aperiam dolorem ratione corrupti repudiandae, sunt doloribus dolor vel fuga reiciendis pariatur! Amet.
                            </p>
                            <div class = "d-flex justify-content-between">
                                <p class = "fw-bold fst-italic">John Doe</p>
                                <div class = "d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class = "ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                    </div>
                </div>
                    <div class = "card mb-4">
                        <div class="card-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusamus, quidem deleniti, similique soluta laudantium minima nihil aperiam dolorem ratione corrupti repudiandae, sunt doloribus dolor vel fuga reiciendis pariatur! Amet.
                            </p>
                            <div class = "d-flex justify-content-between">
                                <p class = "fw-bold fst-italic">John Doe</p>
                                <div class = "d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class = "ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                    </div>
                </div>
                    <div class = "card mb-4">
                        <div class="card-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde accusamus, quidem deleniti, similique soluta laudantium minima nihil aperiam dolorem ratione corrupti repudiandae, sunt doloribus dolor vel fuga reiciendis pariatur! Amet.
                            </p>
                            <div class = "d-flex justify-content-between">
                                <p class = "fw-bold fst-italic">John Doe</p>
                                <div class = "d-flex align-items-center">
                                    <p>Upvote</p>
                                    <p class = "ps-2"><strong>8</strong></p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> 
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import books from "@/db.js"
    export default {
        name: "bookDetailView",
        components: {
            SectionHeader
        },
        data(){
            return {
                book:null
            }
        },
        created(){
            const bookId = this.$route.params.id;
            this.book = books.find(book => book.id === parseInt(bookId))
            console.log(this.book);
        }
    }
</script>

<style scoped>
.detail-wrapper{
    max-height: 740px;
    display: flex;
    flex-direction: column;
}
.comment-section{
    flex-grow: 1;
    overflow-y: auto;
}
.description{
    min-height: 150px;
    max-height: 250px;
    overflow-y: auto;
    
}
</style>