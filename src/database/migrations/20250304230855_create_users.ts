import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", (table: Knex.TableBuilder) =>{
        table.uuid("id", { primaryKey: true }).defaultTo(uuidv4())
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string("email").notNullable().unique();
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users");
}
