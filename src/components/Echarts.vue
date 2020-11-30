<template>
    <div ref="chart" style="width:100%;height:100%"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'Echart',
    props: {
        options: Object
    },
    mounted() {
        this.getEchartData()
    },
    methods: {
        getEchartData() {
            const chart = this.$refs.chart
            if (chart) {
                const myChart = echarts.init(chart)
                this.$nextTick(() => {
                    myChart.resize()
                })
                myChart.setOption(this.options)

                window.addEventListener('resize', function() {
                    console.log('resize33')
                    myChart.resize()
                })
            }
        }
    }
}
</script>

<style></style>
