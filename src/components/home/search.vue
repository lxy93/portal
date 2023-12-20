<template>
    <div class="flex-row content-between items-center pl20 pr30 pb30">
        <div class="pr20">
            <img src="/images/home/location_icon.png" class="location_icon">
            <span class="color-322F2D f28 pl10 pr10">广州市</span>
            <van-icon name="arrow-down" />
        </div>
        <div class="bg-fff br60 pl30 pr10 pt8 pb8 flex-row content-between items-center" style="flex:1">
            <p class="flex-row items-center">
                <img src="/images/home/seach_icon.png" class="seach_icon pr20 block">
                <span class="block solid"></span>
                <span class="pl20 pt10 pb10 block color-BEC5C9">广州保姆多少钱？</span>
            </p>
            <p class="pl24 pr24 pt10 pb10 bg-2F76F8 color-fff block f28 br60">搜索</p>
        </div>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'

</script>

<style lang='less' scoped>
.pt8{
    padding-top: 8px
}
.pb8{
    padding-bottom: 8px
}
.location_icon{
    width: 28px;
    height: 28px;
    vertical-align: text-top;
}
.seach_icon{
    width: 30px;
    height: 30px;
}
.color-BEC5C9{
    color: #BEC5C9
}
.solid{
    width: 2px;
    height: 30px;
    background: #BEC5C9
}
</style>