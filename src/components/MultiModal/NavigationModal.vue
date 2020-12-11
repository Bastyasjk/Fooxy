<template>
    <div>
        <button @click="navigatePrevious" v-show="!isFirst()">
            Previous
        </button>
        <button @click="navigateNext">
            {{ nextButtonText() }}
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        nextButtonText() {
            if (
                this.$route.name === 'finalStep'
                || (this.$route.name === 'secondStep' && !this.$store.state.hasFinalStep)
            ) {
                return 'Finish';

            }
            return 'Next';
       },
       isFirst() {
           return this.$route.name === 'firstStep'
       },
       navigateNext() {
           if (
               this.$route.name === 'finalStep' 
               || (this.$route.name === 'secondStep' && !this.$store.state.hasFinalStep)
           ) {
               submit();
           }
           this.$router.push('/' + (++currentStep));
       },
       navigatePrevious() {
           if (this.$route.name === 'finalStep') {
               this.$route.push('/2');
           } else if (this.$route.name === 'secondStep') {
               this.$route.push('/1');
           }
       }
    },
    submit() {
        alert('Submitted to the back-end');
    }
}
</script>