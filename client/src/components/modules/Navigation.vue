<template>
    <div class="nav">
        <div class="logo">
            <router-link to="/">
                <Logo />
            </router-link>
        </div>
        <div class="switch">
            <router-link to="/" tag="div" class="create">
                <p>
                    create
                </p>
            </router-link>
            <router-link to="/analytics" tag="div" class="analytics">
                <p>
                    analytics
                </p>
            </router-link>
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
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & .logo {
        & a {
            text-decoration: none;
        }
    }

    & .switch {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        & div {
            width: auto;
            height: 36px;
            color: #cccccc;
            background-color: #323232;
            border: none;
            font-size: 16px;
            font-weight: 500;

            &:hover {
                cursor: pointer;
            }

            & p {
                color: #cccccc;
                text-decoration: none;
                line-height: 22px;
                font-weight: 400;
                background: none;
            }
        }

        & .router-link-exact-active {
            background-color: #393939;
        }

        & .create {
            padding: 6px 10px 6px 10px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        & .analytics {
            padding: 6px 10px 6px 10px;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
}
</style>
