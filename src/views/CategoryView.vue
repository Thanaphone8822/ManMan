<script setup lang="ts">
import Content from '@/components/Content.vue';



</script>

<template>
    <div>
        category {{ $route.params.category }}

        <Content :CategoryName="($route.params.category as string)" />
    </div>
</template>

<style scoped>

</style>