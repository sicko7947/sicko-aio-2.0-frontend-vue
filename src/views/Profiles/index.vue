<template>
    <div style="height:100%">
        <Header />
        <el-container class="profiles-wrapper">
            <Aside />
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/SearchHeader.vue'
import Aside from '../Dashboard/components/Aside.vue'
export default Vue.extend({
    name: 'ProfilesMain',
    components: {
        Header,
        Aside
    }
})
</script>

<style lang="scss">
.profiles-wrapper {
    padding: 1.25rem 1.25rem 1.25rem 0.625rem;
    > .el-main {
        background-color: #1f2346;
        border: 1px solid #363c6d;
        border-radius: 0.625rem;
        color: #fff;
        margin-left: 0;
    }
}

@import '@/assets/profiles.scss';
</style>
