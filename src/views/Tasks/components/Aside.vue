<template>
    <el-aside width="2.5rem" class="task-nav">
        <img src="/logo.jpg" alt="logo" />
        <ul>
            <li>
                <router-link to="/dashboard"><i class="iconfont">&#xe604;</i></router-link>
            </li>
            <li class="checked">
                <router-link to="/tasks/createTaskGroup"><i class="iconfont">&#xe605;</i></router-link>
            </li>
            <li>
                <router-link to="/profiles/group"><i class="iconfont">&#xe607;</i></router-link>
            </li>
            <li>
                <router-link to="/proxy"><i class="iconfont">&#xe606;</i></router-link>
            </li>
            <li>
                <router-link to="/setting"><i class="iconfont">&#xe608;</i></router-link>
            </li>
        </ul>
    </el-aside>
</template>
<script>
export default {
    name: 'TasksAside',
    methods: {
        handleClickNav(e) {}
    }
}
</script>

<style lang="scss">
.task-nav {
    height: 100%;
    img {
        width: 1.25rem;
        height: 1.25rem;
        margin: 0.625rem;
        border-radius: 0.625rem;
    }
    ul {
        height: calc(100% - 11.5rem);
        li {
            height: 2.5rem;
            /* font-size: 1.25rem; */
            color: #606cce;
            overflow: hidden;
            text-align: center;
            margin-bottom: 1.25rem;
            a {
                text-decoration: none;
                color: inherit;
            }
            i {
                display: block;
                text-align: center;
                font-size: 1.25rem;
                /* width: 1.25rem; */
                /* height: 1.25rem; */
                /* line-height: 2.5rem; */
                padding: 0.625rem;
                box-sizing: border-box;
                /* position: relative;
                top: 50%;
                margin-top: -0.625rem;
                left: 0; */
            }
            &.checked {
                color: #fff;
                border-radius: 0.375rem;
                background-color: #2c325e;
            }
        }
    }
}
</style>
