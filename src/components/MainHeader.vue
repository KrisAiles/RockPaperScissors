<script setup lang="ts">

</script>

<template>
    <div id="header-container">
        <div id="arcade-logo-container">
            <div id="arcade-logo">
                <span>ARCADE GAMES</span>
            </div>
        </div>
    </div>
    <div id="sub-header-container">
        <div id="main-logo-container">
            <div id="main-logo">
                <span>ROCK PAPER SCISSORS</span>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/variables";

#header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: variables.$blue-color;
    padding: 1rem;
}

#arcade-logo-container{
    border: 0.125rem solid variables.$red-color;
    border-radius: 3.125rem;
}

#arcade-logo {    
    background-color: variables.$red-color;
    border: 0.125rem solid #ffffff;
    border-radius: 3.125rem;
    padding: 0 0.625rem 0 0.75rem;

    span {
        font-size: 1.5rem;
        color: #ffffff;
        padding: 0;
        margin: 0;
    }
}

#sub-header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    width: 98%;
    margin: 0 auto;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 16px;
}

#main-logo-container {
    border: 5px solid variables.$red-color;
    border-radius: 10px;
    
}

#main-logo {
    text-align: center;
    background-color: variables.$orange-color;
    padding: 0 10px;
    border: 1px solid #000000;
    border-radius: 5px;

    span {
        text-shadow: 2px 2px 2px #000000;
        color: variables.$yellow-color;
        font-size: 60px;
    }
}

</style>