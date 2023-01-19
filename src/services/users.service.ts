import { CreateUserDto, UpdateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    return this.users.find();
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, 'UserId is empty');

    const findUser: User = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    if (isEmpty(createUserDto)) throw new HttpException(400, 'createUserDto is empty');
    return await this.users.create({
      ...createUserDto,
    });
  }

  public async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (isEmpty(updateUserDto)) throw new HttpException(400, 'userData is empty');

    const updateUserById: User = await this.users.findByIdAndUpdate(userId, {
      ...updateUserDto,
    });

    if (!updateUserById) throw new HttpException(409, "User doesn't exist");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "User doesn't exist");

    return deleteUserById;
  }
}

export default UserService;
