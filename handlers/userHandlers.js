const User = require("./../db/user");

async function addUser(userModel) {
    let user = new User({
        ...userModel
    });
    await user.save();
    return user.toObject();
}

async function getUsers() {
    const users = await User.find();
    return users.map(x => x.toObject());
}

async function getUser(id) {
    const user = await User.findById(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user.toObject();
}

async function updateUser(id, userModel) {
    const filter = { _id: id };
    const updatedUser = await User.findOneAndUpdate(filter, userModel);
    if (!updatedUser) {
        throw new Error("User not found");
    }
    return updatedUser.toObject();
}

async function deleteUser(id) {
    const deleteUser = await User.findOneAndDelete(id);
    if (!deleteUser) {
        throw new Error("User not deleted");
    }
    return deleteUser.toObject();
}

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
