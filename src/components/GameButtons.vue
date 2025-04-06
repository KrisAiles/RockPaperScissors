<script setup lang="ts">
import ButtonSlot from './ButtonSlot.vue';

const emit = defineEmits(['selected']);
const props = defineProps({
  clickable: Boolean
});

</script>

<template>
    <div id="button-display">
        <ButtonSlot :disabled="props.clickable" @click="emit('selected', '👊')">
            👊
        </ButtonSlot>
        <ButtonSlot :disabled="props.clickable" @click="emit('selected', '✋')">
            ✋
        </ButtonSlot>
        <ButtonSlot :disabled="props.clickable" @click="emit('selected', '✌️')">
            ✌️
        </ButtonSlot>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";

#button-display {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    margin: 0 auto;
    height: 10rem;
    width: 98%;
}
</style>