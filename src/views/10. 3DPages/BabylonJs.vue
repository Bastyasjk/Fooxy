<template>
    <div>
        <Scene>
            <Box :position="[0, 0, 5]"></Box>
        </Scene>
    </div>
</template>

<script>
import Vue from 'vue';
import vb from 'vue-babylonjs';
import { plugin, Scene, Box, Cannon } from 'vue-babylonjs';

Vue.use(plugin, { components: { Scene, Box, Physics: Cannon } });
Vue.use(vb);

export default {
    name: 'BabylonJs',
}
</script>