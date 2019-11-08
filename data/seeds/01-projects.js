exports.seed = function(knex) {
    return knex('projects').insert([
        { project_name: 'ABC - Always be coding', project_description: 'Testing your skills', completed: false },
        { project_name: 'Side Hustle', project_description: 'Hustling', completed: true },
        { project_name: 'Home Project', project_description: 'Fix stuff', completed: false },
        { project_name: 'Finish Portfolio', project_description: 'Make it nice', completed: true },
    ])
}