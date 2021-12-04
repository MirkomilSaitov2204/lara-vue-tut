<template>
    <div>
        <ul>
            <li>{{ title }}</li>
            <li>{{ price }}</li>
            <li>{{ content }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BookableItem",
    props: ['title', 'price', 'content']
}
</script>

<style scoped>

</style>
