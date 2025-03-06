import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("addresses", (table: Knex.TableBuilder) => {
    table.text("id").primary().notNullable();
    table
      .text("user_id")
      .notNullable()
      .unique()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
    table.string("street").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("country").nullable();
    table.string("zip_code").nullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("addresses");
}
