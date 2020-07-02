<template>
    <div>
        <button class="btn">{{ name }}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.btn {
    width: auto;
    height: 36px;
    padding: 6px 16px;
    color: #cccccc;
    background-color: #323232;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;

    &:hover {
        cursor: pointer;
    }
}
</style>
