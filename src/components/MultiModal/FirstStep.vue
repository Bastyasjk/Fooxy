<template>
    <div>
        <label for="user-name">Username</label>
        <input type="text" id="user-name" name="userName" v-model="userName"/>

        <navigation></navigation>
    </div>
</template>


<script>
import Navigation from "./NavigationModal.vue";

export default {
    data() {
        return {
            UserName: '',
        }
    },
    components: { Navigation }, 
}
</script>