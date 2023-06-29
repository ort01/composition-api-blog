import { ref } from "vue";

const useTags = (posts) => {

    const tags = ref([])
    const tagSet = new Set() // its like an array but the SET cannot contain duplicates (['vue','react',XXX'vue'XXX])

    posts.forEach(post => {
        post.tags.forEach(tag => {
            tagSet.add(tag) // .add - that how you add something to the set (like push with arrays)
        })
    })
    // console.log(tagSet);

    tags.value = [...tagSet]


    return { tags }
}

export default useTags