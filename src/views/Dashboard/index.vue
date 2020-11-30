<template>
    <div @click="itemClickHandler">
        <Header />
        <el-container class="main">
            <Aside />
            <el-main>
                <h3>Summary</h3>
                <div class="echart-box">
                    <div class="line-chart">
                        <LineEchart />
                    </div>
                    <div class="valid-box">
                        <i class="iconfont">&#xe60b;</i>
                        <p>Your key will be valid for another 58 days.</p>
                        <i class="iconfont">&#xe60d;</i>
                        <i class="iconfont">&#xe60c;</i>
                    </div>
                    <div class="pie-chart">
                        <div>
                            <PieEchart />
                        </div>
                        <div>
                            <PieEchart />
                        </div>
                    </div>
                </div>
                <div class="shoes-list-header">
                    <h3>Copped</h3>
                    <el-input v-model="searchKey" prefix-icon="el-icon-search"></el-input>
                </div>

                <div class="shoes-dash-list">
                    <div class="list-header">
                        <span> <i>1&nbsp;</i> </span>
                        <span>Website</span>
                        <span>Product</span>
                        <span>Ordernumber</span>
                        <span>Email</span>
                        <span>Size</span>
                        <span>Checkout Time</span>
                    </div>
                    <div class="list-body" ref="list">
                        <div
                            v-for="(item, index) in tableData"
                            :key="index"
                            class="list-item"
                            @contextmenu.prevent="listShowMenu"
                        >
                            <span>
                                <img :src="item.pic" alt="" />
                            </span>
                            <span>{{ item.website || '无' }}</span>
                            <span>{{ item.product || '无' }}</span>
                            <span>{{ item.ordernumber || '无' }}</span>
                            <span>{{ item.email || '无' }}</span>
                            <span>{{ item.size || '无' }}</span>
                            <span>{{ item.time || '无' }}</span>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
        <div class="dialog-list-item" ref="listItemDialog" v-show="listItemDialogVisable">
            <div @click="itemClickHandler">Copy CheckOut Link</div>
            <div @click="itemClickHandler">Copy Order Number</div>
            <div @click="itemClickHandler">Copy Order Email</div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/SearchHeader.vue'
import Aside from './components/Aside.vue'
import LineEchart from './components/LineChart.vue'
import PieEchart from './components/PieChart.vue'
export default Vue.extend({
    name: 'Dashboard',
    components: {
        Header,
        Aside,
        LineEchart,
        PieEchart
    },
    data() {
        return {
            input: '',
            listItemDialogVisable: false,
            tableData: [
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Travis Scott x Air Jordan 1 High OG TS SP',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                },
                {
                    pic: '/logo.jpg',
                    website: 'Nike US',
                    product: 'Crateful Dead Bears x Nike SB Dunk Low',
                    size: '12.0',
                    time: '2020-08-08-08:08:08'
                }
            ],
            searchKey: ''
        }
    },
    methods: {
        listShowMenu(e: any) {
            console.log('右键')
            const dom: any = this.$refs.listItemDialog
            dom.style.top = e.clientY + 'px'
            dom.style.left = e.clientX + 'px'
            this.listItemDialogVisable = true
            return false
        },
        itemClickHandler() {
            this.listItemDialogVisable = false
        }
    }
})
</script>

<style lang="scss">
@import '../../assets/dashboard.scss';
</style>
