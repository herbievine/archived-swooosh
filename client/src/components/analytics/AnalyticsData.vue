<template>
    <div class="card" v-if="Object.keys(getSearchResult).length >= 1">
        <div class="header">
            <HoverElement
                keyword="id"
                :text="sanitize(getSearchResult.id)"
                heading="URL ID"
                :data="[getSearchResult.id]"
                float="right"
            />
            <HoverElement
                keyword="date"
                :text="formatDate"
                heading="URL created on"
                :data="[getSearchResult.createdOn]"
                float="left"
            />
        </div>
        <div class="body">
            <HoverElement
                keyword="main"
                :text="cleanUrl(getSearchResult.shortUrl)"
                :heading="getSearchResult.shortUrl"
                :data="['Redirects to:', getSearchResult.url]"
                :links="['Follow Link']"
                :main="true"
                @clicked="send"
            />
        </div>
        <div class="footer">
            <HoverElement
                keyword="clicks"
                :text="`${getSearchResult.clicks} clicks`"
                :heading="`Total clicks for ${sanitize(getSearchResult.id)}`"
                :data="[getSearchResult.clicks]"
                float="right"
            />
            <HoverElement
                keyword="delete"
                text="Delete"
                heading="Are you sure?"
                :links="['Yes', 'No']"
                float="left"
                @clicked="deleteURL"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import HoverElement from '@/components/modules/HoverElement';

export default {
    name: 'AnalyticsData',
    components: { HoverElement },
    computed: {
        ...mapGetters(['getSearchResult']),
        formatDate() {
            return this.getSearchResult.createdOn.split(',')[1].trim();
        },
    },
    methods: {
        sanitize(str) {
            return str.length >= 14
                ? `${str
                      .split('')
                      .slice(0, 14)
                      .join('')}...`
                : str;
        },
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
        send() {
            window.open(this.getSearchResult.shortUrl)
        },
        async deleteURL(val) {
            if (val === 'delete-no') return null;

            const domain = await window.location.origin.replace(
                /8081/g,
                '8080'
            );

            const defaultHeaders = new Headers();

            const response = await fetch(
                `${domain}/api/v1/delete/${this.getSearchResult.id}`,
                {
                    method: 'DELETE',
                    headers: {
                        ...defaultHeaders,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const result = await response.json();

            if (!result.ok)
                this.setAnalyticsEvents({
                    msg: 'Sorry, an error occurred',
                    alert: true,
                });
            if (result.ok) {
                this.setSearchResult({});
                this.setAnalyticsEvents({
                    msg: 'URL deleted successfully',
                    alert: false,
                });
            }
        },
        ...mapActions({
            setSearchResult: 'setSearchResult',
            setAnalyticsEvents: 'setAnalyticsEvents',
        }),
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

    & .tip-left {
        align-items: flex-end !important;
    }

    & .tip-right {
        align-items: flex-start !important;
    }

    & .tip {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover {
            cursor: pointer;
            position: relative;

            & div {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                border: 1px solid #393939;
                border-radius: 6px;
                padding: 5px 10px 10px;
                z-index: 100;
                position: absolute;
                top: 18px;

                &:hover {
                    cursor: default;
                }

                & .heading {
                    font-size: 18px !important;
                    text-decoration: underline;
                    margin: 10px 0;
                    font-weight: 500 !important;
                    color: #cccccc;
                }

                & p {
                    font-size: 16px;
                    color: #cccccc;
                    font-weight: 500;
                }
            }
        }

        & div {
            display: none;
        }
    }

    & .header {
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .body {
        width: 100%;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;

        & .link {
            white-space: nowrap;
            font-size: 22px;
            color: #cccccc;
            font-weight: 700;
            letter-spacing: 0.1ch;
            text-decoration: underline;
        }
    }

    & .footer {
        width: 100%;
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .delete {
            text-decoration: underline;

            &:hover {
                cursor: pointer;
            }
        }
    }

    & p {
        white-space: nowrap;
        font-size: 16px;
        color: #cccccc;
        font-weight: 500;
    }
}
</style>
