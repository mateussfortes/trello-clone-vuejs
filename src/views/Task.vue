<template>
    <div class="task-view">
        <div class="flex flex-col flex-grow item-start justify-between px-4 container mx-auto my-20 py-10 bg-white">
            
            <input 
                type="text"
                :value="task.name"
                class="w-full block"
                @change="updateTaskProperty($event, 'name')"
                @keyup.enter="updateTaskProperty($event, 'name')"
            >

            <textarea 
                :value="task.description" 
                @change="updateTaskProperty($event, 'description')"
                @keyup.enter="updateTaskProperty($event, 'description')"
            />

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['getTask']),
            task() {
                return this.getTask(this.$route.params.id)
            }
        },
        methods: {
            updateTaskProperty(e, key) {
                this.$store.commit('UPDATE_TASK', {
                    task: this.task,
                    key,
                    value: e.target.value 
                })  
            }
        }
    }
</script>

<style>
    @apply relative flex flex-row bg-white mx-4 m-32 mx-auto py-4 text-left rounded
    shadow;
    max-width: 700px;
</style>