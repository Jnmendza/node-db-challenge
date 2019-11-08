exports.seed = function(knex) {
    return knex('tasks').insert([
        { task_description: 'Task 1 desc', task_notes: 'Task 1 notes', completed: true, project_id: 1 },
        { task_description: 'Task 2 desc', task_notes: 'Task 2 notes', completed: false, project_id: 1 },
        { task_description: 'Task 3 desc', task_notes: 'Task 3 notes', completed: false, project_id: 2 },
        { task_description: 'Task 4 desc', task_notes: 'Task 4 notes', completed: true, project_id: 3 },
        { task_description: 'Task 5 desc', task_notes: 'Task 5 notes', completed: false, project_id: 4 },
        
    ])
}