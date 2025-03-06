import db from "../database/db";
import { PostModelInterface } from "../interface/post.interface";

export class PostRepository {
  /**
   * Creates a new post
   * @param data
   * @returns
   */
  public static async createPost(data: object): Promise<PostModelInterface> {
    return await db("posts").insert(data);
  }

  /**
   * Get posts associated with a user
   * @param user_id
   * @returns
   */
  public static async getUserPosts(userId: number): Promise<PostModelInterface[]> {
    return await db("posts").where("user_id", userId).where("is_deleted", 0).select("*");
  }

  /**
   * Delete post
   * @param postId
   * @returns
   */

  public static async deletePost(postId: string) {
    return await db("posts").where({ id: postId }).update({ is_deleted: true });
  }

}
