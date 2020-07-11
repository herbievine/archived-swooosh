<template>
    <div class="analytics">
        <keep-alive>
            <GetURLInfo />
        </keep-alive>
        <AnalyticsData />
    </div>
</template>

<script>
import GetURLInfo from '@/components/analytics/GetURLInfo';
import AnalyticsData from '@/components/analytics/AnalyticsData';

export default {
    name: 'Analytics',
    components: {
        AnalyticsData,
        GetURLInfo,
    },
};
</script>

<style scoped lang="scss">
.analytics {
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
