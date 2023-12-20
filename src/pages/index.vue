<template>
    <div class="container">
        <p class="tc pt30 pb30">
            <img src="/images/home/home_logo.png" class="home_logo">
        </p>
        <HomeSearch></HomeSearch>
        <HomeBanner></HomeBanner>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'

</script>

<style lang='less' scoped>
.container{
    width: 100%;
    height: 100vh;
    background: #F6F6F6;
    .home_logo{
        width: 186px;
        height: 36px;
    }
}

</style>