<template>
    <div>
        <label for="email-address">Email</label>
        <input type="email" id="email-address" name="email" v-model="email"/>

        <navigation></navigation>
    </div>
</template>

<script>
import Navigation from "./NavigationModal.vue";

export default {
    data() {
        return {
            email: '',
        }
    },
    components: { Navigation }, 
}
</script>