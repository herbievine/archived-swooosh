<template>
    <div class="container">
        <form class="form" @submit.prevent="submit">
            <label for="id">Enter ID to get data:</label>
            <input
                :class="error ? (error.path === 'id' ? 'error' : '') : ''"
                class="id"
                id="id"
                type="text"
                placeholder="id"
                v-model.trim="data.id"
            />

            <div class="content">
                <Button
                    type="submit"
                    @submit.native="submit"
                    name="Get analytics"
                />
                <p :class="error || getAnalyticsEvents.alert ? 'errorP' : ''">
                    {{
                        error
                            ? messages
                            : getAnalyticsEvents.msg
                            ? getAnalyticsEvents.msg
                            : success
                            ? 'URL analytics available'
                            : ''
                    }}
                </p>
            </div>
        </form>
    </div>
</template>

<script>
import Button from '@/components/ui/Button';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'GetURLInfo',
    components: {
        Button,
    },
    data() {
        return {
            error: null,
            success: false,
            data: {
                id: null,
            },
        };
    },
    computed: {
        ...mapGetters(['getAnalyticsEvents']),
        messages: function() {
            const types = {
                rate: 'Too many requests',
                unknown: 'Something went wrong',
                typeError: 'Missing fields',
                matches: 'Invalid characters',
                notFound: 'ID not found',
            };

            return types[this.error.type];
        },
    },
    methods: {
        async submit() {
            this.error = null;
            this.success = false;
            this.setAnalyticsEvents({});

            if (!this.data.id)
                return (this.error = {
                    type: 'typeError',
                });
            else if (!/^[a-zA-Z0-9\-_]+$/gi.test(this.data.id))
                return (this.error = {
                    type: 'matches',
                });

            /**
             * For development purposes:
             * When developing Server on port 8080 and Client on port 8081
             * Make the request to port 8080
             */

            const domain = await window.location.origin.replace(
                /8081/g,
                '8080'
            );

            const defaultHeaders = new Headers();

            const response = await fetch(
                `${domain}/api/v1/analytics/${this.data.id.toLowerCase()}`,
                {
                    method: 'GET',
                    headers: {
                        ...defaultHeaders,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const result = await response.json();

            if (result.error) this.error = result.error;
            if (result.ok) {
                this.success = true;
                this.setSearchResult(result.data);
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
.container {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        & label {
            font-size: 18px;
            margin: 10px 0;
            color: #cccccc;
            font-weight: 600;
        }

        & input {
            padding: 10px 16px;
            font-size: 16px;
            color: #cccccc;
            background-color: #323232;
            border: none;
            border-radius: 6px;
        }

        & .duo {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;

            & .prefix {
                width: 25%;
                min-width: 90px;
                border-bottom-right-radius: 0;
                border-top-right-radius: 0;
                background-color: #393939;
            }

            & .url {
                width: 75%;
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
            }
        }

        & .id {
            width: 100%;
        }

        & .error {
            color: #bf1717;

            &::placeholder {
                color: #bf1717;
                opacity: 1;
            }
        }

        & .errorP {
            color: #bf1717 !important;
        }

        & .content {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            & p {
                font-size: 16px;
                color: #cccccc;
            }
        }
    }
}
</style>
