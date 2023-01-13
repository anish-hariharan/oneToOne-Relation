import { UserData } from "../DataSource/UserData";
import { Contact } from "../Entity/Contact";
import { User } from "../Entity/User";

const users = UserData.getRepository(User);
const details = UserData.getRepository(Contact);

class UserService {

    public static greet() {
        return "Hello There!"
    }

    public static async createUser(data:User, detail : Contact){
        const persisted_user = await users.save(data)
        detail.details = persisted_user
        await details.save(detail)
        return "created SucessFully!"
    }

    public static async getUser(id: number){
        const user = await details.createQueryBuilder("contact").leftJoinAndSelect('contact.details', 'user').where('contact.details = :detailsId', {detailsId: id}).getOne()
        return user;
    }

    public static async getUsers(){
        const user = await details.createQueryBuilder("contact").leftJoinAndSelect('contact.details', 'user').getMany();
        return user;
    }
}

export default UserService;