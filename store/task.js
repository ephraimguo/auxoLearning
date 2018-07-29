export const state = ()=>({
    tasks:[]
});

export const mutations = {
    create(state, task){
        state.tasks.push(task);
    },
    init(state, tasks){
        state.tasks = tasks;
    }
}