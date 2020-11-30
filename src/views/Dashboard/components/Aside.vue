<template>
    <el-aside width="9.375rem" class="nav">
        <img src="@/assets/img/logo.jpg" alt="logo" />
        <ul>
            <li v-for="(item, index) in navList" :key="index" :class="{ checked: $route.path === item.path }">
                <router-link :to="item.path"> <i class="iconfont" v-html="item.icon"></i> {{ item.name }} </router-link>
            </li>
        </ul>
        <div class="setting-box">
            <router-link to="/setting" class="setting"><i class="iconfont">&#xe608;</i></router-link>
            <div class="version">V 2.0.0</div>
        </div>
    </el-aside>
</template>

<script>
const nav = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: '&#xe604;'
    },
    {
        path: '/tasks/createTaskGroup',
        name: 'Tasks',
        icon: '&#xe605;'
    },
    {
        path: '/profiles/group',
        name: 'Profiles',
        icon: '&#xe607;'
    },
    {
        path: '/proxy',
        name: 'Proxies',
        icon: '&#xe606;'
    }
]
export default {
    name: 'DashboardAside',
    data() {
        return {
            navList: nav
        }
    }
}
</script>

<style lang="scss">
.nav {
    overflow: hidden;
    color: #616cce;
    img {
        width: 3.75rem;
        height: 3.75rem;
        margin: 0 3.125rem 3.125rem 2.5rem;
        border-radius: 1.875rem;
    }
    ul {
        height: calc(100% - 11.5rem);
        li {
            height: 3.125rem;
            font-size: 0.875rem;
            font-weight: bold;
            padding-left: 0.625rem;
            overflow: hidden;
            box-sizing: border-box;
            a {
                text-decoration: none;
                color: inherit;
                float: left;
                line-height: 3.125rem;
                height: 100%;
                width: 100%;
            }
            i {
                display: block;
                float: left;
                font-size: 1.25rem;
                width: 1.25rem;
                height: 1.25rem;
                line-height: 1.25rem;
                position: relative;
                top: 50%;
                margin-top: -0.625rem;
                left: 0;
                margin-right: 0.625rem;
            }
            &.checked {
                border-top: 1px solid #363c6d;
                border-left: 1px solid #363c6d;
                border-bottom: 1px solid #363c6d;
                border-right: 1px solid #1f2346;
                color: #fff;
                border-radius: 0.625rem 0 0 0.625rem;
                background-color: #1f2346;
            }
        }
    }
    .setting-box {
        height: auto;
    }
    .setting {
        display: block;
        font-size: 1.875rem;
        width: 1.875rem;
        height: 1.875rem;
        margin: 0 auto;
        text-decoration: none;
        color: inherit;
    }
    .version {
        text-align: center;
        margin-top: 0.625rem;
        margin-left: -0.625rem;
        margin-bottom: 1.25rem;
        height: 0.875rem;
        font-size: 0.875rem;
        line-height: 0.875rem;
    }
}
</style>
