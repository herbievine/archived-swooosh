<template>
    <div class="card" v-if="Object.keys(getSwooosh).length >= 1">
        <div class="body">
            <a id="display" :href="getSwooosh.shortUrl" target="_BLANK">{{
                getSwooosh.shortUrl
            }}</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import fitty from 'fitty';

export default {
    name: 'GeneratedURLCard',
    computed: mapGetters({
        getSwooosh: 'getSwooosh',
    }),
    updated() {
        fitty('#display', { minSize: 18, maxSize: 26 });
    },
    methods: {
        cleanUrl(url) {
            const newUrl = new URL(url);
            return `${newUrl.hostname}/${
                newUrl.pathname.length >= 2 ? '...' : ''
            }`;
        },
    },
};
</script>

<style scoped lang="scss">
.card {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .body {
        max-width: 400px;
        width: 100%;
        height: 60px;
        border-top: 1px solid #cccccc;
        display: flex;
        justify-content: center;
        align-items: center;

        & a {
            max-width: 400px;
            font-size: 22px;
            color: #cccccc;
            font-weight: 700;
            letter-spacing: 0.1ch;
            text-decoration: underline;
        }
    }
}
</style>
