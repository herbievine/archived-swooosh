<template>
    <div class="not-found">
        <div>
            <p>Sorry, we couldn't find what</p>
            <p>you're looking for...</p>
        </div>
        <router-link to="/">
            <Logo />
        </router-link>
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
a {
    text-decoration: none;
}

.not-found {
    width: 100%;
    margin: 100px auto 0;
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