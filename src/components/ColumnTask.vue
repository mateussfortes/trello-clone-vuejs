<template>
  <AppDrop
    @drop="moveTaskOrColumn"
  >
    <AppDrag
      class="task" 
      @click="goToTask(task)"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
    >
      <span class="w-full flex-no-shrink font-bold">
        {{ task.name }}
      </span>

      <p 
          v-if="task.description" 
          class="w-full flex-no-shrink mt-1 text-sm"
      >
          {{ task.description }}
      </p>
    </AppDrag>
  </AppDrop>            
</template>

<script>
    import AppDrag from './AppDrag' 
    import AppDrop from './AppDrop'
    import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin'

    export default {
      components: {
        AppDrag,
        AppDrop
      },
      mixins: [movingTasksAndColumnsMixin],
      props: {
        task: {
          type: Object,
          required: true
        },
        taskIndex: {
          type: Number,
          required: true
        },
      },
      methods: {
        pickupTask (e, taskIndex, fromColumnIndex) {
          e.dataTransfer.effectAllowed = 'move'
          e.dataTransfer.dropEffect = 'move'
          e.dataTransfer.setData('from-task-index', taskIndex)
          e.dataTransfer.setData('from-column-index', fromColumnIndex)
          e.dataTransfer.setData('type', 'task')
        },
        goToTask (task) {
          this.$router.push({ name: 'task', params: { id: task.id } })
        },
      }
    }
</script>