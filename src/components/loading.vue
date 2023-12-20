<template>
    <van-overlay :show="loadingShow" class-name="flex-column items-center content-center transparent" z-index="100">
        <van-loading size="32px" type="spinner" color="#999"></van-loading>
    </van-overlay>
</template>

<script lang='ts' setup>
    let props = withDefaults(defineProps<{
        loadingShow: boolean
    }>(), {
        loadingShow: false
    })
</script>

<style lang='less' scoped>
.transparent {
    background: transparent
}
</style>