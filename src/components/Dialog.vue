<template>
<div class="siyuan-chrome-ext-dialog">
    <div class="status">
        <span v-if="loading">收藏中</span>
        <span v-else>已收藏</span>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false)
</script>

<style>
.siyuan-chrome-ext-dialog {
    position: fixed;
    z-index: 999999;
    top: 12px;
    right: 12px;
    width: 300px;
    min-height: 400px;
    max-height: 90vh;
    border: 1px solid red;
    border-radius: 4px;
    background: white;
}
</style>