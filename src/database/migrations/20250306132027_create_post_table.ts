import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("posts", (table: Knex.TableBuilder) => {
    table.text("id").primary().notNullable();
    table
      .text("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
    table.string("title").notNullable();
    table.string("body").notNullable();
    table.boolean("is_deleted").defaultTo(false).notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("posts");
}
