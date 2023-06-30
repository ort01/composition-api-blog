import { projectFirestore } from "../firebase/config";
import { ref } from "vue";


const getOnePost = (id) => {
    const post = ref(null);
    const error = ref(null);


    const jsonData = async () => {
        try {
            // let res = await fetch(`http://localhost:3000/posts/${id}`);
            // if (!res.ok) {
            //     throw Error("No Data Available");
            // } else {
            //     let data = await res.json();
            //     post.value = data;
            // }


            // ---------FIREBASE------------

            let res = await projectFirestore.collection('Posts').doc(id).get()
            // console.log(res.data());
            if (!res.exists) {
                throw Error("No data Available")
            } else {
                post.value = { ...res.data(), id: res.id }
            }

        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { post, error, jsonData }
}

export default getOnePost