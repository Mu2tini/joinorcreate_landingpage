<template>
    <div class="box">
        <div class="glimage relative" :style="{
            height: height != null ? height : '160px',
            width: width,
            backgroundImage: `url(${backgroundImageUrl})`,

        }">
            <div class="gltext">
                <div class="text-white flex items-center mb-4 ml-4">
                    <div>
                        <div class="text-xl text-white">
                            {{ title }}
                        </div>
                        <div class="font-light text-grey-200">
                            {{ tag }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    backgroundImageUrl: { type: String, required: true },
    title: { type: String, required: true },
    height: { type: String, required: false },
    width: { type: String, required: false },
    tag: { type: String, required: false },
})
</script>

<style scoped>
.glimage {
    z-index: 0;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
}

.glimage:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom,
            rgba(46, 46, 46, 0) 0%,
            rgba(46, 46, 46, 1) 100%);
}

.gltext {
    position: absolute;
    z-index: 1000;
    color: #fff;
}
</style>
