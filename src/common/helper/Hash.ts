import * as bcrypt from 'bcrypt';

export class Hash {
  static salt = null;
  static async create (password) {
    if (Hash.salt === null) Hash.salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, Hash.salt);
  }

  static compare = async (password, hash) => await bcrypt.compare(password, hash);
}