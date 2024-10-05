import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(type => Int)
    id: number;

    @Field(type=> String)
    name: string;
}