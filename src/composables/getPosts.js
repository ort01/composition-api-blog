import { ref } from "vue";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const jsonData = async () => {
        try {
            let res = await fetch("http://localhost:3000/posts");
            if (!res.ok) {
                throw Error("No Data Available");
            } else {
                let data = await res.json();
                posts.value = data;
            }
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
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

