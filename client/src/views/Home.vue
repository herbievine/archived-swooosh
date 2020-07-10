<template>
    <div class="home">
        <GenerateURLForm />
        <GeneratedURLCard />
    </div>
</template>

<script>
import GenerateURLForm from '@/components/home/GenerateURLForm';
import GeneratedURLCard from '@/components/home/GeneratedURLCard';

export default {
    name: 'Home',
    components: {
        GenerateURLForm,
        GeneratedURLCard,
    },
};
</script>

<style scoped lang="scss">
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
