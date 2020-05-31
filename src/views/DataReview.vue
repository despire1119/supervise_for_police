<template>
  <div class="charts">
    <div ref="line" class="line" />
    <div class="teams">
      <p class="tit">所队综合排名</p>
      <div class="table-box" :class="{'show-all-teams': ifAll}">
        <table class="table">
          <tr>
            <th>所队</th>
            <th>综合评分</th>
            <th>待处理</th>
            <th>已处理</th>
            <th>超期未处理</th>
            <th>超期已处理</th>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
          <tr class="content">
            <td>青阳</td>
            <td>97</td>
            <td>12</td>
            <td>4</td>
            <td>23</td>
            <td>3</td>
          </tr>
        </table>
      </div>
      <div class="show-all" @click="showAll"><span>{{ ifAll ? '收起' : '查看全部信息' }}</span><van-icon :name="ifAll ? 'arrow-up' : 'arrow-down'" /></div>
      <div class="bottom-border" />
    </div>
    <section>
      <p class="tit">近日案件分析</p>
      <div class="charts-panel">
        <div ref="circleNormal" class="panel" />
        <div ref="circleAbnormal" class="panel" />
      </div>
    </section>
    <div class="margin-area" />
    <van-tabs
      v-model="active"
      color="#1677fe"
      background="#fff"
      title-active-color="#1677fe"
    >
      <van-tab title="单位综合排名">
        <table class="table bottom">
          <tr>
            <th>排名</th>
            <th>所队</th>
            <th>得分</th>
          </tr>
          <tr class="content">
            <td>1</td>
            <td>青阳</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>2</td>
            <td>青阳</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>3</td>
            <td>青阳</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>4</td>
            <td>青阳</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>5</td>
            <td>青阳</td>
            <td>97.5</td>
          </tr>
        </table>
      </van-tab>
      <van-tab title="民警综合排名">
        <table class="table">
          <tr>
            <th>排名</th>
            <th>民警</th>
            <th>得分</th>
          </tr>
          <tr class="content">
            <td>1</td>
            <td>王建国</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>2</td>
            <td>李蛋</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>3</td>
            <td>池子</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>4</td>
            <td>斯文</td>
            <td>97.5</td>
          </tr>
          <tr class="content">
            <td>5</td>
            <td>青阳</td>
            <td>97.5</td>
          </tr>
        </table>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import echarts from 'echarts'
import common from '@/mixins/common'

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
const xAxisData = []
const data1 = []
const data2 = []
const positionList = ['青阳街道', '重岗街道', '大楼街道', '双沟镇', '四河乡', '峰山乡', '天岗湖乡', '上塘镇', '魏营镇', '车门乡', '瑶沟乡', '石集乡', '城头乡', '临淮镇', '陈圩乡', '半城镇', '孙园镇', '孙园镇', '孙园镇', '梅花镇', '归仁镇', '金锁镇', '朱湖镇', '曹庙乡', '金锁镇', '龙集镇']
for (let i = 0; i < 100; i++) {
  xAxisData.push(positionList[random(0, 27) || 0])
  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
}
export default {
  mixins: [common],
  data() {
    return {
      ifAll: false
    }
  },
  mounted() {
    this.drawLine()
    this.drawCircleWord()
    this.drawCircleAbnormal()
  },
  methods: {
    showAll() {
      this.ifAll = !this.ifAll
    },
    drawLine() {
      const line = echarts.init(this.$refs.line)
      line.setOption({
        title: {
          text: '问题处置汇总'
        },
        color: ['#3DDFA4', '#02B2F7', '#00B0F7', '#7BB1EE', '#8FCF38', '#35DEA0'],
        grid: {
          top: 15,
          left: 20,
          right: 10,
          bottom: 33
        },
        toolbox: {
        // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          show: false
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function(idx) {
            return idx * 30
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function(idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function(idx) {
          return idx * 5
        }
      })
    },
    drawCircleWord() {
      const circle = echarts.init(this.$refs.circleNormal)
      circle.setOption({
        color: ['#3DDFA4', '#02B2F7', '#35DEA0', '#7BB1EE', '#8FCF38'],
        // tooltip: {
        //   trigger: 'item',
        //   formatter: '{a} <br/>{b}: {c} ({d}%)'
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '95%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                formatter: '{b}: {c}'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '未处理' },
              { value: 310, name: '包案' },
              { value: 234, name: '督办' },
              { value: 135, name: '超期' },
              { value: 1548, name: '已处理' }
            ]
          }
        ]
      })
    },
    drawCircleAbnormal() {
      const circle = echarts.init(this.$refs.circleAbnormal)
      circle.setOption({
        color: ['#3DDFA4', '#35DEA0', '#7BB1EE', '#02B2F7', '#8FCF38'],
        series: [
          {
            type: 'pie',
            radius: [20, 80],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false
              }
            },
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.margin-area
  height 10px
  background-color #F4F5F9
.charts
  position absolute
  top 0
  bottom 0
  right 0
  left 0
  background-color #fff
  padding-top 46px
  padding-bottom 86px
  overflow-y auto
  .tit-box
    display flex
    justify-content space-between
.tit
  padding-top 4px
  padding-left 6px
  font-size 18px
  color #000
  font-weight bold
.line
  height 265px
  border-bottom 1px solid #e5e5e5
.table-box
  margin 4px 10px 0
  height 152px
  overflow hidden
.show-all-teams
  height auto
  overflow auto
.table
  width 100%
  font-size 13px
  text-align center
  tr
    height 38px
    line-height 38px
  th
    text-align center
    color #1677FE
  .content
    &:nth-child(even)
      background-color #F8F8F8
.show-all
  display flex
  justify-content center
  align-items center
  height 38px
  font-size 12px
  color #333
.bottom-border
  height 1px
  background-color #E5E5E5
.charts-panel
  height 208px
  display flex
  align-items center
  justify-content space-around
  .panel
    width 173px
    height 184px
    border-radius 4px
    box-shadow:0px 0px 4px 0px rgba(0,0,0,0.24)
.bottom
  padding-bottom 24px
</style>
