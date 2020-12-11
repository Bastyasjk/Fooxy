<template>
    <section class="userportfolio__section">
        <div class="userportfolio__container">
            <div class="upload__portfolio-container">
                <div class="form-group">
                    <input type="text" placeholder="Name" v-model="name" class="form-control">
                </div>

                <div class="form-group">
                    <input type="text" placeholder="Description" v-model="description" class="form-control">
                </div>

                <div class="form-group">
                    <button @click="saveData" class="btn__savedata">Save Data</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'UserPortfolio',
}
</script>

<style>
.userportfolio__section {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid white;
    color: white;

}
.userportfolio__container {
    width: 84vw;
    height: 84vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid white;
    color: white;
}
.form-control {
    margin: 15px;
}
.btn__savedata {
    width: 150px;
    
    color: white;
    padding: 10px;
    border: 1px solid white;
    border-radius: 25px;

}

</style>