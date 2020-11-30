<template>
    <div class="search-header">
        <el-input
            v-model="input"
            placeholder="Help you nevigate your task quickly"
            prefix-icon="el-icon-search"
        ></el-input>
        <div class="window-btn-box">
            <i class="el-icon-minus"></i>
            <i class="el-icon-close"></i>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Header',
    data() {
        return {
            input: ''
        }
    }
})
</script>

<style lang="scss">
.search-header {
    width: 100%;
    height: 2.5rem;
    background: #1f2345;
    border-radius: 0.625rem 0.625rem 0px 0px;
    text-align: center;
    overflow: hidden;

    .el-input {
        margin: 0.375rem auto;
        width: 28.125rem;
        height: 1.75rem;

        .el-input__icon {
            line-height: 1.75rem;
            color: #535a90;
        }

        input {
            height: 1.625rem;
            width: 28.125rem;
            background: #2b325e;
            border-color: transparent;
            border-radius: 0.375rem;
            border-width: 0;
            font-size: 0.75rem;
            color: #535a90;
        }

        input::-webkit-input-placeholder {
            color: #535a90;
        }
    }

    .window-btn-box {
        float: right;
        width: 3.125rem;
        height: 1.25rem;
        margin-top: 10px;
        margin-right: 1.25rem;

        i {
            width: 1.25rem;
            height: 1.25rem;
            font-size: 1.25rem;
            line-height: 1.25rem;
            color: #565d94;
        }

        i + i {
            padding-left: 0.625rem;
        }
    }
}
</style>
