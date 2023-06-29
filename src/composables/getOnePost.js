import { ref } from "vue";


const getOnePost = (id) => {
    const post = ref(null);
    const error = ref(null);


    const jsonData = async () => {
        try {
            // await new Promise(function (resolve, reject) {
            //     setTimeout(resolve, 2000)
            // })
            let res = await fetch(`http://localhost:3000/posts/${id}`);
            if (!res.ok) {
                throw Error("No Data Available");
            } else {
                let data = await res.json();
                post.value = data;
            }
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { post, error, jsonData }
}

export default getOnePost