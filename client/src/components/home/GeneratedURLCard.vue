<template>
    <div class="card" v-if="Object.keys(getSwooosh).length >= 1">
        <a
            title="Generated URL"
            id="display"
            :href="getSwooosh.shortUrl"
            target="_BLANK"
        >
            {{ cleanUrl(getSwooosh.shortUrl) }}
        </a>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'GeneratedURLCard',
    computed: mapGetters({
        getSwooosh: 'getSwooosh',
    }),
    methods: {
        cleanUrl(url) {
            const newUrl = new URL(url);

            const path =
                newUrl.pathname.length >= 10
                    ? `${newUrl.pathname
                          .split('')
                          .slice(0, 10)
                          .join('')}...`
                    : newUrl.pathname;

            return `https://${newUrl.hostname}${path}`;
        },
    },
};
</script>

<style scoped lang="scss">
.card {
    margin: 50px auto 0;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #323232;

    & a {
        white-space: nowrap;
        margin-top: 30px;
        font-size: 22px;
        color: #cccccc;
        font-weight: 700;
        letter-spacing: 0.1ch;
        text-decoration: underline;
    }
}
</style>
