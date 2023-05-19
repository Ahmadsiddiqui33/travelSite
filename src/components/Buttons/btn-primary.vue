<template>
    <div>
            <a class="btn btn-primary" :href="url">{{ text }}</a>
    </div>
</template>

<script>
   export default {
    name : 'btnPrimary',
    props : {
        text : String,
        url : String,
    }
   }
</script>


<style lang="scss">
.btn{
    border-radius: var(--radius-md);
    white-space: nowrap;
    text-decoration: none;
    font-size: var(--text-h5);
    padding: 10px 20px;
    border: 1px solid $primary;
    display: flex;
}
.btn-primary{
    background-color: $primary;
    color: $white;
}
.btn-secondary{
    background-color: $white;
    color: $primary;
}
</style>