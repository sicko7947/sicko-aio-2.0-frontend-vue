<template>
    <el-aside width="8.75rem" class="tasks-list">
        <div>
            <h3>Nike US</h3>
            <ul>
                <li
                    v-for="item in tasksList"
                    :key="item.id"
                    :class="current && current.id === item.id ? 'check' : ''"
                    @click="handleClickTask(item)"
                    @contextmenu.prevent="listShowMenu"
                >
                    <i class="iconfont">&#xe620;</i>
                    <span> {{ item.name }}</span>
                    <i class="iconfont" @click="handleDeleleTask(item)">&#xe611;</i>
                </li>
            </ul>
            <h3>Footlocker</h3>
            <ul>
                <li
                    v-for="item in locker"
                    :key="item.id"
                    @click="handleClickTask(item)"
                    @contextmenu.prevent="listShowMenu"
                >
                    <i class="iconfont">&#xe620;</i>
                    <span> {{ item.name }}</span>
                    <i class="iconfont" @click="handleDeleleTask(item)">&#xe611;</i>
                </li>
            </ul>
        </div>
        <button
            class="btn-submit btn-add-task"
            @click="handleJumpGroup"
            v-if="$route.path !== '/tasks/createTaskGroup'"
        >
            <i class="iconfont">&#xe615;</i>
        </button>
        <div class="dialog-list-item" ref="listItemDialog" v-show="listItemDialogVisable">
            <div @click="itemClickHandler">Clone</div>
            <div @click="itemClickHandler">Rename</div>
        </div>
    </el-aside>
</template>

<script>
export default {
    name: 'TasksList',
    data() {
        return {
            current: {},
            listItemDialogVisable: false,
            tasksList: [
                {
                    id: '1',
                    name: 'task 1'
                },
                {
                    id: '2',
                    name: 'task 2'
                },
                {
                    id: '3',
                    name: 'task 3'
                },
                {
                    id: '4',
                    name: 'task 4task 4task 4task 4'
                }
            ],
            locker: [
                {
                    id: '1',
                    name: 'task 1'
                },
                {
                    id: '2',
                    name: 'task 2'
                },
                {
                    id: '3',
                    name: 'task 3'
                },
                {
                    id: '4',
                    name: 'task 4'
                }
            ]
        }
    },
    methods: {
        handleClickTask(item) {
            console.log('handleClickTask')
            console.log(item)
            this.current = item
            this.listItemDialogVisable = false
            const _path = '/tasks/createTask'
            this.$route.path === _path || this.$router.push({ path: _path })
        },
        handleDeleleTask(item) {
            console.log(item)
            this.listItemDialogVisable = false
        },
        listShowMenu(e) {
            console.log('右键')
            const dom = this.$refs.listItemDialog
            dom.style.top = e.clientY + 'px'
            dom.style.left = e.clientX + 'px'
            this.listItemDialogVisable = true
            return false
        },
        itemClickHandler() {
            this.listItemDialogVisable = false
        },
        handleJumpGroup() {
            this.$router.push({ path: '/tasks/createTaskGroup' })
        }
    }
}
</script>

<style lang="scss">
.tasks-list {
    user-select: none;
    margin: 0 0.625rem;
    background: #2c325e;
    border-radius: 0.625rem;
    color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-bottom: 1.25rem;
    > div {
        flex: 1;
    }
    h3 {
        font-size: 0.875rem;
        margin-left: 0.625rem;
        margin-bottom: 0.625rem;
        font-weight: bold;
        height: 0.875rem;
        &:first-child {
            margin-top: 0.625rem;
        }
    }
    ul {
        margin-left: 0.625rem;
        height: auto;
        li {
            padding-right: 0.625rem;
            padding-bottom: 0.625rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.75rem;
            overflow: hidden;
            cursor: pointer;
            display: flex;
            span {
                margin-left: 0.625rem;
                overflow: hidden;
                width: calc(100% - 2.25rem);
                height: 100%;
                flex: 1;
                font-size: 0.75rem;
            }
            i {
                font-size: 0.75rem;
            }
            i:last-child,
            &.check {
                color: #48c690;
            }
        }
    }
    .btn-add-task {
        background: linear-gradient(90deg, #f983b5, #f961a1);
        font-size: 1.25rem;
        color: #24284d;
        font-weight: bold;
        width: 7.25rem;
        margin: auto;
        > a {
            text-decoration: none;
            width: 100%;
            height: 100%;
            color: inherit;
        }
    }
}
</style>
