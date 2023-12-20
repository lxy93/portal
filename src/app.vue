<template>
    <div>
        <Loading :loadingShow="commonStore.loadingShow" />
        <NuxtPage></NuxtPage>
    </div>
</template>
<script lang='ts' setup>
    let commonStore = useStore.commonStore()
</script>
<style lang='less' scoped>

</style>
