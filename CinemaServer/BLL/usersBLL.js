

const jFile = require("jsonfile");
const userModel = require("../model/usersModel");
const path = require("path");
const file = path.join(__dirname, "../data/permissions.json");
const file2 = path.join(__dirname, "../data/users.json");
const getUsersWithPermissions = async () => {
    try {
      const usersFromJsonFilePermissions = await jFile.readFile(file);
      const usersFromJsonFileData = await jFile.readFile(file2);
  console.log(usersFromJsonFilePermissions)
      let usersFromDB = await userModel.find({});
      usersFromDB = usersFromDB.filter((user) => user.userName !== "admin");

      const finalUsers = usersFromDB.map((user) => {
        const userFromFileData = usersFromJsonFileData.users.find((u) => u.id === user._id);
        console.log(usersFromJsonFileData.users)
        if (!userFromFileData) {
          console.error(`User data not found in users.json for user with ID: ${user._id}`);
          console.log("users.json:", usersFromJsonFileData);
          return null;
        }
  
        const userFromFile = usersFromJsonFilePermissions.users.find((u) => u.id === user._id);
  
        return {
          id: user._id,
          firstName: userFromFileData.firstName,
          lastName: userFromFileData.lastName,
          userName: user.userName,
          sessionTimeOut: userFromFileData.sessionTimeOut,
          createdDate: userFromFileData.createdDate,
          permissions: userFromFile.permissions,
        };
      }).filter(user => user !== null);
  
      return finalUsers;
    } catch (error) {
      console.error("Error in getUsersWithPermissions:", error);
      return [];
    }
  };
  

const updateUserPermissions = async (user) => {
  try {
    const filePermissions = await jFile.readFile(file);
    const usersFromFilePermissions = filePermissions.users;

    const userFromFilePermissions = usersFromFilePermissions.find((u) => u.id == user.id);
    const userFromFile = usersFromFilePermissions.users.find((u) => u._id === user._id);

    userFromFilePermissions.permissions = user.permissions;

    usersFromFilePermissions[userFromFile] = userFromFilePermissions;

    await jFile.writeFile(file, { users: usersFromFilePermissions });
    return "success";
  } catch (error) {
    console.error("Error in updateUserPermissions:", error);
    return "failure";
  }
};

module.exports = { getUsersWithPermissions, updateUserPermissions };
