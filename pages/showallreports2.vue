<template>
    <div>
        <div  class="grid grid-cols-2 sm:grid-cols-2 gap-4">
<!-- Loop thru the whatnots ref -->
<div
        v-for="whatnot in whatnots"
        :key="whatnots.id"
         
          class="flex max-w-[600px]  py-5 px-2  mt-14.5  shadow-xl rounded-xl justify-between bg-white">
          <div class= "flex-col">


            <p class="mt-2 font-normal text-gray-700">
               Date Submitted {{whatnot.createdAt}} 
            </p>
            
            
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
               {{whatnot.title}} 
            </h5>
            <p class="mb-2 font-normal text-2xl text-gray-900">
                {{whatnot.casinoName}}
            </p>
            <p class="mt-2 font-bold text-gray-700">
               Location: {{whatnot.casinoLocation}}
            </p>
            <p class="mt-2 font-normal text-2xl text-gray-900">
                {{whatnot.message}}
            </p>
         </div>

        <!-- <div class="flex"> 
         <img src="https://nadia.s3.us-east-1.amazonaws.com/smallcraps.jpg" class="profile-img px-2 shadow-inner">
         </div> -->

          </div>
    </div>
</div>
</template>

<script setup>
import dayjs from 'dayjs'
const createdAt = dayjs().format('MM DD YYYY')

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
//This populates the ref with the fetched data used by the v-for loop.
fetchwhatnots();
</script>

<style lang="scss" scoped>

</style>