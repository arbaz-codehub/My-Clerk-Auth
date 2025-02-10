"use server";

// import User from "@/modals/user.modal";
import User from "../modals/user.modal";
import { connect } from "@/src/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
