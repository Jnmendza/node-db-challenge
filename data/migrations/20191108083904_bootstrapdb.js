
exports.up = function(knex) {
  return knex.schema
  // PROJECTS TABLE ***********************
    .createTable('projects', tbl => {
        tbl.increments()

        tbl.string('project_name', 255).notNullable()
        tbl.string('project_description', 255)
        tbl.boolean('completed').defaultTo(false).notNullable();
    })
// TASKS TABLE *****************************
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.string('task_description', 255).notNullable()
        tbl.string('task_notes', 255)
        tbl.boolean('completed').defaultTo(false).notNullable();

        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
// RESOURCES TABLE ******************
    .createTable('resources', tbl => {
        tbl.increments()

        tbl.string('resource_name', 255).notNullable()
        tbl.string('resource_description', 255)
    })
// PROJECT_RESOURCES
    .createTable('project_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
};
