exports.seed = function(knex) {
    return knex('resources').insert([
        { resource_name: 'Res Name 1', resource_description: 'Res desc 1' },
        { resource_name: 'Res Name 1', resource_description: 'Res desc 1' },
        { resource_name: 'Res Name 1', resource_description: 'Res desc 1' },
        { resource_name: 'Res Name 1', resource_description: 'Res desc 1' },
    ])
}