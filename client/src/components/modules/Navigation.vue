<template>
    <div class="nav">
        <div class="logo">
            <Logo @click.native="$router.push('/')" />
        </div>
    </div>
</template>

<script>
import Logo from '@/components/ui/Logo';

export default {
    name: 'Navigation',
    components: { Logo },
};
</script>

<style scoped lang="scss">
.nav {
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 30px;

    & .logo {
        margin-top: 10px;
    }
}
</style>
