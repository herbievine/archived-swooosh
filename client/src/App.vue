<template>
    <div id="app">
        <Navigation />
        <router-view />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
    name: 'App',
    components: {
        Navigation,
    },
};
</script>

<style lang="scss">
::placeholder {
    color: #cccccc;
    opacity: 0.9;
    font-size: 16px;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #111111;
}

::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 204, 0.4);
    border-radius: 100px;
}

* {
    padding: 0;
    margin: 0;
    background-color: #111111;
    box-sizing: border-box;
    outline: none;
    text-transform: lowercase;
    font-family: 'Quicksand', sans-serif;
}

html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
}
</style>
