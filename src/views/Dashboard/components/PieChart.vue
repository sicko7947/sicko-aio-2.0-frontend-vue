<template>
    <Echart :options="pieChart" />
</template>

<script>
import Echart from '@/components/Echarts.vue'
export default {
    name: 'PieChart',
    components: {
        Echart
    },
    data() {
        return {
            pieChart: {
                series: [
                    {
                        type: 'gauge',
                        data: [
                            {
                                value: 50
                            }
                        ],
                        axisLine: {
                            show: true
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            show: false
                        }
                        // axisLine: {
                        //     lineStyle: [[1, '#5EBAFF']]
                        // }
                    }
                ]
            }
        }
    }
}
</script>

<style></style>
