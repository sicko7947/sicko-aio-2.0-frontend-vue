<template>
    <Echart :options="lineChart" />
</template>

<script>
import Echart from '@/components/Echarts.vue'
import * as echarts from 'echarts'
export default {
    name: 'DashboardLineChart',
    components: {
        Echart
    },
    data() {
        return {
            lineChart: {
                grid: {
                    top: '20',
                    left: '10',
                    right: '10',
                    bottom: '10',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8'],
                    axisLine: {
                        lineStyle: {
                            color: '#6268A2'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#6268A2'
                        }
                    },
                    axisLabel: {
                        color: '#fff'
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: '#6268A2'
                        }
                    }
                },
                series: [
                    {
                        data: [0, 932, 1100, 2100, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            color: '#00D174'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#00D174'
                                },
                                {
                                    offset: 1,
                                    color: 'transparent'
                                }
                            ])
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style></style>
