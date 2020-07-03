<template>
    <div class="main">
        <div v-if="isNotFound" class="error">
            <PageNotFound @click.native="reset" />
        </div>
        <div v-else class="home">
            <GenerateURLForm />
            <GeneratedURLCard />
        </div>
    </div>
</template>

<script>
import GenerateURLForm from '@/components/home/GenerateURLForm';
import GeneratedURLCard from '@/components/home/GeneratedURLCard';
import PageNotFound from "@/components/modules/PageNotFound";

export default {
    name: 'Home',
    components: {
        PageNotFound,
        GenerateURLForm,
        GeneratedURLCard,
    },
    methods: {
        reset() {
            this.$router.push({ name: 'Home' })
            this.isNotFound = false
        }
    },
    data() {
        return {
            isNotFound: !!this.$route.query.e
        }
    }
};
</script>

<style scoped lang="scss">
.error {
    padding-top: 80px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.home {
    padding-top: 80px;
    margin: 0 auto;
    width: 90%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>
