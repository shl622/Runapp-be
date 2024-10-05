import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./entity/user.entity";

@Resolver(of => User)
export class UsersResolver {

    //look up user by id
    @Query(returns => User)
    async user(): Promise<User> {
        return {
            id: 1,
            name: 'test'
        }
    }
}