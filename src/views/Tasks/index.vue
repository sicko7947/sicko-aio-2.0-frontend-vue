<template>
    <div style="height:100%">
        <Header />
        <el-container class="task-main">
            <Aside />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/SearchHeader.vue'
import Aside from './components/Aside.vue'
export default Vue.extend({
    name: 'Task',
    components: {
        Header,
        Aside
    }
})
</script>

<style lang="scss">
@import '../../assets/tasks.scss';
</style>
