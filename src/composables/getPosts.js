import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const jsonData = async () => {
        try {
            const res = await projectFirestore.collection('Posts').get()

            posts.value = res.docs.map(doc => {
                console.log(doc.data());
                return { ...doc.data(), id: doc.id }
            })
        } catch (err) {
            error.value = err.message;
            // console.log(error.value);
        }
    };

    // const fetchData = mounted(() => {
    //     fetch("http://localhost:3000/posts")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             posts.value = data;
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // })

    return { posts, error, jsonData }
}

export default getPosts

