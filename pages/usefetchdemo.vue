<template>
    <div
        v-for="whatnot in whatnots"
        :key="whatnots.id"

         class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ whatnot.title }}
            <br>
            {{ whatnot.casinoName }}
            <br>
            {{ whatnot.casinoLocation }}
            <br>
            {{ whatnot.message }}
        

    </div>

</template>

<script setup>
//Set whatnots const as an empty ref
//When page loads it starts as null and is updated after the API call.
//Access it with ref.value.
const whatnots = ref(null);


// Fetch data from the API with this function.
async function fetchwhatnots() {
//Grab the data from the endpoint with useFetch
const {data} = await useFetch("/api/tableget")


//This line assigns the fetched data (data.value) to the empty reactive
//whatnots variable.  To read or modify a ref, you must use .value.

    whatnots.value = data.value;
}

//Run the function that fetches the data and assigns the ref whatnots.value.

fetchwhatnots();
</script>

<style lang="scss" scoped>

</style>