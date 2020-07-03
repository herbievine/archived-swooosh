<template>
    <div class="not-found">
        <p>Sorry, what you're looking</p>
        <p>for isn't here</p>
        <Logo />
    </div>
</template>

<script>
    import Logo from "@/components/ui/Logo";

    export default {
        name: "PageNotFound",
        components: {
            Logo,
        }
    }
</script>

<style scoped lang="scss">
.not-found {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
        color: #cccccc;
        font-weight: 600;
    }
}
</style>