<template>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="password"/>

        <navigation></navigation>
    </div>
</template>

<script>
import Navigation from "./NavigationModal.vue";

export default {
    data() {
        return {
            password: '',
        }
    },
    components: { Navigation }, 
}
</script>