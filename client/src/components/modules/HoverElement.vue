<template>
    <div
        class="tip"
        :class="
            float === 'left' ? 'tip-left' : float === 'right' ? 'tip-right' : ''
        "
    >
        <p :class="main ? 'link' : ''">{{ text }}</p>
        <div class="contents" :style="main ? 'top: 25px !important' : ''">
            <h3 v-if="heading">{{ heading }}</h3>
            <p v-for="(p, i) in data" :key="i">{{ p }}</p>
            <div>
                <h6 v-for="(link, i) in links" :key="i" @click="onClick(link)">
                    {{ link }}
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HoverElement',
    props: {
        keyword: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        data: {
            type: Array,
            required: false,
        },
        heading: {
            type: String,
            required: false,
        },
        links: {
            type: Array,
            required: false,
        },
        float: {
            type: String,
            required: false,
        },
        main: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    methods: {
        onClick(event) {
            this.$emit('clicked', `${this.keyword}-${event}`.toLowerCase());
        },
    },
};
</script>

<style scoped lang="scss">
p {
    white-space: nowrap;
    font-size: 16px;
    color: #cccccc;
    font-weight: 500;
}

.tip-left {
    align-items: flex-end !important;
}

.tip-right {
    align-items: flex-start !important;
}

.tip {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .link {
        white-space: nowrap;
        font-size: 22px;
        color: #cccccc;
        font-weight: 700;
        letter-spacing: 0.1ch;
        text-decoration: underline;
    }

    &:hover {
        cursor: pointer;
        position: relative;

        & .contents {
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

            & h3 {
                white-space: nowrap;
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

                &:last-of-type {
                    margin-bottom: 6px;
                }
            }

            & div {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;

                & h6 {
                    text-decoration: underline;
                    font-size: 16px;
                    color: #cccccc;
                    font-weight: 500;
                    white-space: nowrap;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    & div {
        display: none;
    }
}
</style>
